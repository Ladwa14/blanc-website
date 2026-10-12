"use client";

import { useState } from "react";
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";

const treatments = [
  "Porcelain or composite veneers to improve tooth shape, size, colour, and proportions",
  "Teeth whitening to brighten the natural teeth",
  "Composite bonding to address minor changes in tooth shape, chips, or small gaps",
  "Orthodontic treatment such as braces or clear aligners to address tooth alignment",
  "Gum contouring where changes to the gum line may improve the overall appearance of the smile",
  "Restorative treatment where existing dental concerns need to be addressed as part of the overall plan",
];

const concerns = [
  "Tooth colour",
  "Tooth shape or size",
  "Chipped or worn teeth",
  "Gaps between teeth",
  "Mild alignment concerns",
  "Uneven gum appearance",
  "The overall proportions or appearance of your smile",
];

const faqs = [
  {
    question: "What is a smile makeover?",
    answer:
      "A smile makeover is a personalised treatment plan that may combine one or more cosmetic or restorative dental procedures to improve the overall appearance of your smile.",
  },
  {
    question: "What treatments can be included in a smile makeover?",
    answer:
      "Depending on your needs, a smile makeover may include veneers, whitening, composite bonding, orthodontic treatment, gum contouring, or restorative dental treatment.",
  },
  {
    question: "How long does a smile makeover take?",
    answer:
      "The timeline varies depending on the treatments involved and the complexity of the case. A personalised treatment plan can provide a clearer estimate of the expected timeline.",
  },
  {
    question: "Can a smile makeover fix crooked or gapped teeth?",
    answer:
      "Depending on the degree and cause of the concern, treatment may include veneers, bonding, or orthodontic treatment. The appropriate option is determined during the assessment.",
  },
  {
    question: "Can I preview my smile before treatment?",
    answer:
      "Depending on the treatment, a physical mock-up or other treatment preview may be used to help assess the proposed changes before treatment begins.",
  },
  {
    question: "How many treatments do I need for a smile makeover?",
    answer:
      "There is no fixed number. Some patients may need only one treatment, while others may benefit from a combination of procedures based on their individual needs and goals.",
  },
  {
    question: "Are smile makeover results permanent?",
    answer:
      "The longevity of a smile makeover depends on the treatments involved and how they are cared for. Some restorations can last for many years, while treatments such as whitening may require maintenance over time.",
  },
  {
    question: "How do I know if a smile makeover is right for me?",
    answer:
      "A personalised consultation can determine whether a smile makeover is appropriate and which treatments, if any, would best address your concerns and aesthetic goals.",
  },
];

const stages = [
  {
    title: "1. Consultation and Smile Assessment",
    paragraphs: [
      "The process begins with a detailed assessment of your teeth, gums, bite, facial proportions, and smile. We discuss what you would like to change, what you would like to retain, and your overall aesthetic goals.",
      "Your dental health is also assessed to determine whether any underlying concerns need to be addressed before cosmetic treatment.",
    ],
  },
  {
    title: "2. Treatment Planning",
    paragraphs: [
      "Once your goals and clinical needs have been assessed, the appropriate treatment options are discussed and a personalised plan is developed.",
      "The plan may involve one treatment or a combination, depending on what is required to achieve the desired outcome.",
    ],
  },
  {
    title: "3. Smile Preview or Mock-Up, Where Appropriate",
    paragraphs: [
      "Depending on the treatment, a physical mock-up or other form of treatment preview may be used to assess the proposed changes before the final procedure.",
    ],
  },
  {
    title: "4. Preparation and Treatment",
    paragraphs: [
      "The planned treatments are then carried out in the appropriate sequence. This may involve preparing teeth for veneers, completing whitening or bonding, carrying out gum treatment, or beginning orthodontic treatment, depending on the individual plan.",
    ],
  },
  {
    title: "5. Laboratory Fabrication",
    paragraphs: [
      "Where laboratory restorations are involved, our in-house dental laboratory and ceramist work closely with the clinical team to create the final restorations.",
      "The shape, colour, surface texture, translucency, and proportions are considered as part of the fabrication process, allowing the restorations to be individually crafted for the planned smile.",
    ],
  },
  {
    title: "6. Final Placement and Review",
    paragraphs: [
      "Once treatment is complete, the final result is assessed for appearance, comfort, and function. Any necessary adjustments are made to ensure the completed smile is comfortable and harmonious with the surrounding teeth and facial features.",
    ],
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
      {children}
    </p>
  );
}

export default function SmileMakeoverProcedurePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* BLOG HERO */}
      <section className="bg-[#ffffff] px-6 md:px-8 pt-10 md:pt-16">
        <div className="max-w-[1000px] mx-auto">
          {/* BLOG IMAGE */}
          <div className="max-w-[760px] mx-auto">
            <img
              src="/Smile_Makeover_Procedures.webp"
              alt="Smile Makeover Procedures"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          {/* TITLE */}
          <div className="max-w-[760px] mx-auto text-center pt-7 pb-10">
            <h1 className="font-playfair text-3xl md:text-5xl text-[#222] leading-tight">
              Smile Makeover Procedures Explained
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-5 font-manrope text-[11px] md:text-xs text-gray-500">
              <a
                href="https://blancveneers.com/"
                className="hover:text-[#222] transition-colors duration-300 underline underline-offset-4"
              >
                Blanc Veneers
              </a>
              <span aria-hidden="true">•</span>
              <time dateTime="2026-10-11">October 11, 2026</time>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <main className="bg-[#ffffff] px-6 md:px-8 pb-20">
        <article className="max-w-[720px] mx-auto">
          {/* INTRODUCTION */}
          <Paragraph>
            A smile makeover is not a single procedure. It is a personalised
            treatment plan that brings together the elements of your smile you
            want to change, whether that is tooth colour, shape, proportions,
            alignment, or gum appearance. Depending on your needs, a smile
            makeover may involve one treatment or a combination of cosmetic and
            restorative procedures.
          </Paragraph>

          <Paragraph>
            If you have been researching how to improve your smile, you have
            likely come across treatments such as veneers, whitening, bonding,
            orthodontics, and gum contouring, and wondered how they fit
            together. This guide explains what a smile makeover involves, which
            treatments may be considered, and what you can expect from the
            process.
          </Paragraph>

          {/* WHAT IS A SMILE MAKEOVER */}
          <section className="mb-12">
            <SectionHeading>What Is a Smile Makeover?</SectionHeading>
            <Paragraph>
              A smile makeover is a personalised combination of cosmetic and,
              when needed, restorative dental treatments designed to improve the
              overall appearance of your smile.
            </Paragraph>
            <Paragraph>
              Unlike a single treatment that addresses one concern, a smile
              makeover considers multiple elements together, including tooth
              colour, shape, size, alignment, gum appearance, and how the smile
              relates to your lips and facial features.
            </Paragraph>
            <Paragraph>
              At Blanc, every smile makeover begins with a detailed consultation
              rather than a standard treatment plan. Because no two smiles or
              faces are alike, the approach is tailored to your individual
              features, dental needs, and aesthetic goals.
            </Paragraph>
          </section>

          {/* WHY CONSIDER A SMILE MAKEOVER */}
          <section className="mb-12">
            <SectionHeading>Why Consider a Smile Makeover?</SectionHeading>
            <Paragraph>
              People consider a smile makeover for many different reasons. You
              may be concerned about chipped or worn teeth, discolouration,
              gaps, uneven tooth shapes, visible gum irregularities, or changes
              you have wanted to make to your smile for years.
            </Paragraph>
            <Paragraph>
              For some patients, one treatment may be enough to address their
              concerns. For others, several aspects of the smile may need to be
              considered together.
            </Paragraph>
            <Paragraph>
              The goal is not to create a standardised “perfect” smile. It is to
              create a result that feels natural, balanced, and appropriate to
              your individual features.
            </Paragraph>
          </section>

          {/* TREATMENTS */}
          <section className="mb-12">
            <SectionHeading>
              What Treatments Can Be Included in a Smile Makeover?
            </SectionHeading>
            <Paragraph>
              There is no fixed combination of treatments for a smile makeover.
              The treatments selected depend on your teeth, gums, bite, facial
              features, and aesthetic goals.
            </Paragraph>
            <Paragraph>
              Depending on the case, a smile makeover may involve:
            </Paragraph>
            <ul className="space-y-4 pl-5 mb-6">
              {treatments.map((treatment) => (
                <li
                  key={treatment}
                  className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]"
                >
                  {treatment}
                </li>
              ))}
            </ul>
            <Paragraph>
              Not every patient needs multiple treatments. In some cases, a
              single procedure may achieve the desired result, while more
              complex cases may require a combination of treatments.
            </Paragraph>
          </section>

          {/* PROCEDURE */}
          <section className="mb-12">
            <SectionHeading>What to Expect During a Smile Makeover</SectionHeading>
            <Paragraph>
              While every case is different, the process at Blanc Veneers
              generally involves several stages.
            </Paragraph>
            <div className="space-y-8">
              {stages.map((stage) => (
                <div key={stage.title}>
                  <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-3">
                    {stage.title}
                  </h3>
                  {stage.paragraphs.map((paragraph) => (
                    <Paragraph key={paragraph}>{paragraph}</Paragraph>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* SUITABILITY */}
          <section className="mb-12">
            <SectionHeading>Is a Smile Makeover Right for You?</SectionHeading>
            <Paragraph>
              A smile makeover may be appropriate when you have concerns about
              multiple aspects of your smile and would benefit from having them
              considered together as part of one treatment plan.
            </Paragraph>
            <Paragraph>It may be worth considering if you are concerned about:</Paragraph>
            <ul className="space-y-3 pl-5 mb-6">
              {concerns.map((concern) => (
                <li
                  key={concern}
                  className="list-disc font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444]"
                >
                  {concern}
                </li>
              ))}
            </ul>
            <Paragraph>
              However, a smile makeover is not necessarily the right approach
              for everyone. In some cases, a single treatment may be sufficient
              to address your concerns.
            </Paragraph>
            <Paragraph>
              A personalised consultation is the best way to determine which
              approach is appropriate for you.
            </Paragraph>
          </section>

          {/* WHY BLANC */}
          <section className="mb-12">
            <SectionHeading>Why Choose Blanc for Your Smile Makeover?</SectionHeading>
            <Paragraph>
              At Blanc, cosmetic dentistry is approached as a thoughtful design
              process rather than a one-size-fits-all procedure.
            </Paragraph>
            <Paragraph>
              Our clinical and laboratory teams work closely throughout the
              treatment journey. From the initial assessment and treatment
              planning to the fabrication and final placement of restorations,
              each stage is carefully considered.
            </Paragraph>
            <Paragraph>
              With our in-house dental laboratory and dedicated ceramist, we
              can maintain close collaboration between the clinical and
              laboratory sides of treatment. This allows restorations to be
              individually crafted with attention to details such as shape,
              colour, texture, translucency, and proportions.
            </Paragraph>
            <Paragraph>
              The result is a smile designed around the individual rather than
              a predetermined template.
            </Paragraph>
            <Paragraph>
              If you are considering a smile makeover and want to understand
              which treatments may be appropriate for you, schedule a
              personalised consultation with Blanc to explore your options.
            </Paragraph>
          </section>

          {/* FINAL THOUGHTS */}
          <section className="mb-14">
            <SectionHeading>Final Thoughts</SectionHeading>
            <Paragraph>
              A smile makeover is not about combining as many treatments as
              possible. It is about identifying what you want to change and
              determining which treatments, if any, can achieve those changes
              in a considered and appropriate way.
            </Paragraph>
            <Paragraph>
              Whether you are looking to improve tooth colour, shape, alignment,
              proportions, or the overall appearance of your smile, the right
              treatment plan begins with understanding your individual needs.
            </Paragraph>
            <Paragraph>
              At Blanc, every smile makeover is planned around your features,
              dental health, and aesthetic goals, with the aim of creating a
              result that feels natural, refined, and personal to you.
            </Paragraph>
            <Paragraph>
              If you are ready to explore your options, contact Blanc to begin
              your consultation.
            </Paragraph>
          </section>

          {/* FAQ ACCORDION */}
          <section className="border-t border-black/10 pt-10">
            <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-3">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-[#222] mb-8">
              Frequently Asked Questions
            </h2>

            <div className="border-t border-black/10">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="border-b border-black/10">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222]">
                      {index + 1}. {faq.question}
                    </span>
                    <span
                      className="flex-shrink-0 font-manrope text-xl font-light text-[#222]"
                      aria-hidden="true"
                    >
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === index && (
                    <div className="pb-5 pr-8">
                      <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
