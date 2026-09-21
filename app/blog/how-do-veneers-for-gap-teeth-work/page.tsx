"use client";

import { useState } from "react";
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";

export default function HowDoVeneersForGapTeethPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* =========================
          BLOG HERO
      ========================= */}
      <section className="bg-[#ffffff] px-6 md:px-8 pt-10 md:pt-16">
        <div className="max-w-[1000px] mx-auto">

          {/* BLOG IMAGE */}
          <div className="max-w-[760px] mx-auto">
            <img
              src="/How_Do_Veneers_for_Gap_Teeth_Work.webp"
              alt="Veneers for gap teeth treatment"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          {/* TITLE */}
          <div className="max-w-[760px] mx-auto text-center pt-7 pb-10">

            <p className="font-manrope text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
              BLANC JOURNAL
            </p>

            <h1 className="font-playfair text-3xl md:text-5xl text-[#222] leading-tight">
              How Do Veneers for Gap Teeth Work?
            </h1>

          </div>
        </div>
      </section>


      {/* =========================
          ARTICLE CONTENT
      ========================= */}
      <main className="bg-[#ffffff] px-6 md:px-8 pb-20">

        <article className="max-w-[720px] mx-auto">

          {/* =========================
              INTRODUCTION
          ========================= */}
          <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
            A gap between the front teeth, known clinically as a diastema, can
            be a natural characteristic of a smile. While some people consider
            it part of their individuality, others may prefer a more closely
            aligned appearance.
          </p>

          <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
            In suitable cases, veneers can be used to close a gap and create a
            more harmonious, well-proportioned smile. The restorations are
            planned according to the existing tooth dimensions, facial
            proportions, bite, and overall smile to achieve natural-looking
            proportions and a cohesive result.
          </p>

          <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-12">
            This guide explains how veneers can be used to close gaps between
            teeth, when they may be appropriate, and what you can expect
            throughout the veneer treatment process.
          </p>


          {/* =========================
              WHAT ARE VENEERS
          ========================= */}
          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              What Are Veneers for Gap Teeth?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Veneers are thin, custom-made restorations bonded to the front
              surface of teeth. They are typically made from porcelain or
              composite resin.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              When used to close a gap, veneers are designed to increase the
              visible width of the teeth on either side of the space while
              maintaining appropriate tooth proportions. The shape, contour,
              and emergence profile of each restoration are carefully
              considered so that the teeth appear naturally proportioned
              within the smile.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              The treatment changes the visible form of the teeth rather than
              their underlying position.
            </p>

          </section>


          {/* =========================
              WHEN CAN VENEERS BE USED
          ========================= */}
          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              When Can Veneers Be Used to Close a Gap?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Veneers may be considered when the gap is primarily an aesthetic
              concern and the teeth are otherwise suitable for restorative
              treatment.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              They can be particularly useful when the patient also wants to
              address other aesthetic concerns, such as:
            </p>

            <ul className="space-y-3 pl-5 mb-6">

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Tooth shape or size
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Uneven tooth proportions
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Discolouration
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Minor chips or worn edges
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Overall smile aesthetics
              </li>

            </ul>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              However, not every gap is suitable for closure with veneers. The
              size and location of the gap, tooth dimensions, tooth position,
              bite, gum health, and underlying cause all need to be assessed
              before treatment is planned.
            </p>

          </section>


          {/* =========================
              VENEER PROCESS
          ========================= */}
          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-7">
              How Does the Veneer Process Work?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-7">
              While every case is different, the veneer process at Blanc
              generally involves several stages.
            </p>

            <div className="space-y-8">

              {/* STEP 1 */}
              <div>

                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  1. Consultation and Smile Assessment
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  The process begins with a detailed assessment of your teeth,
                  gums, bite, and smile. We evaluate the size and position of
                  the gap, tooth proportions, facial features, and the overall
                  relationship between the teeth and smile.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  We also assess whether veneers alone can achieve the desired
                  result or whether another treatment would be more appropriate.
                </p>

              </div>


              {/* STEP 2 */}
              <div>

                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  2. Planning
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Once veneers are considered appropriate, the desired tooth
                  shape, size, proportions, colour, and overall appearance are
                  planned.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  A physical mock-up may be used to assess the proposed changes
                  before the final treatment. This allows the shape and
                  proportions of the planned veneers to be evaluated in
                  relation to the overall smile.
                </p>

              </div>


              {/* STEP 3 */}
              <div>

                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  3. Tooth Preparation
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Where preparation is required, the teeth are carefully
                  reshaped to create the necessary space for the veneers. The
                  amount of preparation depends on factors such as tooth
                  position, bite, the chosen material, and the desired result.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  The aim is to preserve as much healthy natural tooth structure
                  as clinically appropriate.
                </p>

              </div>


              {/* STEP 4 */}
              <div>

                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  4. Custom Fabrication
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Once the treatment plan is finalised, the case is transferred
                  to our in-house dental laboratory.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  Our ceramist and aesthetician work closely with the clinical
                  team to develop the final restorations, considering factors
                  such as tooth shape, proportions, colour, translucency,
                  surface texture, and the overall aesthetic of the smile.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  This close collaboration allows the veneers to be individually
                  crafted according to the planned outcome rather than produced
                  from a standard template.
                </p>

              </div>


              {/* STEP 5 */}
              <div>

                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  5. Try-In, Bonding, and Final Adjustments
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Once the veneers are ready, they are tried in to assess their
                  fit, appearance, colour, and proportions before final bonding.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  Once approved, the veneers are permanently bonded to the
                  teeth. The bite and overall appearance are then checked, with
                  any necessary adjustments made to ensure comfort and function.
                </p>

              </div>

            </div>

          </section>


          {/* =========================
              RESULTS
          ========================= */}
          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              What Results Can You Expect?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Veneers can close the appearance of a gap while also allowing
              other aesthetic characteristics of the teeth to be refined.
              Depending on the treatment plan, the result may include:
            </p>

            <ul className="space-y-3 pl-5 mb-6">

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Closure of the gap
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Improved tooth proportions
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                More even tooth shapes
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Changes to tooth colour
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                A more cohesive overall smile
              </li>

            </ul>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              The final appearance depends on factors including the original
              tooth dimensions, size and position of the gap, number of teeth
              being treated, and the planned design.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              With appropriate care, porcelain veneers can last for many years.
              Their longevity depends on factors such as the material, bite,
              oral hygiene, tooth condition, and individual habits.
            </p>

          </section>


          {/* =========================
              BLANC DIFFERENCE
          ========================= */}
          <section className="mb-14">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Why Choose Blanc for Veneers?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              At Blanc, veneer treatment is approached as a combination of
              clinical planning, aesthetic judgement, and laboratory
              craftsmanship.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Our in-house dental laboratory allows the clinical and laboratory
              teams to work closely throughout the treatment process. The
              ceramist and aesthetician play an important role in translating
              the planned design into the final restorations, with careful
              attention to tooth shape, colour, translucency, texture, and
              proportions.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              The aim is not simply to close the gap, but to create restorations
              that integrate naturally with the rest of the smile.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              If you're considering veneers for gap teeth and want to understand
              whether they are appropriate for you, schedule a personalised
              consultation with Blanc to explore your options.
            </p>

          </section>


          {/* =========================
              FAQ
          ========================= */}
          <section className="border-t border-black/10 pt-10">

            <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-3">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="font-playfair text-3xl md:text-4xl text-[#222] mb-8">
              Frequently Asked Questions
            </h2>

            <div className="border-t border-black/10">


              {/* FAQ 1 */}
              <div className="border-b border-black/10">

                <button
                  type="button"
                  onClick={() => toggleFaq(1)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={openFaq === 1}
                >
                  <span className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222]">
                    1. Can veneers actually close a gap between teeth?
                  </span>

                  <span
                    className="flex-shrink-0 font-manrope text-xl font-light text-[#222]"
                    aria-hidden="true"
                  >
                    {openFaq === 1 ? "−" : "+"}
                  </span>
                </button>

                {openFaq === 1 && (
                  <div className="pb-5 pr-8">
                    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                      Yes. In suitable cases, veneers can be designed to
                      increase the visible width of the teeth beside the gap,
                      creating the appearance of a closed space. The teeth
                      themselves do not move as they would with orthodontic
                      treatment.
                    </p>
                  </div>
                )}

              </div>


              {/* FAQ 2 */}
              <div className="border-b border-black/10">

                <button
                  type="button"
                  onClick={() => toggleFaq(2)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={openFaq === 2}
                >
                  <span className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222]">
                    2. How do veneers work step by step to fix a gap?
                  </span>

                  <span
                    className="flex-shrink-0 font-manrope text-xl font-light text-[#222]"
                    aria-hidden="true"
                  >
                    {openFaq === 2 ? "−" : "+"}
                  </span>
                </button>

                {openFaq === 2 && (
                  <div className="pb-5 pr-8">
                    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                      Treatment generally begins with a consultation and smile
                      assessment, followed by treatment planning and, where
                      required, tooth preparation. Custom veneers are then
                      fabricated, tried in, bonded, and adjusted to achieve the
                      planned result.
                    </p>
                  </div>
                )}

              </div>


              {/* FAQ 3 */}
              <div className="border-b border-black/10">

                <button
                  type="button"
                  onClick={() => toggleFaq(3)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={openFaq === 3}
                >
                  <span className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222]">
                    3. Do veneers require shaving down your teeth?
                  </span>

                  <span
                    className="flex-shrink-0 font-manrope text-xl font-light text-[#222]"
                    aria-hidden="true"
                  >
                    {openFaq === 3 ? "−" : "+"}
                  </span>
                </button>

                {openFaq === 3 && (
                  <div className="pb-5 pr-8">
                    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                      Tooth preparation depends on the individual case, tooth
                      position, bite, material, and planned result. Where
                      preparation is required, the goal is to remove only the
                      amount of healthy tooth structure that is clinically
                      appropriate.
                    </p>
                  </div>
                )}

              </div>


              {/* FAQ 4 */}
              <div className="border-b border-black/10">

                <button
                  type="button"
                  onClick={() => toggleFaq(4)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={openFaq === 4}
                >
                  <span className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222]">
                    4. How long do veneers last when used to close a gap?
                  </span>

                  <span
                    className="flex-shrink-0 font-manrope text-xl font-light text-[#222]"
                    aria-hidden="true"
                  >
                    {openFaq === 4 ? "−" : "+"}
                  </span>
                </button>

                {openFaq === 4 && (
                  <div className="pb-5 pr-8">
                    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                      Porcelain veneers can last for many years with appropriate
                      care. Their longevity depends on factors including the
                      material, bite, oral hygiene, tooth condition, and
                      individual habits.
                    </p>
                  </div>
                )}

              </div>


              {/* FAQ 5 */}
              <div className="border-b border-black/10">

                <button
                  type="button"
                  onClick={() => toggleFaq(5)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={openFaq === 5}
                >
                  <span className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222]">
                    5. Are veneers or bonding better for closing a tooth gap?
                  </span>

                  <span
                    className="flex-shrink-0 font-manrope text-xl font-light text-[#222]"
                    aria-hidden="true"
                  >
                    {openFaq === 5 ? "−" : "+"}
                  </span>
                </button>

                {openFaq === 5 && (
                  <div className="pb-5 pr-8">
                    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                      Both veneers and composite bonding can be used in selected
                      cases. The appropriate option depends on factors such as
                      the size of the gap, tooth structure, desired appearance,
                      bite, and long-term treatment goals. A dental assessment
                      can help determine which approach is appropriate.
                    </p>
                  </div>
                )}

              </div>


              {/* FAQ 6 */}
              <div className="border-b border-black/10">

                <button
                  type="button"
                  onClick={() => toggleFaq(6)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={openFaq === 6}
                >
                  <span className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222]">
                    6. What causes a gap between teeth?
                  </span>

                  <span
                    className="flex-shrink-0 font-manrope text-xl font-light text-[#222]"
                    aria-hidden="true"
                  >
                    {openFaq === 6 ? "−" : "+"}
                  </span>
                </button>

                {openFaq === 6 && (
                  <div className="pb-5 pr-8">
                    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                      Gaps, or diastemas, can have several causes. These may
                      include differences between tooth and jaw size, a prominent
                      labial frenum, missing or unusually small teeth, certain
                      childhood habits, or changes associated with gum disease.
                      The underlying cause should be assessed before treatment
                      is planned.
                    </p>
                  </div>
                )}

              </div>


              {/* FAQ 7 */}
              <div className="border-b border-black/10">

                <button
                  type="button"
                  onClick={() => toggleFaq(7)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={openFaq === 7}
                >
                  <span className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222]">
                    7. Is everyone with a gap a good candidate for veneers?
                  </span>

                  <span
                    className="flex-shrink-0 font-manrope text-xl font-light text-[#222]"
                    aria-hidden="true"
                  >
                    {openFaq === 7 ? "−" : "+"}
                  </span>
                </button>

                {openFaq === 7 && (
                  <div className="pb-5 pr-8">
                    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                      Not necessarily. Suitable candidates generally need
                      healthy teeth and gums, with a gap that can be appropriately
                      managed using restorative treatment. Bite problems,
                      missing teeth, untreated gum disease, or other dental
                      concerns may need to be addressed first.
                    </p>
                  </div>
                )}

              </div>


              {/* FAQ 8 */}
              <div className="border-b border-black/10">

                <button
                  type="button"
                  onClick={() => toggleFaq(8)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={openFaq === 8}
                >
                  <span className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222]">
                    8. Does getting veneers for a gap hurt?
                  </span>

                  <span
                    className="flex-shrink-0 font-manrope text-xl font-light text-[#222]"
                    aria-hidden="true"
                  >
                    {openFaq === 8 ? "−" : "+"}
                  </span>
                </button>

                {openFaq === 8 && (
                  <div className="pb-5 pr-8">
                    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                      Patient experiences vary depending on the treatment and
                      amount of tooth preparation required. If preparation is
                      necessary, local anaesthesia may be used. Some patients
                      may experience temporary sensitivity after treatment.
                    </p>
                  </div>
                )}

              </div>


              {/* FAQ 9 */}
              <div className="border-b border-black/10">

                <button
                  type="button"
                  onClick={() => toggleFaq(9)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={openFaq === 9}
                >
                  <span className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222]">
                    9. How much do veneers cost to close a gap?
                  </span>

                  <span
                    className="flex-shrink-0 font-manrope text-xl font-light text-[#222]"
                    aria-hidden="true"
                  >
                    {openFaq === 9 ? "−" : "+"}
                  </span>
                </button>

                {openFaq === 9 && (
                  <div className="pb-5 pr-8">
                    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                      The cost varies depending on factors such as the material
                      selected, number of teeth being treated, complexity of the
                      case, and laboratory requirements. A personalised
                      consultation is needed to determine the appropriate
                      treatment plan and associated cost.
                    </p>
                  </div>
                )}

              </div>


              {/* FAQ 10 */}
              <div className="border-b border-black/10">

                <button
                  type="button"
                  onClick={() => toggleFaq(10)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={openFaq === 10}
                >
                  <span className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222]">
                    10. Are veneers permanent, and can they be removed later?
                  </span>

                  <span
                    className="flex-shrink-0 font-manrope text-xl font-light text-[#222]"
                    aria-hidden="true"
                  >
                    {openFaq === 10 ? "−" : "+"}
                  </span>
                </button>

                {openFaq === 10 && (
                  <div className="pb-5 pr-8">
                    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                      Veneers are considered an irreversible treatment when
                      tooth preparation is required because some natural tooth
                      structure may be removed. If veneers are later replaced,
                      the teeth may require new restorations rather than simply
                      returning to their original untreated state.
                    </p>
                  </div>
                )}

              </div>

            </div>

          </section>

        </article>

      </main>

      <Footer />
    </>
  );
}