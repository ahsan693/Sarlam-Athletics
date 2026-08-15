"use client";

import { useState } from "react";
import Link from "next/link";
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
    role: "CEO, Stackflow",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote:
      "Most advisors hand you a template and call it strategy. Delta actually sat in the room with us, rewrote the model, and prepped us for every question investors asked.",
    name: "Erik Sandell",
    role: "Co-founder, Waypoint Health",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
];

export default function PrivateLabel() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ─── HEADER ─── */}
      <Header />

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[600px] md:h-[495px] bg-[#0D0D0D] overflow-hidden -mt-[52px] pt-[52px] md:-mt-[0px] md:pt-[0px]">
        {/* Background Image */}
      <img
  src="/Page 5/01.png"
  alt="Boxing training ring"
  className="absolute inset-0 w-full h-full object-cover"
/>
        {/* Dark gradient — strongest on the left/bottom where the copy sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10 md:bg-gradient-to-r md:from-black md:via-black/60 md:to-black/10 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 md:bg-gradient-to-t md:from-black/70 md:via-transparent md:to-black/40" />

        <div className="relative z-20 max-w-[1440px] mx-auto px-5 md:px-8 py-16 md:py-24 h-full flex flex-col justify-center mt-12 md:mt-0">
          <div>
            <p 
              className="uppercase mb-4 md:hidden text-[12px] leading-[18px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.15em",
                color: "#FFFFFF",
              }}
            >
              HOME / SERVICES
            </p>
            <h1 
              className="max-w-2xl uppercase text-[36px] leading-[40px] md:text-[56px] md:leading-[105%]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "-2px",
                color: "#FFFFFF",
              }}
            >
              Private Label Manufacturing
            </h1>

            {/* Subtitle - mobile only */}
            <p 
              className="md:hidden mt-4 max-w-sm text-[14px] leading-[20px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Sarlam Athletics delivers high-end custom manufacturing for premium combat sports brands worldwide.
            </p>
          </div>

          {/* Meta Info */}
          <div className="mt-8 md:mt-16 flex flex-col md:flex-row md:items-start gap-4 md:gap-16">
            <div className="space-y-1 border-t border-white/20 pt-4 md:border-t-0 md:pt-0">
              <p 
                className="uppercase"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "18px",
                  letterSpacing: "0px",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Production Timeline
              </p>
              <p 
                className="text-[14px] leading-[16px] md:text-[15px] md:leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Production: 4–8 Weeks (After Sample Approval)
              </p>
            </div>
            <div className="space-y-1 border-t border-white/20 pt-4 md:border-t-0 md:pt-0">
              <p 
                className="uppercase"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "18px",
                  letterSpacing: "0px",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Ideal For
              </p>
              <p 
                className="text-[14px] leading-[16px] md:text-[15px] md:leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Sports Brands, Gyms, Retailers & Distributors
              </p>
            </div>
            <div className="space-y-1 border-t border-white/20 pt-4 md:border-t-0 md:pt-0">
              <p 
                className="uppercase"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "18px",
                  letterSpacing: "0px",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Manufacturing Model
              </p>
              <p 
                className="text-[14px] leading-[16px] md:text-[15px] md:leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                OEM & Private Label Production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS OVERVIEW ─── */}
      <section className="pt-12 md:pt-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
            <h2 
              className="max-w-xl text-[28px] leading-[32px] md:text-[37px] md:leading-[45.6px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "-1.52px",
                color: "#000000",
              }}
            >
              How Our Private Label Manufacturing Process Works
            </h2>

            {/* Text Content */}
            <div className="space-y-4 md:space-y-6">
              <p
                className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0px",
                  color: "#434343",
                }}
              >
                Sarlam Athletics helps sports brands develop, manufacture, and launch custom combat
                sports equipment through a complete OEM and private label production process. From
                product planning and material selection to sampling, branding, manufacturing, and
                worldwide delivery, every stage is managed by our production team.
              </p>
              <p
                className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0px",
                  color: "#434343",
                }}
              >
                We manufacture boxing gloves, MMA gear, BJJ uniforms, karate apparel, hand wraps,
                protective equipment, and training accessories using premium materials, consistent
                quality control, and scalable wholesale production.
              </p>
              <p
                className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0px",
                  color: "#434343",
                }}
              >
                Whether you're launching a new sports brand or expanding an existing product line,
                we provide flexible production, custom branding, and reliable manufacturing support
                from prototype to shipment.
              </p>
            </div>
          </div>
        </div>

        {/* Full-bleed image */}
        <div className="w-full h-[280px] md:h-[520px] mt-8 md:mt-14 overflow-hidden">
      <img
  src="/Page 5/03.png"
  alt="MMA training in the cage"
  className="w-full h-full object-cover"
