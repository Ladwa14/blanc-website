
"use client";

import { useState } from "react";
import Link from "next/link";

import Header from "../../sections/Header";
import Footer from "../../sections/Footer";

export default function CosmeticDentistryPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const faqs = [
    {
      question: "What is cosmetic dentistry?",
      answer:
        "Cosmetic dentistry focuses on improving the appearance of teeth and smiles through treatments such as whitening, bonding, porcelain veneers and orthodontic procedures.",
    },
    {
      question: "Is cosmetic dentistry only about appearance?",
      answer:
        "Aesthetic improvement is the primary focus, but treatment planning should also consider oral health, bite function, gum condition and natural tooth preservation.",
    },
    {
      question: "Which cosmetic dentistry treatment is best?",
      answer:
        "The appropriate treatment depends on your dental condition, aesthetic goals and the concern being addressed. A dental assessment can help identify suitable options.",
    },
    {
      question: "Are porcelain veneers part of cosmetic dentistry?",
      answer:
        "Yes. Porcelain veneers are custom-made ceramic restorations that can refine tooth shape, colour, spacing and proportions in selected cases.",
    },
    {
      question: "How much does cosmetic dentistry cost in Mumbai?",
      answer:
        "Costs vary according to the treatment, number of teeth involved, materials, case complexity and laboratory requirements. A personalised consultation helps establish the investment.",
    },
    {
      question: "How long do cosmetic dentistry results last?",
      answer:
        "Longevity varies by procedure and depends on oral hygiene, bite forces, habits, materials and professional maintenance.",
    },
    {
      question: "Can cosmetic dentistry correct crooked teeth?",
      answer:
        "Minor irregularities may sometimes be addressed with bonding or veneers. More significant crowding or bite problems may require orthodontic treatment.",
    },
    {
      question: "How do I get started with cosmetic dentistry?",
      answer:
        "Begin with a dental consultation to discuss your goals, assess your oral health and understand the treatments appropriate for your smile.",
    },
  ];

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* =========================
          BLOG HERO
      ========================= */}

      <section
        className="bg-white px-6 md:px-8"
        style={{ paddingTop: "80px" }}
      >
        <div className="max-w-[1000px] mx-auto">

          {/* BLOG IMAGE */}

          <div className="max-w-[760px] mx-auto">
            <img
              src="/what-is-cosmetic-dentistry.webp"
              alt="Cosmetic Dentistry"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          {/* BREADCRUMBS */}

          <nav
            aria-label="Breadcrumb"
            className="bg-white px-6 md:px-8 pt-6"
          >
            <div className="max-w-[1000px] mx-auto flex justify-center">

              <ol className="flex flex-wrap items-center justify-center gap-2 font-manrope text-[11px] md:text-xs text-[#777] text-center">

                <li>
                  <Link
                    href="/"
                    className="hover:text-[#222] transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>

                <li aria-hidden="true">&gt;</li>

                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[#222] transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>

                <li aria-hidden="true">&gt;</li>

                <li
                  className="text-[#222]"
                  aria-current="page"
                >
                  What Is Cosmetic Dentistry? A Complete Guide
                </li>

              </ol>

            </div>
          </nav>

          {/* BLOG TITLE */}

          <div className="max-w-[760px] mx-auto text-center pt-7 pb-10">

            <h1 className="font-playfair text-3xl md:text-5xl text-[#222] leading-tight">
              What Is Cosmetic Dentistry? A Complete Guide
            </h1>

            <div className="flex items-center justify-center gap-3 mt-5 font-manrope text-[11px] md:text-xs text-gray-500">

              <a
                href="https://www.blancveneers.com/"
                className="underline underline-offset-4 transition-colors duration-300 hover:text-[#222]"
              >
                Blanc Veneers
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          ARTICLE CONTENT
      ========================= */}

      <main className="bg-white px-6 md:px-8 pb-20">

        <article className="max-w-[720px] mx-auto">

          {/* INTRODUCTION */}

          <section className="mb-12">

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
              A beautiful smile is shaped by more than white,
              straight teeth. Tooth proportions, symmetry,
              surface texture and the relationship between
              the teeth, lips and face all influence its
              appearance. Cosmetic dentistry focuses on
              refining these details while considering
              oral health and individual aesthetic goals.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
              Whether you want to improve discolouration,
              correct minor chips or consider a complete
              smile makeover, understanding your options
              can help you make an informed decision.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              But what is cosmetic dentistry, and which
              treatments might be suitable for you? This
              guide explains the most common procedures,
              their benefits, the treatment process and
              the elements that contribute to a
              natural-looking smile.
            </p>

          </section>

          {/* WHAT IS COSMETIC DENTISTRY */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              What Is Cosmetic Dentistry?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              Cosmetic dentistry focuses on improving
              the appearance of teeth and smiles.
              Depending on individual needs, treatment
              may address tooth colour, shape, size,
              spacing, alignment and the balance between
              visible teeth. Some procedures involve
              relatively simple changes, such as
              professional teeth whitening, while others,
              including porcelain veneers, require
              detailed planning and custom fabrication.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-5">
              Aesthetic goals should always be considered
              alongside dental health, bite alignment,
              gum condition and the preservation of
              natural tooth structure. A clinical
              assessment helps determine which treatments
              are appropriate and what results can
              reasonably be achieved.
            </p>

          </section>

          {/* COMMON TREATMENTS */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-7">
              What Are the Most Common Cosmetic Dentistry Treatments?
            </h2>

            <div className="space-y-8">

              {/* TREATMENT 1 */}

              <div>

                <h3 className="font-manrope font-bold text-[15px] md:text-base text-[#222] mb-3">
                  1. Porcelain Veneers
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Porcelain veneers are thin, custom-made
                  ceramic restorations bonded to the front
                  surfaces of selected teeth. They can
                  improve the appearance of discolouration,
                  minor gaps, chips and irregular tooth shapes.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  Their shade, translucency, contours and
                  surface texture can be customised to
                  complement neighbouring teeth. Veneers
                  may be considered for individual
                  corrections or a more comprehensive
                  smile makeover, depending on the
                  patient's clinical condition and goals.
                </p>

              </div>

              {/* TREATMENT 2 */}

              <div>

                <h3 className="font-manrope font-bold text-[15px] md:text-base text-[#222] mb-3">
                  2. Professional Teeth Whitening
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Professional teeth whitening helps
                  lighten natural teeth and reduce certain
                  types of discolouration. It may be
                  suitable for patients who are satisfied
                  with their tooth shape and alignment
                  but want a brighter smile.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  Whitening does not change tooth shape
                  or lighten existing veneers and crowns.
                  A dental assessment can help establish
                  whether whitening is appropriate for
                  the type of staining present.
                </p>

              </div>

              {/* TREATMENT 3 */}

              <div>

                <h3 className="font-manrope font-bold text-[15px] md:text-base text-[#222] mb-3">
                  3. Composite Bonding
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Composite bonding uses tooth-coloured
                  resin that is applied and shaped
                  directly onto the teeth. It can improve
                  small chips, minor gaps and uneven edges.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  Treatment can often be completed with
                  fewer appointments than laboratory-fabricated
                  restorations. However, composite may
                  require polishing or repairs over time
                  because it can stain, wear or chip.
                </p>

              </div>

              {/* TREATMENT 4 */}

              <div>

                <h3 className="font-manrope font-bold text-[15px] md:text-base text-[#222] mb-3">
                  4. Orthodontic Treatment
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Braces and clear aligners gradually
                  move teeth into better positions. They
                  may be appropriate when crowding,
                  spacing or bite alignment is the
                  primary concern.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  Unlike veneers, orthodontic treatment
                  changes tooth position rather than
                  covering the visible surface. Depending
                  on the case, alignment may be recommended
                  before considering other cosmetic procedures.
                </p>

              </div>

            </div>

          </section>

          {/* PROCESS */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              How Does the Cosmetic Dentistry Process Work?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-7">
              The treatment process depends on the
              procedure selected, but a considered
              approach typically involves several stages.
            </p>

            <div className="space-y-7">

              <div>

                <h3 className="font-manrope font-bold text-[14px] md:text-[15px] text-[#222] mb-2">
                  Step 1: Consultation and Assessment
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Your dentist discusses your concerns,
                  examines your teeth and gums, and
                  evaluates your bite and existing
                  restorations.
                </p>

              </div>

              <div>

                <h3 className="font-manrope font-bold text-[14px] md:text-[15px] text-[#222] mb-2">
                  Step 2: Smile Analysis and Planning
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Photographs and digital scans may help
                  assess tooth proportions, facial
                  features and the way your smile appears
                  when speaking or laughing. Digital
                  smile design can support treatment
                  discussions where appropriate.
                </p>

              </div>

              <div>

                <h3 className="font-manrope font-bold text-[14px] md:text-[15px] text-[#222] mb-2">
                  Step 3: Treatment Selection
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Suitable options are discussed
                  alongside their benefits, limitations,
                  maintenance requirements and expected
                  treatment stages.
                </p>

              </div>

              <div>

                <h3 className="font-manrope font-bold text-[14px] md:text-[15px] text-[#222] mb-2">
                  Step 4: Treatment and Refinement
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  The procedure may involve whitening,
                  direct composite application or the
                  preparation and laboratory fabrication
                  of veneers. The exact process depends
                  on the selected treatment.
                </p>

              </div>

              <div>

                <h3 className="font-manrope font-bold text-[14px] md:text-[15px] text-[#222] mb-2">
                  Step 5: Follow-up and Maintenance
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Regular dental reviews help monitor
                  the condition of the teeth, gums and
                  restorations. Your dentist can
                  recommend appropriate oral hygiene
                  practices and precautions.
                </p>

              </div>

            </div>

          </section>

          {/* NATURAL SMILE */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              What Makes a Smile Look Natural?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
              Natural-looking cosmetic dentistry
              depends on the details of smile design
              rather than simply choosing a brighter shade.
            </p>

            <div className="space-y-6">

              <div>

                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Tooth Morphology
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  The length, width, contours and edges
                  of individual teeth influence the
                  character of a smile.
                </p>

              </div>

              <div>

                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Shade and Translucency
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Natural enamel has depth and subtle
                  variations. Appropriate shade selection
                  and translucency help restorations blend
                  with surrounding teeth.
                </p>

              </div>

              <div>

                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Surface Texture and Light Reflection
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Tooth contours and surface characteristics
                  influence how light reflects across a
                  smile. Excessively uniform shapes or
                  opaque shades can appear less natural.
                </p>

              </div>

              <div>

                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Facial Proportions
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Teeth should be considered in relation
                  to the lips, facial features and
                  smile dynamics.
                </p>

              </div>

              <div>

                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Clinical and Laboratory Craftsmanship
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Careful planning, material selection,
                  bonding and finishing all contribute
                  to the final result. For porcelain
                  veneers, collaboration between the
                  dentist and the ceramist is particularly
                  important, which is why an in-house
                  ceramic laboratory makes such a difference.
                </p>

              </div>

            </div>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-6">
              The objective is to create a balanced
              smile that complements the individual
              rather than following a standard template.
            </p>

          </section>

          {/* COST */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              What Determines the Cost of Cosmetic Dentistry?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              The investment depends on the experience
              of the clinician and their ceramic team,
              the procedure, the choice of materials,
              number of teeth involved, complexity of
              the case, materials used and clinical
              planning required. Laboratory fabrication
              and any additional dental treatment may
              also influence the overall cost.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Professional whitening, composite bonding
              and porcelain veneers involve different
              procedures and maintenance requirements.
              Comparing treatments on price alone may
              overlook important differences in their
              suitability and long-term care.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              A personalised treatment plan helps
              clarify the recommended procedures,
              expected stages and factors contributing
              to the investment.
            </p>

          </section>

          {/* BLANC APPROACH */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              The Blanc Veneers Approach to Smile Design
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              At Blanc Veneers, cosmetic dentistry is
              approached through a combination of
              clinical planning, two decades of
              experience, the best materials from
              across the world and aesthetic judgement.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              The process considers facial proportions,
              lip dynamics, tooth morphology and the
              patient's individual preferences. Digital
              planning and smile analysis can help
              establish the intended direction before
              treatment begins. For porcelain veneer
              cases, attention is given to shade,
              translucency, surface texture and light
              reflection. These details influence how
              the restorations relate to neighbouring
              teeth and appear under different lighting
              conditions.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Where laboratory-fabricated restorations
              are appropriate, Blanc Veneers has its
              own in-house ceramic laboratory and
              aesthetic ceramists, which is rare to find.
              Working side by side, the clinical team
              and ceramists translate the planned
              design into individual restorations.
              For patients considering cosmetic
              dentistry in Mumbai, Blanc Veneers
              provides an opportunity to discuss
              their smile goals, understand suitable
              treatment options and develop a plan
              based on their clinical and aesthetic needs.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Our experience in smile designing spans
              two decades of cases and patient data.
              This has given the team a trained set
              of eyes that focus on attention to detail
              in every case, from a single tooth to
              a complete smile makeover.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              Because the entire process, from planning
              to ceramic fabrication, is managed
              in-house, we have control over every
              stage. This allows us to work with the
              best materials available across the world
              and to maintain the same standard from
              case to case.
            </p>

          </section>

          {/* FINAL THOUGHTS */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Final Thoughts
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Cosmetic dentistry offers several ways
              to refine a smile, from professional
              whitening and composite bonding to
              porcelain veneers and orthodontic
              treatment. Each option has different
              applications, benefits and maintenance
              requirements. The right starting point
              is a thorough assessment of your dental
              health, the changes you wish to achieve
              and the treatments that can address
              them appropriately.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              At Blanc Veneers, the focus is on
              personalised smile design, careful
              planning and attention to the details
              that contribute to a natural-looking
              result, supported by two decades of
              experience, an in-house ceramic lab
              with aesthetic ceramists, and the best
              materials from around the world. If you
              are considering a smile makeover, a
              consultation can help you understand
              your options and plan your next steps.
            </p>

          </section>

          {/* FAQ SECTION */}

          <section className="mb-14">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-7">
              Frequently Asked Questions
            </h2>

            <div className="divide-y divide-black/10 border-y border-black/10">

              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group py-5"
                >

                  <summary className="flex items-center justify-between gap-5 cursor-pointer list-none">

                    <h3 className="font-manrope font-semibold text-[13px] md:text-[14px] text-[#222] leading-[1.7]">
                      {index + 1}. {faq.question}
                    </h3>

                    <span className="font-manrope text-xl text-[#777] shrink-0 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>

                  </summary>

                  <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#555] mt-4 pr-6">
                    {faq.answer}
                  </p>

                </details>
              ))}

            </div>

          </section>

        </article>

      </main>

      <Footer />
    </>
  );
}
