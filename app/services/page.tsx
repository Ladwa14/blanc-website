
"use client";

import { useState } from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const faqs = [
  ["What are ceramic veneers?", "Ceramic veneers are thin, custom-made shells of dental ceramic bonded to the front of your teeth to improve their colour, shape, length and spacing. Quality ceramic reflects light like natural enamel, so a well-designed set looks like your own teeth, only more even and balanced."],
  ["Are ceramic veneers the same as porcelain veneers?", "In everyday use, yes. Porcelain is one type of dental ceramic, and the two names are used interchangeably. Different ceramics vary in strength and translucency, so at Blanc we choose the one that suits your bite, your shade goal and the teeth being treated."],
  ["Who is a good candidate for ceramic veneers?", "The best candidates have healthy gums and teeth and want to fix staining, chips, wear, small gaps or uneven shape. People with significant crowding, untreated gum disease or an unstable bite may need other treatment first. We tell you honestly at the consultation."],
  ["How are ceramic veneers different from composite veneers?", "Ceramic veneers are crafted by a ceramist and layered for depth, so they look more natural, resist stains better and last longer, often 10–15 years or more. Composite veneers are sculpted in resin, usually in one visit, but they stain more easily and typically need replacing sooner."],
  ["Will ceramic veneers look natural?", "Yes, when they are designed around your face. We match shade, translucency, shape and surface texture to your skin tone, lip line and smile, then refine the result during a trial smile. The goal is that people notice you look good, not that you have veneers."],
  ["Can I preview my new smile before treatment?", "Yes. We create a digital smile design, then a physical trial smile you wear in your own mouth. You can see it in the mirror, in photographs and in real conversation, and ask for changes before your final ceramics are made."],
  ["How many veneers will I need?", "It depends on how many teeth show when you smile and how much you want to change. Some people need two, others six, eight or ten for a consistent result. We plan the number around your smile line, not a fixed package."],
  ["Do ceramic veneers hurt?", "No. Treatment is done under local anaesthesia, so most people feel only pressure. Mild sensitivity for a few days afterwards is normal and settles quickly. We also give you temporary veneers so you are comfortable and confident between visits."],
  ["How long does the treatment take?", "Most patients complete treatment in two to three visits over a few weeks. This covers the consultation and design, tooth preparation, the trial smile and the final bonding. The timeline depends on how many veneers you need and how many refinements you want."],
  ["Do veneers damage or remove natural tooth?", "Most ceramic veneers need a thin layer of enamel removed so they sit flush and look natural. The amount is small and planned for each tooth. Some cases, such as minor gaps, can be done with very little preparation. We explain this fully before you decide."],
  ["Are ceramic veneers permanent?", "They are long-lasting but not permanent. Because the tooth surface is shaped, you will always need some form of protection for it, and veneers may need replacing after many years. With good care and regular reviews, many last 10–15 years or more."],
  ["How long do ceramic veneers last?", "With good care, ceramic veneers often last 10–15 years or more. Your results depend on your bite, habits such as grinding or nail-biting, your gum health and how regularly you attend check-ups. A night guard can add years if you clench."],
  ["Can ceramic veneers stain, chip or break?", "Ceramic is highly stain-resistant, so coffee, tea and red wine are far less of a worry than with resin. It can chip under heavy force, such as grinding or biting ice, which is why we check your bite and recommend a night guard when it is needed."],
  ["How do I look after my veneers?", "Care for them like natural teeth. Brush twice daily, clean between your teeth every day, attend regular cleanings and avoid biting hard objects. Wear a custom night guard if you grind. You can eat normally, though we advise against chewing ice or very hard foods."],
  ["Can I whiten my teeth before or after veneers?", "Whiten before. Ceramic does not change colour with whitening, so any whitening should be finished first, and we then match the veneers to your brightest natural shade. Whitening after veneers will not lighten the ceramic, only your remaining natural teeth."],
  ["Can old veneers or crowns be replaced?", "Yes. We regularly replace older restorations that look bulky, yellow or opaque, or that no longer suit your face. After checking the teeth underneath, we design new ceramics with a slimmer, more natural shape and finish."],
  ["How much do ceramic veneers cost in Mumbai?", "The cost depends on how many veneers you need, the ceramic used and the complexity of your case, so every plan is individual. After your consultation, you receive a clear, itemised quote with no surprises. We never quote from a photo, as an accurate figure needs a proper assessment."],
  ["What happens at the first consultation?", "Your first visit at our Mumbai studio is private and unhurried. We take photographs and scans, check your teeth and gums, discuss what you want to change and keep, and give you an honest view on whether ceramic veneers are right for you. There is no pressure to proceed on the day."],
  ["What does an in-house ceramic lab mean for my veneers?", "It means your veneers are made in our own studio, not sent to an outside lab. Your dentist and ceramist work side by side, so shade, shape and translucency can be checked and corrected within hours instead of days. This gives you tighter control, better colour matching and fewer remakes."],
  ["Why choose Blanc for ceramic veneers in Mumbai?", "We combine over two decades of smile design experience, an in-house ceramic lab with specialist aesthetic ceramists, and the finest ceramic materials from around the world. Controlling the whole process, from design to final bonding, is what allows us to deliver natural, detailed and consistent results."]
];

