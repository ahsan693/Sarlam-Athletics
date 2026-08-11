"use client";

// privatelabel.tsx
import { useState } from "react";
// Import the Header correctly from the home.tsx file
import { Header } from "../home/home";

export default function PrivateLabel() {
  return (
    <div className="min-h-screen bg-white text-[#0D0D0D] font-sans">
      
      {/* ─── HEADER ─── */}
      <Header />

      {/* ─── HERO SECTION ─── */}
      <section className="relative bg-[#0D0D0D] text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <div className="absolute inset-0 bg-[#1a1a1a]">
          {/* Replace with actual hero image */}
          <div className="w-full h-full bg-[#2a2a2a] flex items-center justify-center text-gray-600 text-sm">
            [Hero Background Image]
          </div>
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto px-5 md:px-8 py-16 md:py-24">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[11px] md:text-xs text-white/60 mb-6 md:mb-0">
            <a href="/" className="hover:text-white transition">Home</a>
            <span>/</span>
            <span>Services</span>
          </div>

          <div className="mt-4 md:mt-12">
            <h1 className="text-[32px] md:text-[47px] leading-[1.15] font-light tracking-tight max-w-2xl">
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
              <p className="text-[12px] md:text-[15px] text-white/50 uppercase tracking-wider">
                Production Timeline
              </p>
              <p className="text-[14px] md:text-[15px] text-white/90">
                Production: 4–8 Weeks (After Sample Approval)
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[12px] md:text-[15px] text-white/50 uppercase tracking-wider">
                Ideal For
              </p>
              <p className="text-[14px] md:text-[15px] text-white/90">
                Sports Brands, Gyms, Retailers & Distributors
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[12px] md:text-[15px] text-white/50 uppercase tracking-wider">
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
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <h2 className="text-[24px] md:text-[22px] font-light leading-snug max-w-xl">
          How Our Private Label Manufacturing Process Works
        </h2>

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
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

          {/* Image Placeholder */}
          <div className="w-full aspect-[4/3] md:aspect-square bg-[#F0EDE9] rounded-sm flex items-center justify-center text-gray-400 text-sm">
            [Manufacturing Process Image]
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <h2 className="text-[24px] md:text-[22px] font-light leading-snug max-w-xl">
          What's Included in Our Manufacturing Service
        </h2>

        <ul className="mt-8 space-y-4 text-[15px] leading-relaxed text-gray-700 max-w-xl">
          {[
            "Product development and manufacturing consultation",
            "Custom material sourcing and testing",
            "Logo branding and private label customization",
            "Prototype sampling and approval process",
            "Bulk manufacturing with quality control inspections",
            "Custom packaging and labeling",
            "Export documentation and worldwide shipping support",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[17px] leading-6 text-[#0D0D0D]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── START YOUR PROJECT ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <h2 className="text-[22px] md:text-[22px] font-light leading-snug max-w-xl">
          Start Your Manufacturing Project
        </h2>

        <p className="mt-6 text-[15px] leading-relaxed text-gray-700 max-w-xl">
          Most manufacturing partnerships start with a conversation. Tell us about your product
          idea, branding, materials, estimated order quantity, and timeline. We'll recommend the
          right manufacturing approach and prepare a tailored quotation.
        </p>
      </section>

      {/* ─── INDUSTRIES WE SERVE ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <h2 className="text-[24px] md:text-[22px] font-light leading-snug max-w-xl">
          Industries We Serve
        </h2>

        <ul className="mt-8 space-y-3 text-[15px] leading-relaxed text-gray-700 max-w-xl">
          {[
            "Sports Brands",
            "Gyms & Fitness Chains",
            "Martial Arts Academies",
            "Retailers",
            "eCommerce Brands",
            "Wholesale Distributors",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[17px] leading-6 text-[#0D0D0D]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Request Quote Button */}
        <div className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#0D0D0D] px-6 py-3 text-xs tracking-widest uppercase hover:bg-[#0D0D0D] hover:text-white transition-colors duration-300"
          >
            Request a Manufacturing Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 py-16 md:py-24 border-t border-gray-200">
        <h2 className="text-[31px] md:text-[37px] font-light tracking-tight">
          Testimonials
        </h2>

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Testimonial 1 */}
          <div className="border border-gray-200 p-6 md:p-10 flex flex-col justify-between">
            <p className="text-[14px] md:text-[22px] font-light leading-relaxed text-gray-800">
              "Sarlam helped us launch our private label boxing equipment range on schedule. The
              product quality was consistent, communication was excellent, and the manufacturing
              process was transparent from sampling through delivery."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F0EDE9] flex items-center justify-center text-xs text-gray-500">
                LM
              </div>
              <div>
                <p className="text-[15px] font-medium">Linnéa Moberg</p>
                <p className="text-[15px] text-gray-500">CEO, IronHand Gym</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="border border-gray-200 p-6 md:p-10 flex flex-col justify-between">
            <p className="text-[14px] md:text-[22px] font-light leading-relaxed text-gray-800">
              "Unlike many manufacturers, Sarlam worked closely with our team to refine materials,
              branding, and packaging before production. The finished products matched our
              specifications exactly."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F0EDE9] flex items-center justify-center text-xs text-gray-500">
                ES
              </div>
              <div>
                <p className="text-[15px] font-medium">Erik Sandell</p>
                <p className="text-[15px] text-gray-500">Co-founder, Waypoint Athletics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="bg-[#0D0D0D] text-white">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center md:text-left">
            <h2 className="text-[24px] md:text-[37px] font-light leading-snug">
              Ready to Start Your Private Label Manufacturing Project?
            </h2>
            <p className="mt-6 text-[14px] md:text-[17px] text-white/70 leading-relaxed">
              Tell us what you want to manufacture, and our team will prepare a production plan,
              pricing estimate, and recommended manufacturing approach.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-white px-6 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-[#0D0D0D] transition-colors duration-300"
              >
                Request a Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-16 md:py-24">
          {/* Large Brand Name */}
          <h2 className="text-[69px] md:text-[101px] font-bold leading-[0.9] tracking-tight uppercase">
            sarlam
            <br />
            athletics
          </h2>

          {/* Footer Bottom */}
          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            {/* Left */}
            <div className="space-y-2 text-xs text-gray-500">
              <p>© 2026 Sarlam Athletics.</p>
              <p>Private-label sports equipment manufacturer for combat sports brands.</p>
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
              <FooterAccordion title="Company">
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </FooterAccordion>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex gap-16">
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-wider">Navigation</p>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <a href="/" className="hover:text-[#0D0D0D] transition">Home</a>
                  <a href="/products" className="hover:text-[#0D0D0D] transition">Products</a>
                  <a href="/private-label" className="hover:text-[#0D0D0D] transition">Private Label</a>
                  <a href="/manufacturing" className="hover:text-[#0D0D0D] transition">Manufacturing</a>
                  <a href="/contact" className="hover:text-[#0D0D0D] transition">Contact</a>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-wider">Products</p>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <a href="/products/boxing-gloves" className="hover:text-[#0D0D0D] transition">Boxing Gloves</a>
                  <a href="/products/martial-arts" className="hover:text-[#0D0D0D] transition">Martial Arts Uniforms</a>
                  <a href="/products/mma" className="hover:text-[#0D0D0D] transition">MMA Gear</a>
                  <a href="/products/accessories" className="hover:text-[#0D0D0D] transition">Training Accessories</a>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="text-xs text-gray-500">
              <p>USA (USD $) / ENGLISH</p>
              <p className="mt-1">Website by Sanna Granqvist</p>
              <p className="mt-1">© 2026</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#0D0D0D] text-white">
          <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between text-xs">
            <span>© 2026 Sarlam Athletics.</span>
            <span>hello@sarlamathletics.com</span>
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