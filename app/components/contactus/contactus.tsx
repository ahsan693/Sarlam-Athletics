"use client";

import { useState } from "react";

// ─── HEADER ────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#C9C9C9]">
      <div className="flex items-center justify-between h-[52px] lg:h-[52px]">
        {/* Left: hamburger + nav links (desktop) */}
        <div className="flex items-center h-full">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-16 h-full border-r border-[#C9C9C9] flex items-center justify-center lg:w-16"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="block w-[26px] h-[1.5px] bg-[#0D0D0D]"></span>
              <span className="block w-[26px] h-[1.5px] bg-[#0D0D0D]"></span>
              <span className="block w-[26px] h-[1.5px] bg-[#0D0D0D]"></span>
            </div>
          </button>
          <nav className="hidden lg:flex items-center pl-2 h-full">
            <ul className="flex items-center h-full">
              {["Products", "Private Label", "Manufacturing"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="px-4 h-full flex items-center text-[14px] font-normal text-[#0D0D0D] hover:opacity-70 transition-opacity"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Center: Logo */}
        <a href="#" className="absolute left-1/2 -translate-x-1/2">
          <span className="text-[22px] lg:text-[24px] font-bold italic tracking-tight text-black uppercase">
            SARLAM ATHLETICS
          </span>
        </a>

        {/* Right: actions */}
        <div className="flex items-center h-full">
          <div className="hidden lg:flex items-center h-full gap-3 pr-0">
            <a href="#" className="text-[12px] text-[#0D0D0D] px-3">
              Contact
            </a>
            <button className="text-[12px] text-[#0D0D0D] px-3">
              USA (USD $)
            </button>
            <button className="w-12 h-full border-l border-[#C9C9C9] flex items-center justify-center">
              <svg width="18" height="18" fill="none" stroke="#0D0D0D" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="M16 16l4.5 4.5" />
              </svg>
            </button>
          </div>
          {/* Mobile: hamburger is on left, logo centered, menu icon right */}
          <button className="lg:hidden w-[30px] h-12 flex items-center justify-center mr-4">
            <div className="flex flex-col gap-[5px]">
              <span className="block w-[26px] h-[1.5px] bg-[#0D0D0D]"></span>
              <span className="block w-[26px] h-[1.5px] bg-[#0D0D0D]"></span>
              <span className="block w-[26px] h-[1.5px] bg-[#0D0D0D]"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

// ─── HERO SECTION ──────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="w-full bg-white px-2 pt-[42px] lg:pt-[42px]">
      <div className="relative bg-[#F0EDE9] rounded-xl overflow-hidden px-5 py-20 lg:px-12 lg:pt-[164px] lg:pb-[180px]">
        {/* Light overlay decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

        {/* Mobile: image background with dark overlay */}
        <div className="lg:hidden absolute inset-0 bg-black/50 z-[1]" />
        <div
          className="lg:hidden absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80')",
          }}
        />

        <div className="relative z-[2] max-w-[640px]">
          <h1 className="text-[28px] lg:text-[47px] font-medium leading-[1.2] text-white lg:text-white">
            Request a Private Label Manufacturing Quote
          </h1>
          <p className="mt-4 lg:mt-6 text-[14px] lg:text-[15px] font-medium leading-[1.6] text-[#F0EDE9] lg:text-[#F0EDE9]">
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
          <div className="border border-[#C9C9C9] rounded px-3 py-3 flex flex-col gap-0">
            <label className="text-[11px] lg:text-[12px] text-[#707070] font-normal">
              Full Name*
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="text-[14px] lg:text-[12px] text-[#0D0D0D] font-normal bg-transparent outline-none mt-0.5 placeholder:text-[#0D0D0D]/40"
            />
          </div>

          {/* Business Email */}
          <div className="border border-[#C9C9C9] rounded px-3 py-3 flex flex-col gap-0">
            <label className="text-[11px] lg:text-[12px] text-[#707070] font-normal">
              Business Email*
            </label>
            <input
              type="email"
              placeholder="e.g. john@yourbrand.com"
              className="text-[14px] lg:text-[12px] text-[#0D0D0D] font-normal bg-transparent outline-none mt-0.5 placeholder:text-[#0D0D0D]/40"
            />
          </div>

          {/* Phone Number */}
          <div className="border border-[#C9C9C9] rounded px-3 py-3 flex flex-col gap-0">
            <label className="text-[11px] lg:text-[12px] text-[#707070] font-normal">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              placeholder="e.g. +1 (555) 000-0000"
              className="text-[14px] lg:text-[12px] text-[#0D0D0D] font-normal bg-transparent outline-none mt-0.5 placeholder:text-[#0D0D0D]/40"
            />
          </div>

          {/* Product Category */}
          <div className="border border-[#C9C9C9] rounded px-3 py-3 flex flex-col gap-0">
            <label className="text-[11px] lg:text-[12px] text-[#707070] font-normal">
              Product Category*
            </label>
            <input
              type="text"
              placeholder="Select Category (e.g. Boxing Gloves)"
              className="text-[14px] lg:text-[12px] text-[#0D0D0D] font-normal bg-transparent outline-none mt-0.5 placeholder:text-[#0D0D0D]/40"
            />
          </div>

          {/* Estimated Order Quantity */}
          <div className="border border-[#C9C9C9] rounded px-3 py-3 flex flex-col gap-0">
            <label className="text-[11px] lg:text-[12px] text-[#707070] font-normal">
              Estimated Order Quantity*
            </label>
            <input
              type="text"
              placeholder="e.g. 500 pairs"
              className="text-[14px] lg:text-[12px] text-[#0D0D0D] font-normal bg-transparent outline-none mt-0.5 placeholder:text-[#0D0D0D]/40"
            />
          </div>

          {/* Project Details (Textarea) */}
          <div className="border border-[#C9C9C9] rounded px-3 pt-3 pb-10 flex flex-col gap-0">
            <label className="text-[11px] lg:text-[12px] text-[#707070] font-normal">
              Project Details*
            </label>
            <textarea
              placeholder="Tell us about your branding, materials, colors, logo requirements, packaging, target market, or any other details."
              rows={3}
              className="text-[14px] lg:text-[12px] text-[#0D0D0D] font-normal bg-transparent outline-none mt-0.5 resize-none placeholder:text-[#0D0D0D]/40"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0D0D0D] text-white text-[12px] font-medium py-[7px] px-10 rounded hover:bg-[#2a2a2a] transition-colors"
          >
            Request Manufacturing Quote
          </button>
        </form>
      </div>
    </section>
  );
}

