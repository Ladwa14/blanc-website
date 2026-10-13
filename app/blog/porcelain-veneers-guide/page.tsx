"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../sections/Header";
import Footer from "../../sections/Footer";

const faqs = [
  {
    question: "What are porcelain veneers made of?",
    answer:
      "They are thin shells made from dental ceramics, chosen for their ability to closely recreate the translucency and light-reflecting qualities of natural tooth enamel.",
  },
  {
    question: "How long do porcelain veneers last?",
    answer:
      "Porcelain veneers can last for many years with proper care and maintenance. Their longevity depends on factors such as oral hygiene, gum health, bite forces, teeth grinding and everyday habits.",
  },
  {
    question: "How many teeth need veneers for a smile makeover?",
    answer:
      "This depends on your individual smile and aesthetic goals. Some patients choose veneers for a few visible teeth, while others opt for a fuller set to create a more comprehensive smile transformation.",
  },
  {
    question: "Do porcelain veneers require special care?",
    answer:
      "Porcelain veneers are cared for much like natural teeth. Good daily oral hygiene and regular professional dental reviews help maintain the health of the veneers and the surrounding teeth and gums. Avoiding excessive force, such as biting hard objects, can also help protect them.",
  },
  {
    question: "How much do porcelain veneers cost?",
    answer:
      "The cost depends on factors such as the number of veneers required and the complexity of the case. A personalised treatment plan and quotation are provided after consultation.",
  },
  {
    question: "Can veneers fix crooked teeth?",
    answer:
      "Veneers can address minor misalignment or irregularities in tooth shape. More significant crowding or malalignment may require orthodontic treatment. A dental assessment helps determine the most appropriate approach.",
  },
];

const paragraphClass =
  "font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6";
const headingClass =
  "font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5";

