"use client";

import { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "../home/home";

// ─── Rolling Text Button Component ──────────────────────────────────────────
const RollingButton = ({ href, children, className = "", style = {}, onClick, type = "button" }: any) => {
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
      <Link href={href} className={`group/btn relative inline-flex items-center justify-center overflow-hidden ${className}`} style={style}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`group/btn relative inline-flex items-center justify-center overflow-hidden ${className}`} style={style}>
      {content}
    </button>
  );
};

// ─── Icons (inline SVGs) ───
const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9L9 3M9 3H4M9 3v5" /></svg>
);
const SearchOutline = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);
const LinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);
const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
);
const HandshakeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" /></svg>
);
const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={className}><path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

// ─── HERO SECTION ──────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="w-full bg-white px-2 pt-[42px] lg:px-0 lg:pt-0 flex justify-center">
      <div className="relative w-full max-w-[2560px] bg-[#F0EDE9] rounded-xl overflow-hidden px-5 py-20 lg:rounded-none lg:px-12 lg:pt-[164px] lg:pb-[180px]">
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/Page 6/01.png')" }} />
        <div className="relative z-[2] max-w-[1200px]">
          <h1 style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "47px", lineHeight: "1.2", color: "#FFFFFF" }}>
            Request a Private Label Manufacturing Quote
          </h1>
          <p className="mt-4 md:mt-6 max-w-[800px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.6", color: "#F0EDE9", textTransform: "uppercase", letterSpacing: "0.05em" }}>
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
    <section className="w-full bg-white px-4 lg:px-3 py-16 md:py-24">
      <div className="max-w-[440px] mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "22px", color: "#0D0D0D" }}>
            Tell Us About Your Project
          </h2>
          <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "1.5", color: "#707070" }}>
            Complete the form below and we&apos;ll contact you with manufacturing recommendations, estimated pricing, production timelines, and the next steps for your project.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name*" className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none placeholder:text-[#707070]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", color: "#707070" }} />
          <input type="email" placeholder="Business Email*" className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none placeholder:text-[#707070]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", color: "#707070" }} />
          <input type="tel" placeholder="Phone Number (Optional)" className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none placeholder:text-[#707070]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", color: "#707070" }} />
          
          <div className="grid grid-cols-2 gap-3">
            <input type="text" placeholder="Product Category*" className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none placeholder:text-[#707070] min-w-0" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", color: "#707070" }} />
            <input type="text" placeholder="Estimated Order Quantity" className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none placeholder:text-[#707070] min-w-0" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", color: "#707070" }} />
          </div>

          <textarea placeholder="Project Details*" rows={3} className="border border-[#C9C9C9] rounded px-3 py-3.5 bg-transparent outline-none resize-none placeholder:text-[#707070]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", color: "#707070" }} />

          <RollingButton
            type="submit"
            className="w-full bg-[#0D0D0D] py-[12px] px-10 mt-2 rounded-[4px]"
            style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 800, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#FFFFFF" }}
          >
            Request Manufacturing Quote
          </RollingButton>
        </form>
      </div>
    </section>
  );
}

// ─── TRUST BADGES / WHY CONTACT ────────────────────────────────────
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const badges = [
  { label: "Factory-Direct Manufacturing" },
  { label: "OEM & Private Label Production" },
  { label: "Flexible Minimum Order Quantities" },
  { label: "Worldwide Shipping" },
];

function TrustBadgesSection() {
  return (
    <section className="w-full bg-white border-t border-[#C9C9C9] px-4 lg:px-10 py-16 md:py-24 flex justify-center">
      <div className="w-full max-w-[2560px]">
        <p className="text-center mb-10 md:mb-16" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#0D0D0D" }}>
          Why Contact Sarlam Athletics?
        </p>
        <div className="flex flex-wrap justify-between gap-6 md:gap-8 lg:gap-4">
          {badges.map((badge, i) => (
            <div key={i} className="flex items-start gap-2 basis-[45%] lg:basis-auto">
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
  { num: "4", text: "Prototype development begins after approval. This reduces uncertainty." },
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
    <section className="w-full bg-[#232323] px-4 lg:px-20 py-16 md:py-24 flex justify-center" ref={containerRef}>
      <div className="w-full max-w-[2560px] text-center">
        <h2 className="mb-10 md:mb-16" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "47px", lineHeight: "1.2", color: "#FFFFFF" }}>
          What Happens Next?
        </h2>

        <div className="hidden lg:flex items-start relative max-w-[1440px] mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 relative flex flex-col items-center">
              {i < steps.length - 1 && (
                <div className="absolute top-[24px] left-[50%] right-[-50%] h-[1px] bg-white/20 z-[0]">
                  <motion.div className="absolute top-0 left-0 h-full bg-white origin-left" style={{ width: lines[i] }} />
                </div>
              )}

              <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center mb-6 md:mb-8 relative z-[10]">
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

        <div className="grid grid-cols-2 gap-6 md:gap-8 lg:hidden">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-3 md:gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, fontSize: "24px", color: "#0D0D0D" }}>{step.num}</span>
              </div>
              <p className="text-center" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.4", color: "#FFFFFF" }}>{step.text}</p>
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
    <section className="w-full bg-white px-4 lg:px-20 py-16 md:py-24">
      <div className="max-w-[800px] mx-auto flex flex-col gap-10 md:gap-16">
        <h2 className="text-center" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "37px", lineHeight: "1.2", color: "#000000" }}>
          Before You Request a Quote
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#C9C9C9]">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between py-4 text-left">
                <span className="pr-4" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "22px", lineHeight: "1.2", color: "#0D0D0D" }}>{faq.question}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="1.5" className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}><path d="M12 5v14M5 12h14" /></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[200px] pb-4 md:pb-6" : "max-h-0"}`}>
                <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "1.5", color: "#0D0D0D" }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:gap-8 items-center text-center mt-4">
          <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "1.5", color: "#434343" }}>
            If you have any further questions or just want to reach our team, click the button below.
          </p>
          <RollingButton
            href="/contactus"
            className="border border-black rounded-[8px] text-black w-full lg:w-auto px-10 py-3.5 text-[14px]"
            style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}
          >
            Get in touch
          </RollingButton>
        </div>
      </div>
    </section>
  );
}

