"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Import Centralized Header ──────────────────────────────────────────────
import { Header } from "../home/home";

// --- Image Placeholder ---
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

// --- Icons (inline SVGs) ---
const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 9L9 3M9 3H4M9 3v5" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ColumnsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="14" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="1" width="6" height="14" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="1" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
    <rect x="1" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M3.5 9.5L7 13L14.5 5"
        stroke="#0D0D0D"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="11" x2="8" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="4.5" r="1" fill="currentColor" />
    </svg>
  );
}

// --- Data ---
const finishOptions = ["STANDARD", "PREMIUM BRUSHED"];
const fitOptions = ["MEN", "WOMEN", "UNISEX", "KIDS", "MIXED"];
const materialOptions = [
  "100% COTTON CANVAS",
  "POLY-COTTON BLEND",
  "LIGHTWEIGHT (8OZ)",
  "MEDIUMWEIGHT (10OZ)",
  "HEAVYWEIGHT (14OZ)",
];
const brandingOptions = [
  "DIRECT EMBROIDERY (CHEST/NECK)",
  "SCREEN PRINT (BACK)",
  "WOVEN LABELS",
];
const packagingOptions = [
  "POLY BAG",
  "CUSTOM DRAWSTRING BAG",
  "ZIP PE BAG"
];

const sizeRanges = {
  Adult: ["A0", "A1", "A2", "A3", "A4"],
  Female: ["F1", "F2", "F3", "F4"],
  Kids: ["M0", "M1", "M2", "M3", "M4"],
};