// ─── TRUST BADGES / WHY CONTACT ────────────────────────────────────
const badges = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="1.5">
        <path d="M3 21h18M3 7v14M21 7v14M6 11h4M6 15h4M14 11h4M14 15h4M10 21V17h4v4" />
      </svg>
    ),
    label: "Factory-Direct Manufacturing",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
      </svg>
    ),
    label: "OEM & Private Label Production",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="1.5">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    label: "Flexible Minimum Order Quantities",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
      </svg>
    ),
    label: "Worldwide Shipping",
  },
];

function TrustBadgesSection() {
  return (
    <section className="w-full bg-white border-t border-[#C9C9C9] px-4 lg:px-3 py-10 lg:py-20">
      <div className="max-w-[1416px] mx-auto">
        {/* Title */}
        <p className="text-center text-[15px] font-medium text-[#0D0D0D] mb-12">
          Why Contact Sarlam Athletics?
        </p>

        {/* Badges grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-[117px] max-w-[1100px] mx-auto lg:px-[53px]">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 p-3 lg:p-0 lg:flex-row lg:items-start lg:gap-[6px]"
            >
              <div className="w-[30px] h-[30px] flex-shrink-0">{badge.icon}</div>
              <p className="text-[12px] lg:text-[15px] font-medium text-[#0D0D0D] leading-tight">
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
const steps = [
  { num: "1", text: "We review your requirements." },
  { num: "2", text: "Our manufacturing team prepares a quotation." },
  {
    num: "3",
    text: "We recommend materials, branding, and production options.",
  },
  {
    num: "4",
    text: "Prototype development begins after approval.",
  },
];

function WhatHappensNextSection() {
  return (
    <section className="w-full bg-[#232323] px-4 lg:px-20 py-12 lg:py-20">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-[35px] lg:text-[47px] font-medium text-white leading-tight mb-8 lg:mb-14">
          What Happens Next?
        </h2>

        {/* Desktop: horizontal row with connecting lines */}
        <div className="hidden lg:flex items-start relative">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 relative flex flex-col items-start">
              {/* Number circle */}
              <div className="w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center mb-6">
                <span className="text-[24px] font-bold text-[#0D0D0D]">
                  {step.num}
                </span>
              </div>
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="absolute top-[24px] left-[56px] right-[8px] h-[1px] bg-white/60" />
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
        <h2 className="text-[35px] font-medium text-black leading-tight">
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

        {/* CTA */}
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <p className="text-[15px] font-normal text-[#434343] leading-[1.5]">
            If you have any further questions or just want to reach our team,
            click the button below.
          </p>
          <a
            href="#"
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

  const footerNavGroups = [
    {
      title: "Navigation",
      links: [
        "Home",
        "Products",
        "Private Label",
        "Manufacturing Process",
      ],
    },
    {
      title: "Company",
      links: ["About", "Contact", "Request Quote"],
    },
    {
      title: "Products",
      links: [
        "Boxing Gloves",
        "Martial Arts Uniforms",
        "MMA Gear",
        "Training Accessories",
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
          {/* Left: Big heading + email */}
          <div className="max-w-[580px] flex flex-col gap-4">
            <h3 className="text-[47px] font-medium text-black leading-tight">
              Ready to Manufacture Your Products?
            </h3>
            <a
              href="mailto:hello@sarlamathletics.com"
              className="text-[47px] font-medium text-black leading-tight underline decoration-1 underline-offset-8 hover:opacity-70 transition-opacity"
            >
              hello@sarlamathletics.com
            </a>
          </div>

          {/* Right: Nav columns */}
          <div className="flex gap-16">
            {footerNavGroups.map((group, i) => (
              <div key={i} className="flex flex-col gap-3">
                {group.links.map((link, j) => (
                  <a
                    key={j}
                    href="#"
                    className="text-[14px] text-[#0D0D0D] hover:opacity-70 transition-opacity"
                  >
                    {link}
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
            className="text-[47px] font-medium text-black leading-tight underline decoration-1 underline-offset-8 hover:opacity-70 transition-opacity break-all"
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
                      href="#"
                      className="text-[14px] text-[#0D0D0D]"
                    >
                      {link}
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
