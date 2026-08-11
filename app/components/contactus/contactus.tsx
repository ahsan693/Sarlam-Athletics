"use client";

import { useState } from "react";
// Import the Header correctly from the home.tsx file
import { Header } from "../home/home";

// ─── HERO SECTION ──────────────────────────────────────────────────
// Reference: on desktop (1440w) the hero is a full-bleed, square-cornered
// image section with a dark overlay — not just a mobile treatment. The
// rounded, inset "card" look is mobile-only. Paragraph copy is uppercase.
function HeroSection() {
  return (
    <section className="w-full bg-white px-2 pt-[42px] lg:px-0 lg:pt-0">
      <div className="relative bg-[#F0EDE9] rounded-xl overflow-hidden px-5 py-20 lg:rounded-none lg:px-12 lg:pt-[164px] lg:pb-[180px]">
        {/* Background image + dark overlay — shown on every breakpoint */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600&q=80')",
          }}
        />

        <div className="relative z-[2] max-w-[640px]">
          <h1 className="text-[28px] lg:text-[47px] font-medium leading-[1.2] text-white">
            Request a Private Label Manufacturing Quote
          </h1>
          <p className="mt-4 lg:mt-6 text-[14px] lg:text-[15px] font-medium leading-[1.6] text-[#F0EDE9] lg:uppercase lg:tracking-wide">
            Tell us what you want to manufacture, and our team will prepare a
            customized production plan, MOQ recommendation, material options,
            pricing estimate, and production timeline within 1–2 business days.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── QUOTE FORM SECTION ────────────────────────────────────────────
// Reference: single-line fields identified only by their placeholder text
// (no separate floating label), vertically centered, gray placeholder copy.
// "Product Category" and "Estimated Order Quantity" sit side by side.
function QuoteFormSection() {
  return (
    <section className="w-full bg-white px-4 lg:px-3 py-10 lg:py-20">
      <div className="max-w-[390px] mx-auto flex flex-col gap-[21px]">
        {/* Title Block */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] lg:text-[20px] font-medium lg:font-normal text-[#0D0D0D]">
            Tell Us About Your Project
          </h2>
          <p className="text-[14px] lg:text-[16px] font-normal text-[#707070] leading-[1.5]">
            Complete the form below and we&apos;ll contact you with
            manufacturing recommendations, estimated pricing, production
            timelines, and the next steps for your project.
          </p>
        </div>

        {/* Form Fields */}
        <form className="flex flex-col gap-4">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name*"
            className="border border-[#C9C9C9] rounded px-3 py-3.5 text-[14px] text-[#707070] font-normal bg-transparent outline-none placeholder:text-[#707070]"
          />

          {/* Business Email */}
          <input
            type="email"
            placeholder="Business Email*"
            className="border border-[#C9C9C9] rounded px-3 py-3.5 text-[14px] text-[#707070] font-normal bg-transparent outline-none placeholder:text-[#707070]"
          />

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className="border border-[#C9C9C9] rounded px-3 py-3.5 text-[14px] text-[#707070] font-normal bg-transparent outline-none placeholder:text-[#707070]"
          />

          {/* Product Category + Estimated Order Quantity — side by side */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Product Category*"
              className="border border-[#C9C9C9] rounded px-3 py-3.5 text-[14px] text-[#707070] font-normal bg-transparent outline-none placeholder:text-[#707070] min-w-0"
            />
            <input
              type="text"
              placeholder="Estimated Order Quantity"
              className="border border-[#C9C9C9] rounded px-3 py-3.5 text-[14px] text-[#707070] font-normal bg-transparent outline-none placeholder:text-[#707070] min-w-0"
            />
          </div>

          {/* Project Details (Textarea) */}
          <textarea
            placeholder="Project Details*"
            rows={3}
            className="border border-[#C9C9C9] rounded px-3 py-3.5 text-[14px] text-[#707070] font-normal bg-transparent outline-none resize-none placeholder:text-[#707070]"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0D0D0D] text-white text-[12px] font-medium py-[7px] px-10 rounded hover:bg-[#2a2a2a] transition-colors uppercase tracking-wide"
          >
            Request Manufacturing Quote
          </button>
        </form>
      </div>
    </section>
  );
}

// ─── TRUST BADGES / WHY CONTACT ────────────────────────────────────
// Reference: simple checkmark icons, uppercase heading + labels, spread
// evenly across the full container width (not clustered to a narrower box).
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const badges = [
  { label: "Factory-Direct Manufacturing" },
  { label: "OEM & Private Label Production" },
  { label: "Flexible Minimum Order Quantities" },
  { label: "Worldwide Shipping" },
];

function TrustBadgesSection() {
  return (
    <section className="w-full bg-white border-t border-[#C9C9C9] px-4 lg:px-10 py-10 lg:py-20">
      <div className="max-w-[1416px] mx-auto">
        {/* Title */}
        <p className="text-center text-[15px] font-medium uppercase tracking-wide text-[#0D0D0D] mb-12">
          Why Contact Sarlam Athletics?
        </p>

        {/* Badges row */}
        <div className="flex flex-wrap justify-between gap-6 lg:gap-4">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-start gap-2 basis-[45%] lg:basis-auto">
              <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                <CheckIcon />
              </div>
              <p className="text-[12px] lg:text-[15px] font-bold lg:font-medium uppercase text-[#0D0D0D] leading-tight">
                {badge.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHAT HAPPENS NEXT ─────────────────────────────────────────────
// Reference: heading and the whole steps row are centered, and step 4 has
// a second line of copy ("This reduces uncertainty.") that was missing.
const steps = [
  { num: "1", text: "We review your requirements." },
  { num: "2", text: "Our manufacturing team prepares a quotation." },
  {
    num: "3",
    text: "We recommend materials, branding, and production options.",
  },
  {
    num: "4",
    text: "Prototype development begins after approval. This reduces uncertainty.",
  },
];

function WhatHappensNextSection() {
  return (
    <section className="w-full bg-[#232323] px-4 lg:px-20 py-12 lg:py-20">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-[35px] lg:text-[47px] font-medium text-white leading-tight mb-8 lg:mb-14">
          What Happens Next?
        </h2>

        {/* Desktop: horizontal row with connecting lines, centered columns */}
        <div className="hidden lg:flex items-start relative">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 relative flex flex-col items-center">
              {/* Number circle */}
              <div className="w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center mb-6 z-[1]">
                <span className="text-[24px] font-bold text-[#0D0D0D]">
                  {step.num}
                </span>
              </div>
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="absolute top-[24px] left-1/2 w-full h-[1px] bg-white/60" />
              )}
              <p className="text-[15px] font-medium text-white leading-[1.4] max-w-[296px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-[18px] font-bold text-[#0D0D0D]">
                  {step.num}
                </span>
              </div>
              <p className="text-[12px] font-normal text-white text-center leading-[1.4]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ SECTION ───────────────────────────────────────────────────
const faqs = [
  {
    question: "How quickly will you reply?",
    answer:
      "Yes. We manufacture private-label combat sports and martial arts equipment for brands, gyms, retailers, and distributors.",
  },
  {
    question: "Can I order samples?",
    answer:
      "We can support boxing gloves, MMA gloves, BJJ gis, karate uniforms, belts, hand wraps, protective gear, jump ropes, and training accessories.",
  },
  {
    question: "What is your MOQ?",
    answer:
      "Yes. Sarlam Athletics is built to serve U.S. sports brands and businesses looking for wholesale or private-label manufacturing support.",
  },
  {
    question: "Do you manufacture for startups?",
    answer:
      "Yes. We support custom logos, colorways, materials, stitching, labels, tags, packaging, and other private-label details depending on the product.",
  },
  {
    question: "Can you customize logos and packaging?",
    answer:
      "MOQ depends on the product category, customization level, and materials. Contact us with your product requirements and we can recommend the best starting quantity.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white px-4 lg:px-20 py-12 lg:py-20">
      <div className="max-w-[640px] mx-auto flex flex-col gap-16">
        {/* Heading */}
        <h2 className="text-[35px] font-medium text-black leading-tight text-center">
          Before You Request a Quote
        </h2>

        {/* FAQ Items */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#C9C9C9]">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-3 text-left"
              >
                <span className="text-[20px] font-normal text-[#0D0D0D] leading-tight pr-4">
                  {faq.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0D0D0D"
                  strokeWidth="1.5"
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[200px] pb-4" : "max-h-0"
                }`}
              >
                <p className="text-[16px] font-normal text-[#0D0D0D] leading-[1.5]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — centered at every breakpoint per the PDF */}
        <div className="flex flex-col gap-4 items-center text-center">
          <p className="text-[15px] font-normal text-[#434343] leading-[1.5]">
            If you have any further questions or just want to reach our team,
            click the button below.
          </p>
          <a
            href="/contactus"
            className="inline-flex items-center justify-center px-5 py-3 border border-black rounded-md text-[15px] font-normal text-black hover:bg-black hover:text-white transition-colors w-full lg:w-auto"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────
function Footer() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Updated with explicit hrefs for routing
  const footerNavGroups = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Private Label", href: "/privatelabel" },
        { label: "Manufacturing Process", href: "/manufacture" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contactus" },
        { label: "Request Quote", href: "/contactus" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Boxing Gloves", href: "/products" },
        { label: "Martial Arts Uniforms", href: "/products" },
        { label: "MMA Gear", href: "/products" },
        { label: "Training Accessories", href: "/products" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-white">
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#D7DADF]" />

      {/* Desktop Footer */}
      <div className="hidden lg:block">
        {/* Top: CTA + Nav columns */}
        <div className="flex items-start justify-between px-8 py-16">
          {/* Left: Big heading + email (email is muted gray, no underline) */}
          <div className="max-w-[580px] flex flex-col gap-4">
            <h3 className="text-[47px] font-medium text-black leading-tight">
              Ready to Manufacture Your Products?
            </h3>
            <a
              href="mailto:hello@sarlamathletics.com"
              className="text-[47px] font-medium text-[#A5A5A5] leading-tight hover:text-black transition-colors"
            >
              hello@sarlamathletics.com
            </a>
          </div>

          {/* Right: Nav columns — each link has a persistent thin underline */}
          <div className="flex gap-16">
            {footerNavGroups.map((group, i) => (
              <div key={i} className="flex flex-col gap-3">
                {group.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    className="text-[14px] text-[#0D0D0D] hover:opacity-70 transition-opacity border-b border-gray-200 pb-2"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#D7DADF]" />

        {/* Bottom: Logo + copyright */}
        <div className="flex items-end justify-between px-8 py-8">
          {/* Large brand name */}
          <div className="flex flex-col">
            <span className="text-[101px] font-bold italic text-black leading-[0.85] uppercase tracking-tight">
              sarlam
              <br />
              athletics
            </span>
            <span className="text-[14px] text-[#0D0D0D] mt-2">© 2026</span>
          </div>

          {/* Right side bottom info */}
          <div className="flex flex-col items-end gap-1 text-[12px] text-[#434343]">
            <span>
              © 2026{" "}
              <span className="underline">Sarlam Athletics</span>.{" "}
              <span className="underline">
                Private-label sports equipment manufacturer for combat sports
                brands.
              </span>
            </span>
            <span className="underline">USA (USD $) / ENGLISH</span>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="lg:hidden">
        {/* Big heading + email */}
        <div className="px-5 pt-12 pb-10 flex flex-col gap-4">
          <h3 className="text-[47px] font-medium text-black leading-tight">
            Start Your Private Label Manufacturing Project
          </h3>
          <a
            href="mailto:hello@sarlamathletics.com"
            className="text-[47px] font-medium text-[#A5A5A5] leading-tight hover:text-black transition-colors break-all"
          >
            hello@sarlamathletics.com
          </a>
        </div>

        {/* Accordion nav groups */}
        <div className="px-5 pb-12">
          {footerNavGroups.map((group, i) => (
            <div key={i} className="border-b border-[#D7DADF]">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === i ? null : i)
                }
                className="w-full flex items-center justify-between py-3"
              >
                <span className="text-[14px] font-medium text-[#0D0D0D]">
                  {group.title}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0D0D0D"
                  strokeWidth="1.5"
                  className={`transition-transform duration-300 ${
                    openAccordion === i ? "rotate-180" : ""
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === i ? "max-h-[200px] pb-3" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-3">
                  {group.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.href}
                      className="text-[14px] text-[#0D0D0D]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand section */}
        <div className="px-5 pt-10 pb-10">
          <span className="text-[69px] font-bold italic text-black leading-[0.85] uppercase tracking-tight block">
            sarlam
            <br />
            athletics
          </span>
          <div className="mt-8 flex flex-col gap-2">
            <span className="text-[12px] text-[#434343]">
              Website by Sanna Granqvist
            </span>
            <span className="text-[14px] text-[#434343]">© 2026</span>
          </div>
        </div>

        {/* Bottom dark bar */}
        <div className="bg-[#0D0D0D] px-5 py-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1 text-[12px] text-white/70">
            <span>
              © 2026 Sarlam Athletics. Private-label sports equipment
              manufacturer for combat sports brands.
            </span>
          </div>
          <span className="text-[12px] text-white/70">
            USA (USD $) / ENGLISH
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── CONTACT PAGE ──────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <QuoteFormSection />
        <TrustBadgesSection />
        <WhatHappensNextSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}