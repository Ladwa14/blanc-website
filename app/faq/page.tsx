import type { Metadata } from "next";
import FaqClient from "./FaqClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FAQ | Blanc",
  description:
    "Frequently asked questions about veneers, smile design, cosmetic dentistry, consultations, and the Blanc process.",
  alternates: {
    canonical: "https://www.blancesthetics.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    // Paste all your FAQ questions here
     {
      "@type": "Question",
      "name": "What exactly is a veneer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A veneer is a thin shell—typically between 0.3mm and 0.7mm—bonded to the front surface of a tooth. Its purpose is to alter the tooth's appearance: its colour, shape, length, or surface texture. Done well, it is indistinguishable from the natural tooth structure it covers. The distinction from a crown is important. A crown encases the entire tooth. A veneer addresses only the visible facial surface. This means significantly less tooth reduction—and in many cases, none at all."
      }
    },
    {
      "@type": "Question",
      "name": "What materials does BLANC use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with two materials: lithium disilicate and feldspathic porcelain. The choice between them is made on clinical grounds, specific to each case. Lithium disilicate offers exceptional strength combined with excellent optical properties—high translucency, natural light behaviour, and surface texture that closely replicates enamel. Feldspathic porcelain is the more delicate of the two materials and produces the most lifelike aesthetic result available. We will recommend the material that best serves your case. Both are fabricated in our in-house laboratory."
      }
    },
    {
      "@type": "Question",
      "name": "Are veneers permanent? Can they be reversed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on the preparation type. No-prep veneers can, in principle, be removed, though the bonding process does alter the surface to some degree. Minimal-prep and conventional veneers involve a controlled reduction of enamel, which is irreversible. Where no-prep is clinically appropriate, we will always choose it. Veneers themselves are replaceable—typically after 10 to 15 years."
      }
    },
    {
      "@type": "Question",
      "name": "How long do veneers last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lithium disilicate veneers, placed correctly and maintained well, have a clinical lifespan of 10 to 20 years. Studies report survival rates above 90% at ten years. Grinding is the single greatest threat to veneer longevity. If you grind, a night guard is non-negotiable."
      }
    },
    {
      "@type": "Question",
      "name": "Will they look natural, or will people notice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cases we are most proud of are the ones nobody notices. An exceptional result doesn't announce itself—it simply looks like a remarkably good smile. The shade, translucency, surface texture, tooth form, and proportions must all be calibrated to the individual face. This is why we take facial measurements, discuss personality archetype, and spend the time we do in consultation."
      }
    },
    {
      "@type": "Question",
      "name": "What happens at the first consultation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The consultation at BLANC is a clinical and design conversation, not a sales meeting. We take full facial measurements, photographs, assess your dental and medical history, and discuss what you want to achieve. Where appropriate, we conduct a chairside composite mock-up. The consultation takes between 30 and 60 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "How many appointments will I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a standard veneer case, you will attend three to four appointments. Appointment 1: Consultation and mock-up. Appointment 2: Preparation and impressions. Appointment 3: Lab visit, trial, and fine-tuning. Appointment 4: Review."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the entire process take, from consultation to final result?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once preparation is complete, the veneers are fabricated in our in-house laboratory within 7 to 10 working days. Temporary veneers remain in place during this period. More complex cases may require a longer timeline."
      }
    },
    {
      "@type": "Question",
      "name": "What is the composite mock-up and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The mock-up is a chairside trial of the proposed smile design. Composite material is placed directly over your existing teeth without irreversible change. It gives you a three-dimensional preview before any commitment is made. It allows you to say yes—or not quite."
      }
    },
    {
      "@type": "Question",
      "name": "What happens between preparation and the final fit? Will I walk around with temporary veneers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Temporary veneers are placed the same day and worn during the fabrication period. They provide function and aesthetics while the final veneers are being created. Your feedback on the temporaries helps refine the final result."
      }
    },
    {
      "@type": "Question",
      "name": "Who makes the veneers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BLANC operates with an in-house laboratory. The esthetician and technician communicate directly. This creates a faster, tighter, and more precise process."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if I'm a candidate for veneers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Veneers are appropriate for most adults with healthy gum tissue and sufficient enamel structure. Good candidates include those with discoloration, gaps, minor crowding, worn enamel, asymmetry, or a desire for a refined smile. Active gum disease, decay, or severe misalignment may need treatment first."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need braces or aligners before getting veneers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. Mild crowding can often be addressed through veneer design. Significant misalignment is better treated orthodontically first."
      }
    },
    {
      "@type": "Question",
      "name": "I grind my teeth at night. Can I still get veneers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, with appropriate management. Bruxism is the most common cause of premature veneer failure. A custom night guard is mandatory. With proper protection, grinding patients can achieve excellent results."
      }
    },
    {
      "@type": "Question",
      "name": "Will veneers cause sensitivity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some sensitivity immediately after preparation is normal. This usually resolves once the veneers are bonded. Persistent sensitivity should be investigated."
      }
    },
    {
      "@type": "Question",
      "name": "My gums bleed when I brush. Is that a problem?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Bleeding is a sign of gingival inflammation and should be addressed before veneer placement. A professional cleaning and improved home care usually resolve the issue."
      }
    },
    {
      "@type": "Question",
      "name": "Should I whiten my teeth before getting veneers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If adjacent natural teeth will remain visible and you want them lighter, whiten your teeth before getting veneers. The standard sequence is whitening, waiting about two weeks for the shade to stabilize, and then selecting the veneer shade."
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose my shade? How white is too white?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can choose your preferred shade, and we'll advise if a requested shade may appear unnatural. A1 is the most commonly selected shade at BLANC because it offers a bright yet natural appearance. The ideal shade depends on your facial features, skin tone, and desired smile."
      }
    },
    {
      "@type": "Question",
      "name": "Can veneers close gaps and fix crowding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Veneers can close small gaps, including diastemas, and improve the appearance of mild crowding. Significant tooth rotations or severe crowding are usually better treated with orthodontics before veneers."
      }
    },
    {
      "@type": "Question",
      "name": "What if I don't like the result once the veneers are placed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The smile design process includes a mock-up and temporary veneers so you can preview and approve your new smile before the final veneers are bonded. If adjustments are needed, they are made before the final placement. If necessary, a veneer can be remade."
      }
    },
    {
      "@type": "Question",
      "name": "Will the shade of my veneers change over time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Porcelain veneers are highly resistant to stains from coffee, tea, wine, and tobacco. Over time, the bonding material at the edges may discolor slightly, which can usually be managed during routine dental maintenance."
      }
    },
    {
      "@type": "Question",
      "name": "How do I care for my veneers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Care for your veneers as you would your natural teeth. Use a soft-bristled toothbrush, avoid abrasive whitening toothpaste, brush gently along the gumline, and attend professional dental cleanings every six months."
      }
    },
    {
      "@type": "Question",
      "name": "Can veneers chip or break?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Although porcelain veneers are durable, they can chip or fracture if exposed to excessive force, such as biting hard foods, chewing ice, using teeth as tools, or untreated teeth grinding. Minor chips may be repairable, while larger fractures usually require replacement."
      }
    },
    {
      "@type": "Question",
      "name": "Are there foods I should avoid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For the first 48 hours after bonding, avoid hard, crunchy, and sticky foods. Afterward, you can enjoy most foods, but avoid biting directly into very hard foods with your front teeth and avoid chewing ice."
      }
    },
    {
      "@type": "Question",
      "name": "Do I still need to see a dentist regularly if I have veneers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Veneers cover only the front surface of the teeth and do not prevent tooth decay or gum disease. Regular dental check-ups and professional cleanings remain essential for maintaining your oral health and veneers."
      }
    },
    {
      "@type": "Question",
      "name": "Where is BLANC located and how do I book?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BLANC is located in Juhu, Mumbai. Consultations are available by appointment. You can book through our website, contact details, or Instagram, and we aim to respond to enquiries within one business day."
      }
    }
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <FaqClient />
    </>
  );
}