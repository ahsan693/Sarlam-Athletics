"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

// ─── Import Centralized Header ──────────────────────────────────────────────
import { Header } from "../home/home";

// ─── Icons (inline SVGs) ───
const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 9L9 3M9 3H4M9 3v5" />
  </svg>
);

const SearchOutline = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const LinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const HandshakeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
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

// ─── Data ───
const includedItems = [
  "Product development and manufacturing consultation",
  "Custom material sourcing and testing",
  "Logo branding and private label customization",
  "Prototype sampling and approval process",
  "Bulk manufacturing with quality control inspections",
  "Custom packaging and labeling",
  "Export documentation and worldwide shipping support",
];

const industries = [
  "Sports Brands",
  "Gyms & Fitness Chains",
  "Martial Arts Academies",
  "Retailers",
  "eCommerce Brands",
  "Wholesale Distributors",
];

const testimonials = [
  {
    quote:
      "Sarlam helped us launch our private label boxing equipment range on schedule. The product quality was consistent, communication was excellent, and the manufacturing process was transparent from sampling through delivery.",
    name: "Linnéa Moberg",
    role: "CEO, Stackflow",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote:
      "Most advisors hand you a template and call it strategy. Delta actually sat in the room with us, rewrote the model, and prepped us for every question investors asked.",
    name: "Erik Sandell",
    role: "Co-founder, Waypoint Health",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
];

// ─── Hero Section ───
function HeroSection() {
  return (
    <section className="relative w-full h-[540px] md:h-[620px] bg-[#0D0D0D] overflow-hidden rounded-b-[16px] md:rounded-b-[24px]">
      {/* Background image */}
      <img
        src="/Page 4/01.png"
        alt="Boxing equipment manufacturing"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark maroon overlay for text readability + mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#3a0f14]/60 to-black/70" />

      {/* Text overlay — centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-12 text-center mt-4 md:mt-0">
        <div className="max-w-[760px] flex flex-col items-center">
          <p 
            className="mb-4 md:mb-5 text-[13px] md:text-[15px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#F0EDE9",
            }}
          >
            ABOUT SARLAM ATHLETICS
          </p>
          <h1 
            className="text-[36px] leading-[40px] md:text-[56px] md:leading-[105%]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              letterSpacing: "-2px",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            Private Label Sports Equipment Manufacturing Built for Growing Brands
          </h1>
          <p
            className="mt-4 md:mt-6 text-[14px] leading-[20px] md:hidden block"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            Simplifying production from prototype to worldwide delivery.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Video / Mission Section ───
function VideoSection() {
  return (
    <section className="py-16 md:py-[120px] px-6 md:px-8 bg-white">
      <div className="max-w-[1376px] mx-auto space-y-8 md:space-y-12">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          <div className="md:w-1/2 space-y-0">
            <h2 
              className="text-[28px] leading-[32px] md:text-[37px] md:leading-[45.6px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "-1.52px",
                color: "#000000",
              }}
            >
              Why Sarlam Athletics Exists
            </h2>
            <h2 
              className="text-[28px] leading-[32px] md:text-[37px] md:leading-[45.6px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "-1.52px",
                color: "#000000",
              }}
            >
              Our Mission
            </h2>
          </div>
          <div className="md:w-1/2 mt-2 md:mt-0">
            <p 
              className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                letterSpacing: "0px",
                color: "#434343",
              }}
            >
              Many sports brands struggle to find reliable manufacturing partners that deliver
              consistent quality, transparent communication, and dependable production timelines.
              Sarlam Athletics was built to simplify the manufacturing process through factory-direct
              production, custom development, and long-term OEM partnerships. We work with boxing
              brands, MMA companies, martial arts academies, fitness businesses, wholesalers, and
              retailers to manufacture high-quality private label sports equipment with flexible
              production options and strict quality control.
            </p>
          </div>
        </div>

        {/* Video placeholder */}
        <div className="relative w-full aspect-[4/3] md:aspect-[1376/535] rounded-lg overflow-hidden bg-gray-200 group cursor-pointer">
          <img
            src="/Page 4/02.png"
            alt="Martial arts training"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#0D0D0D" className="md:w-6 md:h-6">
                <polygon points="8,5 20,12 8,19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Our Values Section ───
const values = [
  {
    icon: <SearchOutline />,
    title: "Honest Product Assessment",
    description:
      "Every project begins with a practical review of your product requirements, materials, branding, production feasibility, and budget to ensure successful manufacturing.",
  },
  {
    icon: <LinkIcon />,
    title: "Material Sourcing Expertise",
    description:
      "We source premium leather, PU, microfiber, EVA foam, cotton, and performance fabrics based on your product category, quality requirements, and target price.",
  },
  {
    icon: <TargetIcon />,
    title: "Manufacturing Precision",
    description:
      "Every production run follows detailed quality inspections covering stitching, materials, padding, sizing, branding, finishing, and packaging.",
  },
  {
    icon: <HandshakeIcon />,
    title: "End-to-End Partnership",
    description:
      "From concept development and sampling to production, packaging, and worldwide shipping, we support every stage of your manufacturing journey.",
  },
];

function ValuesSection() {
  return (
    <section className="pb-12 bg-white">
      {/* Heading */}
      <div className="pt-16 pb-8 md:pt-[120px] md:pb-12 px-6 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <h2 
            className="text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              letterSpacing: "-1.5px",
              color: "#000000",
            }}
          >
            Values
          </h2>
        </div>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-200">
        {values.map((value, i) => (
          <div
            key={i}
            className={`py-8 md:p-10 space-y-4 md:space-y-6 px-6 md:px-8 border-b md:border-b-0 lg:border-r border-gray-200`}
          >
            <div className="w-5 h-5 text-black">{value.icon}</div>
            <h3 
              className="text-[18px] leading-[24px] md:text-[22px] md:leading-[26px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: "-0.4px",
                color: "#000000",
              }}
            >
              {value.title}
            </h3>
            <p 
              className="text-[14px] leading-[22px] md:text-[15px] md:leading-[24px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                letterSpacing: "0px",
                color: "#434343",
              }}
            >
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Manufacturing Process Timeline ───
const timelineSteps = [
  {
    title: "Consultation & Product Specs",
    description:
      "Tell us about your product, branding, materials, colors, packaging, order quantity, and target market so we can prepare detailed manufacturing specifications.",
  },
  {
    title: "Sampling & Prototyping",
    description:
      "We produce development samples so you can review product quality, fit, construction, branding, and packaging before approving production.",
  },
  {
    title: "Bulk Production & Quality Control",
    description:
      "After sample approval, production begins with continuous quality inspections covering materials, stitching, sizing, padding, logos, and packaging before shipment.",
  },
];

function TimelineSection() {
  return (
    <section className="bg-black py-16 md:py-[200px] px-6 md:px-20">
      <div className="max-w-[1000px] mx-auto flex flex-col items-start md:items-center text-left md:text-center">
        {/* Heading */}
        <div className="max-w-[820px] space-y-2 md:space-y-0 mb-10 md:mb-12">
          <h2 
            className="text-[24px] leading-[30px] md:text-[37px] md:leading-[46px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1.5px",
              color: "#B2B2B2",
            }}
          >
            Our Manufacturing Process
          </h2>
          <h2 
            className="text-[24px] leading-[30px] md:text-[37px] md:leading-[46px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1.5px",
              color: "#FFFFFF",
            }}
          >
            From Product Development to Bulk Manufacturing
          </h2>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative w-full flex flex-col items-start md:items-center pl-[5px] md:pl-0">
          {/* Mobile vertical line */}
          <div className="absolute top-2 bottom-0 left-[10px] w-[2px] bg-white/20 md:hidden" />
          
          {/* Desktop lead-in line before first dot */}
          <div className="hidden md:block w-[3px] h-[100px] bg-gradient-to-b from-transparent to-white/30" />

          {/* Steps */}
          {timelineSteps.map((step, i) => (
            <div key={i} className="relative flex flex-col md:items-center w-full mb-8 md:mb-0">
              <div className="flex flex-row md:flex-col items-start md:items-center relative z-10 w-full">
                <div className="shrink-0 w-3 h-3 rounded-full bg-[#B2B2B2] mt-[6px] md:mt-0 md:my-6 relative z-10" />
                <div className="ml-6 md:ml-0 md:text-center max-w-[600px] space-y-2 md:space-y-4">
                  <h3 
                    className="text-[22px] leading-[28px] md:text-[33px] md:leading-[40px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 500,
                      letterSpacing: "-0.4px",
                      color: "#FFFFFF",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-[15px] leading-[22px] md:text-[17px] md:leading-[26px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      letterSpacing: "0px",
                      color: "#CBCBCB",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block w-[3px] h-[220px] bg-white/20 mt-6" />
            </div>
          ))}
        </div>

        {/* CTA at bottom of timeline */}
        <div className="max-w-[600px] space-y-6 md:space-y-8 mt-12 md:mt-2 w-full md:text-center">
          <h2 
            className="text-[28px] leading-[34px] md:text-[37px] md:leading-[44px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1.5px",
              color: "#FFFFFF",
            }}
          >
            Ready to Launch Your Private Label Sports Brand?
          </h2>
          <Link
            href="/contactus"
            className="inline-block px-8 py-3.5 border border-white rounded-md w-full md:w-auto text-center bg-white hover:bg-transparent hover:text-white transition-colors text-[14px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              letterSpacing: "5%",
              textTransform: "uppercase",
              color: "#000000",
            }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── OEM & Private Label Services Section ─── 
