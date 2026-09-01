"use client";

import { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "../home/home";
import { Footer } from "../footer";
import { footerTaglines } from "../footer/footer";
import { QuoteForm } from "../quote-form";

// ─── Data Arrays ────────────────────────────────────────────────────────────
const allProducts = [
  { name: "Private Label Boxing Gloves", category: "Boxing Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/details", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/01 Private Label Boxing Gloves.png" },
  { name: "BJJ Gis and Jiu-Jitsu Uniforms", category: "Martial Arts Uniforms", cta: "View Product +", mobileCta: "View Product →", href: "/jitsu", swatches: ["#0D0D0D", "#E5E5E5"], image: "/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png" },
  { name: "MMA Fight Gloves", category: "MMA Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/mmagloves", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/03 MMA Fight Gloves.png" },
  { name: "Professional MMA Training Gloves", category: "MMA Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/ultimategloves", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/MMATrainingGloves.png" },
  { name: "Boxing Focus Mitts and Training Pads", category: "Training Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/trainingpad", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/05 Boxing Mitts and Training Pads.png" },
  { name: "Boxing Sparring Gloves", category: "Boxing Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/sparinggloves", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/06 Boxing Sparring Gloves.png" },
  { name: "Custom Boxing Headguards", category: "Protective Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/Boxingguard", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/07 Custom Boxing Headguards.png" },
  { name: "Private Label Karate Uniforms", category: "Martial Arts Uniforms", cta: "View Product +", mobileCta: "View Product →", href: "/karatesuit", swatches: ["#E5E5E5", "#0D0D0D"], image: "/Products/karateuniform.png" },
];

// ─── Rolling Text Button Component ──────────────────────────────────────────
const RollingButton = ({ href, children, className = "", style = {}, onClick, type = "button", disabled }: any) => {
  const content = (
    <span className="relative flex items-center justify-center overflow-hidden w-full h-full">
      <span className="flex items-center justify-center w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 flex items-center justify-center w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover/btn:translate-y-0">
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`group/btn relative inline-flex items-center justify-center overflow-hidden ${className} ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`} style={style}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`group/btn relative inline-flex items-center justify-center overflow-hidden ${className} ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`} style={style}>
      {content}
    </button>
  );
};

// ─── Icons (inline SVGs) ───
const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9L9 3M9 3H4M9 3v5" /></svg>
);

const BadgeCheckIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M9 15L13 19L21 11" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── HERO SECTION ──────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="w-full bg-white lg:px-0 lg:pt-0 flex justify-center">
      <div className="relative w-full max-w-[2560px] bg-[#F0EDE9] overflow-hidden px-5 py-20 lg:rounded-none lg:px-12 lg:pt-[164px] lg:pb-[180px]">
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/Page 6/01.png')" }} />
        <div className="relative z-[2] max-w-[1200px]">
          <h1 style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, color: "#FFFFFF" }}
              className="text-[28px] leading-[34px] tracking-[-1px] lg:text-[47px] lg:leading-[1.2] lg:tracking-normal">
            Request a Private Label Manufacturing Quote
          </h1>
          <p className="mt-4 md:mt-6 max-w-[800px] text-[14px] leading-[20px] tracking-normal lg:text-[15px] lg:leading-[1.6] lg:uppercase lg:tracking-[0.05em]"
             style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, color: "#F0EDE9" }}>
            Tell us what you want to manufacture, and our team will prepare a customized production plan, MOQ recommendation, material options, pricing estimate, and production timeline within 1–2 business days.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── QUOTE FORM SECTION ────────────────────────────────────────────
function QuoteFormSection() {

  return (
    <section className="w-full bg-white px-4 lg:px-3 py-10 lg:py-24">
      <div className="max-w-[440px] mx-auto flex flex-col gap-6 lg:gap-10">
        <div className="flex flex-col gap-2 lg:gap-4">
          <h2 style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "22px", lineHeight: "28px", color: "#0D0D0D" }}>
            Tell Us About Your Project
          </h2>
          <p className="text-[14px] leading-[20px] lg:text-[16px] lg:leading-[1.5]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#4A4A4A" }}>
            Complete the form below and we&apos;ll contact you with manufacturing recommendations, estimated pricing, production timelines, and the next steps for your project.
          </p>
        </div>

        <QuoteForm productOptions={allProducts.map((product) => product.name)} subject="New Private Label Quote Request" />
      </div>
    </section>
  );
}

