"use client";

import { useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const faqSections = [
  {
    number: "01",
    title: "UNDERSTANDING VENEERS",
    items: [
      {
        question: "What exactly is a veneer?",
        answer: [
          "A veneer is a thin shell — typically between 0.3mm and 0.7mm — bonded to the front surface of a tooth. Its purpose is to alter the tooth's appearance: its colour, shape, length, or surface texture. Done well, it is indistinguishable from the natural tooth structure it covers.",
          "The distinction from a crown is important. A crown encases the entire tooth. A veneer addresses only the visible facial surface. This means significantly less tooth reduction — and in many cases, none at all."
        ]
      },

      {
        question: "What materials does BLANC use?",
        answer: [
          "We work with two materials: lithium disilicate and feldspathic porcelain. The choice between them is made on clinical grounds, specific to each case.",
          "Lithium disilicate offers exceptional strength combined with excellent optical properties — high translucency, natural light behaviour, and surface texture that closely replicates enamel.",
          "Feldspathic porcelain is the more delicate of the two materials and produces the most lifelike aesthetic result available.",
          "We will recommend the material that best serves your case. Both are fabricated in our in-house laboratory."
        ]
      },

      {
        question: "Are veneers permanent? Can they be reversed?",
        answer: [
          "This depends on the preparation type.",
          "No-prep veneers can in principle be removed, though the bonding process does alter the surface to some degree.",
          "Minimal-prep and conventional veneers involve a controlled reduction of enamel, which is irreversible.",
          "Where no-prep is clinically appropriate, we will always choose it.",
          "Veneers themselves are replaceable — typically after 10 to 15 years."
        ]
      },

      {
        question: "How long do veneers last?",
        answer: [
          "Lithium disilicate veneers, placed correctly and maintained well, have a clinical lifespan of 10 to 20 years.",
          "Studies report survival rates above 90% at ten years.",
          "Grinding is the single greatest threat to veneer longevity. If you grind, a night guard is non-negotiable."
        ]
      },

      {
        question: "Will they look natural, or will people notice?",
        answer: [
          "The cases we are most proud of are the ones nobody notices.",
          "An exceptional result doesn't announce itself — it simply looks like a remarkably good smile.",
          "The shade, translucency, surface texture, tooth form, and proportions must all be calibrated to the individual face.",
          "This is why we take facial measurements, discuss personality archetype, and spend the time we do in consultation."
        ]
      }
    ]
  },

  {
    number: "02",
    title: "THE BLANC PROCESS",
    items: [
      {
        question: "What happens at the first consultation?",
        answer: [
          "The consultation at BLANC is a clinical and design conversation, not a sales meeting.",
          "We take full facial measurements, photographs, assess your dental and medical history, and discuss what you want to achieve.",
          "Where appropriate, we conduct a chairside composite mock-up.",
          "The consultation takes between 30 and 60 minutes."
        ]
      },

      {
        question: "How many appointments will I need?",
        answer: [
          "For a standard veneer case, you will attend three to four appointments.",
          "Appointment 1 — Consultation and mock-up.",
          "Appointment 2 — Preparation and impressions.",
          "Appointment 3 — Lab visit, trial and fine tuning.",
          "Appointment 4 — Review."
        ]
      },

      {
        question:
          "How long does the entire process take, from consultation to final result?",
        answer: [
          "Once preparation is complete, the veneers are fabricated in our in-house laboratory within 7 to 10 working days.",
          "Temporary veneers remain in place during this period.",
          "More complex cases may require a longer timeline."
        ]
      },

      {
        question: "What is the composite mock-up and why does it matter?",
        answer: [
          "The mock-up is a chairside trial of the proposed smile design.",
          "Composite material is placed directly over your existing teeth without irreversible change.",
          "It gives you a three-dimensional preview before any commitment is made.",
          "It allows you to say yes — or not quite."
        ]
      },

      {
        question:
          "What happens between preparation and the final fit? Will I walk around with temporary veneers?",
        answer: [
          "Yes.",
          "Temporary veneers are placed the same day and worn during the fabrication period.",
          "They provide function and aesthetics while the final veneers are being created.",
          "Your feedback on the temporaries helps refine the final result."
        ]
      },

      {
        question: "Who makes the veneers?",
        answer: [
          "BLANC operates with an in-house laboratory.",
          "The esthetician and technician communicate directly.",
          "This creates a faster, tighter, and more precise process."
        ]
      }
    ]
  },

  {
    number: "03",
    title: "SUITABILITY & CLINICAL CONCERNS",
    items: [
      {
        question: "How do I know if I'm a candidate for veneers?",
        answer: [
          "Veneers are appropriate for most adults with healthy gum tissue and sufficient enamel structure.",
          "Good candidates include those with discoloration, gaps, minor crowding, worn enamel, asymmetry, or a desire for a refined smile.",
          "Active gum disease, decay, or severe misalignment may need treatment first."
        ]
      },

      {
        question: "Do I need braces or aligners before getting veneers?",
        answer: [
          "Not always.",
          "Mild crowding can often be addressed through veneer design.",
          "Significant misalignment is better treated orthodontically first."
        ]
      },

      {
        question: "I grind my teeth at night. Can I still get veneers?",
        answer: [
          "Yes, with appropriate management.",
          "Bruxism is the most common cause of premature veneer failure.",
          "A custom night guard is mandatory.",
          "With proper protection, grinding patients can achieve excellent results."
        ]
      },

      {
        question: "Will veneers cause sensitivity?",
        answer: [
          "Some sensitivity immediately after preparation is normal.",
          "This usually resolves once the veneers are bonded.",
          "Persistent sensitivity should be investigated."
        ]
      },

      {
        question: "My gums bleed when I brush. Is that a problem?",
        answer: [
          "Yes.",
          "Bleeding is a sign of gingival inflammation and should be addressed before veneer placement.",
          "A professional cleaning and improved home care usually resolve the issue."
        ]
      },

      {
        question: "Should I whiten my teeth before getting veneers?",
        answer: [
          "If adjacent natural teeth will remain visible and you want them lighter, whiten first.",
          "The standard sequence is whitening, waiting two weeks for stabilization, then shade selection."
        ]
      }
    ]
  },

  {
  number: "04",
  title: "THE RESULT",
  items: [
    {
      question: "Can I choose my shade? How white is too white?",
      answer: [
        "You can absolutely indicate a shade preference.",
        "We will also tell you honestly when a requested shade risks looking artificial.",
        "A1 is the most commonly selected shade at BLANC.",
        "It sits at the brighter end of the natural spectrum without appearing artificial.",
        "There is no objectively wrong choice. There are choices that harmonise with your face and choices that don't."
      ]
    },

    {
      question: "Can veneers close gaps and fix crowding?",
      answer: [
        "Gaps, including diastemas, can typically be closed through veneer design.",
        "Space is distributed across several teeth rather than over-widening a single tooth.",
        "Mild crowding can often be visually corrected.",
        "Significant overlapping or rotations are better addressed orthodontically first."
      ]
    },

    {
      question: "What if I don't like the result once the veneers are placed?",
      answer: [
        "This is the question the mock-up process is designed to make unnecessary.",
        "By the time the final veneers are bonded, you will have seen and approved a preview and reviewed your temporaries.",
        "If something is genuinely not right at the fit appointment, we do not bond until it is resolved.",
        "Adjustments can be made chairside.",
        "If required, a veneer may be remade.",
        "We will never ask you to accept a result you are unhappy with."
      ]
    },

    {
      question: "Will the shade of my veneers change over time?",
      answer: [
        "Porcelain veneers are extremely resistant to staining.",
        "Coffee, tea, wine and tobacco have minimal effect on a well-glazed porcelain surface.",
        "The bonding resin at the margins may discolour after many years.",
        "This is usually managed during routine professional maintenance."
      ]
    }
  ]
},


{
  number: "05",
  title: "AFTERCARE & MAINTENANCE",
  items: [
    {
      question: "How do I care for my veneers?",
      answer: [
        "Care for them largely as you would your natural teeth.",
        "Avoid abrasive whitening toothpastes.",
        "Use a soft-bristled toothbrush.",
        "Brush gently along the gumline.",
        "We recommend a fluoride mouthwash as your primary adjunct to brushing.",
        "Professional cleaning every six months is recommended."
      ]
    },

    {
      question: "Can veneers chip or break?",
      answer: [
        "Porcelain veneers are strong but not indestructible.",
        "They can chip under significant impact or parafunctional stress.",
        "Common causes include biting hard foods, chewing ice, using teeth as tools and unmanaged grinding.",
        "Minor chips may sometimes be repaired.",
        "Larger fractures usually require replacement."
      ]
    },

    {
      question: "Are there foods I should avoid?",
      answer: [
        "For the first 48 hours after bonding, avoid hard, crunchy or sticky foods.",
        "After that, most foods are acceptable.",
        "Avoid biting directly into very hard foods with your front veneers.",
        "Cut hard fruits.",
        "Avoid chewing ice."
      ]
    },

    {
      question: "Do I still need to see a dentist regularly if I have veneers?",
      answer: [
        "Yes, without exception.",
        "Veneers cover the front surface of the tooth but do not protect against decay or gum disease.",
        "Regular dental examinations and professional cleaning remain essential.",
        "Ongoing maintenance protects your investment and long-term result."
      ]
    }
  ]
},


{
  number: "06",
  title: "VISITING BLANC",
  items: [
    {
      question: "Where is BLANC located and how do I book?",
      answer: [
        "BLANC operates from Juhu, Mumbai.",
        "Consultations are by appointment only.",
        "You can book via our contact details or Instagram.",
        "We respond to enquiries within one business day."
      ]
    }
  ]
}


];

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <section className="bg-[#efefef] min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10">

          <p className="font-playfair text-[13px] tracking-[0.25em] text-center text-gray-500 mb-4">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h1 className="font-playfair text-5xl md:text-7xl text-center mb-12">
            FAQ
          </h1>

          {faqSections.map((section) => (
            <div key={section.number} className="mb-20">

              <div className="flex items-center gap-4 mb-8">
                <span className="font-playfair text-sm text-gray-400">
                  {section.number}
                </span>

                <span className="font-manrope text-[11px] tracking-[0.25em] text-gray-500">
                  {section.title}
                </span>

                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {section.items.map((item, index) => {
                const id = `${section.number}-${index}`;

                return (
                  <div
                    key={id}
                    className="border-b border-gray-300"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(
                          openIndex === id ? null : id
                        )
                      }
                      className="w-full flex justify-between items-start py-6 text-left"
                    >
                      <span className="font-playfair text-[24px] md:text-[30px]">
                        {item.question}
                      </span>

                      <span className="text-xl">
                        {openIndex === id ? "−" : "+"}
                      </span>
                    </button>

                    {openIndex === id && (
                      <div className="pb-6 space-y-4">
                        {item.answer.map((p, i) => (
                          <p
                            key={i}
                            className="font-manrope text-[14px] leading-relaxed text-[#6a6560]"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>


<div className="max-w-5xl px-6 md:px-0 py-10 border-t border-gray-300">
  <div className="grid md:grid-cols-2 gap-10">

    <p className="font-playfair text-xl italic text-gray-500 leading-relaxed">
    
    </p>

    <div className="md:text-right">
      <p className="font-manrope text-[11px] tracking-[0.25em] uppercase text-gray-400 mb-3">
        Get In Touch
      </p>

      <p className="font-manrope text-sm text-gray-600">
        @blanc.studio
      </p>

      <p className="font-manrope text-sm text-gray-600">
        Juhu, Mumbai
      </p>

      <p className="font-manrope text-sm text-gray-600">
        By Appointment Only
      </p>
    </div>

  </div>
</div>


      <Footer />
    </>
  );
}