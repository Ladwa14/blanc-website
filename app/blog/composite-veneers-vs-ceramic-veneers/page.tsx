
"use client";

import { useState } from "react";
import Link from "next/link";

import Header from "../../sections/Header";
import Footer from "../../sections/Footer";

export default function CompositeCeramicVeneersPage() {
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

      <section
        className="bg-[#ffffff] px-6 md:px-8"
        style={{ paddingTop: "80px" }}
      >
        <div className="max-w-[1000px] mx-auto">

          {/* BLOG IMAGE */}

          <div className="max-w-[760px] mx-auto">
            <img
              src="/composite-veneers-vs-ceramic-veneers.webp"
              alt="Composite Veneers vs Ceramic Veneers"
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
                  Composite Veneers vs Ceramic Veneers:
                  Understanding the Difference
                </li>

              </ol>
            </div>
          </nav>

          {/* TITLE */}

          <div className="max-w-[760px] mx-auto text-center pt-7 pb-10">

            <h1 className="font-playfair text-3xl md:text-5xl text-[#222] leading-tight">
              Composite Veneers vs Ceramic Veneers:
              Understanding the Difference
            </h1>

            {/* AUTHOR */}

            <div className="flex items-center justify-center gap-3 mt-5 font-manrope text-[11px] md:text-xs text-gray-500">

              <a
                href="https://blancveneers.com/"
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

      <main className="bg-[#ffffff] px-6 md:px-8 pb-20">

        <article className="max-w-[720px] mx-auto">

          {/* INTRODUCTION */}

          <section className="mb-12">

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
              A refined smile is a matter of proportion, light and restraint.
              It is rarely about whiter teeth alone, and the material chosen
              for your veneers shapes how the smile looks today, how it feels
              in daily life, and how gracefully it ages.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
              Composite and ceramic are the two materials most often
              considered. Composite is a resin sculpted directly onto the
              tooth by the dentist. Ceramic is a restoration crafted
              individually in a laboratory and then bonded in place.
              This guide explains how composite veneers vs ceramic veneers
              differ in aesthetics, durability, treatment process,
              maintenance and longevity, so that your consultation begins
              with clarity.
            </p>

          </section>

          {/* TWO DISTINCT APPROACHES */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Two Distinct Approaches to Veneer Design
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              <strong>Composite veneers:</strong> are built from
              tooth-coloured resin, applied in fine layers directly on
              the tooth and sculpted, shaped and polished by the dentist
              during the appointment. It suits refined, targeted changes:
              softening a chip, closing a small gap, balancing an uneven
              edge or improving the proportions of a single tooth or a
              few teeth.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              <strong>Ceramic veneers:</strong> are thin, custom-made
              shells of dental ceramic, designed from a digital plan and
              handcrafted outside the mouth by a laboratory technician.
              They are tried in, assessed and then bonded to the front
              surface of the teeth, usually after a conservative
              preparation of the enamel. This pathway offers the
              greatest control over shape, length, proportion and colour,
              which makes it the natural choice for a comprehensive
              transformation across a full smile.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              In short, the composite is shaped by hand on the tooth.
              Ceramic is designed in advance and crafted to measure.
            </p>

          </section>

          {/* COMPARISON TABLE */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-6">
              The Differences at a Glance
            </h2>

            <div className="overflow-x-auto w-full">

              <table className="w-full min-w-[600px] border-collapse font-manrope text-[12px] md:text-[13px]">

                <thead>
                  <tr className="bg-[#222] text-white">
                    <th className="text-left p-4 font-semibold w-[25%]">
                      Comparison
                    </th>
                    <th className="text-left p-4 font-semibold">
                      Composite
                    </th>
                    <th className="text-left p-4 font-semibold">
                      Ceramic
                    </th>
                  </tr>
                </thead>

                <tbody className="text-[#444]">

                  {[
                    [
                      "Material",
                      "Tooth-coloured resin, layered and sculpted directly on the tooth",
                      "Dental ceramic, individually fabricated in a laboratory",
                    ],
                    [
                      "Aesthetics",
                      "Attractive, well suited to subtle refinements; limited depth of translucency",
                      "Lifelike translucency and light reflection; the highest level of control over shape and colour",
                    ],
                    [
                      "Surface and staining",
                      "Can gradually dull or pick up stain; periodic polishing restores its finish",
                      "Glazed, highly stain-resistant surface that holds its lustre",
                    ],
                    [
                      "Durability",
                      "Resilient, but more prone to wear, chipping and surface change",
                      "Strong and wear-resistant when well designed and cared for",
                    ],
                    [
                      "Longevity",
                      "Commonly a couple of years before refinishing, repair or replacement",
                      "Often a decade or more with good care",
                    ],
                    [
                      "Treatment process",
                      "Direct, chairside; often completed in one or two visits",
                      "Planned, designed and laboratory-crafted; several stages",
                    ],
                    [
                      "Tooth preparation",
                      "Varies according to the case",
                      "Conservative enamel preparation, generally irreversible",
                    ],
                    [
                      "Maintenance",
                      "Regular polishing; easier to repair directly",
                      "Routine hygiene and reviews; repairs may involve remaking the veneer",
                    ],
                    [
                      "Best suited to",
                      "Targeted minor changes on a few teeth",
                      "Comprehensive, highly customised smile transformation",
                    ],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-black/10"
                    >
                      <td className="p-4 align-top font-bold text-[#222]">
                        {row[0]}
                      </td>
                      <td className="p-4 align-top leading-[1.8]">
                        {row[1]}
                      </td>
                      <td className="p-4 align-top leading-[1.8]">
                        {row[2]}
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </section>

          {/* NATURAL APPEARANCE */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Which Looks More Natural?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              A natural smile is not the whitest one. It is the one in
              which light behaves as it does on healthy enamel, and in
              which every tooth has the right shape, texture and place.
              Five qualities decide this, and the two materials handle
              each differently.
            </p>

            <div className="space-y-6">

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  1. Translucency
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Natural enamel is not opaque. It is slightly
                  translucent, particularly towards the biting edge,
                  where it allows light to pass through and reveals a
                  soft gradient beneath. Ceramic can be layered and
                  fired to recreate this depth, from the warmer,
                  denser tone near the gum to the delicate, almost
                  glass-like edge. Composite can be layered in a
                  similar way, but its resin structure offers a
                  narrower range of translucency, which is why it is
                  most convincing for smaller, localised changes.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  2. Light Reflection
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  The way a tooth reflects light determines whether
                  it looks alive or flat. Ceramic reflects and scatters
                  light in a way that closely resembles natural enamel,
                  so the smile retains its brightness and dimension
                  under changing light. Composite can be polished to
                  a fine lustre, though its surface tends to lose some
                  of that sheen over time and benefits from periodic
                  refinishing.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  3. Surface Texture
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Real teeth carry subtle horizontal ridges, growth
                  lines and micro-texture that give them character.
                  Without these, even a perfectly shaded veneer can
                  appear artificial. In ceramic, this surface anatomy
                  is built into each restoration and finished with a
                  glaze, so the texture is stable and long lasting.
                  In composite, the dentist sculpts it by hand, which
                  can be beautifully executed but may soften with wear.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  4. Tooth Morphology
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Shape, length, width, edge profile and the way a
                  tooth curves towards the gum all affect how a smile
                  reads. Central incisors, laterals and canines are
                  meant to differ from one another, and uniform,
                  over-symmetrical teeth are what make dentistry look
                  obvious. Ceramic allows each tooth to be designed
                  and refined individually before the final restoration
                  is made. Composite allows careful reshaping in the
                  chair, with a practical limit on how extensively
                  the overall form can be changed.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  5. Custom Fabrication
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Ceramic veneers are designed on the basis of
                  photographs, digital scans and the smile design,
                  then crafted tooth by tooth by a laboratory
                  technician who can adjust the shade, translucency,
                  colour gradation and texture of each one. This level
                  of control is difficult to match with any directly
                  applied material, and it is what allows a full-smile
                  transformation to look entirely natural.
                </p>
              </div>

            </div>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-6">
              Both materials can deliver beautiful results in skilled
              hands. Composite excels at subtle, conservative refinement.
              Ceramic offers the greater depth, stability and precision
              needed when the goal is a fully customised smile.
            </p>

          </section>

          {/* DURABILITY */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Durability and Longevity
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              The two materials age in different ways.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Ceramic is a dense, glazed material with a naturally
              smooth surface that resists staining and holds its
              lustre for many years. Once bonded to the tooth, it
              forms a strong, stable restoration that withstands
              daily function well. With good care, ceramic veneers
              often last a decade or more.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Composite is a resin, and resin is more porous and
              softer than ceramic. Over time its surface can lose
              polish, pick up discoloration from coffee, tea or red
              wine, and show small chips or wear at the edges. It
              rarely fails suddenly. It changes gradually over a
              couple of years, and it is usually possible to refresh,
              polish or repair it depending on the loss of polish.
              Composite veneers commonly last 2–3 years before they
              need significant refinishing or replacement.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              Longevity for either material also depends on bite
              forces, grinding or clenching habits, diet, oral
              hygiene and the quality of the original design and
              bonding. These ranges are general guidance, and your
              dentist can give a more precise expectation after
              assessing your teeth and bite.
            </p>

          </section>

          {/* TREATMENT PROCESS */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              The Treatment Process
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-7">
              The journey differs considerably between the two,
              and so does the time involved.
            </p>

            {/* COMPOSITE */}

            <div className="mb-8">

              <h3 className="font-manrope font-bold text-[14px] md:text-[15px] text-[#222] mb-4">
                Composite Veneers: A Direct, Chairside Approach
              </h3>

              <ol className="space-y-3 pl-5 mb-5">
                {[
                  "Consultation and assessment of the teeth, gums and bite",
                  "Shade selection and agreement on the intended changes",
                  "Minimal preparation of the surface, where required",
                  "Layering and sculpting of the resin directly on each tooth",
                  "Final contouring and polishing",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="list-decimal font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444] pl-1"
                  >
                    {item}
                  </li>
                ))}
              </ol>

              <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                Because the work is completed in the mouth, treatment
                can often be finished in one or two visits, depending
                on the number of teeth.
              </p>

            </div>

            {/* CERAMIC */}

            <div>

              <h3 className="font-manrope font-bold text-[14px] md:text-[15px] text-[#222] mb-4">
                Ceramic Veneers: A Planned, Laboratory-Crafted Approach
              </h3>

              <ol className="space-y-3 pl-5 mb-5">
                {[
                  "Consultation, photographs and detailed smile analysis",
                  "Digital scans and smile design",
                  "A preview of the proposed design, where appropriate",
                  "Conservative preparation of the teeth, with temporary veneers if required",
                  "Laboratory fabrication of each veneer",
                  "Try-in and fine adjustments to shape and shade",
                  "Final bonding and bite refinement",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="list-decimal font-manrope text-[13px] md:text-[14px] leading-[1.8] text-[#444] pl-1"
                  >
                    {item}
                  </li>
                ))}
              </ol>

              <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                Ceramic treatment takes longer, as it involves
                clinical and laboratory stages that must work in
                step. That planning is what allows the finished
                smile to be so precise.
              </p>

            </div>

          </section>

          {/* MAINTENANCE */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Maintenance and Care
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Neither material is maintenance-free, but what each
              asks of you is different.
            </p>

            <div className="space-y-5">

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Composite
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Expect periodic polishing to keep the surface
                  bright, and take more care with staining foods
                  and drinks. Chips and small areas of wear can
                  usually be repaired directly, often without
                  replacing the entire veneer.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Ceramic
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Its glazed surface needs little more than excellent
                  daily hygiene and regular reviews. If a veneer is
                  damaged, repair is more involved and may mean
                  remaking the restoration.
                </p>
              </div>

            </div>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-5">
              For both, daily brushing and flossing, routine dental
              examinations and professional cleaning protect the
              teeth and gums beneath the veneers. If you grind or
              clench your teeth, a custom night guard is strongly
              advised. Habits such as nail biting, chewing ice or
              pens, or opening packaging with the teeth place
              unnecessary stress on cosmetic work and are best
              avoided.
            </p>

          </section>

          {/* BLANC APPROACH */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              The Blanc Approach to Veneer Design
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-6">
              At Blanc, a veneer is never simply a material placed
              over a tooth. It is one element of a carefully composed
              smile, designed to belong to the person wearing it.
              Our approach brings together clinical precision, two
              decades of experience and an artist's eye, and it
              follows the same principles whether the chosen material
              is composite or ceramic.
            </p>

            <div className="space-y-6">

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Smile Design Begins with the Face
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Before we consider the teeth, we study the face:
                  its proportions, the line of the lips, the position
                  of the midline, and how the smile moves in speech
                  and expression. A smile that is harmonious with
                  these features looks effortless, and one that
                  ignores them rarely does.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Digital Planning Gives the Design Its Direction
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Photographs, digital scans and detailed smile
                  analysis allow us to map the proposed changes
                  before treatment begins. This gives you the
                  opportunity to see and discuss the intended
                  direction, and it gives our team a precise
                  blueprint to follow.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Tooth Morphology Is Considered Tooth by Tooth
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  We look closely at the length, width, edge
                  profile and contour of each tooth, and at how
                  neighbouring teeth relate to one another.
                  Subtle variation and natural proportion are
                  preserved deliberately, because they are what
                  keep a smile from looking uniform.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Shade and Translucency Are Chosen with Restraint
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  The aim is a colour that suits your complexion,
                  your eyes and the natural character of your
                  remaining teeth, with a depth and gradation
                  that reads as enamel rather than as a single
                  flat tone.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Surface Texture Brings the Smile to Life
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Fine surface anatomy and a considered finish
                  control how each tooth catches the light, and
                  are a large part of why well-made veneers go
                  unnoticed.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Laboratory Craftsmanship Completes the Work
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Blanc has its own in-house ceramic laboratory
                  and aesthetic ceramists, which is rare to find.
                  Because the dentist and the ceramist work side
                  by side, the intended shape, shade, translucency
                  and texture are communicated directly throughout
                  fabrication, and the result is refined together
                  at try-in. For composite work, the same
                  discipline is applied by hand at the chair.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  Two Decades of Experience Gives Us a Trained Eye
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Our team has designed smiles for patients across
                  two decades, and that body of patient data and
                  case experience has built a trained set of eyes
                  that notice what others overlook. Every case,
                  whether a single tooth or a full smile, receives
                  the same attention to detail.
                </p>
              </div>

              <div>
                <h3 className="font-manrope font-bold text-[13px] md:text-[14px] text-[#222] mb-2">
                  The Finest Materials from Across the World
                </h3>

                <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
                  Because the entire process happens under one
                  roof, we have control over every step, which
                  lets us choose and work with the best materials
                  available worldwide rather than settling for
                  what is convenient. That control is what allows
                  the quality of the final result to be consistent
                  from case to case.
                </p>
              </div>

            </div>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mt-6">
              The objective is never to create the same smile for
              every patient. It is to create one that feels
              proportionate, refined and unmistakably yours.
            </p>

          </section>

          {/* WHICH MATERIAL IS RIGHT */}

          <section className="mb-12">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Which Veneer Material Is Right for You?
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Composite and ceramic veneers offer different
              approaches to refining a smile. Composite allows
              direct, conservative changes with the flexibility
              of chairside repair and maintenance. Ceramic offers
              greater stability of surface finish and extensive
              control over translucency, texture, shape and shade
              through individual fabrication.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              The right choice depends on your existing teeth,
              bite, aesthetic goals and long-term expectations.
              A clinical assessment helps determine which
              approach is appropriate and what preparation,
              maintenance and future treatment may involve.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              At Blanc, veneer treatment begins with understanding
              your smile, not selecting a material. Through
              considered smile design, digital planning, an
              in-house ceramic laboratory and two decades of
              experience, we work towards a result that feels
              proportionate, natural and distinctly yours.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              If you are considering veneers, a consultation
              at Blanc is the first step towards understanding
              your options.
            </p>

          </section>

          {/* FINAL THOUGHTS */}

          <section className="mb-14">

            <h2 className="font-playfair text-2xl md:text-3xl text-[#222] leading-tight mb-5">
              Final Thoughts
            </h2>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444] mb-5">
              Composite offers a direct way to refine selected
              teeth, completed at the chair and requiring
              periodic maintenance. Ceramic offers depth,
              stability and the precision of individually
              crafted restorations, and is the more considered
              choice for a comprehensive transformation.
              The right material is the one that serves your
              teeth, your face and the result you hope to see.
            </p>

            <p className="font-manrope text-[13px] md:text-[14px] leading-[1.9] text-[#444]">
              If you are considering veneers, a consultation
              at Blanc is the place to begin. We will assess
              your teeth, gums and bite, listen to what you
              want your smile to express, and guide you towards
              the approach that will achieve it with elegance
              and longevity, backed by our in-house ceramists
              and the best materials from around the world.
            </p>

          </section>

        </article>

      </main>

      <Footer />
    </>
  );
}