// ─── TRUST BADGES / WHY CONTACT ────────────────────────────────────
const badges = [
  { label: "Factory-Direct Manufacturing" },
  { label: "OEM & Private Label Production" },
  { label: "Flexible Minimum Order Quantities" },
  { label: "Worldwide Shipping" },
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

function TrustBadgesSection() {
  return (
    <section className="w-full bg-white border-t border-[#C9C9C9] px-4 lg:px-10 py-10 lg:py-24 flex justify-center">
      <div className="w-full max-w-[2560px]">
        <p className="text-center mb-6 lg:mb-16" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.4px", color: "#0D0D0D" }}>
          Why Contact Sarlam Athletics?
        </p>

        {/* Mobile: 2x2 card grid with icon above text */}
        <div className="flex flex-wrap gap-3 lg:hidden">
          {badges.map((badge, i) => (
            <div key={i} className="flex flex-col gap-2 p-3 basis-[calc(50%-6px)]">
              <BadgeCheckIcon />
              <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "16px", color: "#0D0D0D" }}>{badge.label}</p>
            </div>
          ))}
        </div>

        {/* Desktop: inline row with checkmarks */}
        <div className="hidden lg:flex flex-wrap justify-between gap-4">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-start gap-2 basis-auto">
              <div className="w-5 h-5 flex-shrink-0 mt-0.5"><CheckIcon /></div>
              <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.2", textTransform: "uppercase", color: "#0D0D0D" }}>{badge.label}</p>
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
  { num: "3", text: "We recommend materials, branding, and production options." },
  { num: "4", text: "Prototype development begins after approval." },
];

function WhatHappensNextSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 75%", "end 50%"] });

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
    <section className="w-full bg-[#232323] px-4 lg:px-20 py-12 lg:py-24 flex justify-center" ref={containerRef}>
      <div className="w-full max-w-[2560px] text-center">
        {/* Mobile: 35px/42px, Desktop: 47px */}
        <h2 className="mb-8 lg:mb-16 text-[35px] leading-[42px] tracking-[-0.7px] lg:text-[47px] lg:leading-[1.2] lg:tracking-normal" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, color: "#FFFFFF" }}>
          What Happens Next?
        </h2>

        {/* Desktop: animated horizontal stepper */}
        <div className="hidden lg:flex items-start relative max-w-[1440px] mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 relative flex flex-col items-center">
              {i < steps.length - 1 && (
                <div className="absolute top-[24px] left-[50%] right-[-50%] h-[1px] bg-white/20 z-[0]">
                  <motion.div className="absolute top-0 left-0 h-full bg-white origin-left" style={{ width: lines[i] }} />
                </div>
              )}
              <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center mb-8 relative z-[10]">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  <motion.circle cx="24" cy="24" r="23" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" style={{ pathLength: rings[i] }} />
                </svg>
                <motion.div className="absolute inset-[2px] rounded-full" style={{ backgroundColor: bgs[i] }} />
                <motion.span className="relative z-[20]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, fontSize: "20px", color: colors[i] }}>
                  {step.num}
                </motion.span>
              </div>
              <motion.p className="max-w-[296px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.4", color: "#FFFFFF", opacity: opacities[i] }}>
                {step.text}
              </motion.p>
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 grid with white circles */}
        <div className="flex flex-wrap gap-3 lg:hidden">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-3 basis-[calc(50%-6px)]">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", color: "#232323" }}>{step.num}</span>
              </div>
              <p className="text-center" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "#FFFFFF" }}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ SECTION ───────────────────────────────────────────────────
const faqs = [
  { question: "How quickly will you reply?", answer: "Yes. We manufacture private-label combat sports and martial arts equipment for brands, gyms, retailers, and distributors." },
  { question: "Can I order samples?", answer: "We can support boxing gloves, MMA gloves, BJJ gis, karate uniforms, belts, hand wraps, protective gear, jump ropes, and training accessories." },
  { question: "What is your MOQ?", answer: "Yes. Sarlam Athletics is built to serve U.S. sports brands and businesses looking for wholesale or private-label manufacturing support." },
  { question: "Do you manufacture for startups?", answer: "Yes. We support custom logos, colorways, materials, stitching, labels, tags, packaging, and other private-label details depending on the product." },
  { question: "Can you customize logos and packaging?", answer: "MOQ depends on the product category, customization level, and materials. Contact us with your product requirements and we can recommend the best starting quantity." },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white px-4 lg:px-20 py-12 lg:py-24">
      <div className="max-w-[800px] mx-auto flex flex-col gap-6 lg:gap-16">
        {/* Mobile: 35px/42px, Desktop: 37px */}
        <h2 className="text-center text-[35px] leading-[42px] tracking-[-0.7px] lg:text-[37px] lg:leading-[1.2] lg:tracking-normal" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, color: "#000000" }}>
          Before You Request a Quote
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#C9C9C9]">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} aria-expanded={openIndex === i} aria-controls={`contact-faq-${i}`} className="w-full flex items-center justify-between py-3 text-left">
                {/* Mobile: 20px/26px weight 400, Desktop: 22px weight 500 */}
                <span className="pr-4 text-[20px] leading-[26px] tracking-[-0.6px] lg:text-[22px] lg:leading-[1.2] lg:tracking-normal" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#0D0D0D" }}>{faq.question}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="1.5" className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}><path d="M12 5v14M5 12h14" /></svg>
              </button>
              <div id={`contact-faq-${i}`} hidden={openIndex !== i} className="pb-4">
                <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "1.5", color: "#0D0D0D" }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 items-center text-center mt-0 lg:mt-4 lg:gap-8">
          <p className="text-[15px] leading-[16px] lg:leading-[1.5]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#434343" }}>
            If you have any further questions or just want to reach our team, click the button below.
          </p>
          {/* Mobile: full width, white bg, black border, rounded-[6px], text 15px normal case weight 400 */}
          {/* Desktop: border, rounded-[8px], uppercase, weight 700 */}
          <RollingButton
            href="/contact"
            className="border border-black w-full lg:w-auto px-5 lg:px-10 py-3 lg:py-3.5 rounded-[6px] lg:rounded-[8px]"
            style={{ fontFamily: "'FFF Acid Grotesk', sans-serif" }}
          >
            <span className="block lg:hidden text-[15px] font-normal text-black">Get in touch</span>
            <span className="hidden lg:block text-[14px] font-bold uppercase tracking-[0.05em] text-black">Get in touch</span>
          </RollingButton>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER COMPONENT ─────────────────────────────────────────
