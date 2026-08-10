"use client";

import React, { useState } from "react";

// ─── Image Placeholder ──────────────────────────────────────────────────────
const ImagePlaceholder = ({
  className = "",
  label = "Image",
}: {
  className?: string;
  label?: string;
}) => (
  <div
    className={`bg-gray-200 flex items-center justify-center text-gray-400 text-sm ${className}`}
  >
    <span className="text-center px-4">[{label}]</span>
  </div>
);

// ─── Icons ──────────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" />
    <line x1="14" y1="14" x2="19" y2="19" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M2 19c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const MenuIcon = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
    <line y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" />
    <line y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" />
    <line y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

const ListIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <line x1="1" y1="3" x2="15" y2="3" stroke="currentColor" strokeWidth="1.5" />
    <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" />
    <line x1="1" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// ─── Product Data ───────────────────────────────────────────────────────────
const products = [
  { name: "Private Label Boxing Gloves", cta: "View Product" },
  { name: "BJJ Gis and Jiu-Jitsu Uniforms", cta: "View Product" },
  { name: "MMA Fight Gloves", cta: "View Product" },
  { name: "Professional MMA Training Gloves", cta: "View Product" },
  { name: "Martial Arts Belts", cta: "Request Quote" },
  { name: "Boxing Focus Mitts and Training Pads", cta: "View Product" },
  { name: "Boxing Sparring Gloves", cta: "View Product" },
  { name: "Custom Boxing Headguards", cta: "View Product" },
  { name: "Private Label Karate Uniforms", cta: "View Product" },
  { name: "Boxing Hand Wraps", cta: "Inquire Now" },
  { name: "Training Shin Guards", cta: "Inquire Now" },
  { name: "Jump Ropes & Accessories", cta: "Inquire Now" },
];

const customizationOptions = [
  {
    title: "Custom Logo Branding",
    desc: "Add your logo using embroidery, screen printing, heat transfer, woven labels, rubber patches, embossing, or debossing",
  },
  {
    title: "Custom Materials and Colors",
    desc: "Choose genuine leather, microfiber leather, premium PU, cotton canvas, neoprene, EVA foam, custom fabrics, and branded color combinations.",
  },
  {
    title: "Labels, Tags and Packaging",
    desc: "Create woven labels, hang tags, barcode stickers, instruction cards, poly bags, retail boxes, and branded shipping cartons.",
  },
  {
    title: "Sizing and Product Specifications",
    desc: "Customize dimensions, weight, fit, padding density, stitching, closures, and performance features before production.",
  },
  {
    title: "Sampling Before Production",
    desc: "Review samples before approving a larger order so your team can check fit, finish, materials, branding, and overall product quality.",
  },
];

