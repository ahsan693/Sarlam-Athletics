"use client";

// product-detail.tsx
import { useState } from "react";
// Import the Header correctly from the home.tsx file
import { Header } from "../home/home"; 

const finishes = [
  { name: "Black", color: "#000000", selected: true },
  { name: "White", color: "#FFFFFF", selected: false },
  { name: "Navy", color: "#152238", selected: false },
];

const weightOptions = ["8 oz", "10 oz", "12 oz", "14 oz", "16 oz"];

const logoOptions = [
  "Screen Print",
  "Embroidery",
  "Rubber Patch",
  "Heat Transfer",
  "Debossed Logo",
];

const relatedProducts = [
  { name: "Jiu Jitsu Suit (Gi)", image: "/images/product-gi.jpg" },
  { name: "Boxing Gloves", image: "/images/product-boxing.jpg" },
  { name: "MMA Full Fight Gloves", image: "/images/product-mma.jpg" },
  { name: "Boxing Head Guard", image: "/images/product-headguard.jpg" },
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

export default function DetailsComponent() {
  const [selectedFinish, setSelectedFinish] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState("8 oz");
  const [selectedLogos, setSelectedLogos] = useState<string[]>(["Screen Print"]);

  const toggleLogo = (logo: string) => {
    setSelectedLogos((prev) =>
      prev.includes(logo) ? prev.filter((l) => l !== logo) : [...prev, logo]
    );
  };

  return (
    <div className="min-h-screen bg-white font-['FFF_Acid_Grotesk',sans-serif]">
      
      {/* ── Header ── */}
      <Header />

      {/* ── Announcement Banner ── */}
      <div className="bg-[#0D0D0D] h-[34px] flex items-center justify-center overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white text-xs font-medium mx-8">
            Request samples, MOQs, and custom production options for your brand.
          </span>
          <span className="text-white text-xs font-medium mx-8">
            Request samples, MOQs, and custom production options for your brand.
          </span>
        </div>
      </div>

      {/* ── Hero Banner ── */}
      <section className="relative h-[480px] overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <img
            src="/images/hero-boxing-gloves.jpg"
            alt="Boxing Gloves"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <span className="text-[15px] font-medium text-[#CC_CC_CC] mb-4 tracking-wide" style={{ color: "#CCCCCC" }}>
            Products
          </span>
          <h1 className="text-[44px] font-bold text-white leading-tight max-w-[664px]">
            Private Label Boxing Gloves Manufacturer
          </h1>
        </div>
      </section>

      {/* ── Product Presentation Grid ── */}
      <section className="px-16 py-20">
        <div className="flex gap-32 max-w-[1440px] mx-auto">
          {/* Left: Product Image */}
          <div className="w-[616px] shrink-0">
            <div className="bg-[#F9F9F9] rounded-none p-2 aspect-square flex items-center justify-center sticky top-24">
              <img
                src="/images/boxing-gloves-red.jpg"
                alt="Boxing Gloves"
                className="w-[600px] h-[600px] object-contain"
              />
            </div>
          </div>

          {/* Right: Product Configuration Panel */}
          <div className="flex-1 max-w-[616px]">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs text-[#6A72_82] mb-8" style={{ color: "#6A7282" }}>
              <a href="/" className="hover:underline">Home</a>
              <span>/</span>
              <a href="/products" className="hover:underline">Products</a>
              <span>/</span>
              <span>Boxing Gloves</span>
            </nav>

            {/* Title */}
            <div className="mb-6">
              <p className="text-sm font-bold text-[#666666]">Uniform Manufacturing</p>
              <h2 className="text-[44px] font-bold text-[#0D0D0D] leading-tight mt-2">
                Private Label Boxing Gloves
              </h2>
              <p className="text-xl text-[#0D0D0D] mt-3 leading-relaxed">
                Custom heavyweight and lightweight boxing gloves manufacturing for gyms, academies, retailers, and boxing brands.
              </p>
            </div>

            {/* Divider */}
            <hr className="border-t border-gray-200 mb-6" />

            {/* Description */}
            <div className="mb-6">
              <p className="text-base text-[#666666] leading-relaxed">
                Sarlam Athletics manufactures premium private label boxing gloves for sports brands, gyms, retailers, distributors, and wholesalers. We offer OEM manufacturing, custom branding, premium materials, flexible minimum order quantities, and factory-direct production for training, sparring, fitness, and competition boxing gloves.
              </p>
              <p className="text-base text-[#666666] leading-relaxed mt-4">
                Customize every aspect of your gloves, including leather type, padding density, wrist closure, stitching, logo placement, colors, labels, and retail packaging to match your brand requirements.
              </p>
            </div>

            {/* Customize Heading */}
            <div className="mb-8">
              <h3 className="text-[26px] font-bold text-[#101828]">
                Customize Your Boxing Gloves
              </h3>
              <p className="text-xs font-medium text-[#99A1B0] mt-2">
                Select your requirements and we&apos;ll prepare a detailed quote.
              </p>
            </div>

            {/* Select Finish (Color Swatches) */}
            <div className="mb-8">
              <label className="text-sm font-bold text-[#0D0D0D] block mb-3">
                Select Finish
              </label>
              <div className="flex gap-3">
                {finishes.map((finish, i) => (
                  <button
                    key={finish.name}
                    onClick={() => setSelectedFinish(i)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all ${
                      selectedFinish === i
                        ? "border-[#0D0D0D]"
                        : "border-transparent"
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full border border-[#0D0D0D]"
                      style={{ backgroundColor: finish.color }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Materials Dropdown */}
            <DropdownSelector
              label="Materials"
              guideLabel="Material Guide"
              value="Genuine Leather"
            />

            {/* Padding Dropdown */}
            <DropdownSelector
              label="Padding"
              guideLabel="Padding Guide"
              value="IMF Foam"
            />

            {/* Closure Dropdown */}
            <DropdownSelector
              label="Closure"
              guideLabel="Closure Guide"
              value="Velcro"
            />

            {/* Weight Selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-[#0D0D0D]">Weight</label>
                <button className="text-xs text-[#666666] hover:underline">
                  Weight Guide
                </button>
              </div>
              <div className="flex gap-2">
                {weightOptions.map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-5 py-[15px] border text-[15px] font-medium transition-all ${
                      selectedWeight === weight
                        ? "border-[#0D0D0D] text-[#0D0D0D] bg-white"
                        : "border-gray-200 text-[#0D0D0D] hover:border-gray-400"
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Logo Application */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-[#0D0D0D]">
                  Logo Application
                </label>
                <button className="text-xs text-[#666666] hover:underline">
                  Logo Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {logoOptions.map((logo) => (
                  <button
                    key={logo}
                    onClick={() => toggleLogo(logo)}
                    className={`px-5 py-[15px] border text-[15px] font-medium transition-all ${
                      selectedLogos.includes(logo)
                        ? "border-[#0D0D0D] text-[#0D0D0D] bg-white"
                        : "border-gray-200 text-[#0D0D0D] hover:border-gray-400"
                    }`}
                  >
                    {logo}
                  </button>
                ))}
              </div>
            </div>

            {/* Packaging Dropdown */}
            <DropdownSelector
              label="Packaging"
              guideLabel="Packaging Guide"
              value="Poly Bag"
            />

            {/* MOQ Dropdown */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-[#0D0D0D]">MOQ</label>
                <button className="text-xs text-[#666666] hover:underline">
                  Quantity Guide
                </button>
              </div>
              <div className="border border-gray-200 px-4 py-[15px]">
                <span className="text-[15px] font-medium text-[#0D0D0D]">
                  100–300
                </span>
              </div>
            </div>

            <p className="text-xs text-[#666666] mb-10">
              MOQ starts from 100 pairs
            </p>

            {/* CTA Buttons */}
            <div className="space-y-3 mb-4">
              <button className="w-full bg-[#0D0D0D] text-white text-sm font-bold py-[18px] hover:bg-black/90 transition-colors">
                Request Manufacturing Quote
              </button>
              <button className="w-full border border-[#0D0D0D] text-[#0D0D0D] text-sm font-bold py-[18px] hover:bg-gray-50 transition-colors">
                Ask About Samples
              </button>
            </div>
            <p className="text-xs text-[#999999] text-center">
              Share your product specs and our team will respond with MOQ, sample, and wholesale production options.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features Strip ── */}
      <section className="px-16 pb-16">
        <hr className="border-t border-gray-200 mb-10" />
        <div className="flex items-start justify-between max-w-[1416px] mx-auto">
          {[
            { icon: "🏭", text: "Factory-Direct Manufacturing" },
            { icon: "🏷️", text: "OEM & Private Label Production" },
            { icon: "📦", text: "Flexible Minimum Order Quantities" },
            { icon: "🌍", text: "Worldwide Shipping" },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] flex items-center justify-center">
                <span className="text-lg">{feature.icon}</span>
              </div>
              <p className="text-[15px] font-medium text-[#0D0D0D] max-w-[205px] leading-snug">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── You May Also Like ── */}
      <section className="bg-white px-16 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[26px] font-bold text-[#0D0D0D]">
            Martial Arts Uniform Manufacturing Options
          </h2>
          <a
            href="/products"
            className="text-sm font-bold text-[#0D0D0D] hover:underline flex items-center gap-1"
          >
            View all options
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
        <div className="flex gap-0 overflow-x-auto">
          {relatedProducts.map((product, i) => (
            <div
              key={i}
              className="w-[360px] shrink-0 border border-[#C9C9C9] group cursor-pointer"
            >
              <div className="relative h-[280px] bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#0D0D0D] text-white text-[6.5px] font-medium px-3 py-1.5 uppercase tracking-wider">
                    Quick View
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#0D0D0D]">
                  {product.name}
                </span>
                <button className="text-[8px] font-medium text-[#0D0D0D] border border-[#0D0D0D] px-2 py-1 hover:bg-[#0D0D0D] hover:text-white transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quality Control Banner ── */}
      <section className="px-6 py-0">
        <div className="relative rounded-none overflow-hidden max-w-[1380px] mx-auto">
          <div className="absolute inset-0 bg-black">
            <img
              src="/images/quality-control-bg.jpg"
              alt="Quality Control"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center py-36 px-8">
            <h2 className="text-[26px] font-bold text-white mb-4 max-w-[654px]">
              Quality Control for Every Production Run
            </h2>
            <p className="text-base text-white/80 max-w-[654px] leading-relaxed">
              Every approved sample becomes the benchmark for bulk manufacturing. We check sizing, stitching, fabric finish, reinforcement points, logo placement, labeling, and packaging before production moves into final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ── MOQ, Pricing, and Samples ── */}
      <section className="px-20 py-20">
        <h2 className="text-[26px] font-bold text-[#0D0D0D] mb-6">
          MOQ, Pricing, and Samples
        </h2>
        <p className="text-base text-[#666666] leading-relaxed mb-10 max-w-[1280px]">
          Minimum order quantities and pricing depend on fabric selection, customization level, branding method, packaging, and total order volume. Share your requirements and we&apos;ll recommend the best starting point for your martial arts uniform project.
        </p>
        <div className="grid grid-cols-3 gap-5">
          {moqCards.map((card, i) => (
            <div key={i} className="bg-[#F5F5F5] p-8">
              <h3 className="text-sm font-bold text-[#0D0D0D] mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-white px-16 py-20">
        <div className="max-w-[1312px] mx-auto text-center">
          <h2 className="text-[26px] font-bold text-[#0D0D0D] mb-4">
            Start Your Private Label Manufacturing Project
          </h2>
          <a
            href="mailto:hello@sarlamathletics.com"
            className="text-sm text-[#0D0D0D] underline"
          >
            hello@sarlamathletics.com
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#D7DADE]">
        <div className="px-16 py-16">
          <div className="flex justify-between">
            {/* Footer Columns */}
            <div>
              <h4 className="text-xs font-bold text-[#0D0D0D] mb-4 uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-2">
                {["Home", "Products", "Private Label", "Manufacturing Process"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-xs text-[#666666] hover:text-[#0D0D0D] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#0D0D0D] mb-4 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2">
                {["About", "Contact", "Request Quote"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs text-[#666666] hover:text-[#0D0D0D] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#0D0D0D] mb-4 uppercase tracking-wider">
                Products
              </h4>
              <ul className="space-y-2">
                {[
                  "Boxing Gloves",
                  "Martial Arts Uniforms",
                  "MMA Gear",
                  "Training Accessories",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs text-[#666666] hover:text-[#0D0D0D] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-right">
              <p className="text-[64px] font-bold text-[#0D0D0D] leading-none uppercase">
                sarlam
              </p>
              <p className="text-[64px] font-bold text-[#0D0D0D] leading-none uppercase">
                athletics
              </p>
              <p className="text-xs text-[#666666] mt-4">© 2026</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D7DADE] px-16 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-[#666666]">
              <span>© 2026</span>
              <span className="font-medium text-[#0D0D0D]">Sarlam Athletics</span>
              <span>.</span>
              <span>Private-label sports equipment manufacturer for combat sports brands.</span>
            </div>
            <span className="text-xs text-[#666666]">
              usa(usd $) / ENGLISH
            </span>
          </div>
        </div>

        {/* Dark Bottom Strip */}
        <div className="bg-[#0D0D0D] h-[50px]" />
      </footer>
    </div>
  );
}

/* ── Reusable Dropdown Selector ── */
function DropdownSelector({
  label,
  guideLabel,
  value,
}: {
  label: string;
  guideLabel: string;
  value: string;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <label className="text-sm font-bold text-[#0D0D0D]">{label}</label>
        <button className="text-xs text-[#666666] hover:underline">
          {guideLabel}
        </button>
      </div>
      <div className="border border-gray-200 px-4 py-[15px] flex items-center justify-between cursor-pointer hover:border-gray-400 transition-colors">
        <span className="text-[15px] font-medium text-[#0D0D0D]">{value}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-[#0D0D0D]"
        >
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}