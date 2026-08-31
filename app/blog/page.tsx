import Link from "next/link";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const blogs = [
  {
    slug: "digital-smile-design-procedure",
    image: "/blog/digital-smile-design.webp",
    category: "DIGITAL SMILE DESIGN",
    title: "EVERYTHING YOU SHOULD KNOW ABOUT THE DIGITAL SMILE DESIGN PROCEDURE",
    excerpt: "A complete guide to digital smile design, treatment planning, and personalised smile makeovers.",
  },
  {
    slug: "veneers-for-crooked-teeth",
    image: "/blog/veneers-crooked-teeth.webp",
    category: "VENEERS",
    title: "VENEERS FOR CROOKED TEETH",
    excerpt: "Can veneers straighten your smile? Understanding how veneers can improve the appearance of mild alignment concerns.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* BLOG HEADER */}
      <section className="bg-[#171717] text-white h-[128px] flex flex-col items-center justify-center">
        <h1 className="font-manrope font-bold text-[18px] md:text-[20px]">
          BLOG
        </h1>

        <p className="font-playfair text-[15px] md:text-[16px] mt-2">
          Keep up with Blanc Esthetics
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="bg-[#f7f7f2] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-[1020px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-14">
            {blogs.map((blog) => (
              <article key={blog.slug}>
                <Link href={`/blog/${blog.slug}`} className="group block">

                  {/* IMAGE */}
                  <div className="relative overflow-hidden aspect-[4/5] bg-[#e9e9e4]">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="pt-4">
                    <p className="font-manrope font-bold text-[11px] tracking-[0.08em] text-[#111] uppercase">
                      {blog.category}
                    </p>

                    <h2 className="font-manrope text-[12px] md:text-[13px] tracking-[0.13em] text-[#222] uppercase mt-1 leading-[1.5]">
                      {blog.title}
                    </h2>

                    <p className="font-manrope text-[11px] tracking-[0.12em] text-[#555] uppercase mt-1 leading-[1.6] max-w-[500px]">
                      {blog.excerpt}
                    </p>

                    <div className="inline-block mt-5 pb-1 border-b border-black">
                      <span className="font-manrope text-[11px] tracking-[0.18em] text-[#111] uppercase">
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