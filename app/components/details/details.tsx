"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "../home/home";

// ─── Image Placeholder ──────────────────────────────────────────────────────
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
    return <img src={src} alt={label} className={`object-cover ${className}`} />;
  }

  return (
    <div
      className={`bg-gray-200 flex items-center justify-center text-gray-400 text-sm ${className}`}
    >
      <span className="text-center px-4">[{label}]</span>
    </div>
  );
};

// ─── Icons ──────────────────────────────────────────────────────────────────
const ChevronRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 9L9 3M9 3H4M9 3v5" />
  </svg>
);

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12l5 5L20 7"
        stroke="#0D0D0D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Data Arrays (Fixed: Restored all missing data) ───────────────────────
const finishes = [
  { name: "Black", color: "#000000", selected: true },
  { name: "White", color: "#FFFFFF", selected: false },
  { name: "Navy", color: "#152238", selected: false },
];

const weightOptions = ["8 oz", "10 oz", "12 oz", "14 oz", "16 oz"];

const logoOptions = [
  "Screen Print",
  "Embroidery",
  "Rubber Patch",
  "Heat Transfer",
  "Debossed Logo",
];

const customizationOptions = [
  {
    title: "Custom Logo Branding",
    desc: "Add your logo using embroidery, screen printing, heat transfer, woven labels, rubber patches, embossing, or debossing",
    image: "/Page 2/Images/02.png",
  },
  {
    title: "Custom Materials and Colors",
    desc: "Choose genuine leather, microfiber leather, premium PU, cotton canvas, neoprene, EVA foam, custom fabrics, and branded color combinations.",
    image: "/Page 2/Images/03.png",
  },
  {
    title: "Labels, Tags and Packaging",
    desc: "Create woven labels, hang tags, barcode stickers, instruction cards, poly bags, retail boxes, and branded shipping cartons.",
    image: "/Page 2/Images/04.png",
  },
  {
    title: "Sizing and Product Specifications",
    desc: "Customize dimensions, weight, fit, padding density, stitching, closures, and performance features before production.",
    image: "/Page 2/Images/05.png",
  },
];

const relatedProducts = [
  {
    name: "Jiu Jitsu Suit (Gi)",
    href: "/jitsu",
    cta: "View Product",
    image: "/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png",
  },
  {
    name: "Boxing Gloves",
    href: "/details",
    cta: "View Product",
    image: "/Products/01 Private Label Boxing Gloves.png",
  },
  {
    name: "MMA Full Fight Gloves",
    href: "/mmagloves",
    cta: "View Product",
    image: "/Products/03 MMA Fight Gloves.png",
  },
  {
    name: "Boxing Head Guard",
    href: "/Boxingguard",
    cta: "View Product",
    image: "/Products/07 Custom Boxing Headguards.png",
  },
];

const moqCards = [
  {
    title: "Minimum Order Quantity",
    description:
      "MOQs vary based on product specifications, fabric choice, colors, labels, and packaging requirements.",
  },
  {
    title: "Wholesale Pricing",
    description:
      "Pricing is quoted based on materials, construction, branding method, order size, and delivery requirements.",
  },
  {
    title: "Sample Development",
    description:
      "Samples help you review fit, stitching, fabric, branding, and packaging before approving bulk production.",
  },
];

const features = [
  { text: "Factory-Direct Manufacturing" },
  { text: "OEM & Private Label Production" },
  { text: "Flexible Minimum Order Quantities" },
  { text: "Worldwide Shipping" },
];