// ─── NEW FOOTER COMPONENT ─────────────────────────────────────────
function Footer() {
  const footerNav = {
    pages: [ { label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Private Label", href: "/privatelabel" }, { label: "Manufacturing Process", href: "/manufacture" } ],
    company: [ { label: "About", href: "/about" }, { label: "Contact", href: "/contactus" }, { label: "Request Quote", href: "/contactus" } ],
    products: [ { label: "Boxing Gloves", href: "/products" }, { label: "Martial Arts Uniforms", href: "/products" }, { label: "MMA Gear", href: "/products" }, { label: "Training Accessories", href: "/products" } ],
  };

  return (
    <footer className="bg-white">
      <div className="h-px bg-[#D7DADE]" />
      <div className="max-w-[2560px] mx-auto flex flex-col lg:flex-row gap-10 md:gap-12 py-12 md:py-16 px-6 md:px-12">
        <div className="lg:w-1/2 space-y-4 md:space-y-6">
          <h2 className="text-[32px] leading-[38px] md:text-[47px] md:leading-[58px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.9px", color: "#000000" }}>
            Start Your Private Label Manufacturing Project
          </h2>
          <a href="mailto:hello@sarlamathletics.com" className="hover:text-[#0D0D0D] transition-colors block text-[22px] leading-[30px] md:text-[47px] md:leading-[58px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1px", color: "#A5A5A5" }}>
            hello@sarlamathletics.com
          </a>
        </div>

        <div className="lg:w-1/2 flex flex-col md:grid md:grid-cols-3 gap-8">
          <div className="space-y-3 md:space-y-4">
            {footerNav.pages.map((link) => (
              <div key={link.label} className="flex items-center justify-between group border-b border-gray-200 pb-2 md:border-b-0 md:pb-0">
                <Link href={link.href} className="hover:opacity-70 transition-opacity text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>{link.label}</Link>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"><ArrowUpRight /></span>
              </div>
            ))}
          </div>
          <div className="space-y-3 md:space-y-4">
            {footerNav.company.map((link) => (
              <div key={link.label} className="flex items-center justify-between group border-b border-gray-200 pb-2 md:border-b-0 md:pb-0">
                <Link href={link.href} className="hover:opacity-70 transition-opacity text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>{link.label}</Link>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"><ArrowUpRight /></span>
              </div>
            ))}
          </div>
          <div className="space-y-3 md:space-y-4">
            {footerNav.products.map((link) => (
              <div key={link.label} className="flex items-center justify-between group border-b border-gray-200 pb-2 md:border-b-0 md:pb-0">
                <Link href={link.href} className="hover:opacity-70 transition-opacity text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>{link.label}</Link>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"><ArrowUpRight /></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-[#D7DADE]" />
      <div className="max-w-[2560px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between px-6 md:px-12 py-8 md:py-10 gap-4 md:gap-0">
        <div className="flex-1">
          <Link href="/" className="block">
            <span className="uppercase tracking-tight text-[56px] leading-[85%] md:text-[101px] md:leading-[85%]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, fontStyle: "italic", letterSpacing: "-3%", color: "#000000", display: "block" }}>
              sarlam<br className="hidden md:block" /><span className="md:hidden"> </span>athletics
            </span>
          </Link>
        </div>
        <div className="flex flex-col md:items-end gap-2 md:gap-0">
          <span className="block md:hidden text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>
            Website by Sanna Granqvist<br />© 2026
          </span>
          <span className="hidden md:block text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#434343" }}>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

// ─── NEW BOTTOM BAR COMPONENT ─────────────────────────────────────
function BottomBar() {
  return (
    <div className="bg-black">
      <div className="max-w-[2560px] mx-auto py-4 px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
        <div className="flex flex-col md:flex-row md:items-center gap-1 text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#E3E2E2" }}>
          <span>© 2026 Sarlam Athletics. Private-label sports equipment manufacturer for combat sports brands.</span>
        </div>
        <div className="uppercase text-[12px] leading-[18px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, color: "#FFFFFF" }}>
          USA (USD $) / ENGLISH
        </div>
      </div>
    </div>
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
      <BottomBar />
    </div>
  );
}