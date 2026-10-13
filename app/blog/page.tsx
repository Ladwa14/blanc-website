
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const blogs = [
  {
    slug: "porcelain-veneers-guide",
    image: "/porcelain_veneers.webp",
    
    title: "EVERYTHING YOU SHOULD KNOW ABOUT PORCELAIN VENEERS",
    excerpt:
      "Learn how porcelain veneers work, what the procedure involves, and how to care for your veneers for long-lasting results.",
  },
  {
    slug: "smile-makeover-procedure-explained",
    image: "/smile_beauty.webp",
    
    title: "SMILE MAKEOVER PROCEDURES EXPLAINED",
    excerpt:
      "Explore the steps involved in a smile makeover, from consultation and digital smile design to treatment and final results.",
  },
  {
    slug: "how-do-veneers-for-gap-teeth-work",
    image: "/How_Do_Veneers_for_Gap_Teeth_Work.webp",
    
    title: "HOW DO VENEERS FOR GAP TEETH WORK?",
    excerpt:
      "Understand how veneers can close gaps between teeth, how tooth proportions are planned, and what to expect during treatment.",
  },
  {
    slug: "veneers-for-crooked-teeth",
    image:
      "/Veneers_for_Crooked_Teeth_Can_Veneers_Straighten_Your_Smile.webp",
   
    title: "VENEERS FOR CROOKED TEETH",
    excerpt:
      "Can veneers straighten your smile? Understand how veneers can improve the appearance of mild alignment concerns.",
  },
  {
    slug: "digital-smile-design-procedure",
    image: "/Everything_You_Should_Know_About_the_Digital_Smile_Design_Procedure.webp",
    
    title:
      "EVERYTHING YOU SHOULD KNOW ABOUT THE DIGITAL SMILE DESIGN PROCEDURE",
    excerpt:
      "A complete guide to digital smile design, treatment planning, and personalised smile makeovers.",
  },
];

export default function BlogPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

     
{/* BLOG HEADER */}
<section className="bg-[#d3d3d3] text-black h-[200px] flex flex-col items-center justify-center">
  <h1 className="font-manrope font-bold text-[18px] md:text-[20px] pt-4">
    BLOG
  </h1>

  <p className="font-playfair text-[15px] md:text-[16px] mt-2">
    The Blanc Edit
  </p>


{/* BREADCRUMBS */}
<nav
  aria-label="Breadcrumb"
  className="px-6 md:px-10 pt-6"
>
  <div className="max-w-[1020px] mx-auto">
    <ol className="flex flex-wrap items-center justify-center gap-2 font-manrope text-[11px] md:text-xs text-[#777]">
      <li>
        <Link
          href="/"
          className="hover:text-[#222] transition-colors duration-300"
        >
          Home
        </Link>
      </li>

      <li aria-hidden="true">&gt;</li>

      <li className="text-[#222]" aria-current="page">
        Blog
      </li>
    </ol>
  </div>
</nav>


</section>




      {/* BLOG GRID */}
      <section className="bg-[#ffffff] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[1020px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-14">
            {blogs.map((blog) => (
              <article key={blog.slug}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="group block"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden aspect-[4/5] bg-[#e9e9e4]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="pt-4">
                    {/* <p className="font-manrope font-bold text-[11px] tracking-[0.08em] text-[#111]">
                      {blog.category}
                    </p> */}

                    <h2 className="font-manrope text-[12px] md:text-[13px] tracking-[0.13em] text-[#222] uppercase mt-1 leading-[1.5]">
                      {blog.title}
                    </h2>

                    <p className="font-manrope text-[11px] tracking-[0.12em] text-[#555] mt-1 leading-[1.6] max-w-[500px]">
                      {blog.excerpt}
                    </p>

                    <div className="inline-block mt-5 pb-1 border-b border-black">
                      <span className="font-manrope text-[11px] tracking-[0.18em] text-[#111]">
                        READ MORE
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
