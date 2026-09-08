"use client";

import { useState } from "react";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Calendar,
  Globe,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [selectedTime, setSelectedTime] = useState("02:30pm");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("Juhu");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const times = [
    "10:30am",
    "11:30am",
    "02:30pm",
    "03:00pm",
    "03:30pm",
    "04:30pm",
    "05:00pm",
    "05:30pm",
  ];

  /* =========================================================
     TIME CONVERSION
  ========================================================= */

  const convertToMinutes = (time: string) => {
    const match = time.match(/(\d+):(\d+)(am|pm)/i);

    if (!match) return 0;

    let hour = parseInt(match[1], 10);
    const minute = parseInt(match[2], 10);
    const period = match[3].toLowerCase();

    if (period === "pm" && hour !== 12) hour += 12;
    if (period === "am" && hour === 12) hour = 0;

    return hour * 60 + minute;
  };

  /* =========================================================
     CALENDAR
  ========================================================= */

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const firstDay = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const calendarDays = Array.from(
    { length: daysInMonth },
    (_, i) => i + 1
  );

  const now = new Date();

  const isToday =
    selectedDate === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  const currentMinutes =
    now.getHours() * 60 + now.getMinutes();

  const availableTimes = isToday
    ? times.filter(
        (time) => convertToMinutes(time) > currentMinutes
      )
    : times;

  /* =========================================================
     MONTH NAVIGATION
  ========================================================= */

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  /* =========================================================
     BOOKING SUBMIT
  ========================================================= */

  const handleSubmit = async () => {
    if (!name || !phone || !email) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          location,
          message,
          date: `${selectedDate} ${months[currentMonth]} ${currentYear}`,
          time: selectedTime,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(
          "Your consultation request has been submitted successfully."
        );

        setName("");
        setPhone("");
        setEmail("");
        setLocation("Juhu");
        setMessage("");

        setStep(1);
        setOpen(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     AI SUMMARY PROMPT
  ========================================================= */

  const aiPrompt = encodeURIComponent(
    `Blanc Veneers (blancveneers.com) is a premium cosmetic dentistry and smile design studio in Juhu, Mumbai. They specialize in personalized aesthetic dental treatments such as smile design and veneers, blending clinical precision with artistic and design sensibility.

Based on this information, give me a brief, polished summary of Blanc Veneers and explain why they are known for aesthetic dental craftsmanship.`
  );

  return (
    <>
      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#ffffff] px-8 md:px-16 py-16 text-sm text-gray-600 max-w-5xl mx-auto mt-12 border-t border-gray-300">

        {/* =====================================================
            TOP GRID
        ===================================================== */}

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* LEFT */}
          <div>
            <button
              onClick={() => {
                setOpen(true);
                setStep(1);
              }}
              className="font-playfair text-black tracking-wide mb-3 cursor-pointer hover:opacity-70 transition"
            >
              BOOK A CONSULTATION →
            </button>

            <p className="font-manrope text-gray-500 leading-relaxed text-[13px]">
              All treatments are personalised. Individual results may vary.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p className="font-playfair text-gray-500 mb-4 tracking-wide text-[13px]">
              QUICK LINKS
            </p>

            <ul className="font-manrope text-black space-y-2 text-[13px]">

              <li>
                <Link
                  href="/atelier"
                  className="hover:opacity-60 transition-opacity duration-300"
                >
                  THE ATELIER
                </Link>
              </li>

              <li>
                <Link
                  href="/artisans"
                  className="hover:opacity-60 transition-opacity duration-300"
                >
                  ARTISANS OF BLANC
                </Link>
              </li>

              <li>
                <Link
                  href="/process"
                  className="hover:opacity-60 transition-opacity duration-300"
                >
                  OUR PROCESS
                </Link>
              </li>

              <li>
                <Link
                  href="/esthetician"
                  className="hover:opacity-60 transition-opacity duration-300"
                >
                  ESTHETICIANS AT BLANC
                </Link>
              </li>

              <li>
                <Link
                  href="/results"
                  className="hover:opacity-60 transition-opacity duration-300"
                >
                  RESULTS
                </Link>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">

            <div>
              <p className="font-playfair text-gray-500 text-[13px] tracking-wide">
                VISIT US AT
              </p>

              <p className="font-manrope text-black text-[13px]">
                Juhu, Mumbai
              </p>
            </div>

            <div>
              <p className="font-playfair text-gray-500 text-[13px] tracking-wide">
                EMAIL US AT
              </p>

              <a
                href="mailto:info@blancesthetics.com"
                className="font-manrope text-black text-[13px] hover:opacity-70 transition"
              >
                info@blancesthetics.com
              </a>
            </div>

            <div>
              <p className="font-playfair text-gray-500 text-[13px] tracking-wide">
                CALL US AT
              </p>

              <a
                href="tel:+919619666607"
                className="font-manrope text-black text-[13px] hover:opacity-70 transition"
              >
                +91 9619666607
              </a>
            </div>

          </div>

          {/* SOCIALS */}
          <div>

            <p className="font-playfair text-gray-500 mb-4 tracking-wide text-[13px]">
              SOCIALS
            </p>

            <ul className="font-manrope text-black space-y-2 text-[13px]">

              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61593985318197"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  FACEBOOK
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/blancesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  INSTAGRAM
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@blancesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  YOUTUBE
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/BlancEsthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition"
                >
                  X
                </a>
              </li>

            </ul>
          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="max-w-6xl mx-auto mt-12 border-t border-gray-300"></div>


        {/* =====================================================
            AI SUMMARY
            CENTERED ABOVE COPYRIGHT
        ===================================================== */}

        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-7 mb-7">

          {/* TEXT */}

          <div className="font-manrope text-[14px] sm:text-[15px] tracking-wide text-[#000000] text-center">
  Ask AI for summary of{" "}
  <strong className="font-semibold">
    Blanc Esthetics
  </strong>
</div>


          {/* AI ICONS */}

          <div className="flex items-center justify-center gap-1.5">

            {/* =================================================
                CHATGPT
            ================================================= */}

            <a
              className="blanc-ai-btn"
              data-tip="ChatGPT"
              href={`https://chatgpt.com/?q=${aiPrompt}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ask ChatGPT about Blanc Esthetics"
            >
              <svg
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.205-2.499 10.079 10.079 0 0 0-9.614 6.977 9.967 9.967 0 0 0-6.458 4.777 10.079 10.079 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.205 2.499 10.079 10.079 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.458-4.777 10.079 10.079 0 0 0-1.243-11.814zM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496zM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L7.044 23.86a7.504 7.504 0 0 1-2.747-10.24zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.048 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.13zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.497v4.998l-4.331 2.5-4.331-2.5V18z"
                  fill="white"
                />
              </svg>
            </a>


            {/* =================================================
                GROK
            ================================================= */}

            <a
              className="blanc-ai-btn"
              data-tip="Grok"
              href={`https://x.com/i/grok?text=${aiPrompt}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ask Grok about Blanc Esthetics"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5L19 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M19 5L5 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M7 17L17 7"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </a>


            {/* =================================================
                PERPLEXITY
            ================================================= */}

            <a
              className="blanc-ai-btn"
              data-tip="Perplexity"
              href={`https://www.perplexity.ai/?q=${aiPrompt}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ask Perplexity about Blanc Esthetics"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.5L5 8V16L12 21.5L19 16V8L12 2.5Z"
                  stroke="white"
                  strokeWidth="1.4"
                  fill="none"
                />

                <path
                  d="M5 8L12 13L19 8"
                  stroke="white"
                  strokeWidth="1.4"
                />

                <path
                  d="M12 13V21"
                  stroke="white"
                  strokeWidth="1.4"
                />

                <path
                  d="M12 2.5V13"
                  stroke="white"
                  strokeWidth="1.4"
                />
              </svg>
            </a>


            {/* =================================================
                GEMINI
            ================================================= */}

            <a
              className="blanc-ai-btn"
              data-tip="Gemini"
              href={`https://gemini.google.com/app?q=${aiPrompt}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ask Gemini about Blanc Esthetics"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="geminiGradientBlanc"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      stopColor="#4285F4"
                    />

                    <stop
                      offset="50%"
                      stopColor="#9B72CB"
                    />

                    <stop
                      offset="100%"
                      stopColor="#EA4335"
                    />
                  </linearGradient>
                </defs>

                <path
                  d="M12 2C9.2 8.8 2 12 2 12C2 12 9.2 15.2 12 22C14.8 15.2 22 12 22 12C22 12 14.8 8.8 12 2Z"
                  fill="url(#geminiGradientBlanc)"
                />
              </svg>
            </a>


            {/* =================================================
                CLAUDE
            ================================================= */}

            <a
              className="blanc-ai-btn"
              data-tip="Claude"
              href={`https://claude.ai/new?q=${aiPrompt}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ask Claude about Blanc Esthetics"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L13.5 9L19.5 5.5L16 11.5L23 12L16 12.5L19.5 18.5L13.5 15L12 22L10.5 15L4.5 18.5L8 12.5L1 12L8 11.5L4.5 5.5L10.5 9L12 2Z"
                  fill="#D97757"
                />
              </svg>
            </a>

          </div>
        </div>


        {/* =====================================================
            COPYRIGHT
        ===================================================== */}

        <div className="font-manrope text-center text-gray-500 text-[12px]">
          Copyright © 2026 Blanc | Site by WDK
        </div>

      </footer>


      {/* =====================================================
          CONSULTATION MODAL
      ===================================================== */}

      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/20 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-5xl h-[88vh] relative overflow-y-auto">

            {/* CLOSE */}

            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 z-20"
            >
              <X size={20} />
            </button>


            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] min-h-full">

              {/* =================================================
                  LEFT PANEL
              ================================================= */}

              <div className="border-r border-gray-200 p-8 flex flex-col">

                {step === 2 && (
                  <button
                    onClick={() => setStep(1)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mb-12"
                  >
                    <ChevronLeft size={18} />
                  </button>
                )}


                <div className="space-y-10 mt-6">

                  {/* DURATION */}

                  <div className="flex items-center gap-4">

                    <Clock3
                      size={22}
                      strokeWidth={1.5}
                    />

                    <span className="font-manrope text-[15px]">
                      30 mins
                    </span>

                  </div>


                  {/* STEP 2 DETAILS */}

                  {step === 2 && (
                    <>

                      {/* TIMEZONE */}

                      <div className="flex items-center gap-4">

                        <Globe
                          size={22}
                          strokeWidth={1.5}
                        />

                        <span className="font-manrope text-[15px]">
                          India Standard Time (IST)
                        </span>

                      </div>


                      {/* SELECTED DATE/TIME */}

                      <div className="flex gap-4">

                        <Calendar
                          size={22}
                          strokeWidth={1.5}
                        />

                        <div className="font-manrope text-[15px] leading-[1.5]">

                          <p>
                            {selectedTime} - 30 mins
                          </p>

                          <p>
                            {new Date(
                              currentYear,
                              currentMonth,
                              selectedDate
                            ).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </p>

                        </div>

                      </div>

                    </>
                  )}

                </div>

              </div>


              {/* =================================================
                  RIGHT PANEL
              ================================================= */}

              <div className="p-6 md:p-8">

                {/* =================================================
                    STEP 1
                ================================================= */}

                {step === 1 && (
                  <>

                    <h2 className="font-playfair text-[28px] text-black mb-10">
                      Select Date and Time
                    </h2>


                    {/* MONTH */}

                    <div className="flex items-center justify-between max-w-[600px] mb-10">

                      <button
                        onClick={prevMonth}
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center"
                      >
                        <ChevronLeft size={18} />
                      </button>


                      <p className="font-manrope text-[15px]">
                        {months[currentMonth]}{" "}
                        {currentYear}
                      </p>


                      <button
                        onClick={nextMonth}
                        className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center"
                      >
                        <ChevronRight size={18} />
                      </button>

                    </div>


                    {/* CALENDAR */}

                    <div className="max-w-[650px]">

                      <div className="grid grid-cols-7 gap-y-4 text-center mb-8">

                        {[
                          "MON",
                          "TUE",
                          "WED",
                          "THU",
                          "FRI",
                          "SAT",
                          "SUN",
                        ].map((day) => (
                          <p
                            key={day}
                            className="font-manrope text-[15px] text-gray-500"
                          >
                            {day}
                          </p>
                        ))}


                        {Array.from({
                          length: startOffset,
                        }).map((_, i) => (
                          <div
                            key={`empty-${i}`}
                          />
                        ))}


                        {calendarDays.map((day) => (
                          <div
                            key={day}
                            className="flex justify-center"
                          >

                            <button
                              onClick={() =>
                                setSelectedDate(day)
                              }
                              className={`w-10 h-10 rounded-full font-manrope text-[15px] transition ${
                                selectedDate === day
                                  ? "bg-[#2B2B2B] text-white"
                                  : "hover:bg-gray-100"
                              }`}
                            >
                              {day}
                            </button>

                          </div>
                        ))}

                      </div>


                      {/* =================================================
                          TIMES
                      ================================================= */}

                      <div className="border-t border-gray-200 pt-10 mt-10">

                        <h3 className="font-playfair text-[28px] mb-8">

                          {new Date(
                            currentYear,
                            currentMonth,
                            selectedDate
                          ).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                            }
                          )}

                        </h3>


                        {availableTimes.length === 0 && (
                          <p className="font-manrope text-[14px] text-gray-500 mb-4">
                            No slots available for today.
                          </p>
                        )}


                        {availableTimes.length > 0 && (
                          <div className="flex flex-wrap gap-4">

                            {availableTimes.map(
                              (time) => (
                                <button
                                  key={time}
                                  onClick={() =>
                                    setSelectedTime(
                                      time
                                    )
                                  }
                                  className={`border px-6 py-3 font-manrope text-[15px] transition ${
                                    selectedTime ===
                                    time
                                      ? "bg-[#2B2B2B] text-white border-[#2B2B2B]"
                                      : "border-gray-300"
                                  }`}
                                >
                                  {time}
                                </button>
                              )
                            )}

                          </div>
                        )}


                        {/* TIMEZONE */}

                        <div className="mt-10">

                          <p className="font-playfair mb-3 text-[15px]">

                            Timezone

                            <span className="text-red-500">
                              *
                            </span>

                          </p>


                          <select className="w-full max-w-[420px] border border-gray-300 h-[52px] px-5 font-manrope text-[15px] outline-none">

                            <option>
                              India Standard Time (IST)
                            </option>

                          </select>

                        </div>


                        {/* NEXT BUTTON */}

                        <div className="flex justify-end mt-16">

                          <button
                            onClick={() => setStep(2)}
                            className="bg-[#2B2B2B] text-white px-16 py-5 font-manrope text-[15px]"
                          >
                            Next
                          </button>

                        </div>

                      </div>

                    </div>

                  </>
                )}


                {/* =================================================
                    STEP 2
                ================================================= */}

                {step === 2 && (
                  <>

                    <h2 className="font-playfair text-[28px] text-black mb-12">
                      Enter Details
                    </h2>


                    <div className="max-w-[650px] space-y-8">

                      {/* NAME */}

                      <div>

                        <label className="block font-playfair text-[15px] mb-3">

                          Patient's Name

                          <span className="text-red-500">
                            *
                          </span>

                        </label>


                        <input
                          type="text"
                          placeholder="Enter patient's name"
                          value={name}
                          onChange={(e) =>
                            setName(e.target.value)
                          }
                          className="w-full border border-gray-300 h-[52px] px-5 outline-none font-manrope text-[15px]"
                        />

                      </div>


                      {/* PHONE */}

                      <div>

                        <label className="block font-playfair text-[15px] mb-3">

                          Phone Number

                          <span className="text-red-500">
                            *
                          </span>

                        </label>


                        <div className="flex">

                          <div className="border border-gray-300 border-r-0 h-[52px] px-5 flex items-center font-manrope text-[15px]">
                            +91
                          </div>


                          <input
                            type="tel"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(e) =>
                              setPhone(e.target.value)
                            }
                            className="w-full border border-gray-300 h-[52px] px-5 outline-none font-manrope"
                          />

                        </div>

                      </div>


                      {/* EMAIL */}

                      <div>

                        <label className="block font-playfair text-[15px] mb-3">

                          Email Address

                          <span className="text-red-500">
                            *
                          </span>

                        </label>


                        <input
                          type="email"
                          placeholder="Enter email address"
                          value={email}
                          onChange={(e) =>
                            setEmail(e.target.value)
                          }
                          className="w-full border border-gray-300 h-[52px] px-5 outline-none font-manrope"
                        />

                      </div>


                      {/* LOCATION */}

                      <div>

                        <label className="block font-playfair text-[15px] mb-5">

                          Select Location or Video Consultation

                          <span className="text-red-500">
                            *
                          </span>

                        </label>


                        <div className="grid grid-cols-2 gap-y-6">

                          {[
                            "Juhu",
                            "Google Meet",
                          ].map((item) => (

                            <label
                              key={item}
                              className="flex items-center gap-3 font-manrope text-[15px]"
                            >

                              <input
                                type="radio"
                                name="location"
                                checked={
                                  location === item
                                }
                                onChange={() =>
                                  setLocation(item)
                                }
                              />

                              <MapPin size={18} />

                              {item}

                            </label>

                          ))}

                        </div>

                      </div>


                      {/* MESSAGE */}

                      <div>

                        <label className="block font-playfair text-[15px] mb-4 leading-[1.5]">

                          Tell us what you’d like to improve about your smile.

                        </label>


                        <textarea
                          value={message}
                          onChange={(e) =>
                            setMessage(e.target.value)
                          }
                          className="w-full border border-gray-300 h-[110px] p-5 outline-none resize-none font-manrope text-[15px]"
                        />

                      </div>


                      {/* SUBMIT */}

                      <div className="flex justify-end pt-6">

                        <button
                          onClick={handleSubmit}
                          disabled={loading}
                          className="bg-[#2B2B2B] text-white px-12 py-3 text-[15px] font-manrope disabled:opacity-50"
                        >
                          {loading
                            ? "Submitting..."
                            : "Submit"}
                        </button>

                      </div>

                    </div>

                  </>
                )}

              </div>

            </div>

          </div>

        </div>
      )}


      {/* =====================================================
          AI BUTTON STYLES
      ===================================================== */}

      <style jsx>{`
  .blanc-ai-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 8px;
    background: #000000;
    border: 1px solid #000000;
    text-decoration: none !important;
    cursor: pointer;
    box-sizing: border-box;
    transition:
      background 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .blanc-ai-btn:hover {
    background: #000000;
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  }

  .blanc-ai-btn svg {
    width: 19px;
    height: 19px;
    display: block;
  }

  .blanc-ai-btn::after {
    content: attr(data-tip);
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: #000000;
    color: #ffffff;
    font-family: "Manrope", sans-serif;
    font-size: 10px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.15s ease,
      visibility 0.15s ease;
    z-index: 999;
  }

  .blanc-ai-btn:hover::after {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 640px) {
    .blanc-ai-btn {
      width: 36px;
      height: 36px;
      border-radius: 8px;
    }

    .blanc-ai-btn svg {
      width: 18px;
      height: 18px;
    }
  }
`}</style>
    </>
  );
}