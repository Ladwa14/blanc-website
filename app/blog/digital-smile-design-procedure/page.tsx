"use client";

import { useState } from "react";
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";

export default function DigitalSmileDesignPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* =========================
          BLOG HERO
      ========================= */}
      <section className="bg-[#f7f7f2] px-6 md:px-8 pt-10 md:pt-16">
        <div className="max-w-[1000px] mx-auto">

          {/* BLOG IMAGE */}
          <div className="max-w-[760px] mx-auto">
            <img
              src="/blog/digital-smile-design.webp"
              alt="Digital Smile Design Procedure"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          {/* TITLE */}
          <div className="max-w-[760px] mx-auto text-center pt-7 pb-10">

            <p className="font-manrope text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
              BLANC JOURNAL
            </p>

            <h1 className="font-playfair text-3xl md:text-5xl text-[#222] leading-tight">
              Everything You Should Know About the Digital Smile Design Procedure
            </h1>

          </div>
        </div>
      </section>


      {/* =========================
          ARTICLE CONTENT
      ========================= */}
      <main className="bg-[#f7f7f2] px-6 md:px-8 pb-20">

        <article className="max-w-[720px] mx-auto">

          {/* INTRODUCTION */}

          <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
            A smile is rarely just about teeth. It is proportion, symmetry,
            facial harmony, and the quiet confidence that comes from knowing
            every detail has been considered before a single instrument touches
            your mouth.
          </p>

          <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
            This is the philosophy behind digital smile design, an advanced
            approach to treatment planning that brings greater visualisation,
            precision, and collaboration to cosmetic dentistry. By combining
            facial photography, digital scans, video analysis, and specialised
            software, the digital smile design procedure helps clinicians
            analyse and plan a smile around your individual features rather
            than a standard template.
          </p>

          <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
            Whether you are considering veneers, a complete smile makeover, or
            simply want to understand how your smile could be improved, digital
            smile design offers a more visual and collaborative approach to
            treatment planning. At Blanc, it forms an important part of
            creating refined, proportionate, and naturally harmonious smiles.
          </p>

          <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-12">
            Unlike conventional treatment planning, which may rely more heavily
            on clinical assessment, photographs, physical mock-ups, and
            aesthetic judgement, digital smile design adds another layer of
            visualisation and precision. It allows you to understand the
            proposed direction of your treatment and share your preferences
            before clinical work begins.
          </p>


          {/* =========================
              WHAT IS DIGITAL SMILE DESIGN
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              What Is Digital Smile Design?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              The digital smile design procedure is an advanced,
              technology-led planning method used to analyse and design a
              smile in relation to a patient's facial structure, lip dynamics,
              gum architecture, and individual proportions. Using high-
              resolution photography, video analysis, digital scans, and
              specialised software, clinicians can map the smile against
              facial landmarks to evaluate tooth shape, size, alignment, and
              symmetry.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Rather than viewing teeth in isolation, digital smile design
              considers the face as a whole: how the smile moves when you
              speak, how it sits within your lips at rest, and how proportion,
              light, and shadow interact with your features. This helps create
              a smile that complements the person rather than simply correcting
              individual teeth.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              At Blanc, this process is approached as both a science and an art
              form, combining clinical data with aesthetic judgement to create
              results that feel individual, refined, and naturally harmonious.
            </p>

          </section>


          {/* =========================
              PRECISION PLANNING
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Why Precision Planning Matters
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              A smile makeover involves more than changing the colour or
              alignment of teeth. Small differences in tooth length, width,
              proportion, midline, and incisal edge position can influence how
              a smile looks within the context of the entire face.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Traditional smile planning may rely more heavily on clinical
              assessment, photographs, physical mock-ups, and the dentist's
              aesthetic judgement. Digital smile design adds another layer of
              visualisation, allowing the proposed direction of treatment to be
              explored before clinical work begins.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Digital simulations can also create a clearer visual reference
              for communication between the patient, dentist, and laboratory
              team. This helps everyone understand the intended aesthetic
              direction and allows preferences to be discussed and refined
              before treatment progresses.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              For a brand positioned around refined, individualised care, this
              level of planning is an important part of creating a thoughtful
              treatment experience.
            </p>

          </section>


          {/* =========================
              HOW DOES IT WORK
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-7">
              How Does the Digital Smile Design Procedure Work?
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  1. Comprehensive facial and dental analysis
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  The process begins with detailed photographs, digital scans,
                  and, where appropriate, video capture of your face, lips, and
                  smile in motion. This information provides the foundation for
                  understanding your facial proportions, smile dynamics, tooth
                  position, and overall aesthetics.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  2. Digital analysis
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Specialised software can be used to assess facial reference
                  lines, dental midline, smile line, incisal edge position,
                  tooth proportions, and other aesthetic parameters. These
                  measurements help the clinical team evaluate what may create
                  a balanced and harmonious smile for your individual features.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  3. Virtual smile simulation
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  This is where digital smile design becomes particularly
                  valuable. A digital simulation can provide a visual
                  representation of a proposed smile, helping you understand
                  the potential direction of treatment before clinical work
                  begins.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  It also creates an opportunity to discuss preferences around
                  tooth shape, length, proportion, and overall appearance.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  4. Treatment pathway selection
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Once the aesthetic goals have been established, the
                  appropriate treatment pathway can be considered. Depending on
                  your individual needs, this may include porcelain veneers,
                  composite bonding, orthodontic alignment, whitening, gum
                  treatment, or a combination of treatments.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  For patients seeking a comprehensive smile transformation,
                  veneers may be one option for refining tooth shape,
                  proportion, symmetry, and brightness.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  5. Mock-up and trial smile
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  A physical or digital mock-up can allow you to experience or
                  visualise the proposed design before the final treatment is
                  carried out. This stage provides an opportunity to assess the
                  overall appearance and refine elements of the design where
                  appropriate.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  6. Final execution with precision craftsmanship
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Once the treatment plan has been finalised, the approved
                  design provides a reference for the clinical and laboratory
                  teams throughout the treatment process.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  While the final result can be influenced by individual
                  clinical, biological, and laboratory factors, careful digital
                  planning helps the team work towards the intended aesthetic
                  outcome with greater consistency.
                </p>
              </div>

            </div>

          </section>


          {/* =========================
              CANDIDATE
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Who Is a Candidate for Digital Smile Design?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Digital smile design can be particularly useful for patients who
              are:
            </p>

            <ul className="space-y-3 pl-5 mb-6">
              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Considering veneers or other cosmetic dental treatments
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Exploring a complete smile makeover
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Concerned about tooth shape, size, proportion, or symmetry
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Interested in understanding their potential treatment outcome
                before treatment begins
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Considering a combination of cosmetic dental treatments
              </li>
            </ul>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Digital smile design can be useful across a range of cosmetic
              cases, but the appropriate treatment pathway depends on
              individual dental and oral health, treatment goals, and clinical
              requirements.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              A personalised consultation is therefore important before
              deciding on any cosmetic dental procedure.
            </p>

          </section>


          {/* =========================
              SMILE MAKEOVER
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Digital Smile Design and the Modern Smile Makeover
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              A modern smile makeover is not simply about whitening or
              straightening teeth. It is about proportion, balance, and how
              every element of the smile works together.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Digital smile design allows different elements of a smile
              makeover, from tooth proportion to smile line and overall
              symmetry, to be considered together rather than in isolation.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              This can be particularly valuable when veneers are involved, as
              even small differences in tooth length, width, contour, and
              position can influence whether a result feels natural or
              artificial.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              By exploring the proposed design before treatment, the clinical
              and laboratory teams can work towards veneers that complement
              the patient's facial features rather than simply changing the
              appearance of individual teeth.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              The goal is not to create a universally perfect smile, but one
              that feels balanced, proportionate, and appropriate for the
              person wearing it.
            </p>

          </section>


          {/* =========================
              BLANC DIFFERENCE
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              The Blanc Difference
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              At Blanc, we approach cosmetic dentistry as a combination of
              clinical expertise, aesthetic judgement, advanced technology, and
              individualised care.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Our approach to digital smile design reflects this philosophy.
              Rather than following a standard template, we consider your
              facial features, smile dynamics, dental proportions, and personal
              preferences when developing a treatment plan.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              From the initial consultation through digital planning, mock-up,
              clinical treatment, and laboratory craftsmanship, every stage is
              considered as part of one cohesive aesthetic journey.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              A smile makeover should feel less like a routine dental procedure
              and more like a personalised design process, where every detail
              has a purpose.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              If you're considering veneers or a smile makeover and want to
              understand what could work for your features, schedule a
              consultation with Blanc to explore your personalised smile
              design.
            </p>

          </section>


          {/* =========================
              FINAL THOUGHTS
          ========================= */}

          <section className="mb-14">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Final Thoughts
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Digital smile design has introduced a more visual and
              collaborative approach to planning cosmetic smile makeovers.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Whether you're exploring veneers, a complete smile makeover, or
              simply want to understand your cosmetic options, digital planning
              can provide greater clarity and help make treatment decisions more
              informed and intentional.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              At Blanc, we don't simply change individual teeth. We consider
              how every element of a smile works together with the face to
              create an outcome that feels refined, proportionate, and personal.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              If you're ready to explore your options, contact us to begin your
              consultation.
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


            <div className="space-y-8">

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  1. What is Digital Smile Design?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  It's a technology-driven process that uses photos, videos,
                  and 3D scans to let you preview your new smile digitally
                  before treatment begins. It replaces guesswork with a visual,
                  collaborative plan.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  2. How does the smile design process work?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  It follows four steps: consultation, imaging/3D scanning,
                  digital design creation, and a mock-up preview. Once approved,
                  the design becomes your treatment blueprint.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  3. Is this procedure painful?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  No, the planning stage is completely non-invasive, just
                  photos, scans, and software. Discomfort only comes later if
                  you proceed with procedures like veneers.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  4. How much does a digital smile makeover cost?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Full treatment can range from $1,000 to $50,000 depending on
                  procedures involved. The planning session itself is sometimes
                  free with a consultation.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  5. What treatments can be planned this way?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Veneers, implants, crowns, orthodontics, whitening, gum
                  contouring, and full-mouth rehabilitation. It covers both
                  cosmetic and restorative work.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  6. Can I see my new smile before treatment starts?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Yes, that's the main benefit of this approach. You get a
                  digital simulation and often a physical mock-up to try before
                  committing.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  7. How accurate is the final result compared to the preview?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Very accurate when done by an experienced dentist, though no
                  simulation guarantees a 100% exact match. It's based on real
                  facial and dental measurements.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  8. Who's a good candidate for a smile redesign?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Anyone in good oral health wanting a personalized smile
                  makeover. Existing issues like gum disease or cavities are
                  treated first.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  9. How long does the whole process take?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Planning takes 1–2 visits; total treatment ranges from a few
                  weeks to several months depending on complexity. Veneer-only
                  cases move fastest.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  10. Does insurance cover smile design treatment?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Usually not, since it's classified as cosmetic planning.
                  Restorative parts of the plan, like implants, may get partial
                  coverage.
                </p>
              </div>

            </div>

          </section>

        </article>

      </main>

      <Footer />
    </>
  );
}