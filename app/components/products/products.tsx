"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Import Centralized Header ──────────────────────────────────────────────
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

// ─── Image Placeholder ──────────────────────────────────────────────────────
const ImagePlaceholder = ({ className = "", label = "Image", src }: { className?: string; label?: string; src?: string; }) => {
  if (src) return <img src={src} alt={label} className={`${className}`} />;
  return (
    <div className={`bg-gray-200 flex items-center justify-center text-gray-400 text-sm ${className}`}>
      <span className="text-center px-4">[{label}]</span>
    </div>
  );
};

// ─── Icons ──────────────────────────────────────────────────────────────────
const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const ChevronRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const SmallArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-[1px]"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const MenuIcon = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none"><line y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" /><line y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" /><line y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="2" /></svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" /><line x1="14" y1="14" x2="19" y2="19" stroke="currentColor" strokeWidth="2" /></svg>
);

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 30 34" className={className} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0L4 14h13L0 34l26-15H12L24 0z" fill="currentColor" /></svg>
);

// ─── Product Data ──────────────────────────────────────────────────────────
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

const customizationOptions = [
  { title: "Custom Logo Branding", desc: "Add your logo using embroidery, screen printing, heat transfer, woven labels, rubber patches, embossing, or debossing", mobileDesc: "Embroidery, screen printing, heat transfer, woven labels, rubber patches, embossing, or debossing for a high-end look.", image: "/Page 2/Images/02.png" },
  { title: "Custom Materials and Colors", desc: "Choose genuine leather, microfiber leather, premium PU, cotton canvas, neoprene, EVA foam, custom fabrics, and branded color combinations.", mobileDesc: "Genuine leather, microfiber leather, premium PU, cotton canvas, neoprene, and EVA foam tailored to your brand specifications.", image: "/Page 2/Images/03.png" },
  { title: "Labels, Tags and Packaging", desc: "Create woven labels, hang tags, barcode stickers, instruction cards, poly bags, retail boxes, and branded shipping cartons.", mobileDesc: "Create custom woven labels, hang tags, barcode stickers, poly bags, and retail packaging for complete brand integrity.", image: "/Page 2/Images/04.png" },
  { title: "Sizing and Product Specifications", desc: "Customize dimensions, weight, fit, padding density, stitching, closures, and performance features before production.", mobileDesc: "Customize dimensions, weight, fit, padding density, stitching, closures, and performance features before production.", image: "/Page 2/Images/05.png" },
];

const processSteps = [
  { title: "Flexible Minimum Order Quantities", desc: "Minimum quantities vary by product, material, and customization level. We support smaller launch orders as well as high-volume wholesale production.", image: "/Page 2/Images/06.png" },
  { title: "Factory-Direct Wholesale Pricing", desc: "Pricing is based on product specifications, materials, order quantity, branding, and packaging. Request a tailored quotation for your product range.", image: "/Page 2/Images/07.png" },
  { title: "Prototype and Sample Development", desc: "Review materials, fit, construction, branding, and packaging before approving your order for bulk production.", image: "/Page 2/Images/08.png" },
];

const processCards = [
  { num: "01", title: "Consultation & Product Specs", desc: "Tell us what you want to manufacture, including product type, materials, colors, logo placement, packaging, order quantity, and target price.", image: "/Page 2/Images/02.png" },
  { num: "02", title: "Sampling & Prototype Development", desc: "Physical sample development to review ergonomics, stitching, sizing, and printing precision.", image: "/Page 2/Images/03.png" },
  { num: "03", title: "Bulk Manufacturing", desc: "Factory-level scalable manufacturing with intensive testing rounds on leather, synthetics, and foam fills.", image: "/Page 2/Images/04.png" },
  { num: "04", title: "Private Label Packaging & Delivery", desc: "Secure packing, sea/air cargo freight, and complete customs coordination straight to your warehouse.", image: "/Page 2/Images/05.png" },
];

const services = [
  { title: "Private Label & OEM Manufacturing", desc: "Manufacture custom boxing gloves, MMA gear, martial arts uniforms, belts, wraps, and training accessories under your own brand.", image: "/Page 2/Images/06.png" },
  { title: "Wholesale Sports Equipment", desc: "Factory-direct production for sports brands, gyms, wholesalers, distributors, and retailers with scalable manufacturing capacity.", image: "/Page 2/Images/07.png" },
  { title: "Product Development & Sampling", desc: "Develop and refine your products through prototype sampling, material testing, branding, and packaging before production.", image: "/Page 2/Images/08.png" },
];