/>
        </div>
      </section>

      {/* ─── DETAIL LIST SECTIONS (2-col: heading left, content right) ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 bg-white">
        <div className="divide-y divide-gray-200 border-b border-gray-200">
          {/* What's Included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-12 md:py-20">
            <h2 
              className="max-w-xl uppercase text-[22px] leading-[26px] md:text-[26px] md:leading-[26px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.5px",
                color: "#0D0D0D",
              }}
            >
              What's Included in Our Manufacturing Service
            </h2>
            <ul className="space-y-3 md:space-y-4 max-w-xl">
              {includedItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ fontSize: "17px", color: "#0D0D0D" }}>•</span>
                  <span
                    className="text-[14px] leading-[22px] md:text-[15px] md:leading-[24px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      letterSpacing: "0px",
                      color: "#434343",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Start Your Project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-12 md:py-20">
            <h2 
              className="max-w-xl uppercase text-[22px] leading-[26px] md:text-[26px] md:leading-[26px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.5px",
                color: "#0D0D0D",
              }}
            >
              Start Your Manufacturing Project
            </h2>
            <p 
              className="max-w-xl text-[14px] leading-[22px] md:text-[15px] md:leading-[24px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                letterSpacing: "0px",
                color: "#434343",
              }}
            >
              Most manufacturing partnerships start with a conversation. Tell us about your product
              idea, branding, materials, estimated order quantity, and timeline. We'll recommend the
              right manufacturing approach and prepare a tailored quotation.
            </p>
          </div>

          {/* Industries We Serve */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-12 md:py-20">
            <h2 
              className="max-w-xl uppercase text-[22px] leading-[26px] md:text-[26px] md:leading-[26px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.5px",
                color: "#0D0D0D",
              }}
            >
              Industries We Serve
            </h2>
            <ul className="space-y-3 max-w-xl">
              {industries.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ fontSize: "17px", color: "#0D0D0D" }}>•</span>
                  <span
                    className="text-[14px] leading-[22px] md:text-[15px] md:leading-[24px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      letterSpacing: "0px",
                      color: "#434343",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Request Quote Button */}
        <div className="flex justify-center py-12 md:py-20 w-full">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#0D0D0D] px-8 py-4 uppercase hover:bg-gray-800 transition-colors duration-300 w-full md:w-auto"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "5%",
              color: "#FFFFFF",
              borderRadius: "8px",
            }}
          >
            Request A Quote
          </a>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 pb-12 md:pb-24 bg-white">
        <h2 
          className="text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 500,
            letterSpacing: "-1.5px",
            color: "#000000",
          }}
        >
          Testimonials
        </h2>

        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`py-8 md:py-12 ${
                i === 0 ? "md:pr-16 md:border-r border-b md:border-b-0 border-gray-200" : "md:pl-16"
              }`}
            >
              <p 
                className="text-[18px] leading-[22px] md:text-[22px] md:leading-[1.2]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  color: "#000000",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 md:mt-8 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-[16px] md:rounded-[20px] object-cover"
                />
                <div>
                  <p 
                    className="text-[14px] leading-[18px] md:text-[15px] md:leading-[20px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 700,
                      color: "#000000",
                    }}
                  >
                    {t.name}
                  </p>
                  <p 
                    className="text-[13px] leading-[16px] md:text-[15px] md:leading-[20px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      color: "#757575",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 pb-16 md:pb-24 bg-white">
        <div className="relative rounded-[16px] md:rounded-sm overflow-hidden">
        <img
  src="/Page 5/02.png"
  alt="BJJ academy training session"
  className="absolute inset-0 w-full h-full object-cover"
