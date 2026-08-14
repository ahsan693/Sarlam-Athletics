"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

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
    <line x1="14" y1="14" x2="19" y2="19" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 30 34" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 0L4 14h13L0 34l26-15H12L24 0z" fill="currentColor" />
  </svg>
);

// ─── Header Component ───────────────────────────────────────────────────────
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-4 h-[52px]">

        {/* ─── DESKTOP VIEW ─── */}
        <div className="hidden lg:flex items-center justify-between w-full h-full">
          {/* Left Nav */}
          <div className="flex items-center gap-4">
            <button>
              <MenuIcon />
            </button>
            <div className="w-[2px] h-12 bg-gray-300" />
            <nav className="flex items-center gap-4">
              <Link href="/products" className="hover:opacity-70 transition" style={navLinkStyle}>Products</Link>
              <Link href="/privatelabel" className="hover:opacity-70 transition" style={navLinkStyle}>Private Label</Link>
              <Link href="/manufacture" className="hover:opacity-70 transition" style={navLinkStyle}>Manufacturing</Link>
            </nav>
          </div>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2" style={logoStyle}>
            <LogoMark className="w-[18px] h-[20px]" />
            <span className="whitespace-nowrap tracking-tight">Sarlam Athletics</span>
          </Link>

          {/* Right Nav */}
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:opacity-70 transition" style={navLinkStyle}>About</Link>
            <Link href="/contact" className="hover:opacity-70 transition" style={navLinkStyle}>Contact</Link>
            <div className="w-[2px] h-12 bg-gray-300" />
            <button className="hover:opacity-70 transition text-[#0D0D0D]">
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* ─── MOBILE VIEW ─── */}
        <div className="flex lg:hidden items-center justify-between w-full h-full">
          {/* Mobile Logo (Left Side) */}
          <Link href="/" className="flex items-center gap-2" style={logoStyle}>
            <LogoMark className="w-[18px] h-[20px]" />
            <span className="whitespace-nowrap tracking-tight">Sarlam Athletics</span>
          </Link>

          {/* Mobile Hamburger (Right Side) - No Search Icon */}
          <button
            className="flex items-center p-2 -mr-2 text-[#0D0D0D]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[52px] left-0 w-full bg-white border-b border-gray-100 shadow-lg flex flex-col py-6 px-6 gap-6 z-50">
          {[
            { label: "Products", href: "/products" },
            { label: "Private Label", href: "/privatelabel" },
            { label: "Manufacturing", href: "/manufacture" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-70 transition text-[14px] leading-[18px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#0D0D0D",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

const navLinkStyle = {
  fontFamily: "'FFF Acid Grotesk', sans-serif",
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "18px",
  textTransform: "uppercase" as const,
  color: "#0D0D0D",
};

const logoStyle = {
  fontFamily: "'FFF Acid Grotesk', sans-serif",
  fontWeight: 700,
  fontStyle: "italic",
  fontSize: "18px",
  textTransform: "uppercase" as const,
  color: "#0D0D0D",
};

// ─── Product Data ──────────────────────────────────────────────────────────
  const products = [
    {
      name: "Private Label Boxing Gloves",
      cta: "View Product +",
      href: "/details",
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/01 Private Label Boxing Gloves.png",
    },
    {
      name: "BJJ Gis and Jiu-Jitsu Uniforms",
      cta: "View Product +",
      href: "/jitsu",
      swatches: ["#0D0D0D", "#E5E5E5"],
      image: "/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png",
    },
    {
      name: "MMA Fight Gloves",
      cta: "View Product +",
      href: "/mmagloves",
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/03 MMA Fight Gloves.png",
    },
   {
      name: "Professional MMA Training Gloves", 
      cta: "View Product +",   
      href: "/ultimategloves",           
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/04 Pro MMA  Training Gloves.png",
    },
    {
      name: "Boxing Focus Mitts and Training Pads",
      cta: "View Product +",
      href: "/trainingpad",
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/05 Boxing Mitts and Training Pads.png",
    },
    {
      name: "Boxing Sparring Gloves",
      cta: "View Product +",
      href: "/sparinggloves",
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/06 Boxing Sparring Gloves.png",
    },
    {
      name: "Custom Boxing Headguards",
      cta: "View Product +",
      href: "/Boxingguard",
      swatches: ["#B91C1C", "#0D0D0D"],
      image: "/Products/07 Custom Boxing Headguards.png", // Note: 08 is also available for this in your folder
    },
   {
      name: "Private Label Karate Uniforms",
      cta: "View Product +",
      href: "/karatesuit",
      swatches: ["#E5E5E5", "#0D0D0D"],
      image: "/Products/karateuniform.png",
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
        <div className="flex animate-marquee whitespace-nowrap py-2.5">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="inline-block mx-8 text-[12px] leading-[16px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                color: "#FFFFFF",
              }}
            >
              Wholesale and OEM manufacturing for combat sports and martial arts equipment.
            </span>
          ))}
        </div>
      </div>

      {/* ───── 2. Header (Sticky Nav) ───── */}
      <Header />

      {/* ───── 3. Hero Section ───── */}
      <section className="relative w-full h-[540px] md:h-[624px] overflow-hidden bg-[#0D0D0D]">
       <ImagePlaceholder
  className="absolute inset-0 w-full h-full object-cover"
  label="Hero - Combat Sports Equipment Display"
  src="/Page 2/Images/01.png"
/>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />

        <div className="relative z-10 flex items-center h-full px-6 md:px-10 max-w-[1440px] mx-auto mt-4 md:mt-0">
          <div className="max-w-[640px] flex flex-col gap-4 md:gap-6">
            <h1
              className="uppercase text-[36px] leading-[40px] md:text-[56px] md:leading-[105%]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "-2px",
                color: "#FFFFFF",
              }}
            >
              Private Label Combat Sports Equipment Manufacturer
            </h1>
            <div className="flex flex-col gap-4">
              <p
                className="text-[14px] leading-[20px] md:text-[16px] md:leading-[20px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
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
                className="text-[14px] leading-[20px] md:text-[16px] md:leading-[20px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
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
              className="mt-4 md:mt-0 inline-flex items-center justify-center bg-white px-10 py-3.5 w-full md:w-fit hover:bg-gray-100 transition text-[14px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
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
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <h2>
              <span
                className="block text-[28px] leading-[32px] md:text-[37px] md:leading-[45.6px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-1.52px",
                  color: "#757575",
                }}
              >
                Why Brands Choose
              </span>
              <span
                className="block text-[28px] leading-[32px] md:text-[37px] md:leading-[45.6px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-1.52px",
                  color: "#000000",
                }}
              >
                Our Combat Sports Equipment
              </span>
            </h2>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-4 md:gap-6">
            <p
              className="text-[14px] leading-[22px] md:text-[16px] md:leading-[20px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
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
              className="text-[14px] leading-[22px] md:text-[16px] md:leading-[20px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
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
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="py-4 md:py-6 border-b border-gray-200">
            <h2
              className="uppercase text-[22px] leading-[26px] md:text-[26px] md:leading-[26px] max-w-[300px] md:max-w-none"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.5px",
                color: "#0D0D0D",
              }}
            >
              Combat Sports Equipment We Manufacture
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-200 gap-4 md:gap-0">
            <div className="flex items-center justify-between md:justify-start gap-4 w-full md:w-auto">
              <span
                className="uppercase text-[11px] md:text-[12px] leading-[18px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0px",
                  color: "#707070",
                }}
              >
                Items: {products.length}
              </span>
              <div className="flex items-center gap-1.5">
                <span
                  className="uppercase text-[11px] md:text-[12px] leading-[18px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0px",
                    color: "#707070",
                  }}
                >
                  Category:
                </span>
                <button
                  className="flex items-center gap-1 uppercase text-[12px] leading-[18px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0px",
                    color: "#0D0D0D",
                  }}
                >
                  All
                  <ChevronDownIcon />
                </button>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <span
                className="uppercase text-[12px] leading-[18px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
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

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l-0 md:border-l border-gray-200">
            {products.map((product, i) => (
              <div key={i} className="border-r-0 md:border-r border-b border-gray-200 group">
                <Link
                  href={product.href}
                  className="relative aspect-[4/3] md:aspect-square bg-gray-50 overflow-hidden flex items-center justify-center p-6 md:p-8"
                >
                  <ImagePlaceholder
                    className="w-full h-full object-contain"
                    label={product.name}
                    src={product.image}
                  />
                  <span
                    className="pointer-events-none absolute top-3 right-3 bg-[#0D0D0D] uppercase opacity-0 group-hover:opacity-100 transition rounded-sm px-3 py-1.5 text-[6.5px] leading-[9.4px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 500,
                      letterSpacing: "0px",
                      color: "#FFFFFF",
                    }}
                  >
                    Quick View
                  </span>
                </Link>

                <div className="bg-white px-4 py-4 md:py-3 flex items-center justify-between border-t border-gray-200">
                  <div className="flex flex-col gap-1 md:gap-0">
                    <span
                      className="block text-[10px] md:text-[12px] leading-[13px] md:leading-[14px]"
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0.05px",
                        color: "#0D0D0D",
                      }}
                    >
                      {product.name}
                    </span>
                    <Link
                      href={product.href}
                      className="underline hover:opacity-70 transition text-[10px] md:text-[11px] leading-[13px] md:leading-[14px]"
                      style={{
                        fontFamily: "'FFF Acid Grotesk', sans-serif",
                        fontWeight: 700,
                        letterSpacing: "0px",
                        color: "#0D0D0D",
                      }}
                    >
                      {product.cta}
                    </Link>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    {product.swatches.map((color, si) => (
                      <span
                        key={si}
                        className="w-3 h-3 md:w-2.5 md:h-2.5 inline-block border border-gray-200 rounded-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center py-8 md:py-12 px-6 md:px-0">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-white w-full md:w-auto uppercase px-10 py-4 border border-black hover:bg-black hover:text-white transition text-[14px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              letterSpacing: "5%",
              color: "#0D0D0D",
            }}
          >
            Request a Manufacturing Quote
          </a>
        </div>
      </section>

      {/* ───── 6. Customization Options Section ───── */}
      <section className="w-full bg-white py-16 md:py-16">
        <div className="max-w-[1392px] mx-auto px-6 md:px-10">
          <div className="mb-8 md:mb-10">
            <h2
              className="mb-4 text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]"
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
              className="max-w-[800px] text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]"
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
                      className="mb-2 text-[16px] leading-[22px] md:text-[18px] md:leading-[24px]"
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
              className="inline-flex items-center justify-center bg-[#0D0D0D] w-full md:w-auto uppercase px-10 py-3.5 hover:bg-gray-900 transition text-[14px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 700,
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
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-[1376px] mx-auto px-6 md:px-10">
          <h2
            className="mb-8 md:mb-16 text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
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
                className={`flex flex-col border-b border-gray-200 md:border-b-0 ${
                  i < 2 ? "md:border-r" : ""
                }`}
              >
                <div className="p-6 md:p-8 pb-4 md:pb-6">
                  <h3
                    className="mb-3 text-[18px] leading-[22px] md:text-[22px] md:leading-[26px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 500,
                      letterSpacing: "-0.4px",
                      color: "#000000",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[14px] leading-[22px] md:text-[15px] md:leading-[16px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      letterSpacing: "0px",
                      color: "#434343",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8 flex-1">
                  <div className="rounded-sm overflow-hidden h-[240px] md:h-[400px]">
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
      <section className="w-full bg-white py-16 md:py-20 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2
            className="mb-10 md:mb-16 text-[28px] leading-[34px] md:text-[37px] md:leading-[46px]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-1.5px",
              color: "#000000",
            }}
          >
            Why Brands Manufacture With
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>Sarlam Athletics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-gray-200">
            {whyReasons.map((reason, i) => (
              <div
                key={i}
                className={`py-8 border-b border-gray-200 md:border-b-0 md:p-8 ${
                  i < 3 ? "md:border-r" : ""
                }`}
              >
                <h3
                  className="mb-3 md:mb-4 text-[18px] leading-[24px] md:text-[21.7px] md:leading-[26.4px]"
                  style={{
                    fontFamily: "'Switzer', sans-serif",
                    fontWeight: 600,
                    letterSpacing: "-0.44px",
                    color: "#000000",
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-[14px] leading-[22px] md:text-[15.1px] md:leading-[24px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
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

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 md:py-12 flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
          <div className="lg:w-1/2">
            <h3
              className="mb-4 text-[32px] leading-[38px] md:text-[47px] md:leading-[58px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: "-1.9px",
                color: "#000000",
              }}
            >
              Start Your Private Label
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>Manufacturing Project
            </h3>
            <a
              href="mailto:hello@sarlamathletics.com"
              className="transition break-all text-[22px] leading-[30px] md:text-[47px] md:leading-[58px]"
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

          <div className="lg:w-1/2 flex flex-col md:flex-row gap-8 md:gap-16">
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
                  className="transition border-b border-gray-200 pb-2 md:border-b-0 md:pb-0 hover:opacity-70 text-[14px] leading-[17px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
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
                  className="transition border-b border-gray-200 pb-2 md:border-b-0 md:pb-0 hover:opacity-70 text-[14px] leading-[17px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
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
                  className="transition border-b border-gray-200 pb-2 md:border-b-0 md:pb-0 hover:opacity-70 text-[14px] leading-[17px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
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

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
          <p
            className="uppercase text-[56px] leading-[85%] md:text-[101px] md:leading-[85%]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "-3%",
              color: "#000000",
            }}
          >
            sarlam
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>athletics
          </p>
          <div className="flex flex-col md:items-end gap-2 md:gap-0">
            <span className="md:hidden block text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>
              Website by Sanna Granqvist
              <br />
              © 2026
            </span>
            <span className="hidden md:block text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>
              © 2026
            </span>
          </div>
        </div>

        <div className="w-full bg-[#0D0D0D] py-4">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
            <p
              className="text-[12px] leading-[16px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                letterSpacing: "0px",
                color: "#E3E2E2",
              }}
            >
              © 2026 Sarlam Athletics. Private-label sports equipment
              manufacturer for combat sports brands.
            </p>
            <span
              className="uppercase text-[12px] leading-[18px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
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