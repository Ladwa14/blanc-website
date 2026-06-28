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




const handleSubmit = async () => {
  // Basic validation
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
      alert("Your consultation request has been submitted successfully.");

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setLocation("Juhu");
      setMessage("");

      // Reset modal
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



  return (
    <>
      <footer className="bg-[#ffffff] px-8 md:px-16 py-16 text-sm text-gray-600 max-w-5xl mx-auto mt-12 border-t border-gray-300">
        {/* TOP GRID */}

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

          {/* SOCIALS */}
         <div>
  <p className="font-playfair text-gray-500 mb-4 tracking-wide text-[13px]">
    SOCIALS
  </p>

  <ul className="font-manrope text-black space-y-2 text-[13px]">
    <li>
      <a
        href="https://www.facebook.com/"
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
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition"
      >
        YOUTUBE
      </a>
    </li>

    <li>
      <a
        href="https://x.com/"
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

        {/* DIVIDER */}
        <div className="max-w-6xl mx-auto mt-12 border-t border-gray-300"></div>

        {/* BOTTOM */}
        <div className="font-manrope text-center mt-6 text-gray-500 text-[12px]">
          Copyright © 2026 Blanc | Site by WDK
        </div>
      </footer>

      {/* MODAL */}

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
              {/* LEFT PANEL */}

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
                  <div className="flex items-center gap-4">
                    <Clock3 size={22} strokeWidth={1.5} />
                    <span className="font-manrope text-[15px]">
                      30 mins
                    </span>
                  </div>

                  {step === 2 && (
                    <>
                      <div className="flex items-center gap-4">
                        <Globe size={22} strokeWidth={1.5} />
                        <span className="font-manrope text-[15px]">
                          India Standard Time (IST)
                        </span>
                      </div>

                      <div className="flex gap-4">
                        <Calendar size={22} strokeWidth={1.5} />
                        <div className="font-manrope text-[15px] leading-[1.5]">
                        <p>
  {selectedTime} - 30 mins
</p>

<p>
  {new Date(
    currentYear,
    currentMonth,
    selectedDate
  ).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* RIGHT PANEL */}

              <div className="p-6 md:p-8">
                {/* STEP 1 */}

                {step === 1 && (
                  <>
                    <h2 className="font-playfair text-[30px] md:text-[30px] text-black mb-10">
                      Select Date and Time
                    </h2>

                    {/* MONTH */}

                    <div className="flex items-center justify-between max-w-[600px] mb-10">
                      <button onClick={prevMonth} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center" >
                        <ChevronLeft size={18} />
                      </button>

                    <p className="font-manrope text-[15px]">
  {months[currentMonth]} {currentYear}
</p>

                     <button onClick={nextMonth} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center" >
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    {/* CALENDAR */}

                    {/* CALENDAR */}

<div className="max-w-[650px]">
  <div className="grid grid-cols-7 gap-y-4 text-center mb-8">

    {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
      <p
        key={day}
        className="font-manrope text-[11px] text-gray-500"
      >
        {day}
      </p>
    ))}

   {Array.from({ length: startOffset }).map((_, i) => (
  <div key={`empty-${i}`} />
))}

    {calendarDays.map((day) => (
      <div key={day} className="flex justify-center">
        <button
          onClick={() => setSelectedDate(day)}
          className={`w-10 h-10 rounded-full font-manrope text-[13px] transition ${
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

                      {/* TIMES */}

                      <div className="border-t border-gray-200 pt-10 mt-10">
                       <h3 className="font-playfair text-[28px] mb-8">
  {new Date(
    currentYear,
    currentMonth,
    selectedDate
  ).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })}
</h3>

                        <div className="flex flex-wrap gap-4">
                          {times.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`border px-6 py-3 font-manrope text-[13px] transition ${
                                selectedTime === time
                                  ? "bg-[#2B2B2B] text-white border-[#2B2B2B]"
                                  : "border-gray-300"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>

                        {/* TIMEZONE */}

                        <div className="mt-10">
                          <p className="font-playfair mb-3 text-[15px]">
                            Timezone<span className="text-red-500">*</span>
                          </p>

                          <select className="w-full max-w-[420px] border border-gray-300 h-[52px] px-5 font-manrope outline-none">
                            <option>India Standard Time (IST)</option>
                          </select>
                        </div>

                        {/* NEXT BUTTON */}

                        <div className="flex justify-end mt-16">
                          <button
                            onClick={() => setStep(2)}
                            className="bg-[#2B2B2B] text-white px-16 py-5 font-manrope"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* STEP 2 */}

                {step === 2 && (
                  <>
                    <h2 className="font-playfair text-[30px] text-black mb-12">
                      Enter Details
                    </h2>

                    <div className="max-w-[650px] space-y-8">
                      {/* NAME */}

                      <div>
                        <label className="block font-playfair text-[15px] mb-3">
                          Patient's Name
                          <span className="text-red-500">*</span>
                        </label>

                        <input
  type="text"
  placeholder="Enter patient's name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border border-gray-300 h-[52px] px-5 outline-none font-manrope"
/>
                      </div>

                      {/* PHONE */}

                      <div>
                        <label className="block font-playfair text-[15px] mb-3">
                          Phone Number
                          <span className="text-red-500">*</span>
                        </label>

                        <div className="flex">
                          <div className="border border-gray-300 border-r-0 h-[52px] px-5 flex items-center font-manrope">
                            +91
                          </div>

                          <input
  type="tel"
  placeholder="Enter phone number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full border border-gray-300 h-[52px] px-5 outline-none font-manrope"
/>
                        </div>
                      </div>

                      {/* EMAIL */}

                      <div>
                        <label className="block font-playfair text-[15px] mb-3">
                          Email Address
                          <span className="text-red-500">*</span>
                        </label>

                       <input
  type="email"
  placeholder="Enter email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border border-gray-300 h-[52px] px-5 outline-none font-manrope"
/>
                      </div>

                      {/* LOCATION */}

                      <div>
                        <label className="block font-playfair text-[15px] mb-5">
                          Select Location or Video Consultation
                          <span className="text-red-500">*</span>
                        </label>

                        <div className="grid grid-cols-2 gap-y-6">
                          {[
                            // "Bandra",
                            // "Prabhadevi",
                            "Juhu",
                            "Google Meet",
                          ].map((item) => (
                            <label
                              key={item}
                              className="flex items-center gap-3 font-manrope"
                            >
                           <input
  type="radio"
  name="location"
  checked={location === item}
  onChange={() => setLocation(item)}
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
  onChange={(e) => setMessage(e.target.value)}
  className="w-full border border-gray-300 h-[110px] p-5 outline-none resize-none font-manrope"
/>
                      </div>

                      {/* SUBMIT */}

                      <div className="flex justify-end pt-6">
                       <button
  onClick={handleSubmit}
  disabled={loading}
  className="bg-[#2B2B2B] text-white px-12 py-3 text-[14px] font-manrope disabled:opacity-50"
>
  {loading ? "Submitting..." : "Submit"}
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
    </>
  );
}