const services = [
  {
    title: "Private Label & OEM Manufacturing",
    description:
      "Manufacture custom boxing gloves, MMA gear, martial arts uniforms, belts, wraps, and training accessories under your brand.",
    image: "/Page 4/03.png",
  },
  {
    title: "Wholesale Sports Equipment",
    description:
      "Factory-direct production for sports brands, gyms, wholesalers, distributors, and retailers with scalable manufacturing capacity.",
    image: "/Page 4/04.png",
  },
  {
    title: "Product Development & Sampling",
    description:
      "Develop and refine your products through prototype sampling, material testing, branding, and packaging before production.",
    image: "/Page 4/05.png",
  },
];

function ServicesSection() {
  return (
    <section className="py-0 bg-white">
      {/* Heading */}
      <div className="px-6 md:px-8 pt-12 md:pt-0 pb-8 md:pb-12">
        <div className="max-w-[1280px] mx-auto">
          <h2 
            className="text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              letterSpacing: "-1.5px",
              color: "#000000",
            }}
          >
            OEM & Private Label Manufacturing Services
          </h2>
        </div>
      </div>

      {/* Services grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
        {services.map((service, i) => (
          <div
            key={i}
            className={`py-8 md:p-8 px-6 md:px-8 space-y-6 group cursor-pointer hover:bg-gray-50 transition-colors ${
              i < services.length - 1 ? "md:border-r border-gray-200" : ""
            } border-b md:border-b-0`}
          >
            {/* Text */}
            <div className="space-y-3 md:space-y-4">
              <h4 
                className="group-hover:underline text-[20px] leading-[24px] md:text-[22px] md:leading-[26px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-0.4px",
                  color: "#000000",
                }}
              >
                {service.title}
              </h4>
              <p 
                className="text-[14px] leading-[22px] md:text-[15px] md:leading-[24px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0px",
                  color: "#434343",
                }}
              >
                {service.description}
              </p>
            </div>
            {/* Image */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 mt-6">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Products We Manufacture Section ───
const productTags = [
  "Private Label Boxing Gloves",
  "BJJ Uniforms",
  "Karate Gis",
  "Martial Arts Belts",
  "Boxing Hand Wraps",
  "Protective Equipment",
  "Training Jump Ropes",
  "Combat Accessories",
];

function ProductsSection() {
  return (
    <section className="py-12 md:py-20 px-6 md:px-20 bg-white">
      <div className="max-w-[1280px] mx-auto space-y-6 md:space-y-8">
        <h2 
          className="text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 700,
            letterSpacing: "-1.5px",
            color: "#0D0D0D",
          }}
        >
          Combat Sports Equipment We Manufacture
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {productTags.map((tag, i) => (
            <Link
              key={i}
              href={`/products`}
              className="px-4 py-2 md:px-6 md:py-3.5 bg-[#F5F5F5] border border-[#DADADA] rounded-md hover:bg-[#E8E8E8] transition-colors text-[13px] md:text-[15px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                lineHeight: "1.4",
                color: "#0D0D0D",
              }}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Industries We Serve Section ───
function IndustriesSection() {
  return (
    <section className="py-12 px-6 md:px-3 bg-white">
      <div className="max-w-[1416px] mx-auto space-y-8 md:space-y-10">
        <p 
          className="text-left md:text-center text-[13px] md:text-[15px]"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#000000",
          }}
        >
          Industries We Serve
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 border-t border-gray-200 pt-6">
          {industries.map((title, i) => (
            <div
              key={i}
              className="relative aspect-[251/284] overflow-hidden rounded-md group cursor-pointer"
            >
              {/* Note: In the user's provided code, 'industries' was an array of strings, so we map it appropriately */}
              <div className="w-full h-full bg-gray-100 flex items-end p-4 group-hover:bg-gray-200 transition-colors">
                <h3 
                  className="text-[16px] leading-[20px] md:text-[26px] md:leading-[26px]"
                  style={{
                    fontFamily: "'Switzer', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "-0.44px",
                    color: "#000000",
                  }}
                >
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───
function Footer() {
  const footerNav = {
    pages: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Private Label", href: "/privatelabel" },
      { label: "Manufacturing Process", href: "/manufacture" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contactus" },
      { label: "Request Quote", href: "/contactus" },
    ],
    products: [
      { label: "Boxing Gloves", href: "/products" },
      { label: "Martial Arts Uniforms", href: "/products" },
      { label: "MMA Gear", href: "/products" },
      { label: "Training Accessories", href: "/products" },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-10 md:py-12 flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
        {/* Left - CTA */}
        <div className="lg:w-1/2 space-y-4 md:space-y-0">
          <h2 
            className="text-[32px] leading-[38px] md:text-[47px] md:leading-[58px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1.9px",
              color: "#000000",
            }}
          >
            Start Your Private Label Manufacturing Project
          </h2>
          <a
            href="mailto:hello@sarlamathletics.com"
            className="hover:text-[#0D0D0D] transition-colors block text-[22px] leading-[30px] md:text-[47px] md:leading-[58px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1px",
              color: "#A5A5A5",
            }}
          >
            hello@sarlamathletics.com
          </a>
        </div>

        {/* Right - Nav columns */}
        <div className="lg:w-1/2 flex flex-col md:grid md:grid-cols-3 gap-8">
          {/* Pages */}
          <div className="space-y-3">
            {footerNav.pages.map((link) => (
              <div
                key={link.label}
                className="flex items-center justify-between group border-b border-gray-200 pb-2 md:border-b-0 md:pb-0"
              >
                <Link
                  href={link.href}
                  className="hover:opacity-70 transition-opacity text-[14px] leading-[17px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  {link.label}
                </Link>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                  <ArrowUpRight />
                </span>
              </div>
            ))}
          </div>

          {/* Company */}
          <div className="space-y-3">
            {footerNav.company.map((link) => (
              <div
                key={link.label}
                className="flex items-center justify-between group border-b border-gray-200 pb-2 md:border-b-0 md:pb-0"
              >
                <Link
                  href={link.href}
                  className="hover:opacity-70 transition-opacity text-[14px] leading-[17px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  {link.label}
                </Link>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                  <ArrowUpRight />
                </span>
              </div>
            ))}
          </div>

          {/* Products */}
          <div className="space-y-3">
            {footerNav.products.map((link) => (
              <div
                key={link.label}
                className="flex items-center justify-between group border-b border-gray-200 pb-2 md:border-b-0 md:pb-0"
              >
                <Link
                  href={link.href}
                  className="hover:opacity-70 transition-opacity text-[14px] leading-[17px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  {link.label}
                </Link>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                  <ArrowUpRight />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#D7DADE]" />

      {/* Bottom section - Large logo + year */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between px-6 md:px-20 py-8 md:py-6 gap-4 md:gap-0">
        <div className="flex-1">
          <Link href="/" className="block">
            <span 
              className="uppercase tracking-tight text-[56px] leading-[85%] md:text-[101px] md:leading-[85%]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                fontStyle: "italic",
                letterSpacing: "-3%",
                color: "#000000",
                display: "block",
              }}
            >
              sarlam
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>athletics
            </span>
          </Link>
        </div>
        <div className="flex flex-col md:items-end gap-2 md:gap-0">
          <span 
            className="block md:hidden text-[12px] leading-[16px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              color: "#000000",
            }}
          >
            Website by Sanna Granqvist
            <br />
            © 2026
          </span>
          <span
            className="hidden md:block text-[12px] leading-[16px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              color: "#434343",
            }}
          >
            © 2026
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0D0D0D] py-4 px-6 md:px-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
        <div 
          className="flex flex-col md:flex-row md:items-center gap-1 text-[12px] leading-[16px]"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 400,
            color: "#E3E2E2",
          }}
        >
          <span>© 2026 Sarlam Athletics. Private-label sports equipment manufacturer for combat sports brands.</span>
        </div>
        <div 
          className="uppercase text-[12px] leading-[18px]"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 500,
            color: "#FFFFFF",
          }}
        >
          USA (USD $) / ENGLISH
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ───
export default function PrivateLabelPage() {
  return (
    <>
      <Head>
        <title>Private Label Manufacturing | Sarlam Athletics</title>
        <meta
          name="description"
          content="Private label sports equipment manufacturing for boxing, MMA, martial arts, and combat sports brands. Factory-direct OEM production."
        />
      </Head>

      <Header />

      <main className="pt-[0px] md:pt-[52px] -mt-[52px] md:-mt-[0px]">
        <HeroSection />
        <VideoSection />
        <ValuesSection />
        <TimelineSection />
        <ServicesSection />
        <ProductsSection />
        <IndustriesSection />
      </main>

      <Footer />
    </>
  );
}

/* ─── FOOTER ACCORDION (Mobile) ─── */
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
        className="w-full flex items-center justify-between py-4 text-left text-[14px] font-medium text-[#0D0D0D]"
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

/* ─── FOOTER LINK ─── */
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="hover:text-[#0D0D0D] transition block text-[14px] leading-[17px] font-normal text-[#757575]"
    >
      {children}
    </a>
  );
}