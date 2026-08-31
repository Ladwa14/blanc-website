"use client";

import { useState } from "react";
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";

export default function VeneersForCrookedTeethPage() {
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
      <section className="bg-[#ffffff] px-6 md:px-8 pt-10 md:pt-16">
        <div className="max-w-[1000px] mx-auto">

          {/* BLOG IMAGE */}
          <div className="max-w-[760px] mx-auto">
            <img
              src="/Veneers_for_Crooked_Teeth_Can_Veneers_Straighten_Your_Smile_.webp"
              alt="Veneers for Crooked Teeth"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          {/* TITLE */}
          <div className="max-w-[760px] mx-auto text-center pt-7 pb-10">

            <p className="font-manrope text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
              BLANC JOURNAL
            </p>

            <h1 className="font-playfair text-3xl md:text-5xl text-[#222] leading-tight">
              Veneers for Crooked Teeth: Can Veneers Straighten Your Smile?
            </h1>

          </div>

        </div>
      </section>


      {/* =========================
          ARTICLE CONTENT
      ========================= */}
      <main className="bg-[#ffffff] px-6 md:px-8 pb-20">

        <article className="max-w-[720px] mx-auto">

          {/* INTRODUCTION */}

          <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
            A crooked smile can make some people feel hesitant to smile freely
            in photos, meetings, or even everyday conversations. Braces and
            clear aligners are often the first solutions that come to mind, but
            they are not the only option. For patients with mild alignment
            concerns who also want to change the shape, colour, or proportions
            of their teeth, veneers may offer a cosmetic approach to creating a
            straighter-looking smile.
          </p>

          <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-12">
            At Blanc, one of the questions we often hear is: can veneers really
            straighten your smile, or do they simply change its appearance? The
            answer depends on the degree of misalignment, the condition of your
            teeth, and what you want to achieve.
          </p>


          {/* =========================
              WHAT ARE VENEERS
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              What Are Veneers, and How Do They Work?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Dental veneers are thin, custom-made restorations, typically
              crafted from porcelain or composite resin, that are bonded to the
              front surface of teeth.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Unlike orthodontic treatment, veneers do not reposition teeth.
              Instead, they change the visible shape, colour, contours, and
              proportions of the teeth. In carefully selected cases, this can
              create the appearance of a straighter and more even smile.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              Veneers may therefore be considered for patients with mild
              crookedness, small gaps, uneven edges, or slight rotations,
              particularly when they also want to improve other aspects of
              their smile.
            </p>

          </section>


          {/* =========================
              CAN VENEERS STRAIGHTEN
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Can Veneers Actually Straighten Crooked Teeth?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Veneers do not physically straighten teeth. They can, however,
              create the appearance of a straighter smile by changing the
              visible surfaces of the teeth. For patients with mild alignment
              concerns, this may be enough to achieve the aesthetic change they
              are looking for.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Veneers are generally not suitable for severe crowding,
              significant rotations, substantial misalignment, or complex bite
              problems. In these situations, orthodontic treatment may be
              recommended to address the underlying alignment before considering
              cosmetic treatment.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              The right approach therefore depends on the individual case. A
              clinical assessment is important to determine whether veneers can
              achieve the desired result or whether another treatment would be
              more appropriate.
            </p>

          </section>


          {/* =========================
              SMILE MAKEOVER
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Veneers as Part of a Complete Smile Makeover
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              For many patients, crooked teeth are only one part of what they
              would like to change about their smile. They may also want to
              address tooth colour, shape, length, uneven edges, or the overall
              proportions of their smile.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              At Blanc, every smile is considered individually. Facial
              structure, lip line, natural tooth characteristics, smile
              dynamics, and personal preferences all play a role in determining
              the appropriate aesthetic direction.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              The goal is not to create a standardised version of a “perfect”
              smile, but to create one that feels natural and appropriate to
              the individual.
            </p>

          </section>


          {/* =========================
              TYPES OF VENEERS
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Types of Dental Veneers to Consider
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
              When considering dental veneers for a crooked appearance, there
              are several material options.
            </p>

            <ul className="space-y-5 pl-5 mb-6">

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                <strong>Porcelain veneers</strong> – Highly durable and
                stain-resistant, with an appearance designed to closely
                replicate the light-reflecting qualities of natural enamel.
                They are commonly used for comprehensive aesthetic smile
                transformations.
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                <strong>Composite veneers</strong> – A more accessible option
                that can often be completed with less laboratory involvement.
                Composite generally differs from porcelain in terms of
                durability, stain resistance, and long-term wear.
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                <strong>Ultra-thin or minimal-preparation veneers</strong> –
                Designed to require little, and in selected cases no, enamel
                reduction. Whether this approach is appropriate depends on
                factors such as tooth position, available space, bite, and the
                desired aesthetic outcome.
              </li>

            </ul>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              The appropriate material depends on your teeth, bite, aesthetic
              goals, and the extent of the changes required. Your dentist can
              recommend the most suitable option following a detailed
              assessment.
            </p>

          </section>


          {/* =========================
              VENEER PROCESS
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-7">
              What to Expect During the Veneer Process
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-7">
              While every case is different, the veneer process at Blanc
              typically involves several carefully planned stages.
            </p>


            <div className="space-y-8">

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  1. Consultation and Smile Assessment
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Your consultation begins with a detailed assessment of your
                  teeth, gums, bite, facial proportions, and smile. We discuss
                  your concerns, aesthetic goals, and the changes you would
                  like to make.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  We also assess whether veneers alone can achieve the desired
                  result or whether a combination of treatments would be more
                  appropriate.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  2. Smile Designing and Mock-Up
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Once veneers are considered appropriate, we plan the desired
                  tooth shape, size, proportions, colour, and overall appearance
                  of the smile.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  A physical mock-up may be used to assess the proposed shape,
                  size, and overall appearance of the veneers before the final
                  treatment.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  3. Tooth Preparation
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  The teeth are carefully prepared according to the treatment
                  plan and the type of veneers being used. The amount of
                  preparation varies from case to case and depends on factors
                  such as tooth position, bite, material, and the desired
                  aesthetic outcome.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  4. Shade Selection and Laboratory Fabrication
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Once the design is finalised, the case is transferred to our
                  in-house dental laboratory, where our ceramist plays an
                  important role in creating the final veneers.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  The ceramist works closely with the clinical team to develop
                  the shape, colour, surface texture, translucency, and other
                  details of each restoration. This allows the veneers to be
                  individually crafted to complement the patient's smile rather
                  than produced from a standard template.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  5. Temporary Veneers
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Temporary veneers are placed to protect the prepared teeth
                  while the final veneers are being made. They also help
                  maintain the appearance and function of your smile during the
                  treatment period.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  6. Try-In, Bonding, and Final Adjustments
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Once the final veneers are ready, they are tried in to assess
                  their fit, appearance, colour, proportions, and relationship
                  with the surrounding teeth.
                </p>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-4">
                  Any necessary refinements are made before the veneers are
                  permanently bonded. The final bite and overall appearance are
                  also checked to ensure the restorations are comfortable and
                  functional.
                </p>
              </div>

            </div>

          </section>


          {/* =========================
              ARE VENEERS RIGHT FOR YOU
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Are Veneers Right for You?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Veneers may be suitable for patients who:
            </p>

            <ul className="space-y-3 pl-5 mb-6">

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Have mild crookedness, rotation, or small gaps
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Want to improve the appearance of tooth shape or proportions
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Also want to address concerns about tooth colour or uneven edges
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Have healthy teeth and gums
              </li>

              <li className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]">
                Are looking for a cosmetic approach to improving the appearance
                of their smile
              </li>

            </ul>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Veneers are not the right solution for every type of misalignment.
              If the teeth require significant movement or there are underlying
              bite or oral health concerns, another treatment approach may be
              more appropriate.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              A clinical examination is therefore essential before deciding
              whether veneers are suitable for your smile.
            </p>

          </section>


          {/* =========================
              WHY BLANC
          ========================= */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Why Choose Blanc for Your Smile Transformation?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              At Blanc, cosmetic dentistry is approached as a thoughtful design
              process rather than a one-size-fits-all procedure.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Our clinical and laboratory teams work closely throughout the
              treatment journey. From the initial assessment and smile planning
              to the fabrication and final placement of your veneers, each
              stage is carefully considered.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              With our in-house dental laboratory and dedicated ceramist, we can
              maintain close collaboration between the clinical and laboratory
              sides of treatment. This allows the final veneers to be crafted
              with attention to individual details such as shape, colour,
              texture, translucency, and proportions.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              If you're considering veneers for crooked teeth and want to
              understand whether they are right for you, schedule a
              personalised consultation with Blanc to explore your options.
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
              Veneers can be an effective cosmetic option for selected patients
              with mild alignment concerns, particularly when they also want to
              improve the shape, colour, or proportions of their teeth.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              However, not every crooked smile can be treated with veneers. The
              most appropriate approach depends on the degree of misalignment,
              your bite, dental health, and the changes you want to achieve.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              At Blanc, every case is assessed individually, with the aim of
              creating a smile that feels natural, refined, and personal to
              you.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              If you're ready to explore your options, contact Blanc to begin
              your consultation.
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
                  1. Can veneers fix crooked teeth?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Veneers can improve the appearance of mildly crooked teeth by
                  changing their visible shape and contours. They do not
                  physically move the teeth.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  2. Can I get veneers without braces?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Yes, in selected cases where the alignment concern is mild
                  and veneers can achieve the desired result.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  3. Are veneers suitable for severely crooked teeth?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Generally, no. Braces or clear aligners may be more
                  appropriate for significant misalignment.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  4. Are veneers better than braces for crooked teeth?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Both treatments serve different purposes. Veneers change the
                  appearance of teeth, while braces and clear aligners
                  reposition them. The right option depends on your dental
                  condition and aesthetic goals.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  5. How long do veneers last?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  With proper care and regular dental check-ups, veneers can
                  last for many years. Their lifespan varies depending on the
                  material, oral hygiene, bite, and individual habits.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  6. How many veneers are needed for a straighter-looking
                  smile?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  The number depends on your smile, the teeth being treated, and
                  your aesthetic goals. This is determined during your
                  personalised smile assessment.
                </p>
              </div>


              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  7. How do I know if veneers are right for my crooked teeth?
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  A personalised consultation can determine whether veneers are
                  appropriate based on your alignment, bite, dental health, and
                  aesthetic goals.
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