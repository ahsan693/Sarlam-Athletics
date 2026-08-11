"use client";

// privatelabel.tsx
import { useState } from "react";
// Import the Header correctly from the home.tsx file
import { Header } from "../home/home";

const includedItems = [
  "Product development and manufacturing consultation",
  "Custom material sourcing and testing",
  "Logo branding and private label customization",
  "Prototype sampling and approval process",
  "Bulk manufacturing with quality control inspections",
  "Custom packaging and labeling",
  "Export documentation and worldwide shipping support",
];

const industries = [
  "Sports Brands",
  "Gyms & Fitness Chains",
  "Martial Arts Academies",
  "Retailers",
  "eCommerce Brands",
  "Wholesale Distributors",
];

const testimonials = [
  {
    quote:
      "Sarlam helped us launch our private label boxing equipment range on schedule. The product quality was consistent, communication was excellent, and the manufacturing process was transparent from sampling through delivery.",
    name: "Linnéa Moberg",
    role: "CEO, IronHand Gym",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote:
      "Unlike many manufacturers, Sarlam worked closely with our team to refine materials, branding, and packaging before production. The finished products matched our specifications exactly.",
    name: "Erik Sandell",
    role: "Co-founder, Waypoint Athletics",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
];

export default function PrivateLabel() {
  return (
    <div className="min-h-screen bg-white text-[#0D0D0D] font-sans">
      {/* ─── HEADER ─── */}
      <Header />

     {/* ─── HERO SECTION ─── */}
<section className="relative h-[495px] bg-[#0D0D0D] text-white overflow-hidden">
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1544717684-1243da23b545?auto=format&fit=crop&q=80&w=2000"
    alt="Boxing training ring"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Dark gradient — strongest on the left/bottom where the copy sits */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

  <div className="relative z-20 max-w-[1440px] mx-auto px-5 md:px-8 py-16 md:py-24 h-full flex flex-col justify-center">
    <div>
      <h1 className="text-[32px] md:text-[47px] leading-[1.15] font-bold tracking-tight max-w-2xl">
        Private Label Manufacturing
      </h1>

      {/* Subtitle - mobile only */}
      <p className="md:hidden text-[15px] text-white/70 mt-4 leading-relaxed max-w-sm">
        Sarlam Athletics delivers high-end custom manufacturing for premium combat sports brands worldwide.
      </p>
    </div>

    {/* Meta Info */}
    <div className="mt-8 md:mt-16 flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
      <div className="space-y-1">
        <p className="text-[12px] md:text-[13px] text-white/50 uppercase tracking-wider">
          Production Timeline
        </p>
        <p className="text-[14px] md:text-[15px] text-white/90">
          Production: 4–8 Weeks (After Sample Approval)
        </p>
      </div>
      <div className="space-y-1">
        <p className="text-[12px] md:text-[13px] text-white/50 uppercase tracking-wider">
          Ideal For
        </p>
        <p className="text-[14px] md:text-[15px] text-white/90">
          Sports Brands, Gyms, Retailers & Distributors
        </p>
      </div>
      <div className="space-y-1">
        <p className="text-[12px] md:text-[13px] text-white/50 uppercase tracking-wider">
          Manufacturing Model
        </p>
        <p className="text-[14px] md:text-[15px] text-white/90">
          OEM & Private Label Production
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ─── PROCESS OVERVIEW ─── */}
      <section className="pt-16 md:pt-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <h2 className="text-[24px] md:text-[28px] font-bold leading-snug max-w-xl">
              How Our Private Label Manufacturing Process Works
            </h2>

            {/* Text Content */}
            <div className="space-y-6 text-[15px] leading-relaxed text-gray-700">
              <p>
                Sarlam Athletics helps sports brands develop, manufacture, and launch custom combat
                sports equipment through a complete OEM and private label production process. From
                product planning and material selection to sampling, branding, manufacturing, and
                worldwide delivery, every stage is managed by our production team.
              </p>
              <p>
                We manufacture boxing gloves, MMA gear, BJJ uniforms, karate apparel, hand wraps,
                protective equipment, and training accessories using premium materials, consistent
                quality control, and scalable wholesale production.
              </p>
              <p>
                Whether you're launching a new sports brand or expanding an existing product line,
                we provide flexible production, custom branding, and reliable manufacturing support
                from prototype to shipment.
              </p>
            </div>
          </div>
        </div>

        {/* Full-bleed image — spans the entire page width, not boxed beside the text */}
        <div className="w-full h-[380px] md:h-[520px] mt-10 md:mt-14 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=2000"
            alt="MMA training in the cage"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ─── DETAIL LIST SECTIONS (2-col: heading left, content right) ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="divide-y divide-gray-200 border-b border-gray-200">
          {/* What's Included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-16 md:py-20">
            <h2 className="text-[24px] md:text-[28px] font-bold leading-snug max-w-xl">
              What's Included in Our Manufacturing Service
            </h2>
            <ul className="space-y-4 text-[15px] leading-relaxed text-gray-700 max-w-xl">
              {includedItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[17px] leading-6 text-[#0D0D0D]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Start Your Project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-16 md:py-20">
            <h2 className="text-[24px] md:text-[28px] font-bold leading-snug max-w-xl">
              Start Your Manufacturing Project
            </h2>
            <p className="text-[15px] leading-relaxed text-gray-700 max-w-xl">
              Most manufacturing partnerships start with a conversation. Tell us about your product
              idea, branding, materials, estimated order quantity, and timeline. We'll recommend the
              right manufacturing approach and prepare a tailored quotation.
            </p>
          </div>

          {/* Industries We Serve */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-16 md:py-20">
            <h2 className="text-[24px] md:text-[28px] font-bold leading-snug max-w-xl">
              Industries We Serve
            </h2>
            <ul className="space-y-3 text-[15px] leading-relaxed text-gray-700 max-w-xl">
              {industries.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[17px] leading-6 text-[#0D0D0D]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Request Quote Button — solid black, centered, no border/arrow */}
        <div className="flex justify-center py-16 md:py-20">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#0D0D0D] text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors duration-300"
          >
            Request a Manufacturing Quote
          </a>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <h2 className="text-[31px] md:text-[37px] font-bold tracking-tight">
          Testimonials
        </h2>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`py-10 md:py-12 ${
                i === 0 ? "md:pr-16 md:border-r border-gray-200" : "md:pl-16"
              }`}
            >
              <p className="text-[16px] md:text-[20px] font-bold leading-relaxed text-gray-900">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-[15px] font-medium">{t.name}</p>
                  <p className="text-[15px] text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA SECTION — rounded photo card with centered overlay text ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="relative rounded-sm overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2000"
            alt="BJJ academy training session"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 py-20 md:py-28 px-8 flex flex-col items-center text-center">
            <h2 className="text-[24px] md:text-[37px] font-bold leading-snug max-w-2xl text-white">
              Ready to Start Your Private Label Manufacturing Project?
            </h2>
            <p className="mt-6 text-[14px] md:text-[17px] text-white/80 leading-relaxed max-w-xl">
              Tell us what you want to manufacture, and our team will prepare a production plan,
              pricing estimate, and recommended manufacturing approach.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-[#0D0D0D] transition-colors duration-300"
              >
                Request a Manufacturing Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-12">
          {/* Top Footer */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left */}
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-[47px] font-bold leading-tight mb-4">
                Ready to Build Your Sports
                <br />
                Equipment Brand?
              </h3>
              <a
                href="mailto:hello@sarlamathletics.com"
                className="text-xl md:text-[47px] text-gray-400 hover:text-black transition break-all"
              >
                hello@sarlamathletics.com
              </a>
            </div>

            {/* Navigation Links - Mobile: Accordion style */}
            <div className="md:hidden space-y-0">
              <FooterAccordion title="Navigation">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/products">Products</FooterLink>
                <FooterLink href="/private-label">Private Label</FooterLink>
                <FooterLink href="/manufacturing">Manufacturing Process</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/contact">Request Quote</FooterLink>
              </FooterAccordion>
              <FooterAccordion title="Products">
                <FooterLink href="/products/boxing-gloves">Boxing Gloves</FooterLink>
                <FooterLink href="/products/martial-arts">Martial Arts Uniforms</FooterLink>
                <FooterLink href="/products/mma">MMA Gear</FooterLink>
                <FooterLink href="/products/accessories">Training Accessories</FooterLink>
              </FooterAccordion>
            </div>

            {/* Navigation Links - Desktop: 3 columns, matching the PDF's grouping */}
            <div className="hidden lg:flex gap-16">
              <div className="flex flex-col gap-3">
                {["Home", "Products", "Private Label", "Manufacturing Process"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-sm text-gray-500 hover:text-black transition"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
              <div className="flex flex-col gap-3">
                {["About", "Contact", "Request Quote"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-gray-500 hover:text-black transition"
                  >
                    {link}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "Boxing Gloves",
                  "Martial Arts Uniforms",
                  "MMA Gear",
                  "Training Accessories",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-gray-500 hover:text-black transition"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12" />

          {/* Large Brand Name */}
          <div className="pt-10 flex items-end justify-between">
            <h2 className="text-[69px] md:text-[101px] font-black italic leading-[0.9] tracking-tight uppercase">
              sarlam
              <br />
              athletics
            </h2>
            <span className="text-sm text-gray-400 hidden md:block">© 2026</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#0D0D0D] text-white">
          <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between text-xs">
            <span className="text-white/60">
              © 2026 Sarlam Athletics. Private-label sports equipment manufacturer
              for combat sports brands.
            </span>
            <span className="text-white/60 uppercase">USA (USD $) / English</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ─── FOOTER ACCORDION (Mobile) ─── */
function FooterAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex items-center justify-between py-3 text-sm font-medium"
        onClick={() => setOpen(!open)}
      >
        {title}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-4 flex flex-col gap-2 text-sm text-gray-500">
          {children}
        </div>
      )}
    </div>
  );
}

/* ─── FOOTER LINK ─── */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="hover:text-[#0D0D0D] transition text-[14px]">
      {children}
    </a>
  );
}