// ─── Main Details Page Component ────────────────────────────────────────────
export default function DetailsComponent() {
  const customizationScrollerRef = useRef<HTMLDivElement>(null);
  const relatedScrollerRef = useRef<HTMLDivElement>(null);

  const [selectedFinish, setSelectedFinish] = useState<number>(0);
  const [selectedWeight, setSelectedWeight] = useState<string>("8 oz");
  const [selectedLogos, setSelectedLogos] = useState<string[]>(["Screen Print"]);

  const toggleLogo = (logo: string) => {
    setSelectedLogos((prev) =>
      prev.includes(logo) ? prev.filter((l) => l !== logo) : [...prev, logo]
    );
  };

  const scrollCustomization = (dir: 1 | -1) => {
    const el = customizationScrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const scrollRelated = (dir: 1 | -1) => {
    const el = relatedScrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-related-card]");
    const cardWidth = card ? card.offsetWidth + 16 : 360; 
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-['FFF_Acid_Grotesk',sans-serif]">
      <Header />

      {/* --- Announcement Banner --- */}
      <div className="bg-[#0D0D0D] h-[34px] flex items-center justify-center overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-white text-[12px] font-medium mx-8 tracking-widest md:tracking-normal">
              Request samples, MOQs, and custom production options for your brand.
            </span>
          ))}
        </div>
      </div>

      {/* --- Hero Banner --- */}
      <section className="relative h-[320px] md:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src="/Page 3/Container.png"
            alt="Boxing Gloves"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <span className="text-[15px] leading-[17px] tracking-[0.4px] text-[#CBCBCB] font-medium md:tracking-wide md:text-[#CCCCCC] mb-3 md:mb-4 uppercase text-center md:text-left">
            Products
          </span>
          <h1 className="text-[37px] leading-[46px] tracking-[-1.5px] font-medium text-white md:text-[44px] md:leading-tight md:font-bold md:tracking-normal max-w-[664px] uppercase text-center">
            Private Label Boxing Gloves Manufacturer
          </h1>
        </div>
      </section>

      {/* --- Product Presentation Grid --- */}
      <section className="px-5 md:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 max-w-[1440px] mx-auto">
          {/* Left: Product Image */}
          <div className="w-full lg:w-[616px] shrink-0">
            <div className="bg-[#F9F9F9] rounded-none p-4 md:p-2 aspect-square flex items-center justify-center lg:sticky lg:top-24">
              <img
                src="/Products/01 Private Label Boxing Gloves.png"
                alt="Boxing Gloves"
                className="w-[100%] h-[100%] md:w-[600px] md:h-[600px] object-contain"
              />
            </div>
          </div>

          {/* Right: Product Configuration Panel */}
          <div className="flex-1 max-w-full lg:max-w-[616px]">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 font-['PP_Mori',sans-serif] text-[12px] leading-[16px] tracking-[0px] text-[#6A7282] font-normal md:font-['FFF_Acid_Grotesk',sans-serif] md:text-xs md:font-medium mb-6 md:mb-8 text-left">
              <a href="/" className="hover:underline">Home</a>
              <span>/</span>
              <a href="/products" className="hover:underline">Products</a>
              <span>/</span>
              <span className="text-[#0D0D0D]">Boxing Gloves</span>
            </nav>

            {/* Title */}
            <div className="mb-6 md:mb-8">
              <p className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#666666] uppercase text-left md:text-sm md:tracking-normal">Uniform Manufacturing</p>
              <h2 className="text-[37px] leading-[46px] tracking-[-1.5px] font-medium text-[#0D0D0D] mt-2 text-left md:text-[44px] md:leading-tight md:font-bold md:tracking-normal">
                Private Label Boxing Gloves
              </h2>
              <p className="text-[20px] leading-[26px] tracking-[-0.6px] font-normal text-[#0D0D0D] mt-3 md:mt-4 text-left md:text-xl md:leading-relaxed md:tracking-normal">
                Custom heavyweight and lightweight boxing gloves manufacturing for gyms, academies, retailers, and boxing brands.
              </p>
            </div>

            {/* Divider */}
            <hr className="border-t border-gray-200 mb-6 md:mb-8" />

            {/* Description */}
            <div className="mb-8 md:mb-10">
              <p className="text-[16px] leading-[20px] tracking-[0px] font-normal text-[#666666] text-left md:text-base md:leading-relaxed">
                Sarlam Athletics manufactures premium private label boxing gloves for sports brands, gyms, retailers, distributors, and wholesalers. We offer OEM manufacturing, custom branding, premium materials, flexible minimum order quantities, and factory-direct production for training, sparring, fitness, and competition boxing gloves.
              </p>
              <p className="text-[16px] leading-[20px] tracking-[0px] font-normal text-[#666666] text-left md:text-base md:leading-relaxed mt-4">
                Customize every aspect of your gloves, including leather type, padding density, wrist closure, stitching, logo placement, colors, labels, and retail packaging to match your brand requirements.
              </p>
            </div>

            {/* Customize Heading */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-[26px] leading-[26px] tracking-[-0.5px] font-bold text-[#101828] text-left md:tracking-normal">
                Customize Your Boxing Gloves
              </h3>
              <p className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#6A7282] mt-1 md:mt-2 text-left md:font-medium md:text-[#99A1B0]">
                Select your requirements and we&apos;ll prepare a detailed quote.
              </p>
            </div>

            {/* Select Finish (Color Swatches) */}
            <div className="mb-6 md:mb-8">
              <label className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#0D0D0D] block mb-3 uppercase text-left md:text-sm md:tracking-normal">
                Select Finish
              </label>
              <div className="flex gap-3">
                {finishes.map((finish, i) => (
                  <button
                    key={finish.name}
                    onClick={() => setSelectedFinish(i)}
                    className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                      selectedFinish === i
                        ? "border-[#0D0D0D]"
                        : "border-transparent"
                    }`}
                  >
                    <span
                      className="w-5 h-5 md:w-6 md:h-6 rounded-full border border-[#0D0D0D]"
                      style={{ backgroundColor: finish.color }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Dropdowns */}
            <DropdownSelector label="Materials" guideLabel="Material Guide" value="Genuine Leather" />
            <DropdownSelector label="Padding" guideLabel="Padding Guide" value="IMF Foam" />
            <DropdownSelector label="Closure" guideLabel="Closure Guide" value="Velcro" />

            {/* Weight Selector */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#0D0D0D] uppercase text-left md:text-sm md:tracking-normal">Weight</label>
                <button className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#666666] hover:underline text-left md:font-medium md:text-xs">
                  Weight Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {weightOptions.map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-4 py-3 md:px-5 md:py-[15px] border text-[15px] leading-[17px] tracking-[0.4px] font-medium text-left transition-all md:tracking-normal ${
                      selectedWeight === weight
                        ? "border-[#0D0D0D] text-[#0D0D0D] bg-white"
                        : "border-gray-200 text-[#0D0D0D] hover:border-gray-400"
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Logo Application */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#0D0D0D] uppercase text-left md:text-sm md:tracking-normal">
                  Logo Application
                </label>
                <button className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#666666] hover:underline text-left md:font-medium md:text-xs">
                  Logo Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {logoOptions.map((logo) => (
                  <button
                    key={logo}
                    onClick={() => toggleLogo(logo)}
                    className={`px-4 py-3 md:px-5 md:py-[15px] border text-[15px] leading-[17px] tracking-[0.4px] font-medium text-left transition-all md:tracking-normal ${
                      selectedLogos.includes(logo)
                        ? "border-[#0D0D0D] text-[#0D0D0D] bg-white"
                        : "border-gray-200 text-[#0D0D0D] hover:border-gray-400"
                    }`}
                  >
                    {logo}
                  </button>
                ))}
              </div>
            </div>

            {/* Packaging Dropdown */}
            <DropdownSelector label="Packaging" guideLabel="Packaging Guide" value="Poly Bag" />

            {/* MOQ Display */}
            <div className="mb-2 md:mb-4">
              <div className="flex items-center justify-between mb-3">
                <label className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#0D0D0D] uppercase text-left md:text-sm md:tracking-normal">MOQ</label>
                <button className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#666666] hover:underline text-left md:font-medium md:text-xs">
                  Quantity Guide
                </button>
              </div>
              <div className="border border-gray-200 px-4 py-3 md:py-[15px]">
                <span className="text-[14px] md:text-[15px] font-medium text-[#0D0D0D]">
                  100–300
                </span>
              </div>
            </div>

            <p className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#666666] mb-8 md:mb-10 text-left md:text-xs">
              MOQ starts from 100 pairs
            </p>

            {/* CTA Buttons */}
            <div className="space-y-3 md:space-y-4 mb-4">
              <button className="w-full bg-[#0D0D0D] text-white text-[14px] leading-[18px] tracking-[0.1px] font-bold py-4 md:py-[18px] hover:bg-black/90 transition-colors uppercase md:tracking-wide text-left md:text-center">
                Request Manufacturing Quote
              </button>
              <button className="w-full border border-[#0D0D0D] text-[#0D0D0D] text-[13px] tracking-[0px] font-bold py-4 md:py-[18px] hover:bg-gray-50 transition-colors uppercase text-center md:text-sm md:tracking-wide">
                Ask About Samples
              </button>
            </div>
            <p className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#999999] text-center md:text-xs">
              Share your product specs and our team will respond with MOQ, sample, and wholesale production options.
            </p>
          </div>
        </div>
      </section>

      {/* --- Features Strip --- */}
      <section className="px-6 md:px-16 pb-16 md:pb-24">
        <hr className="border-t border-gray-200 mb-8 md:mb-10 max-w-[1416px] mx-auto" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-[1416px] mx-auto gap-4 md:gap-0">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] flex items-center justify-center shrink-0">
                <CheckIcon />
              </div>
              <p className="text-[15px] leading-[21px] tracking-[0.45px] font-medium text-[#0D0D0D] text-left md:text-[15px] md:leading-snug md:tracking-normal md:max-w-[205px]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>
{/* --- Product Options Grid --- */}
      <section className="bg-white px-4 md:px-16 py-10 md:py-24 border-y border-[#C9C9C9] md:border-y-0 md:border-t md:border-gray-100">
        <div className="max-w-[1440px] mx-auto overflow-hidden">
          
          {/* Header Row */}
          <div className="flex items-end justify-between mb-6 md:mb-16 gap-4">
            <h2 className="text-[26px] leading-[26px] md:text-[37px] md:leading-[46px] tracking-[-0.5px] font-bold text-[#0D0D0D] uppercase max-w-[302px] md:max-w-none md:tracking-normal md:normal-case">
              Martial Arts Uniform Manufacturing Options
            </h2>
            
            {/* Mobile: "View all" link */}
            <a
              href="#"
              className="text-[14px] leading-[18px] font-bold text-[#0D0D0D] whitespace-nowrap shrink-0 md:hidden"
            >
              View all
            </a>

            {/* Desktop: Arrows */}
            <div className="hidden md:flex items-center gap-[6px] shrink-0 z-10 relative pb-2">
              <button 
                onClick={() => scrollRelated(-1)} 
                aria-label="Previous" 
                className="w-[30px] h-[30px] flex items-center justify-center text-gray-400 hover:text-black transition"
              >
                <ArrowLeft />
              </button>
              <button 
                onClick={() => scrollRelated(1)} 
                aria-label="Next" 
                className="w-[30px] h-[30px] flex items-center justify-center text-black hover:opacity-70 transition"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* Mobile: 2-col wrap grid | Desktop: Horizontal scroll */}
          <div 
            ref={relatedScrollerRef}
            className="grid grid-cols-2 gap-3 md:flex md:overflow-x-auto md:gap-6 md:snap-x md:snap-mandatory hide-scrollbar md:pb-4"
          >
            {relatedProducts.map((product, i) => (
              <div
                key={i}
                data-related-card
                className="border border-[#C9C9C9] rounded bg-white flex flex-col md:w-[360px] md:snap-start md:shrink-0 md:rounded-none group"
              >
                <Link href={product.href} className="block p-2 md:p-0">
                  <div className="relative flex items-center justify-center aspect-square md:aspect-auto md:h-[280px] bg-gray-100 overflow-hidden rounded-sm md:rounded-none">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 md:p-0 md:object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#0D0D0D] text-white text-[10px] font-medium px-4 py-2 uppercase tracking-wider">
                        Quick View
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="px-2 pb-2 flex flex-col gap-2 md:px-5 md:py-4 md:flex-row md:items-center md:justify-between md:gap-0 mt-auto border-t border-transparent md:border-gray-200">
                  <span className="text-[12px] leading-[15px] font-bold text-[#0D0D0D] text-left md:text-[14px] md:leading-[18px] md:uppercase">
                    {product.name}
                  </span>
                  <Link
                    href={product.href}
                    className="
                      text-[10px] leading-[12px] font-bold text-[#0D0D0D] underline
                      md:no-underline md:border md:border-[#0D0D0D] md:px-3 md:py-1.5
                      md:uppercase md:hover:bg-[#0D0D0D] md:hover:text-white md:transition-colors
                      md:text-[10px] md:font-medium text-left
                    "
                  >
                    {product.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Quality Control Banner --- */}
      <section className="px-0 md:px-6 py-16 md:py-24">
        <div className="relative rounded-none overflow-hidden max-w-[1380px] mx-auto">
          <div className="absolute inset-0 bg-black">
            <img
              src="/Page 3/Box.png"
              alt="Quality Control"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6 md:py-36 md:px-8">
            <h2 className="font-['Switzer',sans-serif] text-[32px] leading-[38.4px] tracking-[-0.32px] font-semibold text-[#FFFFFF] text-center mb-6 md:mb-8 max-w-[654px] uppercase md:font-['FFF_Acid_Grotesk',sans-serif] md:text-[26px] md:font-bold md:leading-tight md:tracking-normal">
              Quality Control for Every Production Run
            </h2>
            <p className="text-[15px] leading-[18px] tracking-[0px] font-normal text-[#FFFFFF] text-center max-w-[654px] md:text-base md:text-white/80 md:leading-relaxed">
              Every approved sample becomes the benchmark for bulk manufacturing. We check sizing, stitching, fabric finish, reinforcement points, logo placement, labeling, and packaging before production moves into final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* --- MOQ, Pricing, and Samples --- */}
      <section className="px-6 md:px-20 py-16 md:py-24 max-w-[1440px] mx-auto">
        <h2 className="text-[22px] leading-[28px] tracking-[0px] font-bold text-[#0D0D0D] text-left mb-6 md:mb-8 md:text-[37px] md:leading-[46px] md:tracking-tight">
          MOQ, Pricing, and Samples
        </h2>
        <p className="text-[13px] leading-[20px] tracking-[0px] font-normal text-[#434343] text-left mb-10 md:mb-16 max-w-[1280px] md:text-base md:text-[#666666] md:leading-relaxed">
          Minimum order quantities and pricing depend on fabric selection, customization level, branding method, packaging, and total order volume. Share your requirements and we&apos;ll recommend the best starting point for your martial arts uniform project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {moqCards.map((card, i) => (
            <div key={i} className="bg-[#F5F5F5] p-6 md:p-8">
              <h3 className="text-[15px] leading-[20px] tracking-[0px] font-bold text-[#0D0D0D] text-left mb-3 md:mb-4 uppercase md:text-sm md:tracking-wide">
                {card.title}
              </h3>
              <p className="text-[12px] leading-[18px] tracking-[0px] font-normal text-[#434343] text-left md:text-sm md:text-[#666666] md:leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-white px-6 md:px-16 py-16 md:py-24 border-t border-gray-100">
        <div className="max-w-[1312px] mx-auto text-center">
          <h2 className="text-[26px] leading-[32px] md:text-[37px] md:leading-[46px] font-bold text-[#0D0D0D] mb-6 md:mb-8 tracking-tight">
            Start Your Private Label Manufacturing Project
          </h2>
          <a
            href="mailto:hello@sarlamathletics.com"
            className="text-[16px] md:text-lg text-[#0D0D0D] underline font-medium hover:opacity-70 transition-opacity"
          >
            hello@sarlamathletics.com
          </a>
        </div>
      </section>

      {/* --- Customization Options Section --- */}
      <section className="w-full bg-white py-16 md:py-24 flex justify-center">
        <div className="w-full max-w-[1440px] px-6 md:px-10">
          <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-0">
            <div className="max-w-[800px]">
              <h2
                className="mb-4 md:mb-6 text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0px",
                  color: "#0D0D0D",
                }}
              >
                Private Label Customization Options
              </h2>
              <p
                className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0px",
                  color: "#434343",
                }}
              >
                Customize your products with branded logos, materials, colors,
                sizing, labels, retail packaging, and performance specifications
                that match your market and brand identity.
              </p>
            </div>
            
            {/* Desktop & Mobile Arrows for Customization */}
            <div className="flex items-center gap-[6px] shrink-0 z-10 relative pb-1 md:pb-2">
              <button 
                onClick={() => scrollCustomization(-1)} 
                aria-label="Previous" 
                className="w-[30px] h-[30px] flex items-center justify-center text-gray-400 hover:text-black transition"
              >
                <ArrowLeft />
              </button>
              <button 
                onClick={() => scrollCustomization(1)} 
                aria-label="Next" 
                className="w-[30px] h-[30px] flex items-center justify-center text-black hover:opacity-70 transition"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              ref={customizationScrollerRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 border-t border-gray-200 hide-scrollbar pt-6 md:pt-8"
            >
              {customizationOptions.map((option, i) => (
                <div
                  key={i}
                  data-card
                  className="snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[calc(25%-18px)] bg-white border border-gray-200 md:border-t-0 md:border-l-0 md:border-b md:border-r overflow-hidden flex flex-col"
                >
                  <div className="relative w-full pb-[100%] shrink-0 flex-none bg-gray-100 overflow-hidden">
                    <ImagePlaceholder
                      className="absolute inset-0 w-full h-full object-cover"
                      label={option.title}
                      src={option.image}
                    />
                  </div>

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3
                      className="mb-3 md:mb-4 text-[18px] leading-[22px] md:text-[22px] md:leading-[26px]"
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0px",
                        color: "#0D0D0D",
                      }}
                    >
                      {option.title}
                    </h3>
                    <p
                      className="text-[14px] leading-[22px]"
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 400,
                        letterSpacing: "0px",
                        color: "#434343",
                      }}
                    >
                      {option.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 md:mt-16">
            <a
              href="/contactus"
              className="inline-flex items-center justify-center bg-[#0D0D0D] text-white w-full md:w-auto uppercase px-10 py-4 hover:bg-gray-800 transition-all duration-300 text-[14px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "5%",
                borderRadius: "8px",
              }}
            >
              Discuss Your Customization Requirements
            </a>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-[#D7DADE]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 md:py-16 flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
          {/* Left */}
          <div className="lg:w-1/2">
            <h3 className="mb-4 md:mb-6 text-[47px] leading-[58px] tracking-[-1.9px] font-medium text-[#000000] text-left md:text-[#0D0D0D] md:tracking-tight">
              Start Your Private Label
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>Manufacturing Project
            </h3>
            <a
              href="mailto:hello@sarlamathletics.com"
              className="text-[47px] leading-[58px] tracking-[-1.9px] font-medium text-[#A5A5A5] text-left transition break-all hover:text-[#000000] md:tracking-tight block"
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
                    className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px] font-normal text-[#000000]"
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
                  className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px] font-normal text-[#000000]"
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
                  className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px] font-normal text-[#000000]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-0" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
          <Link href="/" className="block">
            <span className="text-[69px] leading-[85%] tracking-[-0.03em] font-bold italic text-[#000000] text-left uppercase md:text-[101px] md:tracking-tight md:text-[#0D0D0D]">
              sarlam
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>athletics
            </span>
          </Link>
          <div className="flex flex-col md:items-end gap-2 md:gap-0">
            <span className="md:hidden block text-[12px] leading-[16.8px] tracking-[0px] font-normal text-[#A5A5A5] text-left">
              Website by Sanna Granqvist
              <br />
              © 2026
            </span>
            <span className="hidden md:block text-[12px] leading-[16px] font-normal text-[#0D0D0D]">
              © 2026
            </span>
          </div>
        </div>

        <div className="bg-black">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
            <span className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#E3E2E2] text-left">
              © 2026 Sarlam Athletics. Private-label sports equipment manufacturer
              for combat sports brands.
            </span>
            <span className="text-[12px] leading-[18px] tracking-[0px] font-medium text-[#FFFFFF] text-center md:text-left uppercase">
              USA (USD $) / English
            </span>
          </div>
        </div>
      </footer>

      {/* --- CSS Animations --- */}
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

/* --- Reusable Dropdown Selector --- */
function DropdownSelector({
  label,
  guideLabel,
  value,
}: {
  label: string;
  guideLabel: string;
  value: string;
}) {
  return (
    <div className="mb-6 md:mb-8">
      <div className="flex items-center justify-between mb-3">
        <label className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#0D0D0D] uppercase text-left md:text-sm md:tracking-normal">{label}</label>
        <button className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#666666] hover:underline text-left md:font-medium md:text-xs">
          {guideLabel}
        </button>
      </div>
      <div className="border border-gray-200 px-4 py-3 md:py-[15px] flex items-center justify-between cursor-pointer hover:border-gray-400 transition-colors">
        <span className="text-[15px] leading-[17px] tracking-[0.4px] font-medium text-[#0D0D0D] text-left md:tracking-normal">{value}</span>
        <ChevronDownIcon />
      </div>
    </div>
  );
}

/* --- FOOTER ACCORDION (Mobile) --- */
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
        className="w-full flex items-center justify-between py-4 md:py-6 text-left"
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
        <div className="pb-4 md:pb-6 flex flex-col gap-3 md:gap-4">
          {children}
        </div>
      )}
    </div>
  );
}

/* --- FOOTER LINK --- */
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a 
      href={href} 
      className="hover:text-[#0D0D0D] transition block"
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