const whyReasons = [
  { title: "Factory-Direct Production", desc: "Work directly with our manufacturing team for clearer communication, competitive pricing, and better control over product specifications." },
  { title: "OEM and Private Label Support", desc: "Develop products with your own logos, colors, materials, sizing, labels, and retail-ready packaging." },
  { title: "Quality Control Before Shipping", desc: "Orders are inspected for material consistency, stitching, sizing, padding, branding accuracy, and packaging before dispatch." },
  { title: "Scalable Wholesale Manufacturing", desc: "We don't ship a container and disappear. We're in the loop for prototyping, quality control, and the hard logistics conversations." },
];

// ─── Main Product Page ──────────────────────────────────────────────────────
export default function ProductPage() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const productScrollerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = [ "All Products", "Boxing Equipment", "MMA Equipment", "Martial Arts Uniforms", "Protective Equipment", "Training Equipment" ];
  const filteredProducts = selectedCategory === "All Products" ? allProducts : allProducts.filter(p => p.category === selectedCategory);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const scrollProductByCard = (dir: 1 | -1) => {
    const el = productScrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-product-card]");
    const cardWidth = card ? card.offsetWidth : el.offsetWidth;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white text-black font-sans flex flex-col items-center overflow-x-hidden">

      {/* ───── 1. Announcement Bar ───── */}
      <div className="w-full bg-[#0D0D0D] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-2.5">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="inline-block mx-8 text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#FFFFFF" }}>
              Wholesale and OEM manufacturing for combat sports and martial arts equipment.
            </span>
          ))}
        </div>
      </div>

      {/* ───── 2. Header ───── */}
      <Header />

      {/* ───── 3. Hero Section ───── */}
      <section className="relative w-full bg-[#0D0D0D] overflow-hidden flex justify-center">
        <div className="relative w-full max-w-[2560px] h-[540px] md:h-[624px]">
          <ImagePlaceholder className="absolute inset-0 w-full h-full object-cover" label="Hero - Combat Sports Equipment Display" src="/Page 2/Images/01.png" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />

          <div className="relative z-10 flex items-center h-full px-4 md:px-10 mt-4 md:mt-0">
            <div className="max-w-[640px] flex flex-col gap-4 md:gap-6">
              <h1 className="uppercase text-[32px] leading-[38px] md:text-[56px] md:leading-[105%]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-2px", color: "#FFFFFF" }}>
                Private Label Combat Sports Equipment Manufacturer
              </h1>
              <div className="flex flex-col gap-4">
                <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[20px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#FFFFFF" }}>
                  Sarlam Athletics manufactures custom boxing gloves, MMA gear, BJJ gis, karate uniforms, protective equipment, and training accessories for sports brands, gyms, retailers, wholesalers, and distributors.
                </p>
                <p className="text-[14px] leading-[20px] md:text-[16px] md:leading-[20px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#FFFFFF" }}>
                  Get OEM manufacturing, custom materials, logo branding, product sampling, private label packaging, and scalable bulk production from one manufacturing partner.
                </p>
              </div>
              <RollingButton
                href="/contactus"
                className="mt-4 md:mt-0 w-full md:w-fit bg-white px-10 py-3.5 text-[12px] md:text-[14px]"
                style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "0px", color: "#0D0D0D", borderRadius: "8px" }}
              >
                Request a Manufacturing Quote
              </RollingButton>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 4. Brand Statement Section ───── */}
      <section className="w-full bg-white py-16 md:py-24 flex justify-center">
        <div className="w-full max-w-[2560px] px-4 md:px-10 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <h2>
              <span className="block text-[24px] leading-[30px] md:text-[37px] md:leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-1.52px", color: "#757575" }}>
                Why Brands Choose
              </span>
              <span className="block text-[24px] leading-[30px] md:text-[37px] md:leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, letterSpacing: "-1.52px", color: "#000000" }}>
                Our Combat Sports Equipment
              </span>
            </h2>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-4 md:gap-6">
            <p className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#434343" }}>
              Every product is developed for wholesale production, private label branding, and repeatable quality at scale. Customize materials, sizing, colors, padding, logo placement, labels, packaging, and performance specifications to match your brand identity and market requirements.
            </p>
            <p className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#434343" }}>
              From product sampling to bulk manufacturing, we help sports brands, gyms, retailers, and distributors launch reliable combat sports equipment under their own name.
            </p>
          </div>
        </div>
      </section>

    {/* ───── 5. Product Grid Section ───── */}
