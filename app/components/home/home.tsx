"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Rolling Text Button Component ---
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

// --- Image Placeholder Component ---
const ImagePlaceholder = ({
  className = "",
  label = "Image",
  src,
}: {
  className?: string;
  label?: string;
  src?: string;
}) => {
  if (src) {
    return (
      <img
        src={src}
        alt={label}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`bg-gray-200 flex items-center justify-center text-gray-400 ${className}`}
      style={{
        fontFamily: "'FFF Acid Grotesk', sans-serif",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",
      }}
    >
      <span className="text-center px-4">[{label}]</span>
    </div>
  );
};

// --- Icons ---
const MenuIcon = () => (
  <svg width="26" height="14" viewBox="0 0 26 14" fill="none">
    <line y1="1" x2="26" y2="1" stroke="currentColor" strokeWidth="2" />
    <line y1="7" x2="26" y2="7" stroke="currentColor" strokeWidth="2" />
    <line y1="13" x2="26" y2="13" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" />
    <line x1="14" y1="14" x2="19" y2="19" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const SmallArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-[1px]">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className}>
    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- FAQ Accordion Item ---
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span
          className="pr-8 text-[20px] leading-[26px]"
          style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "-0.4px", color: "#0D0D0D" }}
        >
          {question}
        </span>
        <ChevronDown className={`shrink-0 text-black transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pb-4">
          <p
            style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: "#434343" }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

// --- Header Component ---
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 relative">
      <div className="relative w-full max-w-[2560px] mx-auto flex items-center justify-between px-4 lg:px-0 h-[76px] lg:h-[52px]">

        {/* Desktop Left Nav */}
        <div className="hidden lg:flex items-center gap-0 h-[48px]">
          <button className="w-[64px] h-[48px] flex items-center justify-center">
            <MenuIcon />
          </button>
          <nav className="flex items-center h-[48px]">
            <Link href="/products" className="h-[48px] flex items-center px-2 hover:opacity-70 transition" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "18px", textTransform: "uppercase", color: "#0D0D0D" }}>Products</Link>
            <Link href="/privatelabel" className="h-[48px] flex items-center px-2 hover:opacity-70 transition" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "18px", textTransform: "uppercase", color: "#0D0D0D" }}>Private Label</Link>
            <Link href="/manufacture" className="h-[48px] flex items-center px-2 hover:opacity-70 transition" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "18px", textTransform: "uppercase", color: "#0D0D0D" }}>Manufacturing</Link>
          </nav>
        </div>

        {/* Desktop Center Logo */}
        <Link href="/" className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center h-[52px]">
          <Image
            src="/Page 1/Icons/Vector-1.svg"
            alt="Sarlam Athletics Logo"
            width={267} height={34} quality={100} priority
            className="w-[140px] h-auto object-contain"
          />
        </Link>

        {/* Desktop Right Nav */}
        <div className="hidden lg:flex items-center gap-0 h-[48px]">
          <Link href="/aboutus" className="h-[48px] flex items-center px-6 hover:opacity-70 transition" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "18px", textTransform: "uppercase", color: "#0D0D0D" }}>About</Link>
          <Link href="/contact" className="h-[48px] flex items-center hover:opacity-70 transition" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "18px", textTransform: "uppercase", color: "#0D0D0D" }}>Contact</Link>
          <div className="w-[12px]" />
          <button className="w-[48px] h-[48px] flex items-center justify-center hover:opacity-70 transition text-[#0D0D0D]"><SearchIcon /></button>
        </div>

        {/* Mobile Logo */}
        <Link href="/" className="flex lg:hidden items-center">
          <Image
            src="/Page 1/Icons/Vector-1.svg"
            alt="Sarlam Athletics Logo"
            width={267} height={34} quality={100} priority
            className="w-[267px] h-[34px] object-contain"
          />
        </Link>

        <button
          className="flex lg:hidden items-center p-2 -mr-2 text-[#0D0D0D]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="lg:hidden absolute top-[76px] right-4 w-[200px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col p-2 z-50">
            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-[#0D0D0D] text-[14px] font-medium px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-['FFF_Acid_Grotesk',sans-serif] uppercase tracking-wide">Products</Link>
            <Link href="/privatelabel" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-[#0D0D0D] text-[14px] font-medium px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-['FFF_Acid_Grotesk',sans-serif] uppercase tracking-wide">Private Label</Link>
            <Link href="/manufacture" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-[#0D0D0D] text-[14px] font-medium px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-['FFF_Acid_Grotesk',sans-serif] uppercase tracking-wide">Manufacturing</Link>
            <Link href="/aboutus" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-[#0D0D0D] text-[14px] font-medium px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-['FFF_Acid_Grotesk',sans-serif] uppercase tracking-wide">About</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-[#0D0D0D] text-[14px] font-medium px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors font-['FFF_Acid_Grotesk',sans-serif] uppercase tracking-wide">Contact</Link>
          </div>
        </>
      )}
    </header>
  );
}

// --- Main Page Component ---
export default function SarlamAthleticsPage() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeProcessStep, setActiveProcessStep] = useState<number | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth : 500;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const products = [
    { name: "Private Label Boxing Gloves", href: "/details", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/01 Private Label Boxing Gloves.png" },
    { name: "BJJ Gis and Jiu-Jitsu Uniforms", href: "/jitsu", swatches: ["#0D0D0D", "#E5E5E5"], image: "/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png" },
    { name: "MMA Fight Gloves", href: "/mmagloves", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/03 MMA Fight Gloves.png" },
    { name: "Professional MMA Training Gloves", href: "/ultimategloves", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/MMATrainingGloves.png" },
    { name: "Boxing Focus Mitts and Training Pads", href: "/trainingpad", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/05 Boxing Mitts and Training Pads.png" },
    { name: "Boxing Sparring Gloves", href: "/sparinggloves", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/06 Boxing Sparring Gloves.png" },
    { name: "Custom Boxing Headguards", href: "/Boxingguard", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/07 Custom Boxing Headguards.png" },
    { name: "Private Label Karate Uniforms", href: "/karatesuit", swatches: ["#E5E5E5", "#0D0D0D"], image: "/Products/karateuniform.png" },
  ];

  const faqs = [
    { question: "Do you manufacture private-label sports equipment?", answer: "Yes. We manufacture private-label combat sports and martial arts equipment for brands, gyms, retailers, and distributors." },
    { question: "What products can Sarlam Athletics manufacture?", answer: "We can support boxing gloves, MMA gloves, BJJ gis, karate uniforms, belts, hand wraps, protective gear, jump ropes, and training accessories." },
    { question: "Do you work with U.S. companies?", answer: "Yes. Sarlam Athletics is built to serve U.S. sports brands and businesses looking for wholesale or private-label manufacturing support." },
    { question: "Can we customize logos, colors, materials, and packaging?", answer: "Yes. We support custom logos, colorways, materials, stitching, labels, tags, packaging, and other private-label details depending on the product." },
    { question: "What is your minimum order quantity?", answer: "MOQ depends on the product category, customization level, and materials. Contact us with your product requirements and we can recommend the best starting quantity." },
    { question: "Do you offer OEM and ODM manufacturing?", answer: "Yes. We offer both OEM (Original Equipment Manufacturing) and ODM (Original Design Manufacturing) solutions depending on your product needs." },
    { question: "What materials can you source?", answer: "We source genuine leather, microfiber leather, PU, cotton, EVA foam, reinforced stitching, custom fabrics, and premium trims tailored to your market." },
    { question: "Do you handle quality control before shipping?", answer: "Every product undergoes detailed inspection for stitching, material quality, sizing, padding density, logo placement, and packaging before shipment." },
  ];

  const testimonialAvatars = [
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  ];

  const processSteps = [
    { num: "01", title: "Consultation & Product Specs", desc: "Tell us what you want to manufacture, including product type, materials, colors, logo placement, packaging, order quantity, and target price.", imageSrc: "/Page 1/Img/Rectangle 1.png" },
    { num: "02", title: "Sampling & Prototype Development", desc: "Physical sample development to review ergonomics, stitching, sizing, and printing precision.", imageSrc: "/Page 1/Img/Rectangle 11.png" },
    { num: "03", title: "Bulk Manufacturing", desc: "Factory-level scalable manufacturing with intensive testing rounds on leather, synthetics, and foam fills.", imageSrc: "/Page 1/Img/2.png" },
    { num: "04", title: "Private Label Packaging & Delivery", desc: "Secure packing, sea/air cargo freight, and complete customs coordination straight to your warehouse.", imageSrc: "/Page 1/Img/Rectangle 4.png" }
  ];

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">

      <Header />

      {/* --- Hero Section --- */}
      <section className="relative w-full h-[500px] md:h-[620px] 2xl:h-[750px] bg-[#0D0D0D] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Hero Background - Combat Sports Equipment"
          src="/Page 1/Img/image 32.png"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-[2560px] mx-auto">
          <h1
            className="max-w-[1109px] mb-6 md:mb-8 uppercase text-[32px] leading-[32px] md:text-[72px] md:leading-[64px]"
            style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.01px", color: "#FFFFFF" }}
          >
            Private Label Combat Sports Equipment Manufacturer for U.S. Brands
          </h1>
          <p
            className="max-w-[683px] mb-8 md:mb-5 text-[16px] leading-[20px] md:text-[16px] md:leading-[20px]"
            style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#FFFFFF" }}
          >
            Sarlam Athletics manufactures premium private label boxing gloves, MMA equipment, BJJ gis, karate uniforms, belts, wraps, and training accessories for gyms, retailers, distributors, and sports brands worldwide.
          </p>
          <RollingButton
            href="/contactus"
            className="bg-white uppercase px-6 py-3 rounded-[8px]"
            style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "18px", color: "#000000" }}
          >
            Request a Manufacturing Quote
          </RollingButton>
        </div>
      </section>

      {/* --- Announcement Bar --- */}
      <div className="w-full bg-[#0D0D0D] overflow-hidden border-t border-white/20">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="inline-block mx-8"
              style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "#FFFFFF" }}
            >
              Private-label manufacturing for U.S. sports brands
            </span>
          ))}
        </div>
      </div>

    {/* --- Products Grid Section --- */}
<section className="w-full max-w-[2560px] mx-auto py-10 md:py-0 md:pb-[64px] bg-white flex flex-col gap-0 overflow-hidden">
  {/* Header row with title and arrows */}
  <div className="w-full px-3 md:px-[12px] mb-0 flex items-end justify-between gap-4 border-b border-[#C9C9C9]"
    style={{ paddingTop: '10px', paddingBottom: '10px' }}
  >
    <div className="md:pt-[64px] md:pb-[0px] md:pl-[32px]">
      <h2
        className="tracking-tight text-[26px] leading-[27px] md:text-[37px] md:leading-[46px]"
        style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.5px", color: "#0D0D0D", margin: 0 }}
      >
        Combat Sports Equipment We Manufacture
      </h2>
    </div>

    {/* Arrows - visible on both mobile and desktop */}
    <div className="flex items-center gap-[6px] shrink-0 z-10 relative pb-2 pr-[12px]">
      <button onClick={() => scrollByCard(-1)} aria-label="Previous" className="w-[30px] h-[30px] flex items-center justify-center text-gray-400 hover:text-black transition">
        <ArrowLeft />
      </button>
      <button onClick={() => scrollByCard(1)} aria-label="Next" className="w-[30px] h-[30px] flex items-center justify-center text-black hover:opacity-70 transition">
        <ArrowRight />
      </button>
    </div>
  </div>

  {/* Product cards scroller */}
  <div
    ref={scrollerRef}
    className="w-full pb-4 md:pb-0 flex overflow-x-auto gap-0 scroll-smooth snap-x snap-mandatory hide-scrollbar border-b border-[#C9C9C9]"
  >
    {products.map((product, i) => (
      <div
        key={i}
        data-card
        className="w-[100vw] md:w-[500px] h-[392px] md:h-[619px] shrink-0 snap-start flex flex-col p-0 gap-0 group relative bg-white border-r border-[#C9C9C9] last:border-r-0"
      >
        {/* Image area */}
        <Link href={product.href} className="w-full h-[258px] md:h-[479px] flex items-center justify-center bg-white relative overflow-hidden">
          <ImagePlaceholder className="w-full h-full !object-contain transition-transform duration-300 group-hover:scale-105" label={product.name} src={product.image} />

          {/* Quick View button overlay - desktop only */}
          <div className="hidden md:block absolute bottom-[12px] right-[12px]">
            <div
              className="px-[12px] py-[7px] rounded-sm"
              style={{
                backgroundColor: "#0D0D0D",
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
                color: "#FFFFFF",
              }}
            >
              Quick View
            </div>
          </div>
        </Link>

        {/* Card info area */}
        <div className="w-full p-[12px]">
          <div
            className="w-full flex items-end justify-between bg-white"
            style={{
              border: "1px solid #C9C9C9",
              borderRadius: "2px",
              padding: "10px 12px",
            }}
          >
            <div className="flex-1 flex flex-col gap-[2px] min-w-0 pr-2">
              <span className="w-full truncate" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "18px", letterSpacing: "0.1px", color: "#0D0D0D" }}>
                {product.name}
              </span>

              <RollingButton
                href={product.href}
                className="w-fit h-[18px] flex items-center gap-1"
                style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", lineHeight: "18px", letterSpacing: "0.1px", color: "#0D0D0D" }}
              >
                <span className="flex items-center gap-1">View Product <SmallArrowRight /></span>
              </RollingButton>
            </div>

            {product.swatches && (
              <div className="flex items-center gap-[4px] shrink-0 mb-[2px]">
                {product.swatches.map((color, ci) => (
                  <span key={ci} className="w-[8px] h-[8px] border border-gray-300 rounded-full" style={{ backgroundColor: color }} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* --- About Section --- */}
      <section className="w-full bg-[#000000] py-16 md:py-[140px]">
        <div className="max-w-[2560px] mx-auto px-4 md:px-10 flex flex-col lg:flex-row gap-6 md:gap-8">
          <div className="lg:w-[449px] shrink-0">
            <p className="uppercase" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "17px", letterSpacing: "0.4px", color: "rgba(255,255,255,0.7)" }}>
              Trusted Private Label Sports Equipment Manufacturing for Growing Brands
            </p>
          </div>

          <div className="flex-1 max-w-[879px]">
            <p className="mb-6 md:mb-0" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "22px", lineHeight: "26px", color: "#FFFFFF" }}>
              Sarlam Athletics is a trusted OEM and private label manufacturer specializing in boxing gloves, MMA equipment, BJJ uniforms, karate apparel, martial arts belts, hand wraps, and training accessories. We help sports brands launch high-quality custom products with flexible MOQs, premium materials, strict quality control, and global shipping.
            </p>
            <p className="mb-8 md:mb-10" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "22px", lineHeight: "26px", color: "#FFFFFF" }}>
              From concept development and sampling to mass production and packaging, our experienced manufacturing team supports every stage of your product launch. Whether you&apos;re building a new sports brand or expanding an existing product line, we deliver reliable manufacturing solutions designed for long-term growth.
            </p>
            <RollingButton
              href="/contactus"
              className="w-full md:w-auto text-center border border-white uppercase px-5 py-3 rounded-[4px] md:rounded-sm"
              style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "16px", color: "#FFFFFF" }}
            >
              Get a Free Manufacturing Quote
            </RollingButton>
          </div>
        </div>
      </section>

  {/* --- Manufacturing Capabilities --- */}
<section className="w-full bg-white">
  <div className="max-w-[2560px] mx-auto" style={{ padding: '40px 16px' }}>
    {/* Mobile Title */}
    <h2
      className="uppercase md:hidden mb-8"
      style={{
        fontFamily: "'FFF Acid Grotesk', sans-serif",
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '17px',
        letterSpacing: '0.4px',
        color: '#000000',
      }}
    >
      Manufacturing Capabilities
    </h2>

    {/* Desktop Title */}
    <h2
      className="hidden md:block uppercase text-center"
      style={{
        fontFamily: "'FFF Acid Grotesk', sans-serif",
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '17px',
        letterSpacing: '0.4px',
        color: '#000000',
        padding: '0 32px',
      }}
    >
      Manufacturing Capabilities
    </h2>

    {/* Mobile Items List */}
    <div className="flex flex-col gap-4 md:hidden">
      {[
        { title: 'OEM Production', desc: 'End-to-end manufacturing for your brand' },
        { title: 'Private Label Packaging', desc: 'Custom branded packaging solutions' },
        { title: 'Premium Material Sourcing', desc: 'Leather, PU, microfiber, cotton, and custom foam options' },
        { title: 'Low MOQ & Bulk', desc: 'Flexible minimum order quantities with scalable wholesale production' },
      ].map((cap, i) => (
        <div key={i} className="flex items-center gap-3">
          <img
            src="/Page 1/Icons/Vector-4.png"
            alt=""
            className="shrink-0 w-[30px] h-[30px] object-contain"
          />
          <div className="flex flex-col gap-[2px]">
            <h4
              className="uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '18px',
                color: '#0D0D0D',
              }}
            >
              {cap.title}
            </h4>
            <p
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '130%',
                color: '#0D0D0D',
              }}
            >
              {cap.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Desktop Items Row */}
    <div
      className="hidden md:flex justify-center items-center"
      style={{ gap: '117px', padding: '48px 0' }}
    >
      {[
        { title: 'OEM Production', desc: 'End-to-end manufacturing\nfor your brand' },
        { title: 'Private Label Packaging', desc: 'Custom branded packaging\nsolutions' },
        { title: 'Premium Material Sourcing', desc: 'Leather, PU, microfiber, cotton, EVA foam, and custom material options.' },
        { title: 'Low MOQ & Bulk Manufacturing', desc: 'Flexible minimum order quantities with scalable wholesale production.' },
      ].map((cap, i) => (
        <div key={i} className="flex items-center" style={{ width: '240px', gap: '6px' }}>
          <img
            src="/Page 1/Icons/Vector-4.png"
            alt=""
            className="shrink-0 w-[30px] h-[30px] object-contain"
          />
          <div className="flex flex-col" style={{ maxWidth: '205px', gap: '0px' }}>
            <h4
              className="uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '21px',
                letterSpacing: '0.45px',
                color: '#0D0D0D',
              }}
            >
              {cap.title}
            </h4>
            <p
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#0D0D0D',
                whiteSpace: 'pre-line',
              }}
            >
              {cap.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* --- Why Brands Choose Sarlam Athletics --- */}
      <section className="w-full bg-black md:bg-white py-14 md:py-0 md:pb-16">
        <div className="max-w-[2560px] mx-auto px-4 md:px-8">
          {/* Desktop: top padding + heading */}
          <div className="hidden md:block md:pt-[120px] md:pb-12 md:pl-[24px]">
            <h2 style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "37px", lineHeight: "46px", letterSpacing: "-1.5px", color: "#000000" }}>
              Why Brands Choose Sarlam Athletics
            </h2>
          </div>
          {/* Mobile heading */}
          <h2 className="md:hidden mb-8 text-[37px] leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.5px", color: "white" }}>
            Why Brands Choose Sarlam Athletics
          </h2>

          {/* Mobile: dark stacked cards */}
          <div className="flex flex-col gap-0 md:hidden">
            {[
              { num: "01", title: "Factory-Direct Manufacturing", desc: "Manufacture directly with our factory for better pricing, faster communication, consistent product quality, and complete control over branding, materials, and packaging.", imageSrc: "/Page 1/Img/1.png" },
              { num: "02", title: "Flexible MOQs", desc: "Start with sample runs or smaller wholesale orders before scaling into larger production batches for your sports brand or retail business.", imageSrc: "/Page 1/Img/2.png" },
              { num: "03", title: "Private Label & Customization", desc: "Customize logos, colors, materials, sizing, stitching, labels, and packaging across boxing gloves, martial arts uniforms, belts, wraps, and training gear.", imageSrc: "/Page 1/Img/3.png" },
            ].map((step, i) => (
              <div key={i} className="py-[21px] border-t border-white/20">
                <span className="block mb-4" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "17px", letterSpacing: "2px", color: "#8F8778" }}>{step.num}</span>
                <h3 className="mb-4" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "22px", lineHeight: "26px", color: "#FFFFFF" }}>{step.title}</h3>
                <p className="mb-4" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "16px", color: "#B7B7B7" }}>{step.desc}</p>
                <div className="w-full h-[180px] rounded-[8px] overflow-hidden bg-gray-800">
                  <ImagePlaceholder className="w-full h-full object-cover" label={step.title} src={step.imageSrc} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 3-column bordered grid with images */}
          <div className="hidden md:grid grid-cols-3 border border-[#D7DADE]">
            {[
              { num: "01", title: "Factory-Direct Manufacturing", desc: "Manufacture directly with our factory for better pricing, faster communication, consistent product quality, and complete control over branding.", imageSrc: "/Page 1/Img/1.png" },
              { num: "02", title: "Flexible MOQs for Growing Brands", desc: "Start with sample runs or smaller wholesale orders before scaling into larger production batches for your sports brand or retail business.", imageSrc: "/Page 1/Img/2.png" },
              { num: "03", title: "Private Label & OEM Customization", desc: "Customize logos, colors, materials, sizing, stitching, labels, and packaging across boxing gloves, martial arts uniforms, belts, wraps, and training gear.", imageSrc: "/Page 1/Img/3.png" },
            ].map((step, i) => (
              <div key={i} className={`p-8 flex flex-col gap-8 ${i < 2 ? "border-r border-[#D7DADE]" : ""}`}>
                <div className="flex flex-col gap-4">
                  <span style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "17px", letterSpacing: "2px", color: "#8F8778" }}>{step.num}</span>
                  <h3 style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "22px", lineHeight: "26px", color: "#000000" }}>{step.title}</h3>
                  <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "16px", color: "#434343" }}>{step.desc}</p>
                </div>
                <div className="w-full aspect-[416/303] rounded-[8px] overflow-hidden bg-gray-100">
                  <ImagePlaceholder className="w-full h-full object-cover" label={step.title} src={step.imageSrc} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Partner With Us --- */}
      <section className="w-full bg-white py-16 md:py-0 md:pb-0 border-t border-gray-200 md:border-t-0">
        <div className="max-w-[2560px] mx-auto px-0 md:px-8">
          {/* Desktop heading */}
          <div className="hidden md:block md:pt-16 md:pb-12 md:pl-[24px]">
            <h2 style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "37px", lineHeight: "46px", letterSpacing: "-1.5px", color: "#000000" }}>
              Why Partner With Us?
            </h2>
          </div>
          {/* Mobile heading */}
          <h2 className="md:hidden mb-10 px-8 text-[37px] leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.5px", color: "#000000" }}>
            Why Partner{"\n"}With Us?
          </h2>

          {/* Mobile: stacked text-only cards with border */}
          <div className="md:hidden border border-gray-200">
            {[
              { title: "OEM & ODM Manufacturing Solutions", desc: "From product development and sampling to mass production, we manufacture custom boxing gloves, MMA gear, BJJ uniforms, karate apparel, belts, wraps, and training accessories according to your exact specifications." },
              { title: "Strict Quality Control Standards", desc: "Every product undergoes detailed inspection for stitching, material quality, sizing, padding density, logo placement, and packaging before shipment." },
              { title: "Premium Material Development", desc: "Choose from genuine leather, microfiber leather, PU, cotton, EVA foam, reinforced stitching, custom fabrics, and premium trims tailored to your market." },
            ].map((item, i) => (
              <div key={i} className={`px-8 py-8 ${i < 2 ? "border-b border-gray-200" : ""}`}>
                <h3 className="mb-4" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "22px", lineHeight: "26px", letterSpacing: "-0.44px", color: "#000000" }}>{item.title}</h3>
                <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: "#000000" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Desktop: 3-column bordered grid */}
          <div className="hidden md:grid grid-cols-3 border border-[#D7DADE]">
            {[
              { title: "OEM & ODM Manufacturing Solutions", desc: "From product development and sampling to mass production, we manufacture custom boxing gloves, MMA gear, BJJ uniforms, karate apparel, belts, wraps, and training accessories according to your exact specifications." },
              { title: "Strict Quality Control Standards", desc: "Every product undergoes detailed inspection for stitching, material quality, sizing, padding density, logo placement, and packaging before shipment." },
              { title: "Premium Material Development", desc: "Choose from genuine leather, microfiber leather, PU, cotton, EVA foam, reinforced stitching, custom fabrics, and premium trims tailored to your market." },
            ].map((item, i) => (
              <div key={i} className={`p-8 ${i < 2 ? "border-r border-[#D7DADE]" : ""}`}>
                <h3 className="mb-4" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "22px", lineHeight: "26px", letterSpacing: "-0.44px", color: "#000000" }}>{item.title}</h3>
                <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "20px", color: "#000000" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Testimonial Section --- */}
      <section className="relative w-full py-16 md:py-[180px] bg-[#7A2E22] overflow-hidden">
        <ImagePlaceholder className="absolute inset-0 w-full h-full object-cover" label="Testimonial Background" src="/Page 1/Img/Container.png" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#5c1c14]/70 via-[#7a2418]/60 to-[#3d0f0a]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-[720px] mx-auto px-4 md:px-10 text-center">
          <p className="uppercase mb-8" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "17px", letterSpacing: "0.4px", color: "#F0EDE9" }}>Testimonials</p>
          <blockquote className="mb-8 text-[33px] leading-[40px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.3px", color: "#FFFFFF" }}>
            &ldquo;Sarlam helped us move from sample boxing gloves to a full private-label production run with custom packaging and consistent quality checks.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "16px", color: "#FFFFFF" }}>Marcus Vance</span>
            <span style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "17px", lineHeight: "25px", color: "#C9BFB5" }}>/</span>
            <span style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "16px", color: "#F0EDE9" }}>Founder, Apex Strike Gear</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            {testimonialAvatars.map((src, i) => (
              <div key={i} className={`w-[44px] h-[44px] md:w-[56px] md:h-[56px] rounded-xl md:rounded-[12px] overflow-hidden border-2 ${i === 1 ? "border-white" : "border-white/30"}`}>
                <ImagePlaceholder className="w-full h-full" label={`Avatar ${i + 1}`} src={src} />
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* --- How Our Process Works --- */}
<section className="w-full bg-white py-16 md:py-0 md:pb-[120px]">
  <div className="max-w-[2560px] mx-auto px-4 md:px-0">
    {/* Desktop heading */}
    <div className="hidden md:block md:pt-[120px] md:pb-12 md:pl-[64px]">
      <h2 style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "37px", lineHeight: "46px", letterSpacing: "-1.5px", color: "#0D0D0D" }}>
        How Our Private Label Manufacturing<br /> Process Works
      </h2>
    </div>
    {/* Mobile heading */}
    <h2 className="md:hidden mb-6 text-[26px] leading-[32px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.5px", color: "#0D0D0D" }}>
      How Our Private Label Manufacturing Process Works
    </h2>
  </div>

  {/* Mobile: Image-backed dark cards */}
  <div className="flex flex-col md:hidden px-4 gap-6">
    {processSteps.map((step, i) => (
      <div
        key={i}
        className="relative w-full h-[200px] rounded-[8px] overflow-hidden"
      >
        {/* Background image */}
        <img
          src={step.imageSrc}
          alt={`Step ${step.num} - ${step.title}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 p-5 flex flex-col justify-start h-full">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-2 py-[2px] rounded-full border border-white/70 w-fit mb-3 mt-5">
            <span style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "9px", lineHeight: "13px", color: "#FFFFFF" }}>{step.num}</span>
          </div>
          <h3 className="mb-3" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "15px", color: "#FFFFFF" }}>{step.title}</h3>
          <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "16px", color: "#FFFFFF" }}>{step.desc}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Desktop: Unique image-panel layout */}
  <div className="hidden md:flex w-full max-w-[2560px] mx-auto h-[575px] overflow-hidden">
    {processSteps.map((step, i) => {
      const isFirst = i === 0;
      return (
        <div
          key={i}
          className="relative h-full overflow-hidden group"
          style={{ width: isFirst ? '56%' : '14.67%', flexShrink: 0 }}
        >
          <img
            src={step.imageSrc}
            alt={`Step ${step.num} - ${step.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Step number badge */}
          <div className="absolute top-[202px] left-1/2 -translate-x-1/2 z-10">
            <div className="inline-flex items-center justify-center px-[10px] py-[4px] rounded-full bg-black/50 min-w-[30px] h-[21px]">
              <span style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "9px", lineHeight: "13px", color: "#FFFFFF" }}>{step.num}</span>
            </div>
          </div>

          {/* Title */}
          <div className="absolute top-[246px] left-0 right-0 text-center px-4 z-10">
            <h3 style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "15px", letterSpacing: "-0.2px", color: "#FFFFFF" }}>{step.title}</h3>
          </div>

          {/* Description (on ALL panels) */}
          <div className="absolute top-[295px] left-0 right-0 text-center px-6 z-10">
            <p className="max-w-[236px] mx-auto" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "17px", letterSpacing: "0.4px", color: "#FFFFFF" }}>{step.desc}</p>
          </div>
        </div>
      );
    })}
  </div>
</section>

      {/* --- FAQ Section --- */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-[640px] mx-auto px-4 md:px-0">
          <h2 className="mb-6 md:mb-16 text-center text-[26px] leading-[32px] md:text-[35px] md:leading-[42px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-0.7px", color: "#000000" }}>
            Frequently asked questions
          </h2>
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="mt-10 md:mt-16 text-center">
            <p className="mb-4 md:mb-6" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "16px", color: "#434343" }}>
              If you have any further questions or just want to reach our team, click the button below.
            </p>
            <RollingButton
              href="/contactus"
              className="border border-black text-black uppercase px-5 py-3 rounded-[6px] inline-flex"
              style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "16px" }}
            >
              Get in touch
            </RollingButton>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="w-full bg-white py-16 md:py-16">
        <div className="max-w-[2560px] mx-auto px-4 md:px-12">
          <div className="relative rounded-[12px] overflow-hidden">
            <ImagePlaceholder className="absolute inset-0 w-full h-full" label="CTA Background - Sports Equipment" src="/Page 1/Img/Container.png" />
            <div className="relative z-10 bg-black/60 py-[100px] px-4 md:py-20 md:px-12 flex flex-col items-center text-center">
              <div className="max-w-[700px]">
                <h2 className="mb-5 md:mb-3 text-[24px] leading-[30px] md:text-[37px] md:leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.5px", color: "#FFFFFF" }}>
                  Start Manufacturing Your Custom Sports Equipment Today
                </h2>
                <p className="mb-12 md:mb-8 text-[14px] md:text-[16px] md:leading-[20px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#D3D3D3" }}>
                  Partner with Sarlam Athletics to manufacture premium private label boxing gloves, MMA gear, BJJ uniforms, karate apparel, belts, wraps, and training accessories with flexible MOQs, expert quality control, and worldwide delivery.
                </p>
                <RollingButton
                  href="/contactus"
                  className="w-full md:w-auto border border-white text-white uppercase px-6 md:px-5 py-3.5 rounded-[6px]"
                  style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "16px" }}
                >
                  Get Your Free Manufacturing Quote
                </RollingButton>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* --- Footer --- */}
      <footer className="w-full bg-white">
        <div className="border-t border-[#D7DADE]" />

        {/* Footer Top Content */}
        <div className="max-w-[2560px] mx-auto px-5 md:px-8 py-12 md:py-[71px]">
          <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-8">
            <div className="lg:w-1/2">
              <h3 className="max-w-[672px] mb-0 text-[47px] leading-[58px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.9px", color: "#000000" }}>
                Let&apos;s Build Your Sports{"\n"}Brand Together
              </h3>
              <a href="mailto:hello@sarlamathletics.com" className="block hover:text-black transition break-all text-[47px] leading-[58px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.9px", color: "#A5A5A5" }}>
                hello@sarlamathletics.com
              </a>
            </div>

            {/* Desktop nav columns */}
            <div className="hidden lg:flex lg:w-1/2 flex-row gap-8">
              <div className="flex flex-col gap-[10px] w-[203px]">
                {[
                  { label: "Home", href: "/" },
                  { label: "Products", href: "/products" },
                  { label: "Private Label", href: "/privatelabel" },
                  { label: "Manufacturing Process", href: "/manufacture" },
                ].map((link, idx) => (
                  <Link key={idx} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "17px", color: "#000000" }}>{link.label}</Link>
                ))}
              </div>
              <div className="flex flex-col gap-[10px] w-[203px]">
                {[
                  { label: "About", href: "/aboutus" },
                  { label: "Contact", href: "/contact" },
                  { label: "Request Quote", href: "/contact" },
                ].map((link, idx) => (
                  <Link key={idx} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "17px", color: "#000000" }}>{link.label}</Link>
                ))}
              </div>
              <div className="flex flex-col gap-[10px] w-[203px]">
                {[
                  { label: "Boxing Gloves", href: "/details" },
                  { label: "Martial Arts Uniforms", href: "/karatesuit" },
                  { label: "MMA Gear", href: "/mmagloves" },
                  { label: "Training Accessories", href: "/trainingpad" },
                ].map((link, idx) => (
                  <Link key={idx} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "17px", color: "#000000" }}>{link.label}</Link>
                ))}
              </div>
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
                <Link key={idx} href={link.href} className="block transition border-b border-gray-200 pb-2 hover:opacity-70" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "17px", color: "#000000" }}>{link.label}</Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "About", href: "/aboutus" },
                { label: "Contact", href: "/contact" },
                { label: "Request Quote", href: "/contact" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="block transition border-b border-gray-200 pb-2 hover:opacity-70" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "17px", color: "#000000" }}>{link.label}</Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Boxing Gloves", href: "/details" },
                { label: "Martial Arts Uniforms", href: "/karatesuit" },
                { label: "MMA Gear", href: "/mmagloves" },
                { label: "Training Accessories", href: "/trainingpad" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="block transition border-b border-gray-200 pb-2 hover:opacity-70" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "17px", color: "#000000" }}>{link.label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider line - desktop */}
        <div className="hidden md:block border-t border-[#D7DADE] mx-0" />

        {/* Brand Section */}
        <div className="max-w-[2560px] mx-auto px-5 md:px-8 py-10 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-0">
          <p className="uppercase text-[69px] leading-[85%] md:text-[101px] md:leading-[85%]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, fontStyle: "italic", letterSpacing: "-3%", color: "#000000" }}>
            sarlam<br />athletics
          </p>
          <div className="flex flex-col md:flex-row md:items-end gap-[10px]">
            <span className="block text-[12px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#A5A5A5" }}>Website by Sanna Granqvist</span>
            <span className="block text-[14px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, lineHeight: "17px", color: "#434343" }}>© 2026</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="w-full bg-[#0D0D0D] py-4">
          <div className="max-w-[2560px] mx-auto px-3 md:px-3 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
            <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "#E3E2E2" }}>
              © 2026 Sarlam Athletics. Private-label sports equipment manufacturer for combat sports brands.
            </p>
            <span className="uppercase" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "12px", lineHeight: "18px", color: "#FFFFFF" }}>USA (USD $) / English</span>
          </div>
        </div>
      </footer>

      {/* --- CSS Styles --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
    </div>
  );
}
