"use client";

import React, { useState, useRef } from "react";
import Link from "next/link"; 
import Image from "next/image";

// ─── Image Placeholder Component ────────────────────────────────────────────
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

// ─── Icons ──────────────────────────────────────────────────────────────────
const MenuIcon = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
    <line y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
    <line y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" />
    <line y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" />
    <line
      x1="14"
      y1="14"
      x2="19"
      y2="19"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M13 4l-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M7 4l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    className={className}
  >
    <path
      d="M4 7l5 5 5-5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    className="shrink-0"
  >
    <circle cx="15" cy="15" r="14" stroke="#0D0D0D" strokeWidth="1.5" />
    <path
      d="M10 15.5l3.5 3.5 6.5-7"
      stroke="#0D0D0D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 30 34"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 0L4 14h13L0 34l26-15H12L24 0z"
      fill="currentColor"
    />
  </svg>
);

// ─── FAQ Accordion Item ─────────────────────────────────────────────────────
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span 
          className="pr-8 text-[18px] leading-[22px] md:text-[22px] md:leading-[26px]"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 500,
            letterSpacing: "-0.4px",
            color: "#000000",
          }}
        >
          {question}
        </span>
        <ChevronDown
          className={`shrink-0 text-black transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p 
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "16px",
              letterSpacing: "0px",
              color: "#434343",
            }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

// ─── Header Component ───────────────────────────────────────────────────────
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 relative">
      <div className="relative max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-4 h-[52px]">
        
        {/* ─── DESKTOP VIEW ─── */}
        
        {/* Desktop Left Nav */}
        <div className="hidden lg:flex items-center gap-4">
          <button>
            <MenuIcon />
          </button>
          <div className="w-[2px] h-12 bg-gray-300" />
          <nav className="flex items-center gap-4">
            <Link
              href="/products"
              className="hover:opacity-70 transition"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
                textTransform: "uppercase",
                color: "#0D0D0D",
              }}
            >
              Products
            </Link>
         
            <Link
              href="/manufacture"
              className="hover:opacity-70 transition"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
                textTransform: "uppercase",
                color: "#0D0D0D",
              }}
            >
              Manufacturing
            </Link>
          </nav>
        </div>

    {/* Desktop Center Logo */}
        <Link
          href="/"
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center"
        >
          <Image 
            src="/Page 1/Icons/Heading 1.png" 
            alt="Sarlam Athletics Logo" 
            width={267}
            height={34}
            quality={100}
            priority
            className="w-[267px] h-[34px] object-contain"
          />
        </Link>
        {/* Desktop Right Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
           href="/privatelabel"
            className="hover:opacity-70 transition"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "uppercase",
              color: "#0D0D0D",
            }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:opacity-70 transition"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "18px",
              textTransform: "uppercase",
              color: "#0D0D0D",
            }}
          >
            Contact
          </Link>
          <div className="w-[2px] h-12 bg-gray-300" />
          <button className="hover:opacity-70 transition text-[#0D0D0D]">
            <SearchIcon />
          </button>
        </div>

        {/* ─── MOBILE VIEW ─── */}
        
        {/* Mobile Logo (Left Side) */}
        <Link
          href="/"
          className="flex lg:hidden items-center gap-2"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 700,
            fontStyle: "italic",
            fontSize: "18px",
            textTransform: "uppercase",
            color: "#0D0D0D",
          }}
        >
          <LogoMark className="w-[18px] h-[20px]" />
          <span className="whitespace-nowrap tracking-tight">
            Sarlam Athletics
          </span>
        </Link>

        {/* Mobile Hamburger (Right Side) */}
        <button 
          className="flex lg:hidden items-center p-2 -mr-2 text-[#0D0D0D]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[52px] left-0 w-full bg-white border-b border-gray-100 shadow-lg flex flex-col py-6 px-6 gap-6 z-50">
          {[
            { label: "Products", href: "/products" },
            { label: "Private Label", href: "/privatelabel" },
            { label: "Manufacturing", href: "/manufacture" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-70 transition"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "18px",
                textTransform: "uppercase",
                color: "#0D0D0D",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Main Page Component ────────────────────────────────────────────────────
export default function SarlamAthleticsPage() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 21 : 521; // updated to include gap
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

 const products = [
    {
      name: "Private Label Boxing Gloves",
      cta: "View Product +",
      href: "/details",
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/01 Private Label Boxing Gloves.png",
    },
    {
      name: "BJJ Gis and Jiu-Jitsu Uniforms",
      cta: "View Product +",
      href: "/jitsu",
      swatches: ["#0D0D0D", "#E5E5E5"],
      image: "/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png",
    },
    {
      name: "MMA Fight Gloves",
      cta: "View Product +",
      href: "/mmagloves",
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/03 MMA Fight Gloves.png",
    },
   {
      name: "Professional MMA Training Gloves", 
      cta: "View Product +",   
      href: "/ultimategloves",           
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/04 Pro MMA  Training Gloves.png",
    },
    {
      name: "Boxing Focus Mitts and Training Pads",
      cta: "View Product +",
      href: "/trainingpad",
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/05 Boxing Mitts and Training Pads.png",
    },
    {
      name: "Boxing Sparring Gloves",
      cta: "View Product +",
      href: "/sparinggloves",
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/06 Boxing Sparring Gloves.png",
    },
    {
      name: "Custom Boxing Headguards",
      cta: "View Product +",
      href: "/Boxingguard",
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/07 Custom Boxing Headguards.png", // Note: 08 is also available for this in your folder
    },
   {
      name: "Private Label Karate Uniforms",
      cta: "View Product +",
      href: "/karatesuit",
      swatches: ["#E5E5E5", "#0D0D0D"],
      image: "/Products/karateuniform.png",
    },
   
  ];

  const faqs = [
    {
      question: "Do you manufacture private-label sports equipment?",
      answer:
        "Yes. We manufacture private-label combat sports and martial arts equipment for brands, gyms, retailers, and distributors.",
    },
    {
      question: "What products can Sarlam Athletics manufacture?",
      answer:
        "We can support boxing gloves, MMA gloves, BJJ gis, karate uniforms, belts, hand wraps, protective gear, jump ropes, and training accessories.",
    },
    {
      question: "Do you work with U.S. companies?",
      answer:
        "Yes. Sarlam Athletics is built to serve U.S. sports brands and businesses looking for wholesale or private-label manufacturing support.",
    },
    {
      question:
        "Can we customize logos, colors, materials, and packaging?",
      answer:
        "Yes. We support custom logos, colorways, materials, stitching, labels, tags, packaging, and other private-label details depending on the product.",
    },
    {
      question: "What is your minimum order quantity?",
      answer:
        "MOQ depends on the product category, customization level, and materials. Contact us with your product requirements and we can recommend the best starting quantity.",
    },
  ];

  const testimonialAvatars = [
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  ];

  const processSteps = 
   [
    {
      num: "01",
      title: "Consultation & Product Specs",
      desc: "Tell us what you want to manufacture, including product type, materials, colors, logo placement, packaging, order quantity, and target price.",
      imageSrc:
        "/Page 1/Img/Rectangle 1.png",
    },
    {
      num: "02",
      title: "Sampling & Prototype Development",
      desc: "",
      imageSrc:
        "/Page 1/Img/Rectangle 11.png",
    },
    {
      num: "03",
      title: "Bulk Manufacturing",
      desc: "",
      imageSrc:
        "/Page 1/Img/2.png",
    },
    {
      num: "04",
      title: "Private Label Packaging & Delivery",
      desc: "",
      imageSrc:
        "/Page 1/Img/Rectangle 4.png",
    }
  ];
  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      
      {/* ───── Header / Navbar ───── */}
      <Header />

      {/* ───── Hero Section ───── */}
      <section className="relative w-full h-[540px] md:h-[620px] bg-[#0D0D0D] overflow-hidden">
       <img
  className="absolute inset-0 w-full h-full object-cover opacity-40"
  alt="Hero Background - Combat Sports Equipment"
  src="/Page 1/Img/image 32.png"
/>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 mt-4 md:mt-0">
          <h1 
            className="max-w-[1100px] mb-6 md:mb-8 uppercase text-[36px] leading-[40px] md:text-[72px] md:leading-[64px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1.01px",
              color: "#FFFFFF",
            }}
          >
            Private Label Combat Sports Equipment Manufacturer for U.S. Brands
          </h1>
          <p 
            className="max-w-[700px] mb-8 text-[14px] leading-[20px] md:text-[16px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              letterSpacing: "0px",
              color: "#FFFFFF",
            }}
          >
            Sarlam Athletics manufactures premium private label boxing gloves,
            MMA equipment, BJJ gis, karate uniforms, belts, wraps, and training
            accessories for gyms, retailers, distributors, and sports brands
            worldwide.
          </p>
          <Link
            href="/contactus"
            className="inline-flex items-center justify-center bg-white uppercase px-10 py-3 hover:bg-gray-100 transition"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "18px",
              letterSpacing: "0px",
              color: "#000000",
            }}
          >
            Request a Manufacturing Quote
          </Link>
        </div>
      </section>

      {/* ───── Announcement Bar ───── */}
      <div className="w-full bg-[#0D0D0D] overflow-hidden border-t border-white/20">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="inline-block mx-8"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "0px",
                color: "#FFFFFF",
              }}
            >
              Private-label manufacturing for U.S. sports brands
            </span>
          ))}
        </div>
      </div>

    {/* ───── Products Grid Section (EXACT SIZES & FULLY RESPONSIVE) ───── */}
      <section className="w-full max-w-[1440px] mx-auto pb-[64px] bg-white flex flex-col gap-0 overflow-hidden">
        
        {/* Header Row */}
        <div className="w-full h-[131px] pt-[64px] pr-[12px] pb-[16px] pl-[12px] flex items-end justify-between">
          
          {/* Title area */}
          <h2
            className="tracking-tight truncate mr-4"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "34px",
              letterSpacing: "-0.5px",
              color: "#000000",
              lineHeight: "46px",
              margin: 0
            }}
          >
            Combat Sports Equipment We Manufacture
          </h2>

          {/* Navigation arrows */}
          <div className="flex items-center gap-[6px] shrink-0 mb-[6px] z-10 relative">
            <button 
              onClick={() => scrollByCard(-1)} 
              aria-label="Previous" 
              className="w-[30px] h-[30px] flex items-center justify-center text-gray-400 hover:text-black transition"
            >
              <ArrowLeft />
            </button>
            <button 
              onClick={() => scrollByCard(1)} 
              aria-label="Next" 
              className="w-[30px] h-[30px] flex items-center justify-center text-black hover:opacity-70 transition"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Products Area */}
        <div 
          ref={scrollerRef}
          className="w-full p-0 flex overflow-x-auto gap-[21px] scroll-smooth snap-x snap-mandatory hide-scrollbar border-t border-b border-gray-200"
        >
          {products.map((product, i) => (
            /* Card wrapper */
            <div 
              key={i} 
              data-card 
              className="w-[500px] h-[619px] shrink-0 snap-start flex flex-col p-0 gap-0 group relative bg-white border-r border-gray-200 last:border-r-0"
            >
              {/* Product Image Frame */}
              <Link 
                href={product.href} 
                className="w-[499px] h-[479px] flex items-center justify-center bg-white relative overflow-hidden"
              >
                <ImagePlaceholder
                  className="w-full h-full !object-contain transition-transform duration-300 group-hover:scale-105"
                  label={product.name}
                  src={product.image}
                />
              </Link>

              {/* Text Area (Margin) */}
              <div className="w-[499px] h-[84px] p-[12px]">
                {/* Inner text box */}
                <div className="w-[475px] h-[60px] pt-[10px] pr-[12px] pb-[10px] pl-[12px] border border-gray-200 flex items-end justify-between bg-white">
                  
                  {/* Text container (flex-1 min-w-0 pr-2 keeps the swatches inside the box) */}
                  <div className="flex-1 flex flex-col gap-[2px] min-w-0 pr-2">
                    <span
                      className="w-full h-[18px] truncate"
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "13px",
                        lineHeight: "18px",
                        color: "#000000",
                      }}
                    >
                      {product.name}
                    </span>
                    
                    <Link
                      href={product.href}
                      className="w-fit h-[18px] hover:opacity-70 transition flex items-center gap-1"
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "12px",
                        lineHeight: "18px",
                        color: "#000000",
                      }}
                    >
                      View Product <SmallArrowRight />
                    </Link>
                  </div>

                  {/* Color Swatches */}
                  {product.swatches && (
                    <div className="flex items-center gap-[4px] shrink-0 mb-[2px]">
                      {product.swatches.map((color, ci) => (
                        <span
                          key={ci}
                          className="w-[8px] h-[8px] border border-gray-300 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="w-full flex justify-center mt-[32px]">
          <Link href="/products" className="w-[138px] h-[48px] pt-[12px] pr-[20px] pb-[12px] pl-[20px] bg-black text-white hover:bg-gray-800 transition flex items-center justify-center">
            <span className="w-[98px] h-[16px] text-[13px] leading-[16px] font-bold text-center">
              View All
            </span>
          </Link>
        </div>
      </section>

      {/* ───── About Section ───── */}
      <section className="w-full bg-[#000000] py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-8 md:gap-16">
          <div className="lg:w-1/3">
            <p 
              className="uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Trusted Private Label Sports Equipment Manufacturing for Growing
              Brands
            </p>
          </div>

          <div className="lg:w-2/3">
            <p 
              className="mb-6 text-[18px] md:text-[22px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                lineHeight: "1.2",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Sarlam Athletics is a trusted OEM and private label manufacturer
              specializing in boxing gloves, MMA equipment, BJJ uniforms, karate
              apparel, martial arts belts, hand wraps, and training accessories.
              We help sports brands launch high-quality custom products with
              flexible MOQs, premium materials, strict quality control, and
              global shipping.
            </p>
            <p 
              className="mb-8 md:mb-10 text-[18px] md:text-[22px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                lineHeight: "1.2",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              From concept development and sampling to mass production and
              packaging, our experienced manufacturing team supports every stage
              of your product launch. Whether you&apos;re building a new sports
              brand or expanding an existing product line, we deliver reliable
              manufacturing solutions designed for long-term growth.
            </p>
            <Link
              href="/contactus"
              className="inline-flex w-full md:w-auto text-center items-center justify-center border border-white uppercase px-10 py-3.5 hover:bg-white hover:text-black transition"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "5%",
                color: "#FFFFFF",
              }}
            >
              Get a Free Manufacturing Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Manufacturing Capabilities ───── */}
      <section className="w-full bg-white py-12 md:py-14">
        <div className="max-w-[1416px] mx-auto px-6 md:px-10">
          <p 
            className="uppercase md:text-center mb-8 md:mb-10"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "0.15em",
              color: "#707070",
            }}
          >
            Manufacturing Capabilities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
            {[
              {
                title: "OEM Production",
                desc: "End-to-end manufacturing for your brand",
              },
              {
                title: "Private Label Packaging",
                desc: "Custom branded packaging solutions",
              },
              {
                title: "Premium Material Sourcing",
                desc: "Leather, PU, microfiber, cotton, EVA foam, and custom material options.",
              },
              {
                title: "Low MOQ & Bulk Manufacturing",
                desc: "Flexible minimum order quantities with scalable wholesale production.",
              },
            ].map((cap, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h4 
                    className="mb-1"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "24px",
                      color: "#0D0D0D",
                    }}
                  >
                    {cap.title}
                  </h4>
                  <p 
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: "#434343",
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

     {/* ───── Why Brands Choose Sarlam Athletics ───── */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-[1376px] mx-auto px-6 md:px-10">
          <h2 
            className="mb-10 md:mb-16 text-[28px] md:text-[37px] leading-[36px] md:leading-[46px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1.5px",
              color: "#000000",
            }}
          >
            Why Brands Choose Sarlam Athletics
          </h2>

          {/* Changed 'border-t' to 'border' here to enclose the entire grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
            {[
            {
                num: "01",
                title: "Factory-Direct Manufacturing",
                desc: "Manufacture directly with our factory for better pricing, faster communication, consistent product quality, and complete control over branding.",
                imageSrc:
                  "/Page 1/Img/1.png",
              },
              {
                num: "02",
                title: "Flexible MOQs for Growing Brands",
                desc: "Start with sample runs or smaller wholesale orders before scaling into larger production batches for your sports brand or retail business.",
                imageSrc:
                  "/Page 1/Img/2.png",
              },
              {
                num: "03",
                title: "Private Label & OEM Customization",
                desc: "Customize logos, colors, materials, sizing, stitching, labels, and packaging across boxing gloves, martial arts uniforms, belts, wraps, and training gear.",
                imageSrc:
                  "/Page 1/Img/3.png",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`py-8 md:p-8 ${i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}
              >
                <div className="mb-4">
                  <span 
                    className="uppercase"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: "15px",
                      letterSpacing: "2px",
                      color: "#A5A5A5",
                    }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3 
                  className="mb-3"
                  style={{
                    fontFamily: "'Switzer', sans-serif",
                    fontWeight: 600,
                    fontSize: "21.7px",
                    lineHeight: "26.4px",
                    letterSpacing: "-0.44px",
                    color: "#000000",
                  }}
                >
                  {step.title}
                </h3>
                <p 
                  className="mb-6 md:mb-8"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    fontSize: "15.1px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    color: "#47433B",
                  }}
                >
                  {step.desc}
                </p>
                <ImagePlaceholder
                  className="w-full h-[240px] md:h-[303px] rounded-sm"
                  label={step.title}
                  src={step.imageSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    {/* ───── Why Partner With Us ───── */}
      <section className="w-full bg-white py-16 md:py-20 border-t border-gray-200">
        <div className="max-w-[1376px] mx-auto px-6 md:px-10">
          <h2 
            className="mb-10 md:mb-16 text-[28px] md:text-[37px] leading-[36px] md:leading-[46px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1.5px",
              color: "#000000",
            }}
          >
            Why Partner With Us?
          </h2>

          {/* Changed 'border-t' to 'border' to add left, right, and bottom borders to the full grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
            {[
             {
                title: "OEM & ODM Manufacturing Solutions",
                desc: "From product development and sampling to mass production, we manufacture custom boxing gloves, MMA gear, BJJ uniforms, karate apparel, belts, wraps, and training accessories according to your exact specifications.",
                imageSrc:
                  "/Page 1/Img/Rectangle 1.png",
              },
              {
                title: "Strict Quality Control Standards",
                desc: "Every product undergoes detailed inspection for stitching, material quality, sizing, padding density, logo placement, and packaging before shipment.",
                imageSrc:
                  "/Page 1/Img/Rectangle 11.png",
              },
              {
                title: "Premium Material Development",
                desc: "Choose from genuine leather, microfiber leather, PU, cotton, EVA foam, reinforced stitching, custom fabrics, and premium trims tailored to your market.",
                imageSrc:
                  "/Page 1/Img/2.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`py-8 md:p-8 ${i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""}`}
              >
                <ImagePlaceholder
                   className="w-full h-[240px] md:hidden mb-6 rounded-sm"
                   label={item.title}
                   src={item.imageSrc}
                 />
                <h3 
                  className="mb-4"
                  style={{
                    fontFamily: "'Switzer', sans-serif",
                    fontWeight: 600,
                    fontSize: "21.7px",
                    lineHeight: "26.4px",
                    letterSpacing: "-0.44px",
                    color: "#000000",
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    fontSize: "15.1px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                    color: "#47433B",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Testimonial Section ───── */}
      <section className="relative w-full py-16 md:py-24 bg-[#7A2E22] overflow-hidden">
       <ImagePlaceholder
  className="absolute inset-0 w-full h-full object-cover"
  label="Testimonial Background"
  src="/Page 1/Img/Container.png"