const processSteps = [
  {
    title: "Flexible Minimum Order Quantities",
    desc: "Minimum quantities vary by product, material, and customization level. We support smaller launch orders as well as high-volume wholesale production.",
  },
  {
    title: "Factory-Direct Wholesale Pricing",
    desc: "Pricing is based on product specifications, materials, order quantity, branding, and packaging. Request a tailored quotation for your product range.",
  },
  {
    title: "Prototype and Sample Development",
    desc: "Review materials, fit, construction, branding, and packaging before approving your order for bulk production.",
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
  const [customizationIndex, setCustomizationIndex] = useState(0);

  const handlePrev = () =>
    setCustomizationIndex((prev) =>
      prev === 0 ? customizationOptions.length - 1 : prev - 1
    );
  const handleNext = () =>
    setCustomizationIndex((prev) =>
      prev === customizationOptions.length - 1 ? 0 : prev + 1
    );

  // Show 4 visible cards at a time
  const visibleCards = [];
  for (let i = 0; i < 4; i++) {
    visibleCards.push(
      customizationOptions[(customizationIndex + i) % customizationOptions.length]
    );
  }

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
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-10 h-[52px]">
          {/* Left Nav */}
          <div className="flex items-center gap-6">
            <button className="lg:hidden">
              <MenuIcon />
            </button>
            <nav className="hidden lg:flex items-center gap-6">
              <a
                href="#"
                className="text-xs uppercase tracking-widest text-black hover:opacity-70 transition"
              >
                Products
              </a>
              <a
                href="#"
                className="text-xs uppercase tracking-widest text-black hover:opacity-70 transition"
              >
                Private Label
              </a>
              <a
                href="#"
                className="text-xs uppercase tracking-widest text-black hover:opacity-70 transition"
              >
                Manufacturing
              </a>
            </nav>
          </div>

          {/* Logo */}
          <a href="#" className="flex items-center">
            <ImagePlaceholder
              className="w-[140px] h-[40px] bg-transparent"
              label="Logo"
            />
          </a>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="hidden lg:block text-xs uppercase tracking-widest text-black hover:opacity-70 transition"
            >
              About
            </a>
            <a
              href="#"
              className="hidden lg:block text-xs uppercase tracking-widest text-black hover:opacity-70 transition"
            >
              Contact
            </a>
            <button className="hover:opacity-70 transition">
              <UserIcon />
            </button>
            <button className="hover:opacity-70 transition">
              <SearchIcon />
            </button>
          </div>
        </div>
      </header>

      {/* ───── Hero Section ───── */}
      <section className="relative w-full h-[624px] overflow-hidden">
        {/* Background Image */}
        <ImagePlaceholder
          className="absolute inset-0 w-full h-full"
          label="Hero - Combat Sports Equipment Display"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0D0D0D]/40" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full px-10 max-w-[1440px] mx-auto">
          <div className="max-w-[640px] flex flex-col gap-6">
            <h1 className="text-white text-4xl md:text-[56px] font-normal leading-[1.1]">
              Private Label Combat Sports Equipment Manufacturer
            </h1>
            <p className="text-white/80 text-base leading-relaxed">
              Sarlam Athletics manufactures custom boxing gloves, MMA gear, BJJ
              gis, karate uniforms, protective equipment, and training
              accessories for sports brands, gyms, retailers, wholesalers, and
              distributors worldwide.
            </p>
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
          {/* Heading */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-[37px] font-normal leading-tight">
              Why Brands Choose
              <br />
              Our Combat Sports Equipment
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
            <h2 className="text-[26px] font-normal">
              Combat Sports Equipment We Manufacture
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between py-4 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500">items: 8</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">category:</span>
                <button className="text-xs text-black border-b border-black pb-0.5">
                  All
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">View:</span>
              <button className="p-1 hover:opacity-70 transition">
                <GridIcon />
              </button>
              <button className="p-1 hover:opacity-70 transition">
                <ListIcon />
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
                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  <ImagePlaceholder
                    className="w-full h-full"
                    label={product.name}
                  />
                  {/* Quick View Overlay */}
                  <button className="absolute top-3 right-3 bg-[#0D0D0D] text-white text-[10px] uppercase tracking-wider px-3 py-1.5 opacity-0 group-hover:opacity-100 transition rounded-sm">
                    Quick View
                  </button>
                </div>

                {/* Product Info */}
                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
                  <span className="text-[13px] font-normal text-black">
                    {product.name}
                  </span>
                  <a
                    href="#"
                    className="text-[13px] text-black hover:opacity-70 transition whitespace-nowrap ml-2"
                  >
                    {product.cta}
                  </a>
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
            <h2 className="text-3xl md:text-[37px] font-normal leading-tight mb-4">
              Private Label Customization Options
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-[800px]">
              Customize your products with branded logos, materials, colors,
              sizing, labels, retail packaging, and performance specifications
              that match your market and brand identity.
            </p>
          </div>

          {/* Cards Carousel */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {visibleCards.map((option, i) => (
                <div
                  key={i}
                  className="bg-[#F5F5F5] rounded-sm overflow-hidden flex flex-col"
                >
                  {/* Card Image */}
                  <ImagePlaceholder
                    className="w-full h-[400px]"
                    label={option.title}
                  />

                  {/* Card Text */}
                  <div className="p-5 flex-1">
                    <h3 className="text-lg font-medium mb-2">{option.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed">
                      {option.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2 mt-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-white text-black border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition"
              >
                <ChevronRightIcon />
              </button>
            </div>
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
          <h2 className="text-3xl md:text-[37px] font-normal leading-tight mb-16">
            Minimum Orders, Pricing and Samples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i < 2 ? "border-r border-gray-200" : ""
                }`}
              >
                {/* Text */}
                <div className="p-8 pb-6">
                  <h3 className="text-[22px] font-normal mb-3">{step.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="px-8 pb-8 flex-1">
                  <div className="bg-black rounded-sm overflow-hidden h-[476px]">
                    <ImagePlaceholder
                      className="w-full h-full"
                      label={step.title}
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
          <h2 className="text-3xl md:text-[37px] font-normal leading-tight mb-16">
            Why Brands Manufacture With
            <br />
            Sarlam Athletics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {whyReasons.map((reason, i) => (
              <div
                key={i}
                className={`p-8 ${
                  i < 3 ? "border-r border-gray-200" : ""
                }`}
              >
                <h3 className="text-[22px] font-normal mb-4 leading-snug">
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
            <h3 className="text-3xl md:text-[47px] font-normal leading-tight mb-4">
              Start Your Private Label
              <br />
              Manufacturing Project
            </h3>
            <a
              href="mailto:hello@sarlamathletics.com"
              className="text-xl md:text-[47px] text-black underline hover:opacity-70 transition break-all"
            >
              hello@sarlamathletics.com
            </a>
          </div>

          {/* Right - Nav Columns */}
          <div className="lg:w-1/2 flex gap-16">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              {[
                "Home",
                "Products",
                "Private Label",
                "Manufacturing Process",
                "About",
                "Contact",
                "Request Quote",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Column 2 */}
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
                  className="text-sm text-gray-600 hover:text-black transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200" />

        {/* Brand Name */}
        <div className="max-w-[1440px] mx-auto px-10 py-10">
          <p className="text-7xl md:text-[101px] font-normal leading-none uppercase tracking-tight text-black">
            sarlam
            <br />
            athletics
          </p>
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
