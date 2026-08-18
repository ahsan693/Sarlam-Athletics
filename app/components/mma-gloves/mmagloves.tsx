"use client";

import { useState, useRef } from "react";
import Link from "next/link";

// ─── Image Placeholder ───
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

// ─── Icons (inline SVGs) ───
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

const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 30 34" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 0L4 14h13L0 34l26-15H12L24 0z" fill="currentColor" />
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

// ─── Header Component ───
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
  <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-4 h-[52px]">
        {/* ─── DESKTOP VIEW ─── */}
        <div className="hidden lg:flex items-center justify-between w-full h-full">
          <div className="flex items-center gap-4">
            <button>
              <MenuIcon />
            </button>
            <div className="w-[2px] h-12 bg-gray-300" />
            <nav className="flex items-center gap-4">
              <Link href="/products" className="hover:opacity-70 transition text-[12px] font-medium uppercase font-['FFF_Acid_Grotesk',sans-serif] text-[#0D0D0D]">Products</Link>
                <Link href="/manufacture" className="hover:opacity-70 transition text-[12px] font-medium uppercase font-['FFF_Acid_Grotesk',sans-serif] text-[#0D0D0D]">Manufacturing</Link>
            </nav>
          </div>
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-[18px] font-bold italic uppercase font-['FFF_Acid_Grotesk',sans-serif] text-[#0D0D0D]">
            <LogoMark className="w-[18px] h-[20px]" />
            <span className="whitespace-nowrap tracking-tight">Sarlam Athletics</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/privatelabel" className="hover:opacity-70 transition text-[12px] font-medium uppercase font-['FFF_Acid_Grotesk',sans-serif] text-[#0D0D0D]">About</Link>
            <Link href="/contact" className="hover:opacity-70 transition text-[12px] font-medium uppercase font-['FFF_Acid_Grotesk',sans-serif] text-[#0D0D0D]">Contact</Link>
            <div className="w-[2px] h-12 bg-gray-300" />
            <button className="hover:opacity-70 transition text-[#0D0D0D]">
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* ─── MOBILE VIEW ─── */}
        <div className="flex lg:hidden items-center justify-between w-full h-full">
          <Link href="/" className="flex items-center gap-2 text-[18px] font-bold italic uppercase font-['FFF_Acid_Grotesk',sans-serif] text-[#0D0D0D]">
            <LogoMark className="w-[18px] h-[20px]" />
            <span className="whitespace-nowrap tracking-tight">Sarlam Athletics</span>
          </Link>
          <button 
            className="flex items-center p-2 -mr-2 text-[#0D0D0D]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[52px] left-0 w-full bg-white border-b border-gray-100 shadow-lg flex flex-col py-6 px-6 gap-6 z-50">
          {[
            { label: "Products", href: "/products" },
            { label: "Manufacturing", href: "/manufacture" },
            { label: "About", href: "/privatelabel" },
            { label: "Contact", href: "/contact" },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:opacity-70 transition text-[14px] leading-[18px] font-medium uppercase font-['FFF_Acid_Grotesk',sans-serif] text-[#0D0D0D]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Data ───
const finishOptions = ["MATTE", "GLOSSY", "STANDARD"];
const fitOptions = ["MEN", "WOMEN", "UNISEX", "KIDS"];
const materialOptions = [
  "GENUINE LEATHER",
  "PREMIUM MICROFIBER (VEGAN LEATHER)",
  "SYNTHETIC LEATHER",
  "HIGH-GRADE PU",
];
const brandingOptions = [
  "SCREEN PRINT (BACK OF HAND)",
  "EMBROIDERY (WRIST STRAP)",
  "WOVEN LABEL (WRIST STRAP)",
  "3D RUBBER PATCH (WRIST STRAP)"
];
const packagingOptions = [
  "POLY BAG",
  "CUSTOM DRAWSTRING BAG",
  "ZIP PE BAG"
];

const sizeOptions = ["10OZ", "12OZ", "14OZ", "16OZ"];

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

export default function MMAFullFightGlovesPage() {
  const [selectedFinish, setSelectedFinish] = useState<string[]>(["MATTE"]);
  const [selectedFit, setSelectedFit] = useState<string[]>(["UNISEX"]);
  const [selectedMaterial, setSelectedMaterial] = useState<string[]>(["GENUINE LEATHER"]);
  const [selectedBranding, setSelectedBranding] = useState<string[]>(["SCREEN PRINT (BACK OF HAND)"]);
  const [selectedSize, setSelectedSize] = useState<string[]>(["12OZ"]);
  const [selectedPackaging, setSelectedPackaging] = useState<string[]>(["POLY BAG"]);

  const relatedScrollerRef = useRef<HTMLDivElement>(null);

  const scrollRelated = (dir: 1 | -1) => {
    const el = relatedScrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-related-card]");
    const cardWidth = card ? card.offsetWidth + 16 : 360; 
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

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
      
      <Header />

      {/* ── Announcement Banner ── */}
      <div className="bg-[#0D0D0D] h-[34px] flex items-center justify-center overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-white text-xs font-medium mx-8 tracking-widest md:tracking-normal uppercase">
              SAMPLES, MOQS, AND CUSTOM PRODUCTION OPTIONS FOR YOUR BRAND.
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero Banner ── */}
      <section className="relative h-[320px] md:h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-black">
       <img
  src="/Page 7/01-1.png"
  alt="Private Label Sports Equipment Manufacturing"
  className="w-full h-full object-cover opacity-60"
/>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <span className="text-[13px] md:text-[15px] font-medium mb-3 md:mb-4 tracking-wide text-[#CCCCCC] uppercase">
            PRODUCTS
          </span>
          <h1 className="text-[32px] leading-[36px] md:text-[44px] font-bold text-white md:leading-tight max-w-[800px] uppercase">
            Private Label Sports Equipment Manufacturing
          </h1>
        </div>
      </section>

      {/* ── Product Presentation Grid ── */}
      <section className="px-5 md:px-16 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 max-w-[1440px] mx-auto">
          {/* Left: Product Image */}
          <div className="w-full lg:w-[616px] shrink-0">
            <div className="bg-[#F9F9F9] rounded-none p-4 md:p-2 aspect-[4/5] md:aspect-square flex items-center justify-center lg:sticky lg:top-24">
            <img
  src="/Products/03 MMA Fight Gloves.png"
  alt="MMA Full Fight Gloves"
  className="w-[100%] h-[100%] md:w-[600px] md:h-[600px] object-cover md:object-contain mix-blend-multiply"
/>
            </div>
          </div>

          {/* Right: Product Configuration Panel */}
          <div className="flex-1 max-w-full lg:max-w-[616px]">
            {/* Breadcrumbs */}
            <nav className="flex items-center flex-wrap gap-2 text-[10px] md:text-xs text-[#6A7282] mb-6 md:mb-8 font-medium uppercase tracking-wide">
              <a href="/" className="hover:underline">Home</a>
              <span>/</span>
              <a href="/products" className="hover:underline">MMA Gear</a>
              <span>/</span>
              <span className="text-[#0D0D0D]">MMA Full Fight Gloves</span>
            </nav>

            {/* Title */}
            <div className="mb-6">
              <p className="text-[12px] md:text-sm font-bold text-[#666666] uppercase">
                Martial Arts Equipment Manufacturing
              </p>
              <h2 className="text-[32px] leading-[36px] md:text-[44px] md:leading-tight font-bold text-[#0D0D0D] mt-2">
                MMA Full Fight Gloves
              </h2>
              <p className="text-[15px] leading-[22px] md:text-xl text-[#0D0D0D] mt-3 md:mt-4 md:leading-relaxed font-normal">
                Custom MMA boxing glove manufacturing designed for heavy bag work, padwork, and sparring.
              </p>
            </div>

            {/* Divider */}
            <hr className="border-t border-gray-200 mb-6" />

            {/* Description */}
            <div className="mb-8 md:mb-6">
              <p className="text-[14px] leading-[22px] md:text-base text-[#666666] md:leading-relaxed font-normal">
                Sarlam Athletics manufactures custom MMA boxing gloves for combat sports brands, martial arts academies, gyms, retailers, and distributors. We support custom materials, sizing, colorways, padding, wrist closures, labels, packaging, and branding details for wholesale production.
              </p>
              <p className="text-[14px] leading-[22px] md:text-base text-[#666666] md:leading-relaxed mt-4 font-normal">
                Samples can be developed before bulk manufacturing so your team can review fit, sizing, padding, wrist support, material feel, logo placement, and final presentation before approving a larger order.
              </p>
            </div>

            {/* Customize Heading */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-[22px] leading-[26px] md:text-[26px] font-bold text-[#101828]">
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

            {/* Size/Weight Selector - Grouped layout */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-[13px] md:text-sm font-bold text-[#0D0D0D] uppercase">Size/Weight Options</label>
                <button className="text-[11px] md:text-xs text-[#666666] hover:underline font-medium">
                  Weight Guide
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {sizeOptions.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleOption(size, selectedSize, setSelectedSize)}
                      className={`px-4 py-3 md:px-5 md:py-[15px] border text-[13px] md:text-[15px] font-medium transition-all ${
                        selectedSize.includes(size)
                          ? "border-[#0D0D0D] text-[#0D0D0D] bg-white"
                          : "border-gray-200 text-[#0D0D0D] hover:border-gray-400"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Other Input Field */}
                <div>
                  <span className="block text-[11px] md:text-xs font-medium text-[#666666] mb-2 uppercase">
                    Other
                  </span>
                  <input 
                    type="text" 
                    placeholder="Any other" 
                    className="border border-gray-200 px-4 py-3 md:py-[15px] w-full text-[13px] md:text-[15px] focus:outline-none focus:border-[#0D0D0D] font-medium"
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
                <label className="text-[13px] md:text-sm font-bold text-[#0D0D0D] uppercase">
                  Quantity
                </label>
              </div>
              <input 
                type="number" 
                placeholder="Enter quantity" 
                className="border border-gray-200 px-4 py-3 md:py-[15px] w-full text-[13px] md:text-[15px] focus:outline-none focus:border-[#0D0D0D] font-medium"
              />
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[#D92D20] shrink-0">
                  <InfoIcon />
                </span>
                <span className="text-[#D92D20] text-[11px] md:text-[12px] font-medium tracking-wide">
                  Please ensure your order meets our Minimum Quantity
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 md:space-y-4 mb-4 mt-8 md:mt-12">
              <button className="w-full bg-[#0D0D0D] text-white text-[13px] md:text-sm font-bold py-4 md:py-[18px] hover:bg-black/90 transition-colors uppercase tracking-wide">
                Request Manufacturing Quote
              </button>
              <button className="w-full border border-[#0D0D0D] text-[#0D0D0D] text-[13px] md:text-sm font-bold py-4 md:py-[18px] hover:bg-gray-50 transition-colors uppercase tracking-wide">
                Ask About Samples
              </button>
            </div>
            <p className="text-[11px] md:text-xs text-[#999999] text-center font-normal">
              Share your product specs and our team will respond with MOQ, sample, and wholesale production options.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features Strip ── */}
      <section className="px-6 md:px-16 pb-12 md:pb-16">
        <hr className="border-t border-gray-200 mb-8 md:mb-10 max-w-[1416px] mx-auto" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-[1416px] mx-auto gap-4 md:gap-0">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] flex items-center justify-center shrink-0">
                <CheckIcon />
              </div>
              <p className="text-[14px] md:text-[15px] font-medium text-[#0D0D0D] md:max-w-[205px] leading-snug">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- You May Also Like (Proper Functioning Horizontal Scroll) --- */}
      <section className="bg-white px-4 md:px-16 py-16 md:py-24 border-y border-[#C9C9C9] md:border-y-0 md:border-t md:border-gray-100">
        <div className="max-w-[1440px] mx-auto overflow-hidden">
          
          {/* Header Row */}
          <div className="flex items-end justify-between mb-10 md:mb-16 gap-4">
            <h2 className="text-[26px] leading-[32px] md:text-[37px] md:leading-[46px] tracking-[-0.5px] font-bold text-[#0D0D0D] uppercase max-w-[302px] md:max-w-none md:tracking-normal md:normal-case">
              Martial Arts Uniform Manufacturing Options
            </h2>
            
            {/* Desktop & Mobile Arrows */}
            <div className="flex items-center gap-[6px] shrink-0 z-10 relative pb-1 md:pb-2">
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

          {/* Horizontal Flex Scrolling Container (Mobile & Desktop) */}
          <div 
            ref={relatedScrollerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar pb-4"
          >
            {relatedProducts.map((product, i) => (
              <div
                key={i}
                data-related-card
                className="border border-[#C9C9C9] rounded bg-white w-[260px] md:w-[360px] snap-start shrink-0 group flex flex-col md:rounded-none"
              >
                <Link href={product.href} className="block p-2 md:p-0">
                  <div className="relative aspect-square md:aspect-auto md:h-[280px] bg-gray-100 overflow-hidden rounded-sm md:rounded-none">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#0D0D0D] text-white text-[10px] font-medium px-4 py-2 uppercase tracking-wider">
                        Quick View
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="px-3 pb-3 flex flex-col gap-2 md:px-5 md:py-4 md:flex-row md:items-center md:justify-between md:gap-0 mt-auto border-t border-transparent md:border-gray-200">
                  <span className="text-[14px] leading-[18px] tracking-[0px] font-bold text-[#0D0D0D] text-left md:uppercase">
                    {product.name}
                  </span>
                  <Link
                    href={product.href}
                    className="
                      text-[12px] leading-[14px] tracking-[0px] font-bold text-[#0D0D0D] underline
                      md:no-underline md:border md:border-[#0D0D0D] md:px-3 md:py-1.5
                      md:uppercase md:hover:bg-[#0D0D0D] md:hover:text-white md:transition-colors
                      md:text-[10px] md:font-medium text-center
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

      {/* ── Quality Control Banner ── */}
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
            <h2 className="text-[24px] md:text-[26px] font-bold text-white mb-4 max-w-[654px] uppercase leading-tight">
              Quality Control for Every Production Run
            </h2>
            <p className="text-[14px] md:text-base text-white/80 max-w-[654px] leading-relaxed font-normal">
              Every approved sample becomes the benchmark for bulk manufacturing. We check sizing, stitching, fabric finish, reinforcement points, logo placement, labeling, and packaging before production moves into final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ── MOQ, Pricing, and Samples ── */}
      <section className="px-6 md:px-20 py-12 md:py-20 max-w-[1440px] mx-auto border-t border-gray-100">
        <h2 className="text-[26px] leading-[32px] md:text-[37px] md:leading-[46px] font-bold text-[#0D0D0D] mb-4 md:mb-6 tracking-tight">
          MOQ, Pricing, and Samples
        </h2>
        <p className="text-[14px] leading-[22px] md:text-base text-[#666666] md:leading-relaxed mb-8 md:mb-10 max-w-[1280px] font-normal">
          Minimum order quantities and pricing depend on fabric selection, customization level, branding method, packaging, and total order volume. Share your requirements and we'll recommend the best starting point for your martial arts uniform project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {moqCards.map((card, i) => (
            <div key={i} className="bg-[#F5F5F5] p-6 md:p-8">
              <h3 className="text-[16px] md:text-sm font-bold text-[#0D0D0D] mb-2 md:mb-3 uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="text-[14px] md:text-sm text-[#666666] leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
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

      {/* ── Footer ── */}
      <footer className="bg-white border-t border-[#D7DADE]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 md:py-12 flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
          {/* Left */}
          <div className="lg:w-1/2">
            <h3 
              className="mb-4 text-[32px] leading-[38px] md:text-[47px] md:leading-[58px] font-medium tracking-tight text-[#0D0D0D]"
            >
              Start Your Private Label
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>Manufacturing Project
            </h3>
            <a
              href="mailto:hello@sarlamathletics.com"
              className="transition break-all hover:text-black text-[22px] leading-[30px] md:text-[47px] md:leading-[58px] font-medium text-[#A5A5A5] tracking-tight"
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
              className="uppercase tracking-tight text-[56px] leading-[85%] md:text-[101px] md:leading-[85%] font-bold italic text-[#0D0D0D]"
            >
              sarlam
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>athletics
            </span>
          </Link>
          <div className="flex flex-col md:items-end gap-2 md:gap-0">
            <span className="md:hidden block text-[12px] leading-[16px] font-normal text-[#0D0D0D]">
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
            <span className="text-[12px] leading-[16px] font-normal text-[#E3E2E2]">
              © 2026 Sarlam Athletics. Private-label sports equipment manufacturer
              for combat sports brands.
            </span>
            <span className="uppercase text-[12px] leading-[18px] font-medium text-[#FFFFFF]">
              USA (USD $) / English
            </span>
          </div>
        </div>
      </footer>

      {/* ── CSS Animations ── */}
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
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

/* ── Reusable Option Group Selector ── */
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
        <label className="text-[13px] md:text-sm font-bold text-[#0D0D0D] uppercase">{label}</label>
        {guideLabel && (
          <button className="text-[11px] md:text-xs text-[#666666] hover:underline font-medium">
            {guideLabel}
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`px-4 py-3 md:px-5 md:py-[15px] border text-[13px] md:text-[15px] font-medium transition-all ${
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