"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "../home/home";

// ─── HERO SECTION ──────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="w-full bg-white px-2 pt-[42px] lg:px-0 lg:pt-0">
      <div className="relative bg-[#F0EDE9] rounded-xl overflow-hidden px-5 py-20 lg:rounded-none lg:px-12 lg:pt-[164px] lg:pb-[180px]">
        {/* Background image + dark overlay — shown on every breakpoint */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/Page 6/01.png')",
          }}
        />

        <div className="relative z-[2] max-w-[640px]">
          <h1
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "47px",
              lineHeight: "1.2",
              color: "#FFFFFF",
            }}
          >
            Request a Private Label Manufacturing Quote
          </h1>
          <p
            className="mt-4 lg:mt-6"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "1.6",
              color: "#F0EDE9",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
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
          <h2
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "22px",
              color: "#0D0D0D",
            }}
          >
            Tell Us About Your Project
          </h2>
          <p
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#707070",
            }}
          >
            Complete the form below and we&apos;ll contact you with
            manufacturing recommendations, estimated pricing, production
            timelines, and the next steps for your project.
          </p>
        </div>

        {/* Form Fields */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name*"
            className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none placeholder:text-[#707070]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#707070",
            }}
          />

          <input
            type="email"
            placeholder="Business Email*"
            className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none placeholder:text-[#707070]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#707070",
            }}
          />

          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none placeholder:text-[#707070]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#707070",
            }}
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Product Category*"
              className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none placeholder:text-[#707070] min-w-0"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#707070",
              }}
            />
            <input
              type="text"
              placeholder="Estimated Order Quantity"
              className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none placeholder:text-[#707070] min-w-0"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#707070",
              }}
            />
          </div>

          <textarea
            placeholder="Project Details*"
            rows={3}
            className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none resize-none placeholder:text-[#707070]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#707070",
            }}
          />

          <button
            type="submit"
            className="w-full bg-[#0D0D0D] py-[7px] px-10 rounded hover:bg-[#2a2a2a] transition-colors"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#FFFFFF",
            }}
          >
            Request Manufacturing Quote
          </button>
        </form>
      </div>
    </section>
  );
}

// ─── TRUST BADGES / WHY CONTACT ────────────────────────────────────
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
        <p
          className="text-center mb-12"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "15px",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#0D0D0D",
          }}
        >
          Why Contact Sarlam Athletics?
        </p>

        <div className="flex flex-wrap justify-between gap-6 lg:gap-4">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-start gap-2 basis-[45%] lg:basis-auto">
              <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                <CheckIcon />
              </div>
              <p
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "1.2",
                  textTransform: "uppercase",
                  color: "#0D0D0D",
                }}
              >
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
    text: "Prototype development begins after approval. This reduces uncertainty.",
  },
];

function WhatHappensNextSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"],
  });

  // Seamless, perfectly sequential 7-part animation timeline mapped explicitly
  // Phase 1 (0.0 - 0.1) -> Draw Circle 1
  // Phase 2 (0.1 - 0.3) -> Draw Line 1
  // Phase 3 (0.3 - 0.4) -> Draw Circle 2
  // Phase 4 (0.4 - 0.6) -> Draw Line 2
  // Phase 5 (0.6 - 0.7) -> Draw Circle 3
  // Phase 6 (0.7 - 0.9) -> Draw Line 3
  // Phase 7 (0.9 - 1.0) -> Draw Circle 4

  const ring1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const bg1 = useTransform(scrollYProgress, [0, 0.1], ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]);
  const c1Num = useTransform(scrollYProgress, [0, 0.1], ["rgba(255,255,255,0.5)", "rgba(13,13,13,1)"]);
  const o1 = useTransform(scrollYProgress, [0, 0.1], [0.4, 1]);

  const l1 = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "100%"]);

  const ring2 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const bg2 = useTransform(scrollYProgress, [0.3, 0.4], ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]);
  const c2Num = useTransform(scrollYProgress, [0.3, 0.4], ["rgba(255,255,255,0.5)", "rgba(13,13,13,1)"]);
  const o2 = useTransform(scrollYProgress, [0.3, 0.4], [0.4, 1]);

  const l2 = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "100%"]);

  const ring3 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const bg3 = useTransform(scrollYProgress, [0.6, 0.7], ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]);
  const c3Num = useTransform(scrollYProgress, [0.6, 0.7], ["rgba(255,255,255,0.5)", "rgba(13,13,13,1)"]);
  const o3 = useTransform(scrollYProgress, [0.6, 0.7], [0.4, 1]);

  const l3 = useTransform(scrollYProgress, [0.7, 0.9], ["0%", "100%"]);

  const ring4 = useTransform(scrollYProgress, [0.9, 1.0], [0, 1]);
  const bg4 = useTransform(scrollYProgress, [0.9, 1.0], ["rgba(255,255,255,0)", "rgba(255,255,255,1)"]);
  const c4Num = useTransform(scrollYProgress, [0.9, 1.0], ["rgba(255,255,255,0.5)", "rgba(13,13,13,1)"]);
  const o4 = useTransform(scrollYProgress, [0.9, 1.0], [0.4, 1]);

  const rings = [ring1, ring2, ring3, ring4];
  const bgs = [bg1, bg2, bg3, bg4];
  const colors = [c1Num, c2Num, c3Num, c4Num];
  const opacities = [o1, o2, o3, o4];
  const lines = [l1, l2, l3];

  return (
    <section className="w-full bg-[#232323] px-4 lg:px-20 py-12 lg:py-20" ref={containerRef}>
      <div className="max-w-[1280px] mx-auto text-center">
        <h2
          className="mb-8 lg:mb-14"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "47px",
            lineHeight: "1.2",
            color: "#FFFFFF",
          }}
        >
          What Happens Next?
        </h2>

        {/* Desktop: horizontal row with connecting lines, centered columns */}
        <div className="hidden lg:flex items-start relative">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 relative flex flex-col items-center">
              
              {/* Connecting line (Animated Width) - Behind the circles z-[0] */}
              {i < steps.length - 1 && (
                <div className="absolute top-[24px] left-[50%] right-[-50%] h-[1px] bg-white/20 z-[0]">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-white origin-left"
                    style={{ width: lines[i] }}
                  />
                </div>
              )}

              {/* Number circle (Animated SVG Ring + Fill) z-[10] */}
              <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center mb-6 relative z-[10]">
                {/* SVG Ring Draw Animation */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Faint base circle border */}
                  <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  {/* Drawing solid white border */}
                  <motion.circle
                    cx="24" cy="24" r="23"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ pathLength: rings[i] }}
                  />
                </svg>

                {/* Animated Inner Fill Background */}
                <motion.div 
                  className="absolute inset-[2px] rounded-full"
                  style={{ backgroundColor: bgs[i] }}
                />

                {/* Number Text (Animated Color) */}
                <motion.span
                  className="relative z-[20]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: colors[i],
                  }}
                >
                  {step.num}
                </motion.span>
              </div>

              {/* Detail Text (Animated Opacity) */}
              <motion.p
                className="max-w-[296px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "1.4",
                  color: "#FFFFFF",
                  opacity: opacities[i],
                }}
              >
                {step.text}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    color: "#0D0D0D",
                  }}
                >
                  {step.num}
                </span>
              </div>
              <p
                className="text-center"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "1.4",
                  color: "#FFFFFF",
                }}
              >
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
        <h2
          className="text-center"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "37px",
            lineHeight: "1.2",
            color: "#000000",
          }}
        >
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
                <span
                  className="pr-4"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: "22px",
                    lineHeight: "1.2",
                    color: "#0D0D0D",
                  }}
                >
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
                <p
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#0D0D0D",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — centered at every breakpoint per the PDF */}
        <div className="flex flex-col gap-4 items-center text-center">
          <p
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "1.5",
              color: "#434343",
            }}
          >
            If you have any further questions or just want to reach our team,
            click the button below.
          </p>
          <a
            href="/contactus"
            className="inline-flex items-center justify-center px-5 py-3 border border-black rounded-md hover:bg-black hover:text-white transition-colors w-full lg:w-auto"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#000000",
            }}
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
        <div className="flex items-start justify-between px-8 py-16">
          <div className="max-w-[580px] flex flex-col gap-4">
            <h3
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "47px",
                lineHeight: "1.2",
                letterSpacing: "-1.9px",
                color: "#000000",
              }}
            >
              Ready to Manufacture Your Products?
            </h3>
            <a
              href="mailto:hello@sarlamathletics.com"
              className="transition-colors hover:text-black"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "47px",
                lineHeight: "1.2",
                letterSpacing: "-1.9px",
                color: "#A5A5A5",
              }}
            >
              hello@sarlamathletics.com
            </a>
          </div>

          <div className="flex gap-16">
            {footerNavGroups.map((group, i) => (
              <div key={i} className="flex flex-col gap-3">
                {group.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    className="hover:opacity-70 transition-opacity border-b border-gray-200 pb-2"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#0D0D0D",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#D7DADF]" />

        <div className="flex items-end justify-between px-8 py-8">
          <div className="flex flex-col">
            <span
              className="uppercase tracking-tight"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "101px",
                lineHeight: "0.85",
                letterSpacing: "-3%",
                color: "#000000",
              }}
            >
              sarlam
              <br />
              athletics
            </span>
            <span
              className="mt-2"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#0D0D0D",
              }}
            >
              © 2026
            </span>
          </div>

          <div
            className="flex flex-col items-end gap-1"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              color: "#434343",
            }}
          >
            <span>
              © 2026 <span className="underline">Sarlam Athletics</span>.{" "}
              <span className="underline">
                Private-label sports equipment manufacturer for combat sports
                brands.
              </span>
            </span>
            <span
              className="underline uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
              }}
            >
              USA (USD $) / ENGLISH
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="lg:hidden">
        <div className="px-5 pt-12 pb-10 flex flex-col gap-4">
          <h3
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "47px",
              lineHeight: "1.2",
              letterSpacing: "-1.9px",
              color: "#000000",
            }}
          >
            Start Your Private Label Manufacturing Project
          </h3>
          <a
            href="mailto:hello@sarlamathletics.com"
            className="transition-colors hover:text-black break-all"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "47px",
              lineHeight: "1.2",
              letterSpacing: "-1.9px",
              color: "#A5A5A5",
            }}
          >
            hello@sarlamathletics.com
          </a>
        </div>

        <div className="px-5 pb-12">
          {footerNavGroups.map((group, i) => (
            <div key={i} className="border-b border-[#D7DADF]">
              <button
                onClick={() =>
                  setOpenAccordion(openAccordion === i ? null : i)
                }
                className="w-full flex items-center justify-between py-3"
              >
                <span
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#0D0D0D",
                  }}
                >
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
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#0D0D0D",
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 pt-10 pb-10">
          <span
            className="uppercase tracking-tight block"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "101px",
              lineHeight: "0.85",
              letterSpacing: "-3%",
              color: "#000000",
            }}
          >
            sarlam
            <br />
            athletics
          </span>
          <div className="mt-8 flex flex-col gap-2">
            <span
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                color: "#434343",
              }}
            >
              Website by Sanna Granqvist
            </span>
            <span
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                color: "#434343",
              }}
            >
              © 2026
            </span>
          </div>
        </div>

        <div className="bg-[#0D0D0D] px-5 py-6 flex flex-col gap-4">
          <div
            className="flex flex-col gap-1"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <span>
              © 2026 Sarlam Athletics. Private-label sports equipment
              manufacturer for combat sports brands.
            </span>
          </div>
          <span
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
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