/>
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 py-16 px-6 md:py-28 md:px-8 flex flex-col items-center text-center">
            <h2 
              className="max-w-2xl text-[28px] leading-[34px] md:text-[37px] md:leading-[46px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: "-1.5px",
                color: "#FFFFFF",
              }}
            >
              Ready to Start Your Private Label Manufacturing Project?
            </h2>
            <p 
              className="mt-4 md:mt-6 max-w-xl text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                letterSpacing: "0px",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Tell us what you want to manufacture, and our team will prepare a production plan,
              pricing estimate, and recommended manufacturing approach.
            </p>
            <div className="mt-8 w-full md:w-auto">
             <a
  href="/contact"
  className="inline-flex items-center justify-center gap-2 border border-white text-white uppercase hover:bg-black hover:border-black transition-colors duration-300 w-full md:w-auto rounded-[4px] md:rounded-none"
  style={{
    fontFamily: "'FFF Acid Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    letterSpacing: "5%",
    padding: "16px 24px",
    borderRadius: "8px",
  }}
>
  Request A Quote
</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-10 md:py-12">
          {/* Top Footer */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
            {/* Left */}
            <div className="lg:w-1/2">
              <h3 
                className="mb-4 text-[32px] leading-[40px] md:text-[47px] md:leading-[58px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-1.9px",
                  color: "#000000",
                }}
              >
                Start Your Private Label
                <br className="hidden md:block" />
                <span className="md:hidden"> </span>Manufacturing Project
              </h3>
              <a
                href="mailto:hello@sarlamathletics.com"
                className="transition break-all hover:text-black text-[24px] leading-[30px] md:text-[47px] md:leading-[58px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-1.9px",
                  color: "#A5A5A5",
                }}
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

            {/* Navigation Links - Desktop: 3 columns */}
            <div className="hidden lg:flex gap-16">
              <div className="flex flex-col gap-3">
                {["Home", "Products", "Private Label", "Manufacturing Process"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]"
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 400,
                        letterSpacing: "0px",
                        color: "#000000",
                      }}
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
                    className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      letterSpacing: "0px",
                      color: "#000000",
                    }}
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
                    className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      letterSpacing: "0px",
                      color: "#000000",
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 md:mt-12" />

          {/* Large Brand Name */}
          <div className="pt-8 md:pt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
            <h2 
              className="uppercase text-[56px] leading-[90%] md:text-[101px] md:leading-[85%]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontStyle: "italic",
                letterSpacing: "-3%",
                color: "#000000",
              }}
            >
              sarlam
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>athletics
            </h2>
            <div className="flex flex-col md:items-end gap-2 md:gap-0">
              <span 
                className="md:hidden block text-[12px] leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                Website by Sanna Granqvist
                <br />
                © 2026
              </span>
              <span 
                className="hidden md:block text-[12px] leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                © 2026
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#0D0D0D]">
          <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
            <span 
              className="text-[12px] leading-[16px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                letterSpacing: "0px",
                color: "#E3E2E2",
              }}
            >
              © 2026 Sarlam Athletics. Private-label sports equipment manufacturer
              for combat sports brands.
            </span>
            <span 
              className="uppercase text-[12px] leading-[18px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: "0px",
                color: "#FFFFFF",
              }}
            >
              USA (USD $) / English
            </span>
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
        className="w-full flex items-center justify-between py-4 md:py-3 text-left"
        style={{
          fontFamily: "'FFF Acid Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          color: "#000000",
        }}
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
        <div className="pb-4 flex flex-col gap-3 md:gap-2">
          {children}
        </div>
      )}
    </div>
  );
}

/* ─── FOOTER LINK ─── */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="hover:text-[#0D0D0D] transition block"
      style={{
        fontFamily: "'FFF Acid Grotesk', sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
        color: "#757575",
      }}
    >
      {children}
    </a>
  );
}