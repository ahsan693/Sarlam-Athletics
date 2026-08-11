"use client";

import React, { useState } from "react";
import Link from "next/link"; // Added Next.js Link for proper routing

// ─── Image Placeholder Component (Updated to support src) ───────────────────
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
      className={`bg-gray-200 flex items-center justify-center text-gray-400 text-sm ${className}`}
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

// Chevron-down icon used by the FAQ accordion (matches PDF, not a plus/minus toggle)
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

// Logo mark — a bolt/"S" glyph, drawn inline since the PDF logo is a simple
// vector mark rather than a photographic image.
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
        <span className="text-xl font-normal text-black pr-8">{question}</span>
        <ChevronDown
          className={`shrink-0 text-black transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-base text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

// ─── Header Component ───────────────────────────────────────────────────────
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="relative max-w-[1440px] mx-auto flex items-center justify-between px-4 h-[52px]">
        {/* Left Nav */}
        <div className="flex items-center gap-4">
          <button>
            <MenuIcon />
          </button>
          <div className="w-[2px] h-12 bg-gray-300" />
          <nav className="flex items-center gap-4">
            <Link
              href="/products"
              className="font-medium text-xs leading-[18px] uppercase text-black hover:opacity-70 transition"
            >
              Products
            </Link>
            <Link
              href="/privatelabel"
              className="font-medium text-xs leading-[18px] uppercase text-black hover:opacity-70 transition"
            >
              Private Label
            </Link>
            <Link
              href="/manufacture"
              className="font-medium text-xs leading-[18px] uppercase text-black hover:opacity-70 transition"
            >
              Manufacturing
            </Link>
          </nav>
        </div>

        {/* Logo — true center of header, independent of nav widths */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-black"
        >
          <LogoMark className="w-[18px] h-[20px]" />
          <span className="font-black italic text-lg tracking-tight uppercase whitespace-nowrap">
            Sarlam Athletics
          </span>
        </Link>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="font-medium text-xs leading-[18px] uppercase text-black hover:opacity-70 transition"
          >
            About
          </Link>
          <Link
            href="/contactus"
            className="font-medium text-xs leading-[18px] uppercase text-black hover:opacity-70 transition"
          >
            Contact
          </Link>
          <div className="w-[2px] h-12 bg-gray-300" />
          <button className="hover:opacity-70 transition">
            <SearchIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

// ─── Main Page Component ────────────────────────────────────────────────────
export default function SarlamAthleticsPage() {
  const products = [
    {
      name: "Private Label Boxing Gloves",
      cta: "View Product →",
      image:
        "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=700",
    },
    {
      name: "BJJ Gi & Martial Arts Uniforms",
      cta: "View Product →",
      image:
        "https://images.unsplash.com/photo-1555597408-26bc8e548a46?auto=format&fit=crop&q=80&w=700",
    },
    {
      name: "Boxing Focus Mitts and Training Pads",
      cta: "View Product →",
      image:
        "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&q=80&w=700",
    },
    {
      name: "Jump Ropes & Training Accessories",
      cta: "Request Quote",
      image:
        "https://images.unsplash.com/photo-1515775538093-d2d95c5ee4f5?auto=format&fit=crop&q=80&w=700",
    },
    {
      name: "MMA Gloves",
      cta: "Request Quote",
      image:
        "https://images.unsplash.com/photo-1615117709930-4ee6c4b6a0f9?auto=format&fit=crop&q=80&w=700",
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

  const processSteps = [
    {
      num: "01",
      title: "Consultation & Product Specs",
      desc: "Tell us what you want to manufacture, including product type, materials, colors, logo placement, packaging, order quantity, and target price.",
      imageSrc:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=900",
    },
    {
      num: "02",
      title: "Sampling & Prototype Development",
      desc: "",
      imageSrc:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=700",
    },
    {
      num: "03",
      title: "Bulk Manufacturing",
      desc: "",
      imageSrc:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=700",
    },
    {
      num: "04",
      title: "Private Label Packaging & Delivery",
      desc: "",
      imageSrc:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=700",
    },
  ];

  return (
    <div className="w-full bg-white text-black font-sans">
      
      {/* ───── Header / Navbar ───── */}
      <Header />

      {/* ───── Hero Section ───── */}
      <section className="relative w-full h-[620px] bg-[#0D0D0D] overflow-hidden">
        {/* Background Image */}
        <ImagePlaceholder
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          label="Hero Background - Combat Sports Equipment"
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=2000"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-normal leading-[1.1] max-w-[1100px] mb-8">
            Private Label Combat Sports Equipment Manufacturer for U.S. Brands
          </h1>
          <p className="text-white/80 text-base max-w-[700px] mb-8 leading-relaxed">
            Sarlam Athletics manufactures premium private label boxing gloves,
            MMA equipment, BJJ gis, karate uniforms, belts, wraps, and training
            accessories for gyms, retailers, distributors, and sports brands
            worldwide.
          </p>
          <Link
            href="/contactus"
            className="inline-flex items-center justify-center bg-white text-black text-xs uppercase tracking-[0.15em] px-10 py-3 hover:bg-gray-100 transition"
          >
            Request a Manufacturing Quote
          </Link>
        </div>
      </section>

      {/* ───── Announcement Bar ───── */}
      <div className="w-full bg-[#0D0D0D] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-white text-xs tracking-wide mx-8 inline-block"
            >
              Private-label manufacturing for U.S. sports brands
            </span>
          ))}
        </div>
      </div>

      {/* ───── Products Carousel Section ───── */}
      <section className="w-full bg-white py-16">
        {/* Section Header */}
        <div className="max-w-[1350px] mx-auto px-10 flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-[37px] font-normal leading-tight">
            Combat Sports Equipment We Manufacture
          </h2>
          <div className="flex items-center gap-2">
            <button className="w-[30px] h-[30px] border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition">
              <ChevronLeft />
            </button>
            <button className="w-[30px] h-[30px] border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div className="overflow-x-auto">
          <div className="flex gap-0 min-w-max">
            {products.map((product, i) => (
              <div
                key={i}
                className="w-[500px] border-r border-gray-200 last:border-r-0 group"
              >
                {/* Product Image */}
                <div className="relative w-full aspect-square bg-white overflow-hidden flex items-center justify-center p-12">
                  <ImagePlaceholder
                    className="w-full h-full object-contain"
                    label={product.name}
                    src={product.image}
                  />
                  <button className="absolute top-4 right-4 bg-white text-black text-xs uppercase tracking-wider px-4 py-2 opacity-0 group-hover:opacity-100 transition border border-gray-200">
                    Quick View
                  </button>
                </div>
                {/* Product Info */}
                <div className="flex items-center justify-between px-8 py-5 border-t border-gray-200">
                  <span className="text-sm font-normal">{product.name}</span>
                  <Link
                    href="/products"
                    className="text-sm text-black hover:opacity-70 transition"
                  >
                    {product.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-black text-white text-[15px] uppercase tracking-wider px-10 py-3.5 border border-black hover:bg-gray-900 transition"
          >
            View All Items
          </Link>
        </div>
      </section>

      {/* ───── About Section ───── */}
      <section className="w-full bg-black text-white py-24">
        <div className="max-w-[1360px] mx-auto px-10 flex flex-col lg:flex-row gap-16">
          {/* Eyebrow */}
          <div className="lg:w-1/3">
            <p className="text-[15px] uppercase tracking-[0.15em] text-white/70">
              Trusted Private Label Sports Equipment Manufacturing for Growing
              Brands
            </p>
          </div>

          {/* Body */}
          <div className="lg:w-2/3">
            <p className="text-xl md:text-[22px] leading-relaxed mb-6 text-white/90">
              Sarlam Athletics is a trusted OEM and private label manufacturer
              specializing in boxing gloves, MMA equipment, BJJ uniforms, karate
              apparel, martial arts belts, hand wraps, and training accessories.
              We help sports brands launch high-quality custom products with
              flexible MOQs, premium materials, strict quality control, and
              global shipping.
            </p>
            <p className="text-xl md:text-[22px] leading-relaxed mb-10 text-white/90">
              From concept development and sampling to mass production and
              packaging, our experienced manufacturing team supports every stage
              of your product launch. Whether you&apos;re building a new sports
              brand or expanding an existing product line, we deliver reliable
              manufacturing solutions designed for long-term growth.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center border border-white text-white text-[15px] uppercase tracking-wider px-10 py-3.5 hover:bg-white hover:text-black transition"
            >
              Get a Free Manufacturing Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ───── Manufacturing Capabilities ───── */}
      <section className="w-full bg-white py-14">
        <div className="max-w-[1416px] mx-auto px-10">
          <p className="text-[15px] uppercase tracking-[0.15em] text-gray-500 mb-10 text-center">
            Manufacturing Capabilities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <h4 className="text-[15px] font-medium mb-1">{cap.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Why Brands Choose Sarlam Athletics ───── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[1376px] mx-auto px-10">
          <h2 className="text-3xl md:text-[37px] font-normal leading-tight mb-16">
            Why Brands Choose Sarlam Athletics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-200">
            {[
              {
                num: "01",
                title: "Factory-Direct Manufacturing",
                desc: "Manufacture directly with our factory for better pricing, faster communication, consistent product quality, and complete control over branding, materials, and production timelines.",
                imageSrc:
                  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
              },
              {
                num: "02",
                title: "Flexible MOQs for Growing Brands",
                desc: "Start with sample runs or smaller wholesale orders before scaling into larger production batches for your sports brand or retail business.",
                imageSrc:
                  "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=600",
              },
              {
                num: "03",
                title: "Private Label & OEM Customization",
                desc: "Customize logos, colors, materials, sizing, stitching, labels, and packaging across boxing gloves, martial arts uniforms, belts, wraps, and training gear.",
                imageSrc:
                  "https://images.unsplash.com/photo-1614210620247-49f3e9d89280?auto=format&fit=crop&q=80&w=600",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`p-8 ${i < 2 ? "border-r border-gray-200" : ""}`}
              >
                <div className="mb-4">
                  <span className="text-[15px] text-gray-400 uppercase tracking-widest">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-[22px] font-normal mb-3">{step.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
                  {step.desc}
                </p>
                <ImagePlaceholder
                  className="w-full h-[303px] rounded-sm"
                  label={step.title}
                  src={step.imageSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Why Partner With Us ───── */}
      <section className="w-full bg-white py-20 border-t border-gray-200">
        <div className="max-w-[1376px] mx-auto px-10">
          <h2 className="text-3xl md:text-[37px] font-normal leading-tight mb-16">
            Why Partner With Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-200">
            {[
              {
                title: "OEM & ODM Manufacturing Solutions",
                desc: "From product development and sampling to mass production, we manufacture custom boxing gloves, MMA gear, BJJ uniforms, karate apparel, belts, wraps, and training accessories according to your exact specifications.",
                imageSrc:
                  "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?auto=format&fit=crop&q=80&w=600",
              },
              {
                title: "Strict Quality Control Standards",
                desc: "Every product undergoes detailed inspection for stitching, material quality, sizing, padding density, logo placement, and packaging before shipment.",
                imageSrc:
                  "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=600",
              },
              {
                title: "Premium Material Development",
                desc: "Choose from genuine leather, microfiber leather, PU, cotton, EVA foam, reinforced stitching, custom fabrics, and premium trims tailored to your market.",
                imageSrc:
                  "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 ${i < 2 ? "border-r border-gray-200" : ""}`}
              >
                <h3 className="text-[22px] font-normal mb-4">{item.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Testimonial Section ───── */}
      <section className="relative w-full py-24 bg-[#7A2E22] overflow-hidden">
        {/* Background image — full-bleed, tinted red to match the PDF (not faded) */}
        <ImagePlaceholder
          className="absolute inset-0 w-full h-full object-cover"
          label="Testimonial Background"
          src="https://images.unsplash.com/photo-1517838503506-3b561ebea8eb?auto=format&fit=crop&q=80&w=2000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#5c1c14]/70 via-[#7a2418]/60 to-[#3d0f0a]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-[720px] mx-auto px-10 text-center">
          <p className="text-[15px] uppercase tracking-[0.15em] text-white/80 mb-8">
            Testimonials
          </p>
          <blockquote className="text-2xl md:text-[33px] font-normal leading-snug mb-8 text-white">
            &ldquo;Sarlam helped us move from sample boxing gloves to a full
            private-label production run with custom packaging and consistent
            quality checks.&rdquo;
          </blockquote>

          <p className="text-white/90 text-[15px] mb-8">
            Marcus Vance <span className="mx-2 text-white/50">/</span> Founder,
            Apex Strike Gear
          </p>

          {/* Avatars */}
          <div className="flex items-center justify-center gap-3">
            {testimonialAvatars.map((src, i) => (
              <div
                key={i}
                className={`w-14 h-14 rounded-2xl overflow-hidden border-2 ${
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
      <section className="w-full bg-white py-20">
        <div className="max-w-[1376px] mx-auto px-10">
          <h2 className="text-3xl md:text-[37px] font-normal leading-tight mb-16">
            How Our Private Label Manufacturing
            <br />
            Process Works
          </h2>
        </div>

        {/* Steps — first step is the featured, wider panel (~4:1:1:1), with
            text overlaid centered on a dark-toned photo, per the PDF */}
        <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr_1fr_1fr]">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className={`relative h-[400px] md:h-[520px] ${
                i < processSteps.length - 1
                  ? "border-r border-white/10 md:border-gray-200"
                  : ""
              }`}
            >
              <ImagePlaceholder
                className="absolute inset-0 w-full h-full"
                label={`Step ${step.num} - ${step.title}`}
                src={step.imageSrc}
              />
              <div className="absolute inset-0 bg-black/45" />

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-white/70 text-white text-[11px] tracking-widest mb-4">
                  {step.num}
                </span>
                <h3 className="text-white text-[15px] font-semibold uppercase tracking-wide mb-3 max-w-[220px]">
                  {step.title}
                </h3>
                {step.desc && (
                  <p className="text-white/85 text-[13px] uppercase tracking-wide leading-relaxed max-w-[260px]">
                    {step.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── FAQ Section ───── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[800px] mx-auto px-10">
          <h2 className="text-3xl md:text-[35px] font-normal leading-tight mb-12">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[15px] text-gray-500 mb-4">
              If you have any further questions or just want to reach our team,
              click the button below.
            </p>
            <Link
              href="/contactus"
              className="inline-flex items-center justify-center border border-black text-black text-[15px] uppercase tracking-wider px-8 py-3 hover:bg-black hover:text-white transition"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ───── CTA Section ───── */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1344px] mx-auto px-10">
          <div className="relative rounded-sm overflow-hidden">
            <ImagePlaceholder
              className="absolute inset-0 w-full h-full"
              label="CTA Background - Sports Equipment"
              src="https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&q=80&w=2000"
            />
            <div className="relative z-10 bg-black/60 py-24 px-12 md:px-20 flex flex-col items-center text-center">
              <div className="max-w-[700px]">
                <h2 className="text-3xl md:text-[37px] font-normal leading-tight text-white mb-6">
                  Start Manufacturing Your Custom Sports Equipment Today
                </h2>
                <p className="text-base text-white/80 leading-relaxed mb-8">
                  Partner with Sarlam Athletics to manufacture premium private
                  label boxing gloves, MMA gear, BJJ uniforms, karate apparel,
                  belts, wraps, and training accessories with flexible MOQs,
                  expert quality control, and worldwide delivery.
                </p>
                <Link
                  href="/contactus"
                  className="inline-flex items-center justify-center border border-white text-white text-[15px] uppercase tracking-wider px-10 py-3.5 hover:bg-white hover:text-black transition"
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
        <div className="max-w-[1440px] mx-auto px-10 py-12 flex flex-col lg:flex-row justify-between gap-12">
          {/* Left - CTA */}
          <div className="lg:w-1/2">
            <h3 className="text-4xl md:text-[47px] font-normal leading-tight mb-4">
              Let&apos;s Build Your Sports
              <br />
              Brand Together
            </h3>
            <a
              href="mailto:hello@sarlamathletics.com"
              className="text-2xl md:text-[47px] text-gray-400 hover:text-black transition"
            >
              hello@sarlamathletics.com
            </a>
          </div>

          {/* Right - Nav Columns (3 columns, matching the PDF grouping) */}
          <div className="lg:w-1/2 flex gap-16">
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
                  className="text-sm text-gray-500 hover:text-black transition"
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
                  className="text-sm text-gray-500 hover:text-black transition"
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
                  className="text-sm text-gray-500 hover:text-black transition"
                >
                  {link.label}
                </Link>
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

      {/* ───── Marquee Animation Styles ───── */}
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
      `}</style>
    </div>
  );
}