const concerns = [
  ["I", "Stubborn staining", "Cover deep discolouration that whitening cannot reach."],
  ["II", "Chips and worn edges", "Rebuild length and edge shape lost to wear, grinding or small breaks."],
  ["III", "Gaps and spacing", "Close small spaces for a smoother, more continuous smile line."],
  ["IV", "Uneven or small teeth", "Balance size, shape and proportion with the rest of your face."],
  ["V", "Ageing dental work", "Replace bulky, yellowing or opaque veneers and old fillings."]
];

const benefits = [
  {
    title: "Two decades of smile design",
    text: "We have designed smiles for patients for over 20 years, and we have kept the records. That library of cases, outcomes and long-term follow-ups gives our team a trained eye. We spot proportion, asymmetry and shade details that are easy to miss, and we apply that attention to every case."
  },
  {
    title: "An in-house ceramic lab",
    text: "We build your veneers in our own lab, under one roof, with ceramists who specialise in aesthetic work. Your dentist and ceramist adjust shade, shape and translucency together, often with you in the room. It is a rare setup, and it is why our results are so precise."
  },
  {
    title: "The best materials from around the world",
    text: "We choose the ceramic that suits each tooth, instead of whatever a lab supplies. We work with leading ceramic systems from around the world, picked for strength, translucency and how they handle light."
  },
  {
    title: "Designed on your face, previewed first",
    text: "Every plan starts with your facial proportions and your natural expressions. A digital design and a physical trial smile let you see and live with the result before your final veneers are made. We keep tooth preparation to the minimum your design needs."
  }
];

const stages = [
  {
    number: "01",
    title: "Consultation and smile design",
    text: "We listen first. You tell us what bothers you and what you love. We then take photos and scans, check your gum and bite health, and agree a design direction together."
  },
  {
    number: "02",
    title: "Gentle preparation",
    text: "With local anaesthesia, we lightly shape the teeth to make room for the ceramics. You leave the same day with temporary veneers so your smile is never left unfinished."
  },
  {
    number: "03",
    title: "Your trial smile",
    text: "Wear the proposed design in daily life. Show it to friends, take photographs, speak and eat. We fine-tune shape, length and shade until you are completely happy."
  },
  {
    number: "04",
    title: "Bonding and review",
    text: "Your finished ceramics are bonded, then checked for fit, bite and the way they catch light. A follow-up visit confirms everything feels comfortable and natural."
  }
];

const results = [
  ["CASE 01", "Worn edges", "Teeth shortened by years of grinding. 8 upper ceramic veneers restored length and a youthful smile line."],
  ["CASE 02", "Uneven colour", "Stained teeth and ageing fillings. 10 veneers with layered translucency created one even, natural shade."],
  ["CASE 03", "Small gaps", "Spacing and slight asymmetry. 6 minimal-preparation veneers closed the gaps and balanced the smile."]
];