export function LegacyFooter() {
  const footerNav = {
    pages: [ { label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Private Label", href: "/privatelabel" }, { label: "Manufacturing Process", href: "/manufacture" } ],
    company: [ { label: "About", href: "/aboutus" }, { label: "Contact", href: "/contact" }, { label: "Request Quote", href: "/contact" } ],
    products: [ { label: "Boxing Gloves", href: "/details" }, { label: "Martial Arts Uniforms", href: "/karatesuit" }, { label: "MMA Gear", href: "/mmagloves" }, { label: "Training Accessories", href: "/trainingpad" } ],
  };

  const NavGroup = ({ links }: { links: { label: string; href: string }[] }) => (
    <div className="flex flex-col gap-3 lg:gap-4">
      {links.map((link) => (
        <div key={link.label} className="flex items-center justify-between group border-b border-gray-200 pb-2">
          <Link href={link.href} className="hover:opacity-70 transition-opacity text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>{link.label}</Link>
          <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block"><ArrowUpRight /></span>
        </div>
      ))}
    </div>
  );

  return (
 <footer className="w-full bg-white">
      <div className="border-t border-[#D7DADE]" />

      {/* Footer Top Content */}
      <div className="max-w-[2560px] mx-auto px-5 md:px-12 py-12 md:py-16 flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
        <div className="lg:w-1/2">
          <h3 className="max-w-[672px] mb-4 md:mb-6 text-[47px] leading-[58px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.9px", color: "#000000" }}>
            Let&apos;s Build Your Sports{"\n"}Brand Together
          </h3>
          <a href="mailto:hello@sarlamathletics.com" className="block hover:text-black transition break-all text-[32px] leading-[58px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.9px", color: "#A5A5A5" }}>
            hello@sarlamathletics.com
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:w-1/2 flex-row gap-8 lg:gap-16">
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            {[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Private Label", href: "/privatelabel" },
              { label: "Manufacturing Process", href: "/manufacture" },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            {[
              { label: "About", href: "/aboutus" },
              { label: "Contact", href: "/contact" },
              { label: "Request Quote", href: "/contact" },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            {[
              { label: "Boxing Gloves", href: "/details" },
              { label: "Martial Arts Uniforms", href: "/karatesuit" },
              { label: "MMA Gear", href: "/mmagloves" },
              { label: "Training Accessories", href: "/trainingpad" },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="lg:hidden px-5 pb-12">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Private Label", href: "/privatelabel" },
              { label: "Manufacturing Process", href: "/manufacture" },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="block transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: "About", href: "/aboutus" },
              { label: "Contact", href: "/contact" },
              { label: "Request Quote", href: "/contact" },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="block transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: "Boxing Gloves", href: "/details" },
              { label: "Martial Arts Uniforms", href: "/karatesuit" },
              { label: "MMA Gear", href: "/mmagloves" },
              { label: "Training Accessories", href: "/trainingpad" },
            ].map((link, idx) => (
              <Link key={idx} href={link.href} className="block transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="w-full border-t border-[#D7DADE]" />

      {/* Brand Section */}
      <div className="max-w-[2560px] mx-auto px-5 md:px-12 py-10 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0">
        <Link href="/" className="block">
          <p className="uppercase text-[69px] leading-[85%] md:text-[101px] md:leading-[85%]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, fontStyle: "italic", letterSpacing: "-3%", color: "#000000" }}>
            sarlam<br />athletics
          </p>
        </Link>
      </div>

      {/* Bottom bar */}
      <div className="w-full bg-[#0D0D0D] py-4 md:py-6">
        <div className="max-w-[2560px] mx-auto px-5 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row md:items-center gap-1 text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#E3E2E2" }}>
            <span>© 2026 Sarlam Athletics. Private-label sports equipment manufacturer for combat sports brands.</span>
          </div>
          <span className="uppercase text-[12px] leading-[18px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, color: "#FFFFFF" }}>USA (USD $) / English</span>
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
      <Footer tagline={footerTaglines.contact} />
     </div>
  );
}