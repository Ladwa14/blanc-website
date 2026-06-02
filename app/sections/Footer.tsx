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

  const [selectedTime, setSelectedTime] = useState("02:30pm");

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
  </ul>
</div>

          {/* CONTACT */}
          <div className="space-y-4">
            <div>
              <p className="font-playfair text-gray-500 text-[13px] tracking-wide">
                VISIT US AT
              </p>
              <p className="font-manrope text-black text-[13px]">
                16th Road, Bandra West, Mumbai
              </p>
            </div>

            <div>
              <p className="font-playfair text-gray-500 text-[13px] tracking-wide">
                EMAIL US AT
              </p>
              <p className="font-manrope text-black text-[13px]">
                info@blanc.com
              </p>
            </div>

            <div>
              <p className="font-playfair text-gray-500 text-[13px] tracking-wide">
                CALL US AT
              </p>
              <p className="font-manrope text-black text-[13px]">
                +91 9619666607
              </p>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <p className="font-playfair text-gray-500 mb-4 tracking-wide text-[13px]">
              SOCIALS
            </p>
            <ul className="font-manrope text-black space-y-2 text-[13px]">
              <li>FACEBOOK</li>
              <li>INSTAGRAM</li>
              <li>YOUTUBE</li>
              <li>X</li>
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
         <div className="bg-white w-full max-w-6xl h-[95vh] relative overflow-y-auto">
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 z-20"
            >
              <X size={20} />
            </button>

           <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] min-h-full">
              {/* LEFT PANEL */}

              <div className="border-r border-gray-200 p-10 flex flex-col">
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
                    <span className="font-manrope text-[18px]">
                      30 mins
                    </span>
                  </div>

                  {step === 2 && (
                    <>
                      <div className="flex items-center gap-4">
                        <Globe size={22} strokeWidth={1.5} />
                        <span className="font-manrope text-[18px]">
                          India Standard Time (IST)
                        </span>
                      </div>

                      <div className="flex gap-4">
                        <Calendar size={22} strokeWidth={1.5} />
                        <div className="font-manrope text-[18px] leading-[1.5]">
                          <p>02:30pm - 03:00pm, Thursday,</p>
                          <p>August 10th, 2026</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* RIGHT PANEL */}

              <div className="p-6 md:p-10">
                {/* STEP 1 */}

                {step === 1 && (
                  <>
                    <h2 className="font-playfair text-[44px] text-black mb-12">
                      Select Date and Time
                    </h2>

                    {/* MONTH */}

                    <div className="flex items-center justify-between max-w-[600px] mb-10">
                      <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                        <ChevronLeft size={18} />
                      </button>

                      <p className="font-manrope text-[22px]">
                        August 2026
                      </p>

                      <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    {/* CALENDAR */}

                    <div className="max-w-[650px]">
                      <div className="grid grid-cols-7 gap-y-8 text-center mb-8">
                        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                          (day) => (
                            <p
                              key={day}
                              className="font-manrope text-[13px] text-gray-500"
                            >
                              {day}
                            </p>
                          )
                        )}

                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <p
                            key={n}
                            className="text-gray-300 font-manrope"
                          >
                            {n}
                          </p>
                        ))}

                        {[7, 8, 9, 10, 11, 12, 13].map((n) => (
                          <div key={n} className="flex justify-center">
                            {n === 10 ? (
                              <div className="w-14 h-14 rounded-full bg-[#2B2B2B] text-white flex items-center justify-center font-manrope">
                                {n}
                              </div>
                            ) : (
                              <p className="font-manrope">{n}</p>
                            )}
                          </div>
                        ))}

                        {[14, 15, 16, 17, 18, 19, 20].map((n) => (
                          <p key={n} className="font-manrope">
                            {n}
                          </p>
                        ))}

                        {[21, 22, 23, 24, 25, 26, 27].map((n) => (
                          <p key={n} className="font-manrope">
                            {n}
                          </p>
                        ))}

                        {[28, 29, 30, 31].map((n) => (
                          <p key={n} className="font-manrope">
                            {n}
                          </p>
                        ))}
                      </div>

                      {/* TIMES */}

                      <div className="border-t border-gray-200 pt-10 mt-10">
                        <h3 className="font-playfair text-[28px] mb-8">
                          Thursday, 10th August
                        </h3>

                        <div className="flex flex-wrap gap-4">
                          {times.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`border px-8 py-4 font-manrope text-[15px] transition ${
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
                          <p className="font-playfair mb-3 text-[18px]">
                            Timezone<span className="text-red-500">*</span>
                          </p>

                          <select className="w-full max-w-[420px] border border-gray-300 h-[60px] px-5 font-manrope outline-none">
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
                    <h2 className="font-playfair text-[44px] text-black mb-12">
                      Enter Details
                    </h2>

                    <div className="max-w-[650px] space-y-8">
                      {/* NAME */}

                      <div>
                        <label className="block font-playfair text-[18px] mb-3">
                          Patient's Name
                          <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="text"
                          placeholder="Enter patient's name"
                          className="w-full border border-gray-300 h-[60px] px-5 outline-none font-manrope"
                        />
                      </div>

                      {/* PHONE */}

                      <div>
                        <label className="block font-playfair text-[18px] mb-3">
                          Phone Number
                          <span className="text-red-500">*</span>
                        </label>

                        <div className="flex">
                          <div className="border border-gray-300 border-r-0 h-[60px] px-5 flex items-center font-manrope">
                            +91
                          </div>

                          <input
                            type="text"
                            placeholder="Enter phone number"
                            className="w-full border border-gray-300 h-[60px] px-5 outline-none font-manrope"
                          />
                        </div>
                      </div>

                      {/* EMAIL */}

                      <div>
                        <label className="block font-playfair text-[18px] mb-3">
                          Email Address
                          <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="email"
                          placeholder="Enter email address"
                          className="w-full border border-gray-300 h-[60px] px-5 outline-none font-manrope"
                        />
                      </div>

                      {/* LOCATION */}

                      <div>
                        <label className="block font-playfair text-[18px] mb-5">
                          Select Location or Video Consultation
                          <span className="text-red-500">*</span>
                        </label>

                        <div className="grid grid-cols-2 gap-y-6">
                          {[
                            "Bandra",
                            "Prabhadevi",
                            "Juhu",
                            "Google Meet",
                          ].map((item) => (
                            <label
                              key={item}
                              className="flex items-center gap-3 font-manrope"
                            >
                              <input type="radio" name="location" />
                              <MapPin size={18} />
                              {item}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* MESSAGE */}

                      <div>
                        <label className="block font-playfair text-[18px] mb-4 leading-[1.5]">
                          Please share anything that will help prepare for our
                          consultation.
                        </label>

                        <textarea
                          placeholder="Enter reason for consultation"
                          className="w-full border border-gray-300 h-[140px] p-5 outline-none resize-none font-manrope"
                        />
                      </div>

                      {/* SUBMIT */}

                      <div className="flex justify-end pt-6">
                        <button className="bg-[#2B2B2B] text-white px-16 py-5 font-manrope">
                          Submit
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