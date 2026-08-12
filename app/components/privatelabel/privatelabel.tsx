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
    <div className="min-h-screen bg-white font-sans">
      {/* ─── HEADER ─── */}
      <Header />

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[495px] bg-[#0D0D0D] overflow-hidden">
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
            <h1 
              className="max-w-2xl uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "56px",
                lineHeight: "105%",
                letterSpacing: "-2px",
                color: "#FFFFFF",
              }}
            >
              Private Label Manufacturing
            </h1>

            {/* Subtitle - mobile only */}
            <p 
              className="md:hidden mt-4 max-w-sm"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Sarlam Athletics delivers high-end custom manufacturing for premium combat sports brands worldwide.
            </p>
          </div>

          {/* Meta Info */}
          <div className="mt-8 md:mt-16 flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
            <div className="space-y-1">
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
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Production: 4–8 Weeks (After Sample Approval)
              </p>
            </div>
            <div className="space-y-1">
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
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "16px",
                  letterSpacing: "0px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Sports Brands, Gyms, Retailers & Distributors
              </p>
            </div>
            <div className="space-y-1">
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
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: "16px",
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
      <section className="pt-16 md:pt-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <h2 
              className="max-w-xl"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "37px",
                lineHeight: "45.6px",
                letterSpacing: "-1.52px",
                color: "#000000",
              }}
            >
              How Our Private Label Manufacturing Process Works
            </h2>

            {/* Text Content */}
            <div className="space-y-6">
              <p
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
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
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0px",
                  color: "#434343",
                }}
              >
                We manufacture boxing gloves, MMA gear, BJJ uniforms, karate apparel, hand wraps,
                protective equipment, and training accessories using premium materials, consistent
                quality control, and scalable wholesale production.
              </p>
              <p
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
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
        <div className="w-full h-[380px] md:h-[520px] mt-10 md:mt-14 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=2000"
            alt="MMA training in the cage"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ─── DETAIL LIST SECTIONS (2-col: heading left, content right) ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 bg-white">
        <div className="divide-y divide-gray-200 border-b border-gray-200">
          {/* What's Included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-16 md:py-20">
            <h2 
              className="max-w-xl uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "26px",
                lineHeight: "26px",
                letterSpacing: "-0.5px",
                color: "#0D0D0D",
              }}
            >
              What's Included in Our Manufacturing Service
            </h2>
            <ul className="space-y-4 max-w-xl">
              {includedItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span style={{ fontSize: "17px", color: "#0D0D0D" }}>•</span>
                  <span
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "24px",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-16 md:py-20">
            <h2 
              className="max-w-xl uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "26px",
                lineHeight: "26px",
                letterSpacing: "-0.5px",
                color: "#0D0D0D",
              }}
            >
              Start Your Manufacturing Project
            </h2>
            <p 
              className="max-w-xl"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-16 md:py-20">
            <h2 
              className="max-w-xl uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "26px",
                lineHeight: "26px",
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
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "24px",
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
        <div className="flex justify-center py-16 md:py-20">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#0D0D0D] px-8 py-4 uppercase hover:bg-gray-800 transition-colors duration-300"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "5%",
              color: "#FFFFFF",
            }}
          >
            Request a Manufacturing Quote
          </a>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-8 pb-16 md:pb-24 bg-white">
        <h2 
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "37px",
            lineHeight: "46px",
            letterSpacing: "-1.5px",
            color: "#000000",
          }}
        >
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
              <p 
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "22px",
                  lineHeight: "1.2",
                  color: "#000000",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p 
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#000000",
                    }}
                  >
                    {t.name}
                  </p>
                  <p 
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
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
        <div className="relative rounded-sm overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2000"
            alt="BJJ academy training session"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 py-20 md:py-28 px-8 flex flex-col items-center text-center">
            <h2 
              className="max-w-2xl"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "37px",
                lineHeight: "46px",
                letterSpacing: "-1.5px",
                color: "#FFFFFF",
              }}
            >
              Ready to Start Your Private Label Manufacturing Project?
            </h2>
            <p 
              className="mt-6 max-w-xl"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0px",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Tell us what you want to manufacture, and our team will prepare a production plan,
              pricing estimate, and recommended manufacturing approach.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-white uppercase hover:bg-white transition-colors duration-300 hover:text-[#0D0D0D]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "5%",
                  color: "#FFFFFF",
                  padding: "12px 24px",
                }}
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
              <h3 
                className="mb-4"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "47px",
                  lineHeight: "58px",
                  letterSpacing: "-1.9px",
                  color: "#000000",
                }}
              >
                Ready to Build Your Sports
                <br />
                Equipment Brand?
              </h3>
              <a
                href="mailto:hello@sarlamathletics.com"
                className="transition break-all hover:text-black"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "47px",
                  lineHeight: "58px",
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
                      className="transition border-b border-gray-200 pb-2 hover:opacity-70"
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
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
                    className="transition border-b border-gray-200 pb-2 hover:opacity-70"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "17px",
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
                    className="transition border-b border-gray-200 pb-2 hover:opacity-70"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "17px",
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

          <div className="border-t border-gray-200 mt-12" />

          {/* Large Brand Name */}
          <div className="pt-10 flex items-end justify-between">
            <h2 
              className="uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "101px",
                lineHeight: "85%",
                letterSpacing: "-3%",
                color: "#000000",
              }}
            >
              sarlam
              <br />
              athletics
            </h2>
            <span 
              className="hidden md:block"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16px",
                color: "#000000",
              }}
            >
              © 2026
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#0D0D0D]">
          <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
            <span 
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0px",
                color: "#E3E2E2",
              }}
            >
              © 2026 Sarlam Athletics. Private-label sports equipment manufacturer
              for combat sports brands.
            </span>
            <span 
              className="uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
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
        className="w-full flex items-center justify-between py-3"
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
        <div className="pb-4 flex flex-col gap-2">
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
      className="hover:text-[#0D0D0D] transition"
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