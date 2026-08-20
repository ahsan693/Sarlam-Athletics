"use client";

import { useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

// ─── Import Centralized Header ──────────────────────────────────────────────
// Ensure the path matches your actual file structure (e.g., "../home/home" or "./page")
import { Header } from "../home/home";

// ─── Rolling Text Button Component ──────────────────────────────────────────
const RollingButton = ({ href, children, className = "", style = {}, onClick }: any) => {
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
    <button onClick={onClick} className={`group/btn relative inline-flex items-center justify-center overflow-hidden ${className}`} style={style}>
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

// ─── Hero Section ───
function HeroSection() {
  return (
    // Modified to match home page exactly: h-[500px] on mobile (was 540px)
    <section className="relative w-full h-[500px] md:h-[620px] 2xl:h-[750px] bg-[#0D0D0D] overflow-hidden">
      <img src="/Page 4/01.png" alt="Boxing equipment manufacturing" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#3a0f14]/60 to-black/70" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 text-center max-w-[2560px] mx-auto">
        <p className="mb-4 md:mb-5 text-[13px] md:text-[15px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "#F0EDE9" }}>
          ABOUT SARLAM ATHLETICS
        </p>
        <h1 className="max-w-[1600px] mb-6 md:mb-8 uppercase text-[36px] leading-[40px] md:text-[72px] md:leading-[64px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.01px", color: "#FFFFFF" }}>
          Private Label Sports Equipment Manufacturing Built for Growing Brands
        </h1>
        <p className="max-w-[1000px] mb-8 md:mb-10 text-[14px] leading-[20px] md:text-[18px] md:hidden block" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#FFFFFF" }}>
          Simplifying production from prototype to worldwide delivery.
        </p>
        
        {/* Adjusted to match Home Page button styling strictly */}
        <RollingButton
          href="/contact"
          className="bg-white uppercase px-6 py-3 rounded-[8px]"
          style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "18px", color: "#000000" }}
        >
          Request a Manufacturing Quote
        </RollingButton>
      </div>
    </section>
  );
}
// ─── Video / Mission Section ───
function VideoSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
      <div className="max-w-[2560px] mx-auto space-y-8 md:space-y-12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="md:w-1/2 space-y-2 md:space-y-4">
            <h2 className="text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-1.5px", color: "#000000" }}>
              Why Sarlam Athletics Exists
            </h2>
            <h2 className="text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-1.5px", color: "#000000" }}>
              Our Mission
            </h2>
          </div>
          <div className="md:w-1/2 mt-2 md:mt-0">
            <p className="max-w-[1000px] text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#434343" }}>
              Many sports brands struggle to find reliable manufacturing partners that deliver consistent quality, transparent communication, and dependable production timelines. Sarlam Athletics was built to simplify the manufacturing process through factory-direct production, custom development, and long-term OEM partnerships. We work with boxing brands, MMA companies, martial arts academies, fitness businesses, wholesalers, and retailers to manufacture high-quality private label sports equipment with flexible production options and strict quality control.
            </p>
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] md:aspect-[24/9] rounded-lg overflow-hidden bg-gray-200 group cursor-pointer">
          <img src="/Page 4/02.png" alt="Martial arts training" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
        </div>
      </div>
    </section>
  );
}

   // ─── Our Values Section ───
const values = [
  { icon: <SearchOutline />, title: "Honest Product Assessment", description: "Every project begins with a practical review of your product requirements, materials, branding, production feasibility, and budget to ensure successful manufacturing." },
  { icon: <LinkIcon />, title: "Material Sourcing Expertise", description: "We source premium leather, PU, microfiber, EVA foam, cotton, and performance fabrics based on your product category, quality requirements, and target price." },
  { icon: <TargetIcon />, title: "Manufacturing Precision", description: "Every production run follows detailed quality inspections covering stitching, materials, padding, sizing, branding, finishing, and packaging." },
  { icon: <HandshakeIcon />, title: "End-to-End Partnership", description: "From concept development and sampling to production, packaging, and worldwide shipping, we support every stage of your manufacturing journey." },
];

function ValuesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mb-10 md:mb-16 px-6 md:px-10">
        <div className="max-w-[2560px] mx-auto">
          <h2 className="text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-1.5px", color: "#000000" }}>
            Values
          </h2>
        </div>
      </div>
      <div className="max-w-[2560px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-200">
        {values.map((value, i) => (
          <div key={i} className={`py-8 md:py-12 px-6 md:px-10 space-y-3 md:space-y-4 border-b md:border-b-0 lg:border-r border-gray-200`}>
            <div className="w-5 h-5 text-black">{value.icon}</div>
            <h3 className="text-[18px] leading-[24px] md:text-[22px] md:leading-[26px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-0.4px", color: "#000000" }}>
              {value.title}
            </h3>
            <p className="text-[14px] leading-[22px] md:text-[15px] md:leading-[24px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#434343" }}>
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Footer ───
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
          <h2 className="max-w-[800px] text-[32px] leading-[38px] md:text-[47px] md:leading-[58px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.9px", color: "#000000" }}>
           Let's Build Your Sports Equipment Brand
          </h2>
          <a href="mailto:hello@sarlamathletics.com" className="hover:text-[#0D0D0D] transition-colors block text-[22px] leading-[30px] md:text-[47px] md:leading-[58px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1px", color: "#A5A5A5" }}>
            hello@sarlamathletics.com
          </a>
        </div>
        <div className="lg:w-1/2 flex flex-col md:grid md:grid-cols-3 gap-8">
          <div className="space-y-3 md:space-y-4">
            {footerNav.pages.map((link) => (
              <div key={link.label} className="flex items-center justify-between group border-b border-gray-200 pb-2">
                <Link href={link.href} className="hover:opacity-70 transition-opacity text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>{link.label}</Link>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"><ArrowUpRight /></span>
              </div>
            ))}
          </div>
          <div className="space-y-3 md:space-y-4">
            {footerNav.company.map((link) => (
              <div key={link.label} className="flex items-center justify-between group border-b border-gray-200 pb-2">
                <Link href={link.href} className="hover:opacity-70 transition-opacity text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>{link.label}</Link>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"><ArrowUpRight /></span>
              </div>
            ))}
          </div>
          <div className="space-y-3 md:space-y-4">
            {footerNav.products.map((link) => (
              <div key={link.label} className="flex items-center justify-between group border-b border-gray-200 pb-2">
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
          <span className="hidden md:block text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#434343" }}>© 2026</span>
        </div>
      </div>

      <div className="bg-[#0D0D0D] py-4 md:py-6 px-6 md:px-12">
        <div className="max-w-[2560px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
          <div className="flex flex-col md:flex-row md:items-center gap-1 text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#E3E2E2" }}>
            <span>© 2026 Sarlam Athletics. Private-label sports equipment manufacturer for combat sports brands.</span>
          </div>
          <div className="uppercase text-[12px] leading-[18px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, color: "#FFFFFF" }}>USA (USD $) / ENGLISH</div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ───
export default function AboutUsPage () {
  return (
    <>
      <Head>
        <title>Private Label Manufacturing | Sarlam Athletics</title>
        <meta name="description" content="Private label sports equipment manufacturing for boxing, MMA, martial arts, and combat sports brands. Factory-direct OEM production." />
      </Head>
      <Header />
      <main className="w-full pt-0 mt-0">
        <HeroSection />
         <VideoSection />
         <ValuesSection/>
          </main>
         <Footer />

    </>
  );
}