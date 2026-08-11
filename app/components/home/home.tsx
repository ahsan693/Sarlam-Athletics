"use client";

import React, { useState } from "react";

// ─── Image Placeholder Component ────────────────────────────────────────────
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

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M2 19c0-4.418 3.582-8 8-8s8 3.582 8 8"
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

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M7 1v12M1 7h12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M1 7h12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
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
        <span className="shrink-0">{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
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
// Added "export" here so other pages can import it
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
            <a
              href="#"
              className="font-medium text-xs leading-[18px] uppercase text-black hover:opacity-70 transition"
            >
              Products
            </a>
            <a
              href="#"
              className="font-medium text-xs leading-[18px] uppercase text-black hover:opacity-70 transition"
            >
              Private Label
            </a>
            <a
              href="#"
              className="font-medium text-xs leading-[18px] uppercase text-black hover:opacity-70 transition"
            >
              Manufacturing
            </a>
          </nav>
        </div>

        {/* Logo — true center of header, independent of nav widths */}
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 flex items-center"
        >
          <ImagePlaceholder
            className="w-[267px] h-[34px] bg-transparent"
            label="Logo"
          />
        </a>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="font-medium text-xs leading-[18px] uppercase text-black hover:opacity-70 transition"
          >
            About
          </a>
          <a
            href="#"
            className="font-medium text-xs leading-[18px] uppercase text-black hover:opacity-70 transition"
          >
            Contact
          </a>
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
    { name: "Private Label Boxing Gloves", cta: "View Product →" },
    { name: "BJJ Gi & Martial Arts Uniforms", cta: "View Product →" },
    { name: "Boxing Focus Mitts and Training Pads", cta: "View Product →" },
    { name: "Jump Ropes & Training Accessories", cta: "Request Quote" },
    { name: "MMA Gloves", cta: "Request Quote" },
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
          <a
            href="#"
            className="inline-flex items-center justify-center bg-white text-black text-xs uppercase tracking-[0.15em] px-10 py-3 hover:bg-gray-100 transition"
          >
            Request a Manufacturing Quote
          </a>
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
                <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                  <ImagePlaceholder
                    className="w-full h-full"
                    label={product.name}
                  />
                  <button className="absolute top-4 right-4 bg-white text-black text-xs uppercase tracking-wider px-4 py-2 opacity-0 group-hover:opacity-100 transition">
                    Quick View
                  </button>
                </div>
                {/* Product Info */}
                <div className="flex items-center justify-between px-8 py-5">
                  <span className="text-sm font-normal">{product.name}</span>
                  <a
                    href="#"
                    className="text-sm text-black hover:opacity-70 transition"
                  >
                    {product.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-black text-white text-[15px] uppercase tracking-wider px-10 py-3.5 border border-black hover:bg-gray-900 transition"
          >
            View All Items
          </a>
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
            <a
              href="#"
              className="inline-flex items-center justify-center border border-white text-white text-[15px] uppercase tracking-wider px-10 py-3.5 hover:bg-white hover:text-black transition"
            >
              Get a Free Manufacturing Quote
            </a>
          </div>
        </div>
      </section>

      {/* ───── Manufacturing Capabilities ───── */}
      <section className="w-full bg-white py-14">
        <div className="max-w-[1416px] mx-auto px-10">
          <p className="text-[15px] uppercase tracking-[0.15em] text-gray-500 mb-10">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                num: "01",
                title: "Factory-Direct Manufacturing",
                desc: "Manufacture directly with our factory for better pricing, faster communication, consistent product quality, and complete control over branding, materials, and production timelines.",
                image: "Factory manufacturing process",
              },
              {
                num: "02",
                title: "Flexible MOQs for Growing Brands",
                desc: "Start with sample runs or smaller wholesale orders before scaling into larger production batches for your sports brand or retail business.",
                image: "Team discussing production",
              },
              {
                num: "03",
                title: "Private Label & OEM Customization",
                desc: "Customize logos, colors, materials, sizing, stitching, labels, and packaging across boxing gloves, martial arts uniforms, belts, wraps, and training gear.",
                image: "Product customization",
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
                  label={step.image}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                title: "OEM & ODM Manufacturing Solutions",
                desc: "From product development and sampling to mass production, we manufacture custom boxing gloves, MMA gear, BJJ uniforms, karate apparel, belts, wraps, and training accessories according to your exact specifications.",
              },
              {
                title: "Strict Quality Control Standards",
                desc: "Every product undergoes detailed inspection for stitching, material quality, sizing, padding density, logo placement, and packaging before shipment.",
              },
              {
                title: "Premium Material Development",
                desc: "Choose from genuine leather, microfiber leather, PU, cotton, EVA foam, reinforced stitching, custom fabrics, and premium trims tailored to your market.",
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
      <section className="relative w-full py-24 bg-[#F8F8F7] overflow-hidden">
        {/* Background image placeholder */}
        <ImagePlaceholder
          className="absolute inset-0 w-full h-full opacity-10"
          label="Testimonial Background"
        />

        <div className="relative z-10 max-w-[720px] mx-auto px-10">
          <p className="text-[15px] uppercase tracking-[0.15em] text-gray-500 mb-8">
            Testimonials
          </p>
          <blockquote className="text-2xl md:text-[33px] font-normal leading-snug mb-8 text-black">
            &ldquo;Sarlam helped us move from sample boxing gloves to a full
            private-label production run with custom packaging and consistent
            quality checks.&rdquo;
          </blockquote>

          {/* Avatars */}
          <div className="flex items-center gap-3 mt-8">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="w-14 h-14 rounded-full overflow-hidden border-2 border-white"
              >
                <ImagePlaceholder
                  className="w-full h-full"
                  label={`Avatar ${i + 1}`}
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              {
                num: "01",
                title: "Consultation & Product Specs",
                desc: "Tell us what you want to manufacture, including product type, materials, colors, logo placement, packaging, order quantity, and target price.",
              },
              {
                num: "02",
                title: "Sampling & Prototype Development",
                desc: "",
              },
              { num: "03", title: "Bulk Manufacturing", desc: "" },
              {
                num: "04",
                title: "Private Label Packaging & Delivery",
                desc: "",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`relative ${i < 3 ? "border-r border-gray-200" : ""}`}
              >
                {/* Step Image */}
                <ImagePlaceholder
                  className="w-full h-[457px]"
                  label={`Step ${step.num} - ${step.title}`}
                />
                {/* Step Info */}
                <div className="p-6 bg-white">
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 mb-2 block">
                    {step.num}
                  </span>
                  <h3 className="text-[15px] font-medium">{step.title}</h3>
                  {step.desc && (
                    <p className="text-[15px] text-gray-500 leading-relaxed mt-2">
                      {step.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FAQ Section ───── */}
      <section className="w-full bg-white py-20">
        <div className="max-w-[800px] mx-auto px-10">
          <h2 className="text-3xl md:text-[35px] font-normal leading-tight mb-12">
            Frequently asked questions
          </h2>

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[15px] text-gray-500 mb-4">
              If you have any further questions or just want to reach our team,
              click the button below.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center border border-black text-black text-[15px] uppercase tracking-wider px-8 py-3 hover:bg-black hover:text-white transition"
            >
              Get in touch
            </a>
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
            />
            <div className="relative z-10 bg-black/60 py-24 px-12 md:px-20">
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
                <a
                  href="#"
                  className="inline-flex items-center justify-center border border-white text-white text-[15px] uppercase tracking-wider px-10 py-3.5 hover:bg-white hover:text-black transition"
                >
                  Get Your Free Manufacturing Quote
                </a>
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
              className="text-2xl md:text-[47px] text-black underline hover:opacity-70 transition"
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