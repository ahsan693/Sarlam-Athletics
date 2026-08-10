
"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// ─── Icons (inline SVGs) ───
const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

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

// ─── Header ───
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="flex items-center justify-between h-[52px] px-0">
        {/* Left nav */}
        <div className="flex items-center h-12">
          <Link href="/" className="flex items-center justify-center w-16 h-12">
            <img src="/logo-icon.svg" alt="Sarlam" className="h-6" />
          </Link>
          <nav className="hidden md:flex items-center h-12 gap-0 pl-2">
            <Link
              href="/products"
              className="text-xs font-medium text-[#0D0D0D] px-4 h-12 flex items-center hover:opacity-70 transition-opacity"
            >
              Products
            </Link>
            <Link
              href="/private-label"
              className="text-xs font-medium text-[#0D0D0D] px-4 h-12 flex items-center hover:opacity-70 transition-opacity"
            >
              Private Label
            </Link>
            <Link
              href="/manufacturing"
              className="text-xs font-medium text-[#0D0D0D] px-4 h-12 flex items-center hover:opacity-70 transition-opacity"
            >
              Manufacturing
            </Link>
          </nav>
        </div>

        {/* Center logo */}
        <div className="flex items-center justify-center h-[52px] px-0">
          <Link href="/">
            <img src="/logo-text.svg" alt="SARLAM ATHLETICS" className="h-[34px]" />
          </Link>
        </div>

        {/* Right nav */}
        <div className="flex items-center h-12 gap-[11px] pr-0">
          <div className="hidden md:flex items-center gap-[11px] pl-12">
            <Link
              href="/about"
              className="text-xs font-medium text-black px-4 h-12 flex items-center hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-xs font-medium text-black px-4 h-12 flex items-center hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </div>
          <button className="w-12 h-12 flex items-center justify-center text-black hover:opacity-70 transition-opacity">
            <SearchIcon />
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-12 h-12 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-0.5 bg-black transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-black transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-black transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4">
          {["Products", "Private Label", "Manufacturing", "About", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="block text-sm text-[#0D0D0D]">
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Hero Section ───
function HeroSection() {
  return (
    <section className="pt-[42px] px-2">
      <div className="relative bg-[#F0EDE9] rounded-xl overflow-hidden min-h-[500px] md:min-h-[558px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[#F0EDE9]">
            {/* Replace with actual image */}
            <img
              src="/images/hero-about.jpg"
              alt="Manufacturing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text overlay */}
        <div className="relative z-10 px-8 md:px-12 py-20 md:py-[164px] max-w-[700px]">
          <p className="text-[15px] font-medium text-[#F0EDE9] tracking-wide mb-5">
            ABOUT SARLAM ATHLETICS
          </p>
          <h1 className="text-3xl md:text-[47px] md:leading-[58px] font-medium text-white">
            Private Label Sports Equipment Manufacturing Built for Growing Brands
          </h1>
        </div>
      </div>
    </section>
  );
}

// ─── Video / Mission Section ───
function VideoSection() {
  return (
    <section className="py-[120px] px-8">
      <div className="max-w-[1376px] mx-auto space-y-12">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="md:w-1/2 space-y-0">
            <h2 className="text-2xl md:text-[37px] md:leading-[46px] font-medium text-black">
              Why Sarlam Athletics Exists
            </h2>
            <h2 className="text-2xl md:text-[37px] md:leading-[46px] font-medium text-black">
              Our Mission
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-[15px] leading-relaxed text-[#434343]">
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
        <div className="relative w-full aspect-[1376/535] rounded-lg overflow-hidden bg-gray-200 group cursor-pointer">
          <img
            src="/images/video-thumbnail.jpg"
            alt="Factory video"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0D0D0D">
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
    <section className="pb-12">
      {/* Heading */}
      <div className="pt-[120px] pb-12 text-center md:text-left">
        <div className="max-w-[800px] mx-auto md:mx-0 md:pl-[calc((100%-800px)/2)]">
          <h2 className="text-2xl md:text-[37px] font-medium text-black">Our Values</h2>
        </div>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-200">
        {values.map((value, i) => (
          <div
            key={i}
            className={`p-8 md:p-10 space-y-6 ${
              i < values.length - 1 ? "lg:border-r border-gray-200" : ""
            } border-b lg:border-b-0 border-gray-200`}
          >
            <div className="w-5 h-5 text-black">{value.icon}</div>
            <h3 className="text-[22px] font-medium text-black">{value.title}</h3>
            <p className="text-[15px] leading-relaxed text-[#434343]">{value.description}</p>
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
    <section className="bg-black py-[200px] px-8 md:px-20">
      <div className="max-w-[1280px] mx-auto space-y-24">
        {/* Heading */}
        <div className="max-w-[640px] space-y-0">
          <h2 className="text-3xl md:text-[47px] md:leading-[58px] font-medium text-[#B2B2B2]">
            Our Manufacturing Process
          </h2>
          <h2 className="text-3xl md:text-[47px] md:leading-[58px] font-medium text-white">
            From Product Development to Bulk Manufacturing
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-[800px] space-y-0">
          {/* Initial progress bar */}
          <div className="flex items-start gap-0 h-[100px]">
            <div className="w-8 flex justify-center">
              <div className="w-[3px] h-full bg-gradient-to-b from-transparent to-white/30" />
            </div>
          </div>

          {/* Steps */}
          {timelineSteps.map((step, i) => (
            <div key={i} className="space-y-12">
              {/* Content */}
              <div className="flex items-start gap-8 md:gap-12">
                <div className="w-8 flex-shrink-0 flex flex-col items-center">
                  {/* Dot */}
                  <div className="w-3 h-3 rounded-full bg-[#B2B2B2]" />
                  {/* Line */}
                  <div className="w-[3px] flex-1 min-h-[180px] bg-white/20" />
                </div>
                <div className="flex-1 max-w-[550px] space-y-4 pb-8">
                  <h3 className="text-2xl md:text-[33px] md:leading-[40px] font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="text-[17px] leading-relaxed text-[#CBCBCB]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA at bottom of timeline */}
          <div className="flex items-start gap-8 md:gap-12">
            <div className="w-8" />
            <div className="flex-1 max-w-[550px] space-y-8">
              <h2 className="text-2xl md:text-[37px] md:leading-[44px] font-medium text-white">
                Ready to Launch Your Private Label Sports Brand?
              </h2>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 border border-white rounded-md text-[15px] text-black bg-white hover:bg-transparent hover:text-white transition-colors"
              >
                Request Manufacturing Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Hidden last step note */}
        <div className="hidden">
          <h3 className="text-2xl font-bold text-[#0D0D0D]">
            Private Label Packaging & Delivery
          </h3>
          <p className="text-base text-[#434343]">
            We prepare branded packaging, tags, labels, and shipping support for U.S. brands,
            gyms, retailers, and distributors.
          </p>
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
      "Manufacture custom boxing gloves, MMA gear, martial arts uniforms, belts, wraps, and training accessories under your own brand.",
    image: "/images/service-private-label.jpg",
  },
  {
    title: "Wholesale Sports Equipment",
    description:
      "Factory-direct production for sports brands, gyms, wholesalers, distributors, and retailers with scalable manufacturing capacity.",
    image: "/images/service-wholesale.jpg",
  },
  {
    title: "Product Development & Sampling",
    description:
      "Develop and refine your products through prototype sampling, material testing, branding, and packaging before production.",
    image: "/images/service-sampling.jpg",
  },
];

function ServicesSection() {
  return (
    <section className="py-0">
      {/* Heading */}
      <div className="px-8 pt-0 pb-12">
        <div className="max-w-[800px] mx-auto md:mx-0 md:pl-[calc((100%-800px)/2)]">
          <h2 className="text-2xl md:text-[37px] font-medium text-black">
            OEM & Private Label Manufacturing Services
          </h2>
        </div>
      </div>

      {/* Services grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
        {services.map((service, i) => (
          <div
            key={i}
            className={`p-8 space-y-6 group cursor-pointer hover:bg-gray-50 transition-colors ${
              i < services.length - 1 ? "md:border-r border-gray-200" : ""
            } border-b md:border-b-0`}
          >
            {/* Text */}
            <div className="space-y-4">
              <h4 className="text-[22px] font-medium text-black group-hover:underline">
                {service.title}
              </h4>
              <p className="text-[15px] leading-relaxed text-[#434343]">{service.description}</p>
            </div>
            {/* Image */}
            <div className="aspect-square rounded-md overflow-hidden bg-gray-200">
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
  "Combat Training Accessories",
];

function ProductsSection() {
  return (
    <section className="py-20 px-8 md:px-20">
      <div className="max-w-[1280px] mx-auto space-y-8">
        <h2 className="text-2xl md:text-[37px] font-bold text-[#0D0D0D]">
          Combat Sports Equipment We Manufacture
        </h2>
        <div className="flex flex-wrap gap-4">
          {productTags.map((tag, i) => (
            <Link
              key={i}
              href={`/products/${tag.toLowerCase().replace(/ /g, "-")}`}
              className="px-6 py-3.5 bg-[#F5F5F5] rounded text-base text-[#0D0D0D] hover:bg-[#E8E8E8] transition-colors"
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
const industries = [
  { title: "Sports Brands", image: "/images/industry-sports-brands.jpg" },
  { title: "Gyms & Martial Arts Academies", image: "/images/industry-gyms.jpg" },
  { title: "Retailers & eCommerce Brands", image: "/images/industry-retailers.jpg" },
  { title: "Wholesale Distributors", image: "/images/industry-wholesale.jpg" },
  { title: "Sports Equipment Companies", image: "/images/industry-equipment.jpg" },
];

function IndustriesSection() {
  return (
    <section className="py-12 px-3">
      <div className="max-w-[1416px] mx-auto space-y-10">
        <p className="text-[15px] font-medium text-black">Industries We Serve</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-t border-gray-200 pt-6">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="relative aspect-[251/284] overflow-hidden group cursor-pointer"
            >
              {/* Background image */}
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl md:text-[26px] md:leading-[26px] font-bold text-white">
                  {industry.title}
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
      { label: "Private Label", href: "/private-label" },
      { label: "Manufacturing Process", href: "/manufacturing" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Request Quote", href: "/quote" },
    ],
    products: [
      { label: "Boxing Gloves", href: "/products/boxing-gloves" },
      { label: "Martial Arts Uniforms", href: "/products/martial-arts-uniforms" },
      { label: "MMA Gear", href: "/products/mma-gear" },
      { label: "Training Accessories", href: "/products/training-accessories" },
    ],
  };

  return (
    <footer className="bg-white">
      {/* Divider */}
      <div className="h-px bg-[#D7DADE]" />

      {/* Top section */}
      <div className="flex flex-col md:flex-row gap-8 py-10 px-8 md:px-20">
        {/* Left - CTA */}
        <div className="md:w-1/2 space-y-0">
          <h2 className="text-3xl md:text-[47px] md:leading-[58px] font-medium text-black">
            Let's Build Your Sports Equipment Brand
          </h2>
          <a
            href="mailto:hello@sarlamathletics.com"
            className="text-3xl md:text-[47px] md:leading-[58px] font-medium text-[#A5A5A5] hover:text-[#0D0D0D] transition-colors"
          >
            hello@sarlamathletics.com
          </a>
        </div>

        {/* Right - Nav columns */}
        <div className="md:w-1/2 grid grid-cols-3 gap-8">
          {/* Pages */}
          <div className="space-y-3">
            {footerNav.pages.map((link) => (
              <div key={link.label} className="flex items-center justify-between group">
                <Link
                  href={link.href}
                  className="text-sm text-black hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight />
                </span>
              </div>
            ))}
          </div>

          {/* Company */}
          <div className="space-y-3">
            {footerNav.company.map((link) => (
              <div key={link.label} className="flex items-center justify-between group">
                <Link
                  href={link.href}
                  className="text-sm text-black hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight />
                </span>
              </div>
            ))}
          </div>

          {/* Products */}
          <div className="space-y-3">
            {footerNav.products.map((link) => (
              <div key={link.label} className="flex items-center justify-between group">
                <Link
                  href={link.href}
                  className="text-sm text-black hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity">
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
      <div className="flex flex-col md:flex-row items-end justify-between px-8 md:px-20 py-6">
        <div className="flex-1">
          <Link href="/" className="block">
            <span className="text-6xl md:text-[101px] md:leading-[86px] font-bold italic text-black uppercase tracking-tight">
              sarlam
              <br />
              athletics
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-[#434343]">
          <span>© 2026</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0D0D0D] py-4 px-3 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-[#E3E2E2]">
          <span>© 2026 </span>
          <a href="/" className="hover:underline">
            Sarlam Athletics
          </a>
          <span>. </span>
          <span>Private-label sports equipment manufacturer for combat sports brands.</span>
        </div>
        <div className="text-xs font-medium text-white uppercase">
          usa(usd $) / ENGLISH
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

      <main className="pt-[52px]">
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