export default function PorcelainVeneersGuidePage() {
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
          <div className="max-w-[760px] mx-auto">
            <img
              src="/porcelain_veneers.webp"
              alt="Porcelain Veneers"
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
        className="text-[#222] min-w-0"
        aria-current="page"
      >
         Everything You Should Know About Porcelain Veneers
      </li>
    </ol>
  </div>
</nav>   



          <div className="max-w-[760px] mx-auto text-center pt-7 pb-10">
            <h1 className="font-playfair text-3xl md:text-5xl text-[#222] leading-tight">
              Everything You Should Know About Porcelain Veneers
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-5 font-manrope text-[11px] md:text-xs text-gray-500">
              <a
                href="https://www.blancveneers.com/"
                className="hover:text-[#222] transition-colors duration-300 underline underline-offset-4"
              >
                Blanc Veneers
              </a>
              <span aria-hidden="true">•</span>
              <time dateTime="2026-10-12">October 12, 2026</time>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <main className="bg-[#ffffff] px-6 md:px-8 pb-20">
        <article className="max-w-[720px] mx-auto">
          <p className={paragraphClass}>
            A smile is rarely just about teeth. Proportion, symmetry and the way the teeth sit within the face all shape how it looks. Porcelain veneers are thin, custom-made shells bonded to the front surface of the teeth. They are widely used in cosmetic dentistry because porcelain can closely recreate the translucency and light-reflecting quality of natural enamel.
          </p>
          <p className={paragraphClass}>
            Whether you are considering veneers to refine a few teeth or as part of a wider smile makeover, it helps to understand how they work, what the process involves and what to expect over time. This guide covers each, drawing on our approach at Blanc in Juhu, Mumbai.
          </p>

          <section className="mb-12">
            <h2 className={headingClass}>What Are Porcelain Veneers?</h2>
            <p className={paragraphClass}>
              Porcelain veneers are thin ceramic shells, often around a millimetre or less in thickness, made to fit over the visible surface of a tooth. They can address discolouration, chips, gaps, minor misalignment and irregular tooth shape.
            </p>
            <p className={paragraphClass}>
              Unlike composite bonding, which is sculpted directly onto the tooth, porcelain veneers are designed and fabricated in a dental laboratory using digital scans of the teeth before being bonded to the tooth surface. This allows the shade, translucency and contour to be carefully developed before the veneers are bonded.
            </p>
          </section>

          <section className="mb-12">
            <h2 className={headingClass}>Why Porcelain Suits Cosmetic Work</h2>
            <p className={paragraphClass}>
              Small differences in tooth length, width, proportion and edge position can noticeably change how a smile looks within the face. Porcelain can be layered and shaded to reflect the variation found in natural enamel, from the more opaque base of a tooth to its translucent edge. This is why it is often chosen for smile makeovers where the aim is a believable result rather than a uniform one.
            </p>
            <p className={paragraphClass}>
              Veneers are not suitable for everyone. Factors such as gum health, existing decay, the amount of healthy enamel available and habits like grinding are assessed before treatment is recommended.
            </p>
          </section>

          <section className="mb-12">
            <h2 className={headingClass}>How the Porcelain Veneer Procedure Works</h2>
            <p className={paragraphClass}>
              Treatment typically follows seven stages, although the exact sequence and number of visits depend on the individual case.
            </p>
            <div className="space-y-9">
              <div>
                <h3 className="font-playfair text-xl md:text-2xl text-[#222] mb-3">Stage 1: Consultation and Smile Assessment</h3>
                <p className={paragraphClass}>
                  The process begins with a discussion of your goals and a clinical examination of your teeth and gums. Photographs, digital scans and sometimes video are used to assess facial proportions, smile line and tooth position.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl md:text-2xl text-[#222] mb-3">Stage 2: Planning and Design</h3>
                <p className={paragraphClass}>
                  Where appropriate, digital smile design tools can simulate a proposed outcome. This lets you visualise the direction of treatment and discuss preferences for tooth shape, length and proportion before any preparation begins.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl md:text-2xl text-[#222] mb-3">Stage 3: Tooth Preparation</h3>
                <p className={paragraphClass}>
                  Tooth preparation involves carefully reshaping the tooth surface to create the space required for the veneer, while preserving as much natural tooth structure as possible.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl md:text-2xl text-[#222] mb-3">Stage 4: Digital Scanning</h3>
                <p className={paragraphClass}>
                  Digital scans of the prepared teeth are taken and used by the laboratory to design and fabricate the veneers, along with detailed specifications for shade, shape and translucency.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl md:text-2xl text-[#222] mb-3">Stage 5: Temporary Veneers</h3>
                <p className={paragraphClass}>
                  While the final veneers are being made, temporary veneers may be fitted to protect the prepared teeth and give a preview of the intended shape.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl md:text-2xl text-[#222] mb-3">Stage 6: Trial Fitting and Refinement</h3>
                <p className={paragraphClass}>
                  Once ready, the veneers are trial-fitted to check fit, colour and overall appearance before final bonding. This is the stage to review and refine details where needed.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl md:text-2xl text-[#222] mb-3">Stage 7: Final Bonding</h3>
                <p className={paragraphClass}>
                  The veneers are bonded to the teeth with a specialised dental cement, adjusted for bite and comfort, and polished to a natural finish.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className={headingClass}>Caring for Your Porcelain Veneers</h2>
            <p className={paragraphClass}>
              Caring for veneers is, in most respects, the same as caring for your own teeth. Brushing gently twice a day helps maintain good oral hygiene and protect the margin where the veneer meets the natural tooth.
            </p>
            <p className={paragraphClass}>
              Professional cleaning and a dental check-up every six months allow the clinical team to clean around the veneers, monitor gum health, check your bite and assess the condition of the restorations. Porcelain resists staining well, but the surrounding natural teeth can still discolour, so regular professional cleaning also helps keep the smile looking even.
            </p>
            <p className={paragraphClass}>
              Biting into very hard foods, chewing ice or using your teeth to open packaging is best avoided, as sudden force can chip or dislodge a veneer. If you grind or clench your teeth, particularly at night, a custom nightguard is often recommended to protect both the veneers and the natural teeth beneath.
            </p>
          </section>

          <section className="mb-12">
            <h2 className={headingClass}>Porcelain Veneers and Longevity</h2>
            <p className={paragraphClass}>
              Porcelain veneers can last for many years with proper care and maintenance. Their longevity varies depending on factors such as oral hygiene, gum health, bite forces, teeth grinding and everyday habits such as chewing ice or hard objects.
            </p>
            <p className={paragraphClass}>
              Regular dental reviews help monitor the condition of the veneers and the health of the surrounding teeth and gums.
            </p>
          </section>

          <section className="mb-12">
            <h2 className={headingClass}>The Blanc Approach</h2>
            <p className={paragraphClass}>
              No two sets of veneers at Blanc are designed alike. Each case begins with a conversation about how you want to feel when you smile, what you would like to preserve and what you would like refined. Design is then guided by your facial proportions, lip dynamics and the way your face moves when you speak and laugh, rather than a standard template.
            </p>
            <p className={paragraphClass}>
              Shade selection is a clinical decision based on several factors: the colour and characteristics of the adjacent natural teeth, tooth translucency and value, your skin tone and lip colour, and how the smile looks under different lighting conditions. Digital planning and close collaboration with our ceramists help translate these decisions into the final veneers.
            </p>
            <p className={paragraphClass}>
              For patients across Mumbai considering porcelain veneers or a broader smile makeover, the goal is a result that looks proportionate and distinctly yours. Begin with a consultation to understand what is possible for your smile and whether veneers are the right approach for you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className={headingClass}>Final Thoughts</h2>
            <p className={paragraphClass}>
              Porcelain veneers can refine the shape, colour and proportions of a smile while preserving as much natural tooth structure as possible. They require thoughtful planning and ongoing care, and can last for many years with proper care and maintenance. The goal is a result that feels considered, balanced and individual to you.
            </p>
          </section>

          {/* FAQ SECTION */}
          <section className="mt-16 border-t border-[#e5e5e5] pt-10">
            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-7">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-[#e5e5e5]">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                    className="w-full flex items-center justify-between gap-5 text-left"
                  >
                    <span className="font-manrope text-sm md:text-base font-medium text-[#222] leading-relaxed">
                      {index + 1}. {faq.question}
                    </span>
                    <span className="font-manrope text-xl text-[#222] shrink-0" aria-hidden="true">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#555] pt-4 pr-5">
                      {faq.answer}
                    </p>
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
