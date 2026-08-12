"use client";

import React, { useRef, useState } from "react";
// Import the Header correctly from the home.tsx file
import { Header } from "../home/home";

// ─── Image Placeholder (supports a real src, falls back to a gray box) ─────
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
const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

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

// Two-column view icon
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

// ─── Product Data ──────────────────────────────────────────────────────────
const products = [
  {
    name: "Private Label Boxing Gloves",
    cta: "View Product",
    swatches: ["#B91C1C", "#0D0D0D"],
    image:
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "BJJ Gis and Jiu-Jitsu Uniforms",
    cta: "View Product",
    swatches: ["#0D0D0D", "#E5E5E5"],
    image:
      "https://images.unsplash.com/photo-1555597408-26bc8e548a46?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "MMA Fight Gloves",
    cta: "View Product",
    swatches: ["#B91C1C", "#0D0D0D"],
    image:
      "https://images.unsplash.com/photo-1615117709930-4ee6c4b6a0f9?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "Professional MMA Training Gloves",
    cta: "View Product",
    swatches: ["#B91C1C", "#0D0D0D"],
    image:
      "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "Boxing Focus Mitts and Training Pads",
    cta: "View Product",
    swatches: ["#B91C1C", "#0D0D0D"],
    image:
      "https://images.unsplash.com/photo-1544737151-6e4b999de2a5?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "Boxing Sparring Gloves",
    cta: "View Product",
    swatches: ["#B91C1C", "#0D0D0D"],
    image:
      "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "Custom Boxing Headguards",
    cta: "View Product",
    swatches: ["#B91C1C", "#0D0D0D"],
    image:
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=700",
  },
  {
    name: "Private Label Karate Uniforms",
    cta: "View Product",
    swatches: ["#E5E5E5", "#0D0D0D"],
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=700",
  },
];

const customizationOptions = [
  {
    title: "Custom Logo Branding",
    desc: "Add your logo using embroidery, screen printing, heat transfer, woven labels, rubber patches, embossing, or debossing",
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Custom Materials and Colors",
    desc: "Choose genuine leather, microfiber leather, premium PU, cotton canvas, neoprene, EVA foam, custom fabrics, and branded color combinations.",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Labels, Tags and Packaging",
    desc: "Create woven labels, hang tags, barcode stickers, instruction cards, poly bags, retail boxes, and branded shipping cartons.",
    image:
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Sizing and Product Specifications",
    desc: "Customize dimensions, weight, fit, padding density, stitching, closures, and performance features before production.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Sampling Before Production",
    desc: "Review samples before approving a larger order so your team can check fit, finish, materials, branding, and overall product quality.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600",
  },
];

const processSteps = [
  {
    title: "Flexible Minimum Order Quantities",
    desc: "Minimum quantities vary by product, material, and customization level. We support smaller launch orders as well as high-volume wholesale production.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=700",
  },
  {
    title: "Factory-Direct Wholesale Pricing",
    desc: "Pricing is based on product specifications, materials, order quantity, branding, and packaging. Request a tailored quotation for your product range.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=700",
  },
  {
    title: "Prototype and Sample Development",
    desc: "Review materials, fit, construction, branding, and packaging before approving your order for bulk production.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=700",
  },
];

const whyReasons = [
  {
    title: "Factory-Direct Production",
    desc: "Work directly with our manufacturing team for clearer communication, competitive pricing, and better control over product specifications.",
  },
  {
    title: "OEM and Private Label Support",
    desc: "Develop products with your own logos, colors, materials, sizing, labels, and retail-ready packaging.",
  },
  {
    title: "Quality Control Before Shipping",
    desc: "Orders are inspected for material consistency, stitching, sizing, padding, branding accuracy, and packaging before dispatch.",
  },
  {
    title: "Scalable Wholesale Manufacturing",
    desc: "We don't ship a container and disappear. We're in the loop for prototyping, quality control, and the hard logistics conversations.",
  },
];

