import { notFound } from "next/navigation";
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";

const blogs = {
  "digital-smile-design-procedure": {
    title: "Everything You Should Know About the Digital Smile Design Procedure",
    image: "/blog/digital-smile-design.webp",

    intro: `
      A smile is rarely just about teeth. It is proportion, symmetry, facial harmony,
      and the quiet confidence that comes from knowing every detail has been considered
      before a single instrument touches your mouth.
    `,

    content: [
      {
        heading: "What Is Digital Smile Design?",
        paragraphs: [
          `The digital smile design procedure is an advanced, technology-led planning method used to analyse and design a smile in relation to a patient's facial structure, lip dynamics, gum architecture, and individual proportions. Using high-resolution photography, video analysis, digital scans, and specialised software, clinicians can map the smile against facial landmarks to evaluate tooth shape, size, alignment, and symmetry.`,

          `Rather than viewing teeth in isolation, digital smile design considers the face as a whole: how the smile moves when you speak, how it sits within your lips at rest, and how proportion, light, and shadow interact with your features. This helps create a smile that complements the person rather than simply correcting individual teeth.`,

          `At Blanc, this process is approached as both a science and an art form, combining clinical data with aesthetic judgement to create results that feel individual, refined, and naturally harmonious.`,
        ],
      },

      {
        heading: "Why Precision Planning Matters",
        paragraphs: [
          `A smile makeover involves more than changing the colour or alignment of teeth. Small differences in tooth length, width, proportion, midline, and incisal edge position can influence how a smile looks within the context of the entire face.`,

          `Traditional smile planning may rely more heavily on clinical assessment, photographs, physical mock-ups, and the dentist's aesthetic judgement. Digital smile design adds another layer of visualisation, allowing the proposed direction of treatment to be explored before clinical work begins.`,

          `Digital simulations can also create a clearer visual reference for communication between the patient, dentist, and laboratory team. This helps everyone understand the intended aesthetic direction and allows preferences to be discussed and refined before treatment progresses.`,

          `For a brand positioned around refined, individualised care, this level of planning is an important part of creating a thoughtful treatment experience.`,
        ],
      },

      {
        heading: "How Does the Digital Smile Design Procedure Work?",
        steps: [
          {
            title: "1. Comprehensive facial and dental analysis",
            text: `The process begins with detailed photographs, digital scans, and, where appropriate, video capture of your face, lips, and smile in motion. This information provides the foundation for understanding your facial proportions, smile dynamics, tooth position, and overall aesthetics.`,
          },
          {
            title: "2. Digital analysis",
            text: `Specialised software can be used to assess facial reference lines, dental midline, smile line, incisal edge position, tooth proportions, and other aesthetic parameters. These measurements help the clinical team evaluate what may create a balanced and harmonious smile for your individual features.`,
          },
          {
            title: "3. Virtual smile simulation",
            text: `This is where digital smile design becomes particularly valuable. A digital simulation can provide a visual representation of a proposed smile, helping you understand the potential direction of treatment before clinical work begins. It also creates an opportunity to discuss preferences around tooth shape, length, proportion, and overall appearance.`,
          },
          {
            title: "4. Treatment pathway selection",
            text: `Once the aesthetic goals have been established, the appropriate treatment pathway can be considered. Depending on your individual needs, this may include porcelain veneers, composite bonding, orthodontic alignment, whitening, gum treatment, or a combination of treatments. For patients seeking a comprehensive smile transformation, veneers may be one option for refining tooth shape, proportion, symmetry, and brightness.`,
          },
          {
            title: "5. Mock-up and trial smile",
            text: `A physical or digital mock-up can allow you to experience or visualise the proposed design before the final treatment is carried out. This stage provides an opportunity to assess the overall appearance and refine elements of the design where appropriate.`,
          },
          {
            title: "6. Final execution with precision craftsmanship",
            text: `Once the treatment plan has been finalised, the approved design provides a reference for the clinical and laboratory teams throughout the treatment process. While the final result can be influenced by individual clinical, biological, and laboratory factors, careful digital planning helps the team work towards the intended aesthetic outcome with greater consistency.`,
          },
        ],
      },

      {
        heading: "Who Is a Candidate for Digital Smile Design?",
        paragraphs: [
          `Digital smile design can be particularly useful for patients who are:`,
        ],
        bullets: [
          "Considering veneers or other cosmetic dental treatments",
          "Exploring a complete smile makeover",
          "Concerned about tooth shape, size, proportion, or symmetry",
          "Interested in understanding their potential treatment outcome before treatment begins",
          "Considering a combination of cosmetic dental treatments",
        ],
        afterBullets: [
          `Digital smile design can be useful across a range of cosmetic cases, but the appropriate treatment pathway depends on individual dental and oral health, treatment goals, and clinical requirements.`,

          `A personalised consultation is therefore important before deciding on any cosmetic dental procedure.`,
        ],
      },

      {
        heading: "Digital Smile Design and the Modern Smile Makeover",
        paragraphs: [
          `A modern smile makeover is not simply about whitening or straightening teeth. It is about proportion, balance, and how every element of the smile works together.`,

          `Digital smile design allows different elements of a smile makeover, from tooth proportion to smile line and overall symmetry, to be considered together rather than in isolation.`,

          `This can be particularly valuable when veneers are involved, as even small differences in tooth length, width, contour, and position can influence whether a result feels natural or artificial.`,

          `By exploring the proposed design before treatment, the clinical and laboratory teams can work towards veneers that complement the patient's facial features rather than simply changing the appearance of individual teeth.`,

          `The goal is not to create a universally perfect smile, but one that feels balanced, proportionate, and appropriate for the person wearing it.`,
        ],
      },

      {
        heading: "The Blanc Difference",
        paragraphs: [
          `At Blanc, we approach cosmetic dentistry as a combination of clinical expertise, aesthetic judgement, advanced technology, and individualised care.`,

          `Our approach to digital smile design reflects this philosophy. Rather than following a standard template, we consider your facial features, smile dynamics, dental proportions, and personal preferences when developing a treatment plan.`,

          `From the initial consultation through digital planning, mock-up, clinical treatment, and laboratory craftsmanship, every stage is considered as part of one cohesive aesthetic journey.`,

          `A smile makeover should feel less like a routine dental procedure and more like a personalised design process, where every detail has a purpose.`,

          `If you're considering veneers or a smile makeover and want to understand what could work for your features, schedule a consultation with Blanc to explore your personalised smile design.`,
        ],
      },

      {
        heading: "Final Thoughts",
        paragraphs: [
          `Digital smile design has introduced a more visual and collaborative approach to planning cosmetic smile makeovers.`,

          `Whether you're exploring veneers, a complete smile makeover, or simply want to understand your cosmetic options, digital planning can provide greater clarity and help make treatment decisions more informed and intentional.`,

          `At Blanc, we don't simply change individual teeth. We consider how every element of a smile works together with the face to create an outcome that feels refined, proportionate, and personal.`,

          `If you're ready to explore your options, contact us to begin your consultation.`,
        ],
      },
    ],

    faqs: [
      {
        question: "What is Digital Smile Design?",
        answer:
          "It's a technology-driven process that uses photos, videos, and 3D scans to let you preview your new smile digitally before treatment begins. It replaces guesswork with a visual, collaborative plan.",
      },
      {
        question: "How does the smile design process work?",
        answer:
          "It follows four steps: consultation, imaging/3D scanning, digital design creation, and a mock-up preview. Once approved, the design becomes your treatment blueprint.",
      },
      {
        question: "Is this procedure painful?",
        answer:
          "No, the planning stage is completely non-invasive, just photos, scans, and software. Discomfort only comes later if you proceed with procedures like veneers.",
      },
      {
        question: "How much does a digital smile makeover cost?",
        answer:
          "Full treatment can range from $1,000 to $50,000 depending on procedures involved. The planning session itself is sometimes free with a consultation.",
      },
      {
        question: "What treatments can be planned this way?",
        answer:
          "Veneers, implants, crowns, orthodontics, whitening, gum contouring, and full-mouth rehabilitation. It covers both cosmetic and restorative work.",
      },
      {
        question: "Can I see my new smile before treatment starts?",
        answer:
          "Yes, that's the main benefit of this approach. You get a digital simulation and often a physical mock-up to try before committing.",
      },
      {
        question: "How accurate is the final result compared to the preview?",
        answer:
          "Very accurate when done by an experienced dentist, though no simulation guarantees a 100% exact match. It's based on real facial and dental measurements.",
      },
      {
        question: "Who's a good candidate for a smile redesign?",
        answer:
          "Anyone in good oral health wanting a personalized smile makeover. Existing issues like gum disease or cavities are treated first.",
      },
      {
        question: "How long does the whole process take?",
        answer:
          "Planning takes 1–2 visits; total treatment ranges from a few weeks to several months depending on complexity. Veneer-only cases move fastest.",
      },
      {
        question: "Does insurance cover smile design treatment?",
        answer:
          "Usually not, since it's classified as cosmetic planning. Restorative parts of the plan, like implants, may get partial coverage.",
      },
    ],
  },

  "veneers-for-crooked-teeth": {
    title: "Veneers for Crooked Teeth: Can Veneers Straighten Your Smile?",
    image: "/blog/veneers-crooked-teeth.webp",

    intro: `
      A crooked smile can make some people feel hesitant to smile freely in photos,
      meetings, or even everyday conversations. Braces and clear aligners are often
      the first solutions that come to mind, but they are not the only option.
    `,

    content: [
      {
        heading: "What Are Veneers, and How Do They Work?",
        paragraphs: [
          `Dental veneers are thin, custom-made restorations, typically crafted from porcelain or composite resin, that are bonded to the front surface of teeth.`,

          `Unlike orthodontic treatment, veneers do not reposition teeth. Instead, they change the visible shape, colour, contours, and proportions of the teeth. In carefully selected cases, this can create the appearance of a straighter and more even smile.`,

          `Veneers may therefore be considered for patients with mild crookedness, small gaps, uneven edges, or slight rotations, particularly when they also want to improve other aspects of their smile.`,
        ],
      },

      {
        heading: "Can Veneers Actually Straighten Crooked Teeth?",
        paragraphs: [
          `Veneers do not physically straighten teeth. They can, however, create the appearance of a straighter smile by changing the visible surfaces of the teeth. For patients with mild alignment concerns, this may be enough to achieve the aesthetic change they are looking for.`,

          `Veneers are generally not suitable for severe crowding, significant rotations, substantial misalignment, or complex bite problems. In these situations, orthodontic treatment may be recommended to address the underlying alignment before considering cosmetic treatment.`,

          `The right approach therefore depends on the individual case. A clinical assessment is important to determine whether veneers can achieve the desired result or whether another treatment would be more appropriate.`,
        ],
      },

      {
        heading: "Veneers as Part of a Complete Smile Makeover",
        paragraphs: [
          `For many patients, crooked teeth are only one part of what they would like to change about their smile. They may also want to address tooth colour, shape, length, uneven edges, or the overall proportions of their smile.`,

          `At Blanc, every smile is considered individually. Facial structure, lip line, natural tooth characteristics, smile dynamics, and personal preferences all play a role in determining the appropriate aesthetic direction.`,

          `The goal is not to create a standardised version of a “perfect” smile, but to create one that feels natural and appropriate to the individual.`,
        ],
      },

      {
        heading: "Types of Dental Veneers to Consider",
        paragraphs: [
          `When considering dental veneers for a crooked appearance, there are several material options.`,
        ],
        bullets: [
          "Porcelain veneers – Highly durable and stain-resistant, with an appearance designed to closely replicate the light-reflecting qualities of natural enamel. They are commonly used for comprehensive aesthetic smile transformations.",
          "Composite veneers – A more accessible option that can often be completed with less laboratory involvement. Composite generally differs from porcelain in terms of durability, stain resistance, and long-term wear.",
          "Ultra-thin or minimal-preparation veneers – Designed to require little, and in selected cases no, enamel reduction. Whether this approach is appropriate depends on factors such as tooth position, available space, bite, and the desired aesthetic outcome.",
        ],
        afterBullets: [
          `The appropriate material depends on your teeth, bite, aesthetic goals, and the extent of the changes required. Your dentist can recommend the most suitable option following a detailed assessment.`,
        ],
      },

      {
        heading: "What to Expect During the Veneer Process",
        steps: [
          {
            title: "1. Consultation and Smile Assessment",
            text: `Your consultation begins with a detailed assessment of your teeth, gums, bite, facial proportions, and smile. We discuss your concerns, aesthetic goals, and the changes you would like to make. We also assess whether veneers alone can achieve the desired result or whether a combination of treatments would be more appropriate.`,
          },
          {
            title: "2. Smile Designing and Mock-Up",
            text: `Once veneers are considered appropriate, we plan the desired tooth shape, size, proportions, colour, and overall appearance of the smile. A physical mock-up may be used to assess the proposed shape, size, and overall appearance of the veneers before the final treatment.`,
          },
          {
            title: "3. Tooth Preparation",
            text: `The teeth are carefully prepared according to the treatment plan and the type of veneers being used. The amount of preparation varies from case to case and depends on factors such as tooth position, bite, material, and the desired aesthetic outcome.`,
          },
          {
            title: "4. Shade Selection and Laboratory Fabrication",
            text: `Once the design is finalised, the case is transferred to our in-house dental laboratory, where our ceramist plays an important role in creating the final veneers. The ceramist works closely with the clinical team to develop the shape, colour, surface texture, translucency, and other details of each restoration. This allows the veneers to be individually crafted to complement the patient's smile rather than produced from a standard template.`,
          },
          {
            title: "5. Temporary Veneers",
            text: `Temporary veneers are placed to protect the prepared teeth while the final veneers are being made. They also help maintain the appearance and function of your smile during the treatment period.`,
          },
          {
            title: "6. Try-In, Bonding, and Final Adjustments",
            text: `Once the final veneers are ready, they are tried in to assess their fit, appearance, colour, proportions, and relationship with the surrounding teeth. Any necessary refinements are made before the veneers are permanently bonded. The final bite and overall appearance are also checked to ensure the restorations are comfortable and functional.`,
          },
        ],
      },

      {
        heading: "Are Veneers Right for You?",
        paragraphs: [
          `Veneers may be suitable for patients who:`,
        ],
        bullets: [
          "Have mild crookedness, rotation, or small gaps",
          "Want to improve the appearance of tooth shape or proportions",
          "Also want to address concerns about tooth colour or uneven edges",
          "Have healthy teeth and gums",
          "Are looking for a cosmetic approach to improving the appearance of their smile",
        ],
        afterBullets: [
          `Veneers are not the right solution for every type of misalignment. If the teeth require significant movement or there are underlying bite or oral health concerns, another treatment approach may be more appropriate.`,

          `A clinical examination is therefore essential before deciding whether veneers are suitable for your smile.`,
        ],
      },

      {
        heading: "Why Choose Blanc for Your Smile Transformation?",
        paragraphs: [
          `At Blanc, cosmetic dentistry is approached as a thoughtful design process rather than a one-size-fits-all procedure.`,

          `Our clinical and laboratory teams work closely throughout the treatment journey. From the initial assessment and smile planning to the fabrication and final placement of your veneers, each stage is carefully considered.`,

          `With our in-house dental laboratory and dedicated ceramist, we can maintain close collaboration between the clinical and laboratory sides of treatment. This allows the final veneers to be crafted with attention to individual details such as shape, colour, texture, translucency, and proportions.`,

          `If you're considering veneers for crooked teeth and want to understand whether they are right for you, schedule a personalised consultation with Blanc to explore your options.`,
        ],
      },

      {
        heading: "Final Thoughts",
        paragraphs: [
          `Veneers can be an effective cosmetic option for selected patients with mild alignment concerns, particularly when they also want to improve the shape, colour, or proportions of their teeth.`,

          `However, not every crooked smile can be treated with veneers. The most appropriate approach depends on the degree of misalignment, your bite, dental health, and the changes you want to achieve.`,

          `At Blanc, every case is assessed individually, with the aim of creating a smile that feels natural, refined, and personal to you.`,

          `If you're ready to explore your options, contact Blanc to begin your consultation.`,
        ],
      },
    ],

    faqs: [
      {
        question: "Can veneers fix crooked teeth?",
        answer:
          "Veneers can improve the appearance of mildly crooked teeth by changing their visible shape and contours. They do not physically move the teeth.",
      },
      {
        question: "Can I get veneers without braces?",
        answer:
          "Yes, in selected cases where the alignment concern is mild and veneers can achieve the desired result.",
      },
      {
        question: "Are veneers suitable for severely crooked teeth?",
        answer:
          "Generally, no. Braces or clear aligners may be more appropriate for significant misalignment.",
      },
      {
        question: "Are veneers better than braces for crooked teeth?",
        answer:
          "Both treatments serve different purposes. Veneers change the appearance of teeth, while braces and clear aligners reposition them. The right option depends on your dental condition and aesthetic goals.",
      },
      {
        question: "How long do veneers last?",
        answer:
          "With proper care and regular dental check-ups, veneers can last for many years. Their lifespan varies depending on the material, oral hygiene, bite, and individual habits.",
      },
      {
        question: "How many veneers are needed for a straighter-looking smile?",
        answer:
          "The number depends on your smile, the teeth being treated, and your aesthetic goals. This is determined during your personalised smile assessment.",
      },
      {
        question: "How do I know if veneers are right for my crooked teeth?",
        answer:
          "A personalised consultation can determine whether veneers are appropriate based on your alignment, bite, dental health, and aesthetic goals.",
      },
    ],
  },
};

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs[slug as keyof typeof blogs];

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Header />

      {/* ARTICLE HERO */}
      <section className="bg-[#f7f7f2] px-6 md:px-8 pt-10 md:pt-16">
        <div className="max-w-[1000px] mx-auto">

          <div className="max-w-[760px] mx-auto">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          <div className="text-center max-w-[760px] mx-auto pt-7 pb-8">
            <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-3">
              BLANC JOURNAL
            </p>

            <h1 className="font-playfair text-3xl md:text-5xl text-[#222] leading-tight">
              {blog.title}
            </h1>
          </div>

        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <main className="bg-[#f7f7f2] px-6 md:px-8 pb-20">
        <article className="max-w-[720px] mx-auto">

          {/* INTRO */}
          <div className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-12">
            <p>{blog.intro}</p>
          </div>

          {blog.content.map((section, index) => (
            <section key={index} className="mb-12">

              <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
                {section.heading}
              </h2>

              {section.paragraphs?.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="space-y-3 mb-6 pl-5">
                  {section.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444] list-disc"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {section.afterBullets?.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5"
                >
                  {paragraph}
                </p>
              ))}

              {section.steps && (
                <div className="space-y-8">
                  {section.steps.map((step, i) => (
                    <div key={i}>
                      <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                        {step.title}
                      </h3>

                      <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

            </section>
          ))}

          {/* FAQ */}
          <section className="pt-8 border-t border-black/10">
            <p className="font-manrope text-[11px] tracking-[0.2em] uppercase text-gray-500 mb-4">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="font-playfair text-3xl md:text-4xl text-[#222] mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {blog.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                    {index + 1}. {faq.question}
                  </h3>

                  <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                    {faq.answer}
                  </p>
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