/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#5c1c14]/70 via-[#7a2418]/60 to-[#3d0f0a]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-[720px] mx-auto px-6 md:px-10 text-center">
          <p 
            className="uppercase mb-6 md:mb-8 text-[13px] md:text-[15px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Testimonials
          </p>
          <blockquote 
            className="mb-6 md:mb-8 text-[24px] md:text-[33px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              lineHeight: "1.2",
              color: "#FFFFFF",
            }}
          >
            &ldquo;Sarlam helped us move from sample boxing gloves to a full
            private-label production run with custom packaging and consistent
            quality checks.&rdquo;
          </blockquote>

          <p 
            className="mb-8 text-[14px] md:text-[16px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Marcus Vance <span className="mx-2 text-white/50">/</span> Founder,
            Apex Strike Gear
          </p>

          <div className="flex items-center justify-center gap-3">
            {testimonialAvatars.map((src, i) => (
              <div
                key={i}
                className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden border-2 ${
                  i === 1 ? "border-white" : "border-white/30"
                }`}
              >
                <ImagePlaceholder
                  className="w-full h-full"
                  label={`Avatar ${i + 1}`}
                  src={src}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── How Our Process Works ───── */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-[1376px] mx-auto px-6 md:px-10">
          <h2 
            className="mb-10 md:mb-16 text-[28px] md:text-[37px] leading-[36px] md:leading-[46px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1.5px",
              color: "#000000",
            }}
          >
            How Our Private Label Manufacturing
            <br className="hidden md:block" />
            Process Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr_1fr_1fr] gap-4 md:gap-0 px-6 md:px-0">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className={`relative rounded-sm md:rounded-none overflow-hidden h-[250px] md:h-[520px] ${
                i < processSteps.length - 1
                  ? "border-r-0 md:border-r border-white/10 md:border-gray-200"
                  : ""
              }`}
            >
              <ImagePlaceholder
                className="absolute inset-0 w-full h-full"
                label={`Step ${step.num} - ${step.title}`}
                src={step.imageSrc}
              />
              <div className="absolute inset-0 bg-black/45 md:bg-black/45" />

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
                <span 
                  className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-white/70 mb-3 md:mb-4"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "2px",
                    color: "#FFFFFF",
                  }}
                >
                  {step.num}
                </span>
                <h3 
                  className="uppercase max-w-[220px] mb-2 md:mb-3 text-[14px] md:text-[15px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {step.title}
                </h3>
                {step.desc && (
                  <p 
                    className="uppercase max-w-[260px] text-[12px] md:text-[13px] hidden md:block"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    {step.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── FAQ Section ───── */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          <h2 
            className="mb-8 md:mb-12 text-[28px] md:text-[37px] leading-[36px] md:leading-[46px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1.5px",
              color: "#000000",
            }}
          >
            Frequently asked questions
          </h2>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <p 
              className="mb-4"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "24px",
                color: "#47433B",
              }}
            >
              If you have any further questions or just want to reach our team,
              click the button below.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center border border-black uppercase px-8 py-3 w-full md:w-auto hover:bg-black hover:text-white transition"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "5%",
                color: "#000000",
              }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ───── CTA Section ───── */}
      <section className="w-full bg-white py-10 md:py-16">
        <div className="max-w-[1344px] mx-auto px-4 md:px-10">
          <div className="relative rounded-sm overflow-hidden">
           <ImagePlaceholder
  className="absolute inset-0 w-full h-full"
  label="CTA Background - Sports Equipment"
  src="/Page 1/Img/Container.png"
/>
            <div className="relative z-10 bg-black/60 py-16 px-6 md:py-24 md:px-20 flex flex-col items-center text-center">
              <div className="max-w-[700px]">
                <h2 
                  className="mb-4 md:mb-6 text-[28px] md:text-[37px] leading-[36px] md:leading-[46px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 500,
                    letterSpacing: "-1.5px",
                    color: "#FFFFFF",
                  }}
                >
                  Start Manufacturing Your Custom Sports Equipment Today
                </h2>
                <p 
                  className="mb-6 md:mb-8 text-[14px] md:text-[16px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Partner with Sarlam Athletics to manufacture premium private
                  label boxing gloves, MMA gear, BJJ uniforms, karate apparel,
                  belts, wraps, and training accessories with flexible MOQs,
                  expert quality control, and worldwide delivery.
                </p>
               <Link
  href="/contactus"
  className="inline-flex w-full md:w-auto items-center justify-center border border-white text-white uppercase px-6 md:px-10 py-3.5 hover:bg-white hover:text-black transition-all duration-300"
  style={{
    fontFamily: "'FFF Acid Grotesk', sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    letterSpacing: "5%",
  }}
>
  Get Your Free Manufacturing Quote
</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* ───── Footer ───── */}
    <footer className="w-full bg-white">
      <div className="border-t border-gray-200" />

      {/* Top Footer */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 md:py-12 flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
        {/* Left - CTA */}
        <div className="lg:w-1/2">
          <h3
            className="max-w-[672px] mb-4 text-[32px] leading-[40px] md:text-[47px] md:leading-[58px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1.9px",
              color: "#000000",
            }}
          >
            Start Your Private Label Manufacturing Project
          </h3>
          
          <a 
            href="mailto:hello@sarlamathletics.com"
            className="block hover:text-black transition break-all text-[24px] leading-[30px] md:text-[47px] md:leading-[58px]"
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

        {/* Right - Nav Columns */}
        <div className="lg:w-1/2 flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Private Label", href: "/privatelabel" },
              { label: "Manufacturing Process", href: "/manufacture" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="hover:opacity-70 transition border-b border-gray-200 pb-2 md:border-b-0 md:pb-0"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "17px",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            {[
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contactus" },
              { label: "Request Quote", href: "/contactus" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="hover:opacity-70 transition border-b border-gray-200 pb-2 md:border-b-0 md:pb-0"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "17px",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            {[
              { label: "Boxing Gloves", href: "/products" },
              { label: "Martial Arts Uniforms", href: "/products" },
              { label: "MMA Gear", href: "/products" },
              { label: "Training Accessories", href: "/products" },
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="hover:opacity-70 transition border-b border-gray-200 pb-2 md:border-b-0 md:pb-0"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "17px",
                  letterSpacing: "0%",
                  color: "#000000",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200" />

      {/* Brand Name */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-0">
        <p
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
          <br className="md:block hidden" />
          <span className="md:hidden"> </span>athletics
        </p>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <span 
            className="block text-[12px] md:text-[12px] mb-2 md:mb-0 md:hidden"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Website by Anna Granqvist
          </span>
          <span 
            className="block text-[12px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              lineHeight: "16px",
              color: "#000000",
            }}
          >
            © 2026
          </span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#0D0D0D] py-4">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
          <p 
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0px",
              color: "#E3E2E2",
            }}
          >
            © 2026 Sarlam Athletics. Private-label sports equipment
            manufacturer for combat sports brands.
          </p>
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

      {/* ───── CSS Styles ───── */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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
      `}</style>
    </div>
  );
}