const comparisons = [
  ["Made from", "Layered dental ceramic", "Tooth-coloured resin"],
  ["How it is made", "Crafted by a ceramist in our in-house lab, then bonded to the tooth", "Sculpted in resin directly on the tooth, then bonded in the same visit"],
  ["Finish", "Most natural depth and translucency", "Natural, with less depth"],
  ["Resists stains", "Excellent", "Moderate"],
  ["Typical lifespan", "Often 10–15+ years with care", "5–7 years"],
  ["Best when", "You want a lasting, full or partial smile redesign", "You want a lighter, lower-commitment change, or a repair to one or two teeth"]
];

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#f7f7f2] text-[#222] overflow-hidden font-manrope">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* HERO - NO IMAGE */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] bg-[#D8D8D4] flex items-end">
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 pt-40 text-[#222]">
          <p className="text-[10px] tracking-[0.3em] mb-7 uppercase text-[#555]">
            THE CRAFT · CERAMIC VENEERS
          </p>

          <h1 className="font-playfair text-6xl md:text-6xl lg:text-[110px] leading-[1.05]">
            Ceramic
            
            Veneers
          </h1>

          <div className="mt-10 flex flex-col md:flex-row justify-between md:items-end gap-8">
            <p className="max-w-md text-sm md:text-base leading-7 text-[#444]">
              Hand-finished ceramics, designed around your face — not a
              catalogue of shapes.
              <br />
              In Juhu, Mumbai.
            </p>

            <a
              href="#consultation"
              className="text-[10px] tracking-[0.25em] uppercase border-b border-[#222]/50 pb-3 w-fit hover:border-black transition-colors"
            >
              Book a consultation →
            </a>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="px-6 md:px-8 lg:px-20 py-4 md:py-6">
        <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-12 md:gap-24">
          <h2 className="font-playfair text-5xl md:text-6xl leading-tight">
            Not a new smile.
            <br />
            <i>Yours, refined.</i>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <p className="text-sm leading-8 text-[#444]">
              Ceramic veneers can change the colour, shape, length and
              symmetry of your front teeth in two to three visits. But
              the material is only half the story. What makes a result
              look natural is the design behind it.
            </p>

            <p className="text-sm leading-8 text-[#444]">
              At our Mumbai studio, that design begins with your face,
              not a template. We study how you smile, speak and laugh,
              preview the result before anything is made, and have a
              ceramist finish every veneer by hand.
            </p>
          </div>
        </div>
      </section>

      {/* RESTORATION */}
      <section className="bg-[#f5f5f5] px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-12">
        <div className="max-w-[1500px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] mb-7 uppercase">
            THE RESTORATION
          </p>

          <div className="max-w-4xl">
            <h2 className="font-playfair text-5xl md:text-6xl leading-tight mb-8">
              Ceramic veneers,
           
              explained.
            </h2>

            <p className="text-sm leading-8 text-[#444] mb-6 max-w-3xl">
              Ceramic veneers are wafer-thin, custom-made shells that
              bond to the front of your teeth. They are used to change
              colour, shape, length and spacing in one coordinated
              treatment, and they are often called porcelain veneers.
            </p>

            <p className="text-sm leading-8 text-[#444] max-w-3xl">
              What separates good ceramic from ordinary white is how
              it handles light. Quality ceramic lets light pass into
              the tooth and bounce back the way enamel does, which
              gives depth and a soft, living finish instead of a flat,
              opaque look.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-t border-black/15 pt-10 mt-16">
            {[
              ["0.3–0.7 mm", "THICKNESS"],
              ["2–3", "VISITS"],
              ["Local", "ANAESTHESIA"],
              ["10–15+ years", "LIFESPAN"]
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-playfair text-3xl md:text-4xl">{value}</p>
                <p className="text-[9px] tracking-[0.2em] mt-3 text-[#555]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs leading-7 text-[#555] mt-10 max-w-3xl">
            Most cases need light shaping of the tooth surface. We
            keep this to the minimum your design allows, and explain
            it clearly before you decide anything.
          </p>
        </div>
      </section>

      {/* WHO VENEERS ARE FOR */}
      <section className="px-6 md:px-12 lg:px-20 py-8 md:py-10 lg:py-5">
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-28">
          <div>
            <h2 className="font-playfair text-5xl md:text-6xl leading-tight">
              Is this
             
              right for you?
            </h2>

            <p className="text-sm leading-8 text-[#555] mt-8 max-w-sm">
              Veneers are not always the first step. If crowding or a
              bite problem is the real cause, we will say so and suggest
              aligners or other care first.
            </p>
          </div>

          <div>
            {concerns.map(([number, title, text]) => (
              <div
                key={number}
                className="grid grid-cols-[35px_1fr] md:grid-cols-[55px_0.8fr_1.2fr] gap-4 md:gap-8 py-7 border-b border-black/10"
              >
                <span className="text-xs text-[#555]">{number}</span>

                <h3 className="font-playfair text-xl md:text-2xl">
                  {title}
                </h3>

                <p className="text-xs md:text-sm leading-7 text-[#555] col-start-2 md:col-start-auto">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BLANC */}
      <section className="bg-[#f5f5f5] px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-12">
        <div className="max-w-[1500px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] mb-7 uppercase">
            WHY BLANC
          </p>

          <h2 className="font-playfair text-5xl md:text-6xl leading-tight mb-12">
            Experience you can trust.
            <br />
            <i>Craft you can see.</i>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {benefits.map((item, index) => (
              <article
                key={item.title}
                className="border-t border-black/20 pt-7"
              >
                <p className="text-[9px] tracking-[0.2em] text-[#555] mb-6">
                  0{index + 1} / BLANC APPROACH
                </p>

                <h3 className="font-playfair text-2xl leading-snug mb-5">
                  {item.title}
                </h3>

                <p className="text-xs leading-7 text-[#444]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-12 lg:px-20 py-8 md:py-10 lg:py-5">
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-28">
          <div>
            <p className="text-[10px] tracking-[0.3em] mb-7 uppercase">
              THE PROCESS
            </p>

            <h2 className="font-playfair text-5xl md:text-6xl leading-tight">
              Your journey,
              <br />
              step by step.
            </h2>

            <p className="text-sm leading-8 text-[#555] mt-8 max-w-sm">
              Most patients finish in two to three visits over a few
              weeks. Your exact timeline depends on the number of
              veneers and the refinements you want.
            </p>

            <div className="border-t border-black/15 mt-12 pt-8">
              <p className="font-playfair text-3xl md:text-4xl leading-snug">
                A considered process.
                <br />
                A smile designed around you.
              </p>
            </div>
          </div>

          <div>
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="border-t border-black/10 py-10 md:py-14"
              >
                <p className="text-[10px] tracking-[0.2em] text-[#555] mb-5">
                  STAGE {stage.number}
                </p>

                <h3 className="font-playfair text-3xl md:text-4xl mb-5">
                  {stage.title}
                </h3>

                <p className="text-sm leading-8 text-[#444] max-w-xl">
                  {stage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS - CONTENT ONLY */}
      <section className="bg-[#f5f5f5] px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-12">
        <div className="max-w-[1500px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] mb-7 uppercase">
            THE RESULTS
          </p>

          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-12">
            <h2 className="font-playfair text-5xl md:text-6xl">
              Real smiles.
              <br />
              Real balance.
            </h2>

            <p className="text-sm leading-7 text-[#555] max-w-xs">
              Subtle, face-led changes that look like you, never like
              a &quot;veneer look&quot;.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {results.map(([number, title, text]) => (
              <article
                key={number}
                className="border-t border-black/15 pt-7"
              >
                <p className="text-[9px] tracking-[0.2em] text-[#555] mb-6">
                  {number}
                </p>

                <h3 className="font-playfair text-3xl mb-5">
                  {title}
                </h3>

                <p className="text-sm leading-8 text-[#444]">
                  {text}
                </p>
              </article>
            ))}
          </div>

          <p className="text-[10px] text-[#555] mt-12 text-center">
            Individual results may vary.
          </p>
        </div>
      </section>

      {/* ARTISANS - CONTENT ONLY */}
      <section className="px-6 md:px-12 lg:px-20 py-8 md:py-10 lg:py-5">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] mb-7 uppercase">
            THE ARTISANS
          </p>

          <h2 className="font-playfair text-5xl md:text-6xl leading-tight mb-10 max-w-4xl">
            Meet the team behind your smile.
          </h2>

          <p className="text-sm leading-8 text-[#444] max-w-3xl mb-12">
            Two specialists work as one: a cosmetic dentist with two
            decades of smile design experience, and a master ceramist
            who builds each veneer in our own in-house lab. Because
            they collaborate on the same case, every adjustment is
            made quickly and exactly, with no details lost between
            clinic and lab. It is a rare way to work, and you can see
            it in the finish.
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 border-t border-black/15 pt-10">
            <div>
              <h3 className="font-playfair text-3xl md:text-4xl mb-5">
                Unhurried. Private. Personal.
              </h3>

              <p className="text-sm leading-8 text-[#444]">
                You will see the same team from first consultation to
                final bonding, with proper time to ask questions and
                make decisions. Our Mumbai studio feels closer to a
                calm atelier than a busy clinic: soft light, quiet
                rooms and no waiting-room rush.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-3xl md:text-4xl mb-5">
                Dentist and ceramist, working together.
              </h3>

              <p className="text-sm leading-8 text-[#444]">
                By bringing clinical expertise and ceramic artistry
                together, we can refine every detail of your veneers.
                From shade and translucency to shape and proportion,
                each decision contributes to a balanced, natural result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-[#f5f5f5] px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
        <div className="max-w-[1500px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] mb-7 uppercase">
            THE RIGHT RESTORATION
          </p>

          <h2 className="font-playfair text-5xl md:text-6xl mb-14">
            Ceramic veneers vs. composite veneers.
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="border-b border-black/20">
                  <th className="py-6 pr-5 text-xs font-normal text-[#555]"></th>
                  <th className="py-6 px-5 font-playfair text-2xl">
                    Ceramic veneers
                  </th>
                  <th className="py-6 px-5 font-playfair text-2xl">
                    Composite veneers
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisons.map(([label, ceramic, composite]) => (
                  <tr
                    key={label}
                    className="border-b border-black/10 align-top"
                  >
                    <td className="py-6 pr-5 text-xs text-[#555]">
                      {label}
                    </td>
                    <td className="py-6 px-5 text-xs leading-7">
                      {ceramic}
                    </td>
                    <td className="py-6 px-5 text-xs leading-7 text-[#555]">
                      {composite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[10px] text-[#555] mt-8">
            These are general ranges. Your own plan depends on your bite,
            habits and oral health.
          </p>
        </div>
      </section>

      {/* AFTERCARE */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-12">
        <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <h2 className="font-playfair text-5xl md:text-6xl">
            Caring for
            <br />
            your veneers.
          </h2>

          <p className="text-sm leading-8 text-[#444]">
            Veneers need the same care as natural teeth, plus a few
            smart habits. Brush twice a day, clean between your teeth
            daily, and keep up your professional cleanings. Avoid
            biting ice, pens or hard foods with your front teeth, and
            ask us for a custom night guard if you clench or grind.
            Ceramic resists stains well, but the gum line still needs
            attention, so regular check-ups are part of every Blanc plan.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f5] px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.3em] mb-7 uppercase">
              COMMON QUESTIONS
            </p>

            <h2 className="font-playfair text-5xl md:text-6xl">
              Your questions,
            
              answered.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="border-t border-black/15 py-6">
                <button
                  type="button"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  aria-expanded={activeFaq === index}
                  className="w-full flex items-start justify-between gap-5 text-left"
                >
                  <span className="font-playfair text-lg md:text-xl">
                    {question}
                  </span>

                  <span className="text-xl shrink-0">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    activeFaq === index
                      ? "grid-rows-[1fr] opacity-100 mt-5"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs leading-7 text-[#555]">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section
        id="consultation"
        className="bg-[#222222] text-white px-6 md:px-12 lg:px-20 py-8 md:py-10 lg:py-20"
      >
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/50 mb-8">
              BEGIN WITH A CONVERSATION
            </p>

            <h2 className="font-playfair text-4xl md:text-6xl leading-tight">
              Begin with
              <br />
              a conversation.
            </h2>

            <p className="text-sm leading-8 text-white/65 mt-8 max-w-md">
              A private consultation at our Juhu studio is the first
              step: an unhurried look at your smile, your goals and
              what is possible.
            </p>
          </div>

          <div className="border-t border-white/20">
            <a
              href="tel:+919619666607"
              className="flex justify-between items-center py-8 border-b border-white/20 text-xs tracking-[0.2em] uppercase hover:text-white/60 transition-colors"
            >
              +91 96196 66607 <span>↗</span>
            </a>

            <a
              href="mailto:info@blancesthetics.com"
              className="flex justify-between items-center py-8 border-b border-white/20 text-xs tracking-[0.2em] uppercase hover:text-white/60 transition-colors"
            >
              info@blancesthetics.com <span>↗</span>
            </a>

            <p className="text-[10px] leading-6 text-white/45 mt-8">
              All treatments are personalised. Individual results may vary.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
