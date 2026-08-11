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

// Two-column view icon (matches the PDF's left "view" toggle — two vertical panes)
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

// ─── Product Data (8 items — matches "Items: 8" in the PDF) ────────────────
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
      {/* ───── Announcement Bar ───── */}
      <div className="w-full bg-[#0D0D0D] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-white text-xs tracking-wide mx-8 inline-block"
            >
              Wholesale and OEM manufacturing for combat sports and martial arts
              equipment.
            </span>
          ))}
        </div>
      </div>

      {/* ───── Header ───── */}
      <Header />

      {/* ───── Hero Section ───── */}
      <section className="relative w-full h-[624px] overflow-hidden bg-[#0D0D0D]">
        {/* Background Image */}
        <ImagePlaceholder
          className="absolute inset-0 w-full h-full object-cover"
          label="Hero - Combat Sports Equipment Display"
          src="https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&q=80&w=2000"
        />
        {/* Left-to-right dark gradient so the copy stays legible over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-10 max-w-[1440px] mx-auto">
          <div className="max-w-[640px] flex flex-col gap-6">
            <h1 className="text-white text-4xl md:text-[56px] font-bold leading-[1.1] uppercase">
              Private Label Combat Sports Equipment Manufacturer
            </h1>
            <div className="flex flex-col gap-4">
              <p className="text-white/80 text-base leading-relaxed">
                Sarlam Athletics manufactures custom boxing gloves, MMA gear, BJJ
                gis, karate uniforms, protective equipment, and training
                accessories for sports brands, gyms, retailers, wholesalers, and
                distributors.
              </p>
              <p className="text-white/80 text-base leading-relaxed">
                Get OEM manufacturing, custom materials, logo branding, product
                sampling, private label packaging, and scalable bulk production
                from one manufacturing partner.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-white text-black text-sm uppercase tracking-wider px-8 py-4 w-fit hover:bg-gray-100 transition"
            >
              Request a Manufacturing Quote
            </a>
          </div>
        </div>
      </section>

      {/* ───── Brand Statement Section ───── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Heading — two-tone: first line muted gray, second line black */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-[37px] font-bold leading-tight">
              <span className="text-gray-400">Why Brands Choose</span>
              <br />
              <span className="text-black">Our Combat Sports Equipment</span>
            </h2>
          </div>

          {/* Body Text */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <p className="text-base text-gray-700 leading-relaxed">
              Every product is developed for wholesale production, private label
              branding, and repeatable quality at scale. Customize materials,
              sizing, colors, padding, logo placement, labels, packaging, and
              performance specifications to match your brand identity and market
              requirements.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              From product sampling to bulk manufacturing, we help sports
              brands, gyms, retailers, and distributors launch reliable combat
              sports equipment under their own name.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Product Grid Section ───── */}
      <section className="w-full bg-white">
        {/* Section Header */}
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="py-6 border-b border-gray-200">
            <h2 className="text-[26px] font-bold uppercase">
              Combat Sports Equipment We Manufacture
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                Items: {products.length}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  Category:
                </span>
                <button className="flex items-center gap-1 text-xs text-black font-bold uppercase">
                  All
                  <ChevronDownIcon />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                View:
              </span>
              <button className="p-1 hover:opacity-70 transition">
                <ColumnsIcon />
              </button>
              <button className="p-1 hover:opacity-70 transition">
                <GridIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="max-w-[1440px] mx-auto px-10 py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-200">
            {products.map((product, i) => (
              <div
                key={i}
                className="border-r border-b border-gray-200 group"
              >
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-50 overflow-hidden flex items-center justify-center p-8">
                  <ImagePlaceholder
                    className="w-full h-full object-contain"
                    label={product.name}
                    src={product.image}
                  />
                  {/* Quick View Overlay */}
                  <button className="absolute top-3 right-3 bg-[#0D0D0D] text-white text-[10px] uppercase tracking-wider px-3 py-1.5 opacity-0 group-hover:opacity-100 transition rounded-sm">
                    Quick View
                  </button>
                </div>

                {/* Product Info */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
                  <div>
                    <span className="text-[13px] font-normal text-black block">
                      {product.name}
                    </span>
                    <a
                      href="#"
                      className="text-[13px] text-black underline hover:opacity-70 transition"
                    >
                      {product.cta}
                    </a>
                  </div>
                  {/* Color swatches */}
                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    {product.swatches.map((color, si) => (
                      <span
                        key={si}
                        className="w-2.5 h-2.5 inline-block"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request Quote Button */}
        <div className="flex justify-center py-12">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-white text-black text-sm uppercase tracking-wider px-10 py-4 border border-black hover:bg-black hover:text-white transition"
          >
            Request a Manufacturing Quote
          </a>
        </div>
      </section>

      {/* ───── Private Label Customization Options ───── */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1392px] mx-auto px-10">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-[37px] font-bold leading-tight mb-4">
              Private Label Customization Options
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-[800px]">
              Customize your products with branded logos, materials, colors,
              sizing, labels, retail packaging, and performance specifications
              that match your market and brand identity.
            </p>
          </div>

          {/* Cards Carousel — horizontal scroll with a peeking next card and a
              single floating "next" button overlaid on the edge, per the PDF.
              Cards are white with a thin border (not filled gray), matching a
              plain product-photo look, image on top and copy underneath. */}
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
                  {/* Card Image */}
                  <div className="relative w-full aspect-[4/5]">
                    <ImagePlaceholder
                      className="w-full h-full"
                      label={option.title}
                      src={option.image}
                    />
                  </div>

                  {/* Card Text */}
                  <div className="p-5 flex-1">
                    <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {option.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating next-card button, overlaid on the right edge, vertically
                centered on the image portion of the cards */}
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next customization option"
              className="hidden sm:flex absolute right-4 top-[140px] w-11 h-11 bg-white rounded-xl shadow-lg items-center justify-center hover:bg-gray-50 transition"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous customization option"
              className="hidden sm:flex absolute left-4 top-[140px] w-11 h-11 bg-white rounded-xl shadow-lg items-center justify-center hover:bg-gray-50 transition rotate-180"
            >
              <ChevronRightIcon />
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-black text-white text-sm uppercase tracking-wider px-10 py-3.5 hover:bg-gray-900 transition"
            >
              Discuss Your Customization Requirements
            </a>
          </div>
        </div>
      </section>

      {/* ───── Minimum Orders, Pricing and Samples ───── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1376px] mx-auto px-10">
          <h2 className="text-3xl md:text-[37px] font-bold leading-tight mb-16">
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
                {/* Text */}
                <div className="p-8 pb-6">
                  <h3 className="text-[22px] font-semibold mb-3">{step.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Image */}
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

      {/* ───── Why Brands Manufacture With Sarlam Athletics ───── */}
      <section className="w-full bg-white py-20 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-10">
          <h2 className="text-3xl md:text-[37px] font-bold leading-tight mb-16">
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
                <h3 className="text-[22px] font-semibold mb-4 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="w-full bg-white">
        <div className="border-t border-gray-200" />

        {/* Top Footer */}
        <div className="max-w-[1440px] mx-auto px-10 py-12 flex flex-col lg:flex-row justify-between gap-12">
          {/* Left */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl md:text-[47px] font-bold leading-tight mb-4">
              Start Your Private Label
              <br />
              Manufacturing Project
            </h3>
            <a
              href="mailto:hello@sarlamathletics.com"
              className="text-xl md:text-[47px] text-gray-400 hover:text-black transition break-all"
            >
              hello@sarlamathletics.com
            </a>
          </div>

          {/* Right - Nav Columns (3 columns, matching the PDF grouping, each
              link has a persistent thin bottom border like the private-label page) */}
          <div className="lg:w-1/2 flex gap-16">
            {/* Column 1 */}
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
                  className="text-sm text-gray-500 hover:text-black transition border-b border-gray-200 pb-2"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              {["About", "Contact", "Request Quote"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-500 hover:text-black transition border-b border-gray-200 pb-2"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Column 3 */}
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
                  className="text-sm text-gray-500 hover:text-black transition border-b border-gray-200 pb-2"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200" />

        {/* Brand Name */}
        <div className="max-w-[1440px] mx-auto px-10 py-10 flex items-end justify-between">
          <p className="text-7xl md:text-[101px] font-black italic leading-[0.9] uppercase tracking-tight text-black">
            sarlam
            <br />
            athletics
          </p>
          <span className="text-sm text-gray-400 hidden md:block">
            © 2026
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="w-full bg-[#0D0D0D] py-4">
          <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
            <p className="text-xs text-white/60">
              © 2026 Sarlam Athletics. Private-label sports equipment
              manufacturer for combat sports brands.
            </p>
            <span className="text-xs text-white/60 uppercase">
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