// ─── Main Product Page ──────────────────────────────────────────────────────
export default function ProductPage() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white text-black font-sans">
      
      {/* ───── 1. Announcement Bar ───── */}
      <div className="w-full bg-[#0D0D0D] overflow-hidden">
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
              Wholesale and OEM manufacturing for combat sports and martial arts equipment.
            </span>
          ))}
        </div>
      </div>

      {/* ───── 2. Header (Sticky Nav) ───── */}
      {/* Assuming Header handles its own typography internally based on the global scale, keeping component standard */}
      <Header />

      {/* ───── 3. Hero Section ───── */}
      <section className="relative w-full h-[624px] overflow-hidden bg-[#0D0D0D]">
        <ImagePlaceholder
          className="absolute inset-0 w-full h-full object-cover"
          label="Hero - Combat Sports Equipment Display"
          src="https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&q=80&w=2000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />

        <div className="relative z-10 flex items-center h-full px-10 max-w-[1440px] mx-auto">
          <div className="max-w-[640px] flex flex-col gap-6">
            <h1 
              className="uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "56px",
                lineHeight: "105%",
                letterSpacing: "-2px",
                color: "#FFFFFF",
              }}
            >
              Private Label Combat Sports Equipment Manufacturer
            </h1>
            <div className="flex flex-col gap-4">
              <p
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                }}
              >
                Sarlam Athletics manufactures custom boxing gloves, MMA gear, BJJ
                gis, karate uniforms, protective equipment, and training
                accessories for sports brands, gyms, retailers, wholesalers, and
                distributors.
              </p>
              <p
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "20px",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                }}
              >
                Get OEM manufacturing, custom materials, logo branding, product
                sampling, private label packaging, and scalable bulk production
                from one manufacturing partner.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-white px-8 py-4 w-fit hover:bg-gray-100 transition"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0px",
                color: "#0D0D0D",
              }}
            >
              Request a Manufacturing Quote
            </a>
          </div>
        </div>
      </section>

      {/* ───── 4. Brand Statement Section ───── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <h2>
              <span 
                className="block"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "37px",
                  lineHeight: "45.6px",
                  letterSpacing: "-1.52px",
                  color: "#757575",
                }}
              >
                Why Brands Choose
              </span>
              <span 
                className="block"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "37px",
                  lineHeight: "45.6px",
                  letterSpacing: "-1.52px",
                  color: "#000000",
                }}
              >
                Our Combat Sports Equipment
              </span>
            </h2>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            <p
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0px",
                color: "#434343",
              }}
            >
              Every product is developed for wholesale production, private label
              branding, and repeatable quality at scale. Customize materials,
              sizing, colors, padding, logo placement, labels, packaging, and
              performance specifications to match your brand identity and market
              requirements.
            </p>
            <p
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "20px",
                letterSpacing: "0px",
                color: "#434343",
              }}
            >
              From product sampling to bulk manufacturing, we help sports
              brands, gyms, retailers, and distributors launch reliable combat
              sports equipment under their own name.
            </p>
          </div>
        </div>
      </section>

      {/* ───── 5. Product Grid Section ───── */}
      <section className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="py-6 border-b border-gray-200">
            <h2 
              className="uppercase"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "26px",
                lineHeight: "26px",
                letterSpacing: "-0.5px",
                color: "#0D0D0D",
              }}
            >
              Combat Sports Equipment We Manufacture
            </h2>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <span 
                className="uppercase"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "18px",
                  letterSpacing: "0px",
                  color: "#707070",
                }}
              >
                Items: {products.length}
              </span>
              <div className="flex items-center gap-1.5">
                <span 
                  className="uppercase"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "18px",
                    letterSpacing: "0px",
                    color: "#707070",
                  }}
                >
                  Category:
                </span>
                <button 
                  className="flex items-center gap-1 uppercase"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "18px",
                    letterSpacing: "0px",
                    color: "#0D0D0D",
                  }}
                >
                  All
                  <ChevronDownIcon />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span 
                className="uppercase"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "18px",
                  letterSpacing: "0px",
                  color: "#707070",
                }}
              >
                View:
              </span>
              <button className="p-1 hover:opacity-70 transition text-[#707070]">
                <ColumnsIcon />
              </button>
              <button className="p-1 hover:opacity-70 transition text-[#707070]">
                <GridIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-10 py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-200">
            {products.map((product, i) => (
              <div key={i} className="border-r border-b border-gray-200 group">
                <div className="relative aspect-square bg-gray-50 overflow-hidden flex items-center justify-center p-8">
                  <ImagePlaceholder
                    className="w-full h-full object-contain"
                    label={product.name}
                    src={product.image}
                  />
                  <button 
                    className="absolute top-3 right-3 bg-[#0D0D0D] uppercase opacity-0 group-hover:opacity-100 transition rounded-sm px-3 py-1.5"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: "6.5px",
                      lineHeight: "9.4px",
                      letterSpacing: "0px",
                      color: "#FFFFFF",
                    }}
                  >
                    Quick View
                  </button>
                </div>

                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
                  <div>
                    <span 
                      className="block"
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "10px",
                        lineHeight: "13px",
                        letterSpacing: "0.05px",
                        color: "#0D0D0D",
                      }}
                    >
                      {product.name}
                    </span>
                    <a
                      href="#"
                      className="underline hover:opacity-70 transition"
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "10px",
                        lineHeight: "13px",
                        letterSpacing: "0px",
                        color: "#0D0D0D",
                      }}
                    >
                      {product.cta}
                    </a>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    {product.swatches.map((color, si) => (
                      <span
                        key={si}
                        className="w-2.5 h-2.5 inline-block border border-gray-200 rounded-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center py-12">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-white uppercase px-10 py-4 border border-black hover:bg-black hover:text-white transition"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "5%",
              color: "#000000",
            }}
          >
            Request a Manufacturing Quote
          </a>
        </div>
      </section>

      {/* ───── 6. Customization Options Section ───── */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1392px] mx-auto px-10">
          <div className="mb-10">
            <h2 
              className="mb-4"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "37px",
                lineHeight: "46px",
                letterSpacing: "0px",
                color: "#0D0D0D",
              }}
            >
              Private Label Customization Options
            </h2>
            <p 
              className="max-w-[800px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0px",
                color: "#434343",
              }}
            >
              Customize your products with branded logos, materials, colors,
              sizing, labels, retail packaging, and performance specifications
              that match your market and brand identity.
            </p>
          </div>

          <div className="relative">
            <div
              ref={scrollerRef}
              className="flex gap-0 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 border-t border-gray-200 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {customizationOptions.map((option, i) => (
                <div
                  key={i}
                  data-card
                  className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-white border-r border-b border-gray-200 overflow-hidden flex flex-col"
                >
                  <div className="relative w-full aspect-[4/5]">
                    <ImagePlaceholder
                      className="w-full h-full"
                      label={option.title}
                      src={option.image}
                    />
                  </div>

                  <div className="p-5 flex-1">
                    <h3 
                      className="mb-2"
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "18px",
                        lineHeight: "24px",
                        letterSpacing: "0px",
                        color: "#0D0D0D",
                      }}
                    >
                      {option.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22px",
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

            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next customization option"
              className="hidden sm:flex absolute right-4 top-[140px] w-11 h-11 bg-white rounded-xl shadow-lg items-center justify-center hover:bg-gray-50 transition text-black"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous customization option"
              className="hidden sm:flex absolute left-4 top-[140px] w-11 h-11 bg-white rounded-xl shadow-lg items-center justify-center hover:bg-gray-50 transition rotate-180 text-black"
            >
              <ChevronRightIcon />
            </button>
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-[#0D0D0D] uppercase px-10 py-3.5 hover:bg-gray-900 transition"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "5%",
                color: "#FFFFFF",
              }}
            >
              Discuss Your Customization Requirements
            </a>
          </div>
        </div>
      </section>

      {/* ───── 7. Process / Pricing Section ───── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1376px] mx-auto px-10">
          <h2 
            className="mb-16"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "37px",
              lineHeight: "46px",
              letterSpacing: "-1.5px",
              color: "#000000",
            }}
          >
            Minimum Orders, Pricing and Samples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-200">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i < 2 ? "border-r border-gray-200" : ""
                }`}
              >
                <div className="p-8 pb-6">
                  <h3 
                    className="mb-3"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: "22px",
                      lineHeight: "26px",
                      letterSpacing: "-0.4px",
                      color: "#000000",
                    }}
                  >
                    {step.title}
                  </h3>
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
                    {step.desc}
                  </p>
                </div>

                <div className="px-8 pb-8 flex-1">
                  <div className="rounded-sm overflow-hidden h-[400px]">
                    <ImagePlaceholder
                      className="w-full h-full"
                      label={step.title}
                      src={step.image}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 8. Why Section ───── */}
      <section className="w-full bg-white py-20 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-10">
          <h2 
            className="mb-16"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "37px",
              lineHeight: "46px",
              letterSpacing: "-1.5px",
              color: "#000000",
            }}
          >
            Why Brands Manufacture With
            <br />
            Sarlam Athletics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-gray-200">
            {whyReasons.map((reason, i) => (
              <div
                key={i}
                className={`p-8 ${
                  i < 3 ? "border-r border-gray-200" : ""
                }`}
              >
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
                  {reason.title}
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
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 9. Footer ───── */}
      <footer className="w-full bg-white">
        <div className="border-t border-gray-200" />

        <div className="max-w-[1440px] mx-auto px-10 py-12 flex flex-col lg:flex-row justify-between gap-12">
          <div className="lg:w-1/2">
            <h3 
              className="mb-4"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "47px",
                lineHeight: "58px",
                letterSpacing: "-1.9px",
                color: "#000000",
              }}
            >
              Start Your Private Label
              <br />
              Manufacturing Project
            </h3>
            <a
              href="mailto:hello@sarlamathletics.com"
              className="transition break-all"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "47px",
                lineHeight: "58px",
                letterSpacing: "-1.9px",
                color: "#A5A5A5",
              }}
            >
              hello@sarlamathletics.com
            </a>
          </div>

          <div className="lg:w-1/2 flex gap-16">
            <div className="flex flex-col gap-3">
              {[
                "Home",
                "Products",
                "Private Label",
                "Manufacturing Process",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="transition border-b border-gray-200 pb-2 hover:opacity-70"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "17px",
                    letterSpacing: "0px",
                    color: "#000000",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {["About", "Contact", "Request Quote"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="transition border-b border-gray-200 pb-2 hover:opacity-70"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "17px",
                    letterSpacing: "0px",
                    color: "#000000",
                  }}
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
                  className="transition border-b border-gray-200 pb-2 hover:opacity-70"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "17px",
                    letterSpacing: "0px",
                    color: "#000000",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200" />

        <div className="max-w-[1440px] mx-auto px-10 py-10 flex items-end justify-between">
          <p 
            className="uppercase"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "101px",
              lineHeight: "85%",
              letterSpacing: "-3%",
              color: "#000000",
            }}
          >
            sarlam
            <br />
            athletics
          </p>
          <span className="hidden md:block" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "#000000" }}>
            © 2026
          </span>
        </div>

        <div className="w-full bg-[#0D0D0D] py-4">
          <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
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

      {/* ───── Marquee Animation ───── */}
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
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}