<section
  className="w-full bg-white flex justify-center pt-[40px] pb-[40px] md:py-24"
  style={{ borderTop: "1px solid #C9C9C9" }}
>
  <div className="w-full max-w-[2560px]">

    {/* ── Mobile: Horizontal Product Scroller ── */}
    <div className="md:hidden">
      {/* Header row with title and arrows */}
      <div
        className="flex items-center justify-between"
        style={{
          padding: "10px 12px 9px 12px",
          borderBottom: "1px solid #C9C9C9",
        }}
      >
        <h2
          className="max-w-[300px]"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "26px",
            lineHeight: "27px",
            letterSpacing: "-0.6px",
            color: "#0D0D0D",
            margin: 0,
          }}
        >
          Combat Sports Equipment We Manufacture
        </h2>
        <div className="flex items-end shrink-0 ml-2" style={{ gap: "6px" }}>
          <button
            onClick={() => scrollProductByCard(-1)}
            aria-label="Previous product"
            className="flex items-center justify-center"
            style={{ width: "30px", height: "30px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            onClick={() => scrollProductByCard(1)}
            aria-label="Next product"
            className="flex items-center justify-center"
            style={{ width: "30px", height: "30px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal product scroller */}
      <div
        ref={productScrollerRef}
        className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {allProducts.map((product, i) => (
          <Link
            href={product.href}
            key={i}
            data-product-card
            className="snap-start shrink-0 w-full flex flex-col"
          >
            {/* Card wrapper */}
            <div className="relative w-full" style={{ height: "310px" }}>
              {/* Quick view eye icon - top right */}
              <span
                className="absolute z-10 flex items-center justify-center"
                style={{
                  top: "8px",
                  right: "1px",
                  width: "52px",
                  height: "52px",
                }}
              >
                <span
                  className="flex items-center justify-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "#0D0D0D",
                    borderRadius: "4px",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M1 11C1 11 4.5 4 11 4C17.5 4 21 11 21 11C21 11 17.5 18 11 18C4.5 18 1 11 1 11Z"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="3"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>

              {/* Product image */}
              <div
                className="w-full flex items-center justify-center overflow-hidden"
                style={{ height: "258px", marginTop: "52px" }}
              >
                <ImagePlaceholder
                  className="w-full h-full object-contain p-6"
                  label={product.name}
                  src={product.image}
                />
              </div>
            </div>

            {/* Product info bar with border */}
            <div style={{ padding: "12px" }}>
              <div
                className="flex items-center justify-between"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #C9C9C9",
                  borderRadius: "2px",
                  padding: "10px 12px",
                }}
              >
                <div className="flex flex-col" style={{ gap: "2px" }}>
                  <span
                    className="block"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "16px",
                      color: "#0D0D0D",
                    }}
                  >
                    {product.name}
                  </span>
                  <span
                    className="block"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: "18px",
                      color: "#0D0D0D",
                    }}
                  >
                    View Product →
                  </span>
                </div>
                {product.swatches && (
                  <div className="flex items-center shrink-0 ml-2" style={{ gap: "4px" }}>
                    {product.swatches.map((color, si) => (
                      <span
                        key={si}
                        className="inline-block"
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: color,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div
        className="flex justify-center"
        style={{ paddingTop: "8px", paddingLeft: "21px", paddingRight: "20px" }}
      >
        <RollingButton
          href="/contactus"
          className="w-full bg-white text-black uppercase flex items-center justify-center"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            letterSpacing: "5%",
            borderRadius: "0px",
            border: "2px solid #000000",
            padding: "16px 40px",
            height: "50px",
          }}
        >
          REQUEST A MANUFACTURING QUOTE
        </RollingButton>
      </div>
    </div>

    {/* ── Desktop: Full Product Grid (unchanged) ── */}
    <div className="hidden md:block">
      <div className="px-6 md:px-10">
        <div className="py-4 md:py-6 border-b border-gray-200">
          <h2 className="tracking-tight text-[24px] leading-[30px] md:text-[34px] md:leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 600, letterSpacing: "-0.5px", color: "#0D0D0D", margin: 0 }}>
            Combat Sports Equipment We Manufacture
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-200 gap-4 md:gap-0">
          <div className="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
            <span className="uppercase text-[11px] md:text-[12px] leading-[18px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "0px", color: "#707070" }}>
              Items: {filteredProducts.length}
            </span>

            <div className="flex items-center gap-1.5 relative" ref={dropdownRef}>
              <span className="uppercase text-[11px] md:text-[12px] leading-[18px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "0px", color: "#707070" }}>
                Category:
              </span>
              <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-1 uppercase text-[12px] leading-[18px] hover:opacity-70 transition" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0px", color: "#0D0D0D" }}>
                {selectedCategory === "All Products" ? "All" : selectedCategory}
                <ChevronDownIcon />
              </button>

              {isFilterOpen && (
                <div className="absolute top-full left-0 mt-2 w-[240px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 z-50 flex flex-col py-2 rounded-sm">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
                      className={`text-left px-5 py-3 hover:bg-gray-50 transition w-full ${selectedCategory === cat ? 'font-bold bg-gray-50' : 'font-medium'}`}
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#000000" }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-10 py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l-0 md:border-l border-gray-200">
          {filteredProducts.map((product, i) => (
            <div key={i} className="border-r-0 md:border-r border-b border-gray-200 group">
              <Link href={product.href} className="relative aspect-[4/3] md:aspect-square bg-gray-50 overflow-hidden flex items-center justify-center p-6 md:p-8">
                <ImagePlaceholder className="w-full h-full object-contain" label={product.name} src={product.image} />
                <span className="pointer-events-none absolute top-3 right-3 bg-[#0D0D0D] uppercase opacity-0 group-hover:opacity-100 transition rounded-sm px-3 py-1.5 text-[6.5px] leading-[9.4px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "0px", color: "#FFFFFF" }}>
                  Quick View
                </span>
              </Link>

              <div className="bg-white px-4 py-4 md:py-3 flex items-center justify-between border-t border-gray-200">
                <div className="flex flex-col gap-1 md:gap-0">
                  <span className="block text-[10px] md:text-[12px] leading-[13px] md:leading-[14px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0.05px", color: "#0D0D0D" }}>
                    {product.name}
                  </span>
                  <RollingButton
                    href={product.href}
                    className="underline text-left text-[10px] md:text-[11px] leading-[13px] md:leading-[14px]"
                    style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0px", color: "#0D0D0D" }}
                  >
                    {product.cta}
                  </RollingButton>
                </div>
                {product.swatches && (
                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    {product.swatches.map((color, si) => (
                      <span key={si} className="w-3 h-3 md:w-2.5 md:h-2.5 inline-block border border-gray-200 rounded-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 w-full py-20 flex justify-center items-center text-gray-500 font-medium">
              No products found in this category.
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center py-10 md:py-16 px-6 md:px-0">
        <RollingButton
          href="/contactus"
          className="w-full md:w-auto bg-white text-black uppercase px-10 py-4 border border-black text-[14px]"
          style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "5%", borderRadius: "8px" }}
        >
          Request a Manufacturing Quote
        </RollingButton>
      </div>
    </div>
  </div>
</section>


      {/* ───── 6. Customization Options Section ───── */}
      <section className="w-full bg-white py-10 md:py-24 flex justify-center">
        <div className="w-full max-w-[2560px] px-4 md:px-10">
          <div className="mb-8 md:mb-16">
            <h2 className="mb-4 md:mb-6 text-[22px] leading-[26px] md:text-[37px] md:leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0px", color: "#0D0D0D" }}>
              Private Label Customization Options
            </h2>
            <p className="max-w-[800px] text-[13px] leading-[18px] md:text-[16px] md:leading-[24px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#757575" }}>
              Customize your products with branded logos, materials, colors, sizing, labels, retail packaging, and performance specifications that match your market and brand identity.
            </p>
          </div>

          {/* Mobile: Vertical stacked cards */}
          <div className="flex flex-col gap-3 md:hidden">
            {customizationOptions.slice(0, 3).map((option, i) => (
              <div key={i} className="bg-white rounded-sm overflow-hidden">
                <div className="p-3">
                  <div className="w-full h-[140px] rounded-sm overflow-hidden bg-gray-100">
                    <ImagePlaceholder className="w-full h-full object-cover" label={option.title} src={option.image} />
                  </div>
                </div>
                <div className="px-3 pb-4">
                  <h3 className="mb-1.5 text-[16px] leading-[20px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0px", color: "#0D0D0D" }}>
                    {option.title}
                  </h3>
                  <p className="text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#757575" }}>
                    {option.mobileDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Horizontal scroller (unchanged) */}
          <div className="relative hidden md:block">
            <div ref={scrollerRef} className="flex gap-0 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 border-t border-gray-200 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {customizationOptions.map((option, i) => (
                <div key={i} data-card className="snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-1/4 bg-white border-r border-b border-gray-200 overflow-hidden flex flex-col">
                  <div className="relative w-full pb-[100%] shrink-0 flex-none bg-gray-100 overflow-hidden">
                    <ImagePlaceholder className="absolute inset-0 w-full h-full object-cover" label={option.title} src={option.image} />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="mb-3 md:mb-4 text-[18px] leading-[22px] md:text-[22px] md:leading-[26px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, letterSpacing: "0px", color: "#0D0D0D" }}>
                      {option.title}
                    </h3>
                    <p className="text-[14px] leading-[22px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#434343" }}>
                      {option.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center mt-10 md:mt-16">
            <RollingButton
              href="/contactus"
              className="w-full md:w-auto bg-[#0D0D0D] text-white uppercase px-10 py-4 text-[14px]"
              style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "5%", borderRadius: "8px" }}
            >
              Discuss Your Customization Requirements
            </RollingButton>
          </div>
        </div>
      </section>

      {/* ───── 7. Services Section (Mobile Only) ───── */}
      <section className="w-full bg-white py-14 md:hidden">
        <div className="px-5">
          <div className="mb-6">
            <span className="block text-[14px] leading-[18px] mb-1.5" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, color: "#000000" }}>
              Our Expertise
            </span>
            <h2 className="text-[24px] leading-[30px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-0.5px", color: "#000000" }}>
              Private Label Services
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {services.map((service, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-full h-[180px] rounded-sm overflow-hidden bg-gray-100">
                  <ImagePlaceholder className="w-full h-full object-cover" label={service.title} src={service.image} />
                </div>
                <div>
                  <h3 className="mb-2 text-[18px] leading-[22px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "0px", color: "#000000" }}>
                    {service.title}
                  </h3>
                  <p className="text-[13px] leading-[18px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#000000" }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 8. Process / Pricing Section (Desktop Only) ───── */}
      <section className="w-full bg-white py-16 md:py-24 hidden md:flex justify-center">
        <div className="w-full max-w-[2560px] px-6 md:px-10">
          <h2 className="mb-10 md:mb-16 text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.5px", color: "#000000" }}>
            Minimum Orders, Pricing and Samples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
            {processSteps.map((step, i) => (
              <div key={i} className={`flex flex-col border-b border-gray-200 md:border-b-0 ${i < 2 ? "md:border-r" : ""}`}>
                <div className="p-6 md:p-8 pb-4 md:pb-6">
                  <h3 className="mb-3 md:mb-4 text-[18px] leading-[22px] md:text-[22px] md:leading-[26px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-0.4px", color: "#000000" }}>
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] md:text-[15px] md:leading-[24px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#434343" }}>
                    {step.desc}
                  </p>
                </div>
                <div className="px-6 md:px-8 pb-6 md:pb-8 flex-1">
                  <div className="rounded-sm overflow-hidden h-[240px] md:h-[400px]">
                    <ImagePlaceholder className="w-full h-full object-cover" label={step.title} src={step.image} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 9. Process Section — BG Image Cards (Mobile Only) ───── */}
      <section className="w-full bg-white py-16 md:hidden">
        <div className="px-4">
          <h2 className="mb-6 text-[26px] leading-[32px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.5px", color: "#0D0D0D" }}>
            How Our Private Label Manufacturing Process Works
          </h2>
        </div>

        <div className="flex flex-col px-4 gap-6">
          {processCards.map((step, i) => (
            <div
              key={i}
              className="relative w-full h-[200px] rounded-[8px] overflow-hidden"
            >
              {/* Background image */}
              <img
                src={step.image}
                alt={`Step ${step.num} - ${step.title}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative z-10 px-5 pt-10 flex flex-col">
                {/* Badge */}
                <div className="inline-flex items-center justify-center px-2 py-[2px] rounded-full border border-white/70 w-fit mb-3">
                  <span style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "9px", lineHeight: "13px", color: "#FFFFFF" }}>{step.num}</span>
                </div>
                <h3 className="mb-3" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "15px", color: "#FFFFFF" }}>{step.title}</h3>
                <p style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "16px", color: "#FFFFFF" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── 10. Why Section ───── */}
      <section className="w-full bg-white py-16 md:py-24 border-t border-gray-200 flex justify-center">
        <div className="w-full max-w-[2560px] px-4 md:px-10">
          <h2 className="mb-10 md:mb-16 text-[32px] leading-[38px] md:text-[37px] md:leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 600, letterSpacing: "-1.5px", color: "#000000" }}>
            Why Brands Manufacture With{"\n"}Sarlam Athletics
          </h2>

          {/* Mobile: Stacked steps with top border */}
          <div className="flex flex-col md:hidden border border-gray-200">
            {whyReasons.map((reason, i) => (
              <div key={i} className={`px-0 py-8 ${i > 0 ? "border-t border-gray-200" : ""}`}>
                <div className="px-0">
                  <h3 className="mb-2 text-[19px] leading-[23px]" style={{ fontFamily: "'Switzer', sans-serif", fontWeight: 600, letterSpacing: "-0.44px", color: "#000000" }}>
                    {reason.title}
                  </h3>
                  <p className="text-[14px] leading-[22px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#47433B" }}>
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid (unchanged) */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200">
            {whyReasons.map((reason, i) => (
              <div key={i} className={`py-8 md:py-12 border-b border-gray-200 md:border-b-0 px-6 md:px-8 ${i < 3 ? "md:border-r" : ""}`}>
                <h3 className="mb-3 md:mb-4 text-[18px] leading-[24px] md:text-[22px] md:leading-[26px]" style={{ fontFamily: "'Switzer', sans-serif", fontWeight: 600, letterSpacing: "-0.44px", color: "#000000" }}>
                  {reason.title}
                </h3>
                <p className="text-[14px] leading-[22px] md:text-[15px] md:leading-[24px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#47433B" }}>
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* ───── 11. Footer ───── */}
      <footer className="w-full bg-white flex flex-col items-center">
        <div className="w-full border-t border-gray-200" />
        <div className="w-full max-w-[2560px] px-4 md:px-10 py-12 md:py-16 flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
          <div className="lg:w-1/2">
            <h3 className="mb-4 text-[47px] leading-[85%] md:text-[47px] md:leading-[58px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.9px", color: "#000000" }}>
              Start Your Private Label Manufacturing Project
            </h3>
            <a href="mailto:hello@sarlamathletics.com" className="transition break-all text-[47px] leading-[85%] md:text-[47px] md:leading-[58px] hover:text-black" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1px", color: "#A5A5A5" }}>
              hello@sarlamathletics.com
            </a>
          </div>

          <div className="lg:w-1/2 flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col gap-3 md:gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "Private Label", href: "/privatelabel" },
                { name: "Manufacturing Process", href: "/manufacture" }
              ].map((link) => (
                <a key={link.name} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#000000" }}>{link.name}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              {[
                { name: "About", href: "/aboutus" },
                { name: "Contact", href: "/contact" },
                { name: "Request Quote", href: "/contact" }
              ].map((link) => (
                <a key={link.name} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#000000" }}>{link.name}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              {[
                { name: "Boxing Gloves", href: "/details" },
                { name: "Martial Arts Uniforms", href: "/karatesuit" },
                { name: "MMA Gear", href: "/mmagloves" },
                { name: "Training Accessories", href: "/trainingpad" }
              ].map((link) => (
                <a key={link.name} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#000000" }}>{link.name}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-200" />
        <div className="w-full max-w-[2560px] px-4 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
          <p className="uppercase text-[69px] leading-[85%] md:text-[101px] md:leading-[85%]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, fontStyle: "italic", letterSpacing: "-3%", color: "#000000" }}>
            sarlam<br />athletics
          </p>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <span className="block text-[12px] md:text-[12px] mb-2 md:mb-0 md:hidden" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>
              Website by Sanna Granqvist
            </span>
            <span className="block text-[14px] md:hidden" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, lineHeight: "16px", color: "#000000" }}>
              © 2026
            </span>
            <span className="hidden md:block text-[12px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, lineHeight: "16px", color: "#000000" }}>
              © 2026
            </span>
          </div>
        </div>

        <div className="w-full bg-[#0D0D0D] py-4">
          <div className="w-full max-w-[2560px] mx-auto px-4 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
            <div className="flex flex-col md:flex-row md:gap-1">
              <p className="text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#E3E2E2" }}>
                © 2026 Sarlam Athletics.
              </p>
              <p className="text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, letterSpacing: "0px", color: "#E3E2E2" }}>
                Private-label sports equipment manufacturer for combat sports brands.
              </p>
            </div>
            <span className="uppercase text-[12px] leading-[18px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "0px", color: "#FFFFFF" }}>
              USA (USD $) / ENGLISH
            </span>
          </div>
        </div>
      </footer>

      {/* ───── Marquee Animation ───── */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
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