const relatedProducts = [
  { 
    name: "Jiu Jitsu Suit (Gi)", 
    image: "/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png" 
  },
  { 
    name: "Boxing Gloves", 
    image: "/Products/01 Private Label Boxing Gloves.png" 
  },
  { 
    name: "MMA Full Fight Gloves", 
    image: "/Products/03 MMA Fight Gloves.png" 
  },
  { 
    name: "Boxing Head Guard", 
    image: "/Products/07 Custom Boxing Headguards.png" 
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

export default function KarateSuitDetailsPage() {
  const [selectedFinish, setSelectedFinish] = useState<string[]>(["STANDARD"]);
  const [selectedFit, setSelectedFit] = useState<string[]>(["UNISEX"]);
  const [selectedMaterial, setSelectedMaterial] = useState<string[]>(["100% COTTON CANVAS"]);
  const [selectedBranding, setSelectedBranding] = useState<string[]>(["DIRECT EMBROIDERY (CHEST/NECK)"]);
  const [selectedSize, setSelectedSize] = useState<string[]>(["A2"]);
  const [selectedPackaging, setSelectedPackaging] = useState<string[]>(["POLY BAG"]);

  const toggleOption = (
    option: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setState((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  return (
    <div className="min-h-screen bg-white font-['FFF_Acid_Grotesk',sans-serif]">
      
      {/* --- Centralized Header --- */}
      <Header />

      {/* --- Announcement Banner --- */}
      <div className="bg-[#0D0D0D] h-[34px] flex items-center justify-center overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-white text-xs font-medium mx-8 tracking-widest md:tracking-normal uppercase">
              SAMPLES, MOQS, AND CUSTOM PRODUCTION OPTIONS FOR YOUR BRAND.
            </span>
          ))}
        </div>
      </div>

      {/* --- Hero Banner --- */}
      <section className="relative h-[320px] md:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-black">
         <img
            src="/Page 7/01-1.png"
            alt="Private Label Sports Equipment Manufacturing"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <span className="text-[15px] leading-[17px] tracking-[0.4px] text-[#CBCBCB] font-medium md:tracking-wide md:text-[#CCCCCC] mb-3 md:mb-4 uppercase text-center md:text-left">
            PRODUCTS / PRIVATE LABEL MANUFACTURING
          </span>
          <h1 className="text-[37px] leading-[46px] tracking-[-1.5px] font-medium text-white md:text-[44px] md:leading-tight md:font-bold md:tracking-normal max-w-[800px] uppercase text-center">
            Private Label Sports Equipment Manufacturing
          </h1>
        </div>
      </section>

      {/* --- Product Presentation Grid --- */}
      <section className="px-5 md:px-16 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 max-w-[1440px] mx-auto">
          {/* Left: Product Image */}
          <div className="w-full lg:w-[616px] shrink-0">
            <div className="bg-[#F9F9F9] rounded-none p-4 md:p-2 aspect-[4/5] md:aspect-square flex items-center justify-center lg:sticky lg:top-24">
            <img
              src="/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png"
              alt="Jiu Jitsu Suit Gi"
              className="w-[100%] h-[100%] md:w-[600px] md:h-[600px] object-cover md:object-contain mix-blend-multiply"
            />
            </div>
          </div>

          {/* Right: Product Configuration Panel */}
          <div className="flex-1 max-w-full lg:max-w-[616px]">
            {/* Breadcrumbs */}
            <nav className="flex items-center flex-wrap gap-2 font-['PP_Mori',sans-serif] text-[12px] leading-[16px] tracking-[0px] text-[#6A7282] font-normal md:font-['FFF_Acid_Grotesk',sans-serif] md:text-xs md:font-medium mb-6 md:mb-8 text-left uppercase md:tracking-wide">
              <a href="/" className="hover:underline">HOME</a>
              <span>/</span>
              <a href="/products" className="hover:underline">PRODUCTS</a>
              <span>/</span>
              <a href="/products" className="hover:underline text-[#6A7282]">MARTIAL ARTS UNIFORM MANUFACTURING OPTIONS</a>
              <span>/</span>
              <span className="text-[#0D0D0D]">JIU JITSU SUIT (GI)</span>
            </nav>

            {/* Title */}
            <div className="mb-6">
              <p className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#666666] uppercase text-left md:text-sm md:tracking-normal">
                Martial Arts Uniform Manufacturing
              </p>
              <h2 className="text-[37px] leading-[46px] tracking-[-1.5px] font-medium text-[#0D0D0D] mt-2 text-left md:text-[44px] md:leading-tight md:font-bold md:tracking-normal">
                Jiu Jitsu Suit (Gi)
              </h2>
              <p className="text-[20px] leading-[26px] tracking-[-0.6px] font-normal text-[#0D0D0D] mt-3 md:mt-4 text-left md:text-xl md:leading-relaxed md:tracking-normal">
                Custom martial arts jiu jitsu uniform manufacturing for gyms, academies, and martial arts wear brands.
              </p>
            </div>

            {/* Divider */}
            <hr className="border-t border-gray-200 mb-6" />

            {/* Description */}
            <div className="mb-8 md:mb-6">
              <p className="text-[16px] leading-[20px] tracking-[0px] font-normal text-[#666666] text-left md:text-base md:leading-relaxed">
                Sarlam Athletics manufactures private-label martial arts uniforms for gyms, academies, combat sports brands, retailers, and distributors. We support custom fabric options, sizing, colorways, patches, embroidery, woven labels, packaging, and branding details for wholesale production.
              </p>
              <p className="text-[16px] leading-[20px] tracking-[0px] font-normal text-[#666666] text-left md:text-base md:leading-relaxed mt-4">
                Samples can be developed before bulk manufacturing so your team can review fit, stitching, material feel, logo placement, and final presentation before approving a larger order.
              </p>
            </div>

            {/* Customize Heading */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-[26px] leading-[26px] tracking-[-0.5px] font-bold text-[#101828] text-left md:tracking-normal">
                Customise Your Order
              </h3>
            </div>

            {/* Option Groups */}
            <OptionGroup
              label="Select Finish"
              options={finishOptions}
              selectedOptions={selectedFinish}
              onSelect={(val) => toggleOption(val, selectedFinish, setSelectedFinish)}
            />

            <OptionGroup
              label="Fit/Gender"
              guideLabel="Gender Guide"
              options={fitOptions}
              selectedOptions={selectedFit}
              onSelect={(val) => toggleOption(val, selectedFit, setSelectedFit)}
            />

            <OptionGroup
              label="Material/Fabric"
              guideLabel="Fabric Guide"
              options={materialOptions}
              selectedOptions={selectedMaterial}
              onSelect={(val) => toggleOption(val, selectedMaterial, setSelectedMaterial)}
            />

            <OptionGroup
              label="Branding Method"
              options={brandingOptions}
              selectedOptions={selectedBranding}
              onSelect={(val) => toggleOption(val, selectedBranding, setSelectedBranding)}
            />

            {/* Size Range Selector - Grouped layout */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#0D0D0D] uppercase text-left md:text-sm md:tracking-normal">Size Range</label>
                <button className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#666666] hover:underline text-left md:font-medium md:text-xs">
                  Size Guide
                </button>
              </div>
              
              <div className="space-y-4">
                {Object.entries(sizeRanges).map(([groupLabel, sizes]) => (
                  <div key={groupLabel}>
                    <span className="block text-[12px] leading-[16px] tracking-[0px] font-normal text-[#666666] mb-2 uppercase text-left md:font-medium md:text-xs">
                      {groupLabel}
                    </span>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => toggleOption(size, selectedSize, setSelectedSize)}
                          className={`px-4 py-3 md:px-5 md:py-[15px] border text-[15px] leading-[17px] tracking-[0.4px] font-medium text-left transition-all md:tracking-normal ${
                            selectedSize.includes(size)
                              ? "border-[#0D0D0D] text-[#0D0D0D] bg-white"
                              : "border-gray-200 text-[#0D0D0D] hover:border-gray-400"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Other Input Field */}
                <div>
                  <span className="block text-[12px] leading-[16px] tracking-[0px] font-normal text-[#666666] mb-2 uppercase text-left md:font-medium md:text-xs">
                    Other
                  </span>
                  <input 
                    type="text" 
                    placeholder="Any other" 
                    className="border border-gray-200 px-4 py-3 md:py-[15px] w-full text-[15px] leading-[17px] tracking-[0.4px] font-medium focus:outline-none focus:border-[#0D0D0D] md:text-[15px] md:tracking-normal"
                  />
                </div>
              </div>
            </div>

            <OptionGroup
              label="Packaging Method"
              options={packagingOptions}
              selectedOptions={selectedPackaging}
              onSelect={(val) => toggleOption(val, selectedPackaging, setSelectedPackaging)}
            />

            {/* Quantity Input */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#0D0D0D] uppercase text-left md:text-sm md:tracking-normal">
                  Quantity
                </label>
              </div>
              <input 
                type="number" 
                placeholder="Enter quantity" 
                className="border border-gray-200 px-4 py-3 md:py-[15px] w-full text-[15px] leading-[17px] tracking-[0.4px] font-medium focus:outline-none focus:border-[#0D0D0D] md:text-[15px] md:tracking-normal"
              />
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[#D92D20] shrink-0">
                  <InfoIcon />
                </span>
                <span className="text-[#D92D20] text-[12px] leading-[16px] font-medium tracking-wide md:text-[12px]">
                  Please ensure your order meets our Minimum Quantity
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 md:space-y-4 mb-4 mt-8 md:mt-12">
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
      <section className="px-6 md:px-16 pb-12 md:pb-16">
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

      {/* --- You May Also Like --- */}
      <section className="bg-white px-4 md:px-16 py-10 md:py-20 border-y border-[#C9C9C9] md:border-y-0 md:border-t md:border-gray-100">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex items-end justify-between mb-6 md:mb-12">
            <h2 className="text-[26px] leading-[26px] tracking-[-0.5px] font-bold text-[#0D0D0D] uppercase max-w-[302px] md:max-w-none md:leading-[28px] md:tracking-normal md:normal-case">
              Martial Arts Uniform Manufacturing Options
            </h2>
            <a
              href="/products"
              className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#0D0D0D] shrink-0 hover:underline md:uppercase md:flex md:items-center md:gap-1 md:text-sm md:tracking-normal"
            >
              View all
              <svg
                className="hidden md:inline-block"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>

          {/* Mobile: 2x2 grid | Desktop: horizontal scroll */}
          <div className="grid grid-cols-2 gap-3 md:flex md:gap-0 md:overflow-x-auto md:snap-x md:snap-mandatory md:[scrollbar-width:none] md:[-ms-overflow-style:none] md:[&::-webkit-scrollbar]:hidden">
            {relatedProducts.map((product, i) => (
              <div
                key={i}
                className="
                  border border-[#C9C9C9] rounded bg-white
                  md:rounded-none md:w-[360px] md:snap-start md:shrink-0
                  group cursor-pointer
                "
              >
                <div className="p-2 md:p-0">
                  <div className="relative aspect-square md:aspect-auto md:h-[280px] bg-gray-100 overflow-hidden rounded-sm md:rounded-none">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#0D0D0D] text-white text-[6.5px] font-medium px-3 py-1.5 uppercase tracking-wider">
                        Quick View
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-2 pb-2 flex flex-col gap-2 md:px-4 md:py-3 md:flex-row md:items-center md:justify-between md:gap-0">
                  <span className="text-[12px] leading-[15px] tracking-[0px] font-bold text-[#0D0D0D] text-left md:text-[10px] md:uppercase">
                    {product.name}
                  </span>
                  <a
                    href="#"
                    className="
                      text-[10px] leading-[12px] tracking-[0px] font-bold text-[#0D0D0D] underline
                      md:no-underline md:border md:border-[#0D0D0D] md:px-2 md:py-1
                      md:uppercase md:hover:bg-[#0D0D0D] md:hover:text-white md:transition-colors
                      md:text-[8px] md:font-medium
                    "
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Quality Control Banner --- */}
      <section className="px-0 md:px-6 py-0">
        <div className="relative rounded-none overflow-hidden max-w-[1380px] mx-auto">
          <div className="absolute inset-0 bg-black">
          <img
            src="/Page 7/01.png"
            alt="Quality Control"
            className="w-full h-full object-cover opacity-50"
          />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6 md:py-36 md:px-8">
            <h2 className="font-['Switzer',sans-serif] text-[32px] leading-[38.4px] tracking-[-0.32px] font-semibold text-[#FFFFFF] text-center mb-4 max-w-[654px] uppercase md:font-['FFF_Acid_Grotesk',sans-serif] md:text-[26px] md:font-bold md:leading-tight md:tracking-normal">
              Quality Control for Every Production Run
            </h2>
            <p className="text-[15px] leading-[18px] tracking-[0px] font-normal text-[#FFFFFF] text-center max-w-[654px] md:text-base md:text-white/80 md:leading-relaxed">
              Every approved sample becomes the benchmark for bulk manufacturing. We check sizing, stitching, fabric finish, reinforcement points, logo placement, labeling, and packaging before production moves into final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* --- MOQ, Pricing, and Samples --- */}
      <section className="px-6 md:px-20 py-12 md:py-20 max-w-[1440px] mx-auto border-t border-gray-100">
        <h2 className="text-[22px] leading-[28px] tracking-[0px] font-bold text-[#0D0D0D] text-left mb-4 md:mb-6 md:text-[37px] md:leading-[46px] md:tracking-tight">
          MOQ, Pricing, and Samples
        </h2>
        <p className="text-[13px] leading-[20px] tracking-[0px] font-normal text-[#434343] text-left mb-8 md:mb-10 max-w-[1280px] md:text-base md:text-[#666666] md:leading-relaxed">
          Minimum order quantities and pricing depend on fabric selection, customization level, branding method, packaging, and total order volume. Share your requirements and we'll recommend the best starting point for your martial arts uniform project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {moqCards.map((card, i) => (
            <div key={i} className="bg-[#F5F5F5] p-6 md:p-8">
              <h3 className="text-[15px] leading-[20px] tracking-[0px] font-bold text-[#0D0D0D] text-left mb-2 md:mb-3 uppercase md:text-sm md:tracking-wide">
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
      <section className="bg-white px-6 md:px-16 py-12 md:py-20 border-t border-gray-100">
        <div className="max-w-[1312px] mx-auto text-center">
          <h2 className="text-[26px] leading-[32px] md:text-[37px] md:leading-[46px] font-bold text-[#0D0D0D] mb-4 tracking-tight">
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

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-[#D7DADE]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 md:py-12 flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
          {/* Left */}
          <div className="lg:w-1/2">
            <h3 
              className="mb-4 text-[47px] leading-[58px] tracking-[-1.9px] font-medium text-[#000000] text-left md:text-[#0D0D0D] md:tracking-tight"
            >
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
            <span 
              className="text-[69px] leading-[85%] tracking-[-0.03em] font-bold italic text-[#000000] text-left uppercase md:text-[101px] md:tracking-tight md:text-[#0D0D0D]"
            >
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

        <div className="bg-[#0D0D0D]">
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
        `
      }} />
    </div>
  );
}

/* --- Reusable Option Group Selector --- */
function OptionGroup({
  label,
  guideLabel,
  options,
  selectedOptions,
  onSelect,
}: {
  label: string;
  guideLabel?: string;
  options: string[];
  selectedOptions: string[];
  onSelect: (val: string) => void;
}) {
  return (
    <div className="mb-6 md:mb-8">
      <div className="flex items-center justify-between mb-3">
        <label className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#0D0D0D] uppercase text-left md:text-sm md:tracking-normal">{label}</label>
        {guideLabel && (
          <button className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#666666] hover:underline text-left md:font-medium md:text-xs">
            {guideLabel}
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`px-4 py-3 md:px-5 md:py-[15px] border text-[15px] leading-[17px] tracking-[0.4px] font-medium text-left transition-all md:tracking-normal ${
              selectedOptions.includes(opt)
                ? "border-[#0D0D0D] text-[#0D0D0D] bg-white"
                : "border-gray-200 text-[#0D0D0D] hover:border-gray-400"
            }`}
          >
            {opt}
          </button>
        ))}
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
        className="w-full flex items-center justify-between py-4 text-left text-[14px] leading-[17px] tracking-[0px] font-normal text-[#0D0D0D] md:font-medium"
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
        <div className="pb-4 flex flex-col gap-3">
          {children}
        </div>
      )}
    </div>
  );
}

/* --- FOOTER LINK --- */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="hover:text-[#0D0D0D] transition block text-[14px] leading-[17px] tracking-[0px] font-normal text-[#434343] text-left md:text-[#757575]"
    >
      {children}
    </a>
  );
}