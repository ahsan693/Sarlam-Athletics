"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Header } from "../home/home";

// ─── Data Arrays ────────────────────────────────────────────────────────────
const allProducts = [
  { name: "Private Label Boxing Gloves", category: "Boxing Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/details", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/01 Private Label Boxing Gloves.png" },
  { name: "BJJ Gis and Jiu-Jitsu Uniforms", category: "Martial Arts Uniforms", cta: "View Product +", mobileCta: "View Product →", href: "/jitsu", swatches: ["#0D0D0D", "#E5E5E5"], image: "/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png" },
  { name: "MMA Fight Gloves", category: "MMA Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/mmagloves", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/03 MMA Fight Gloves.png" },
  { name: "Professional MMA Training Gloves", category: "MMA Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/ultimategloves", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/MMATrainingGloves.png" },
  { name: "Boxing Focus Mitts and Training Pads", category: "Training Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/trainingpad", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/05 Boxing Mitts and Training Pads.png" },
  { name: "Boxing Sparring Gloves", category: "Boxing Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/sparinggloves", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/06 Boxing Sparring Gloves.png" },
  { name: "Custom Boxing Headguards", category: "Protective Equipment", cta: "View Product +", mobileCta: "View Product →", href: "/Boxingguard", swatches: ["#B91C1C", "#0D0D0D"], image: "/Products/07 Custom Boxing Headguards.png" },
  { name: "Private Label Karate Uniforms", category: "Martial Arts Uniforms", cta: "View Product +", mobileCta: "View Product →", href: "/karatesuit", swatches: ["#E5E5E5", "#0D0D0D"], image: "/Products/karateuniform.png" },
];

const relatedProducts = [
  { name: "Jiu Jitsu Suit (Gi)", href: "/jitsu", cta: "View Product", image: "/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png" },
  { name: "Boxing Gloves", href: "/details", cta: "View Product", image: "/Products/01 Private Label Boxing Gloves.png" },
  { name: "MMA Full Fight Gloves", href: "/mmagloves", cta: "View Product", image: "/Products/03 MMA Fight Gloves.png" },
  { name: "Boxing Head Guard", href: "/Boxingguard", cta: "View Product", image: "/Products/07 Custom Boxing Headguards.png" },
];

const moqCards = [
  { title: "Minimum Order Quantity", description: "MOQs vary based on product specifications, fabric choice, colors, labels, and packaging requirements." },
  { title: "Wholesale Pricing", description: "Pricing is quoted based on materials, construction, branding method, order size, and delivery requirements." },
  { title: "Sample Development", description: "Samples help you review fit, stitching, fabric, branding, and packaging before approving bulk production." },
];

const features = [
  { text: "Factory-Direct Manufacturing" },
  { text: "OEM & Private Label Production" },
  { text: "Flexible Minimum Order Quantities" },
  { text: "Worldwide Shipping" },
];

// ─── Rolling Text Button Component ──────────────────────────────────────────
const RollingButton = ({ href, children, className = "", style = {}, onClick, type = "button", disabled }: any) => {
  const content = (
    <span className="relative flex items-center justify-center overflow-hidden w-full h-full">
      <span className="flex items-center justify-center w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 flex items-center justify-center w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full group-hover/btn:translate-y-0">
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={`group/btn relative inline-flex items-center justify-center overflow-hidden ${className} ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`} style={style}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`group/btn relative inline-flex items-center justify-center overflow-hidden ${className} ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`} style={style}>
      {content}
    </button>
  );
};

// --- Icons (inline SVGs) ---
const ArrowUpRight = () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9L9 3M9 3H4M9 3v5" /></svg>;
const ChevronDownIcon = () => <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ArrowLeft = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>;
const ArrowRight = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3.5 9.5L7 13L14.5 5" stroke="#0D0D0D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Main Details Page Component ────────────────────────────────────────────
export default function KarateSuitDetailsPage() {
  const relatedScrollerRef = useRef<HTMLDivElement>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollRelated = (dir: 1 | -1) => {
    const el = relatedScrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-related-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 360; 
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  // --- WEB3FORMS FORMDATA SUBMISSION HANDLER ---
  const handleQuoteSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Add Web3Forms API credentials
    formData.append("access_key", "39dc5b13-90fe-40da-97f9-2440b5c7aaf3");
    formData.append("subject", "New Private Label Quote Request - Jiu Jitsu Suit");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        alert("Success! Your manufacturing quote request has been sent successfully.");
        form.reset(); // Clear the form on success
      } else {
        alert("Error: There was an issue submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Error: Network connection failed. Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-['FFF_Acid_Grotesk',sans-serif]">
      
      {/* --- Centralized Header --- */}
      <Header />

      {/* --- Announcement Banner --- */}
      <div className="bg-[#0D0D0D] h-[34px] flex items-center justify-center overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-white text-xs font-medium mx-8 tracking-widest md:tracking-normal uppercase">
              SAMPLES, MOQS, AND CUSTOM PRODUCTION OPTIONS FOR YOUR BRAND.
            </span>
          ))}
        </div>
      </div>

      {/* --- Hero Banner --- */}
      <section className="relative h-[320px] md:h-[480px] overflow-hidden flex justify-center">
        <div className="absolute inset-0 bg-black max-w-[2560px] mx-auto w-full">
         <img src="/Page 7/01-1.png" alt="Private Label Sports Equipment Manufacturing" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-[2560px] mx-auto">
          <span className="text-[15px] leading-[17px] tracking-[0.4px] text-[#CBCBCB] font-normal md:tracking-wide md:text-[#CCCCCC] mb-3 md:mb-4 uppercase text-center md:text-left">
            PRODUCTS / PRIVATE LABEL MANUFACTURING
          </span>
          <h1 className="text-[37px] leading-[46px] tracking-[-1.5px] font-normal text-white md:text-[44px] md:leading-tight md:font-bold md:tracking-normal max-w-[800px] uppercase text-center">
            Private Label Sports Equipment Manufacturing
          </h1>
        </div>
      </section>

      {/* --- Product Presentation Grid --- */}
      <section className="px-5 md:px-16 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 max-w-[2560px] mx-auto lg:justify-center">
          {/* Left: Product Image */}
          <div className="w-full lg:w-[616px] shrink-0">
            <div className="w-full h-[320px] md:h-auto md:aspect-square bg-[#F9F9F9] rounded-[6px] md:rounded-none border border-gray-200 md:border-none p-4 md:p-2 flex items-center justify-center lg:sticky lg:top-24 max-w-[800px] mx-auto">
              <img 
                src="/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png" 
                alt="Jiu Jitsu Suit Gi" 
                className="w-full h-full md:w-[600px] md:h-[600px] object-cover md:object-contain mix-blend-multiply" 
              />
            </div>
          </div>

          {/* Right: Product Configuration Panel */}
          <div className="flex-1 max-w-full lg:max-w-[616px] mx-auto lg:mx-0">
            {/* Breadcrumbs */}
            <nav className="flex items-center flex-wrap gap-2 font-['PP_Mori',sans-serif] text-[12px] leading-[16px] tracking-[0px] text-[#6A7282] font-normal md:font-['FFF_Acid_Grotesk',sans-serif] md:text-xs md:font-medium mb-6 md:mb-8 text-left uppercase md:tracking-wide">
              <Link href="/" className="hover:underline">HOME</Link><span>/</span>
              <Link href="/products" className="hover:underline">PRODUCTS</Link><span>/</span>
              <Link href="/products" className="hover:underline text-[#6A7282]">MARTIAL ARTS UNIFORM MANUFACTURING OPTIONS</Link><span>/</span>
              <span className="text-[#0D0D0D]">JIU JITSU SUIT (GI)</span>
            </nav>

            <div className="mb-6 md:mb-8">
              <p className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#666666] uppercase text-left md:text-sm md:tracking-normal">
                Martial Arts Uniform Manufacturing
              </p>
              <h2 className="text-[37px] leading-[46px] tracking-[-1.5px] font-medium text-[#0D0D0D] mt-2 text-left md:text-[44px] md:leading-tight md:font-bold md:tracking-normal">
                Jiu Jitsu Suit (Gi)
              </h2>
              <p className="text-[20px] leading-[26px] tracking-[-0.6px] font-normal text-[#0D0D0D] mt-3 md:mt-4 text-left md:text-xl md:leading-relaxed md:tracking-normal">
                Custom martial arts jiu jitsu uniform manufacturing for gyms, academies, and martial arts wear brands.
              </p>
            </div>

            <hr className="border-t border-gray-200 mb-6 md:mb-8" />

            <div className="mb-8 md:mb-10">
              <p className="text-[16px] leading-[20px] tracking-[0px] font-normal text-[#666666] text-left md:text-base md:leading-relaxed">
                Sarlam Athletics manufactures private-label martial arts uniforms for gyms, academies, combat sports brands, retailers, and distributors. We support custom fabric options, sizing, colorways, patches, embroidery, woven labels, packaging, and branding details for wholesale production.
              </p>
              <p className="text-[16px] leading-[20px] tracking-[0px] font-normal text-[#666666] text-left md:text-base md:leading-relaxed mt-4">
                Samples can be developed before bulk manufacturing so your team can review fit, stitching, material feel, logo placement, and final presentation before approving a larger order.
              </p>
            </div>

            <div className="mb-6 md:mb-8">
              <h3 className="text-[26px] leading-[26px] tracking-[-0.5px] font-bold text-[#101828] text-left md:tracking-normal">
                Customise Your Order
              </h3>
            </div>

            {/* --- FORM WRAPPER --- */}
            <form onSubmit={handleQuoteSubmit} className="flex flex-col gap-4">
              
              <div className="border border-[#C9C9C9] rounded px-3 py-3 flex flex-col gap-0">
                <span className="text-[11px] leading-[14px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#707070" }}>Full Name*</span>
                <input 
                  type="text" 
                  name="name"
                  required
                  onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]/g, ""))}
                  placeholder="e.g. John Doe" 
                  className="bg-transparent outline-none text-[14px] leading-[18px] mt-0 placeholder:text-[#9CA3AF] focus:placeholder-transparent" 
                  style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#0D0D0D" }} 
                />
              </div>

              <div className="border border-[#C9C9C9] rounded px-3 py-3 flex flex-col gap-0">
                <span className="text-[11px] leading-[14px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#707070" }}>Business Email*</span>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="e.g. john@yourbrand.com" 
                  className="bg-transparent outline-none text-[14px] leading-[18px] placeholder:text-[#9CA3AF] focus:placeholder-transparent" 
                  style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#0D0D0D" }} 
                />
              </div>

              <div className="border border-[#C9C9C9] rounded px-3 py-3 flex flex-col gap-0">
                <span className="text-[11px] leading-[14px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#707070" }}>Phone Number (Optional)</span>
                <input 
                  type="tel" 
                  name="phone"
                  onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\+\-\(\)\s]/g, ""))}
                  placeholder="e.g. +1 (555) 000-0000" 
                  className="bg-transparent outline-none text-[14px] leading-[18px] placeholder:text-[#9CA3AF] focus:placeholder-transparent" 
                  style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#0D0D0D" }} 
                />
              </div>

              {/* 2-col grid for Product Name & Quantity */}
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-3">
                
                {/* Product Name Input (Read-only) */}
                <div className="border border-[#C9C9C9] rounded px-3 py-3 flex flex-col gap-0 bg-[#F9F9F9]">
                  <span className="text-[11px] leading-[14px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#707070" }}>Product Name*</span>
                  <input 
                    type="text"
                    name="productName"
                    value="Jiu Jitsu Suit (Gi)"
                    readOnly
                    className="bg-transparent outline-none text-[13px] leading-[18px] mt-0.5 min-w-0 text-[#0D0D0D] text-ellipsis overflow-hidden whitespace-nowrap" 
                    style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400 }} 
                  />
                </div>

                {/* Estimated Order Quantity Datalist with chevron */}
                <div className="border border-[#C9C9C9] rounded px-3 py-3 flex flex-col gap-0 relative">
                  <span className="text-[11px] leading-[14px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#707070" }}>Estimated Order Quantity*</span>
                  <input 
                    type="text" 
                    name="quantity"
                    required
                    list="quantity-options"
                    placeholder="e.g. 500 pairs" 
                    className="bg-transparent outline-none text-[13px] leading-[18px] mt-0.5 min-w-0 placeholder:text-[#9CA3AF] focus:placeholder-transparent pr-6 text-ellipsis overflow-hidden whitespace-nowrap [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer" 
                    style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#0D0D0D" }} 
                  />
                  <div className="absolute right-3 top-[60%] -translate-y-1/2 pointer-events-none text-[#707070]">
                    <ChevronDownIcon />
                  </div>
                  <datalist id="quantity-options">
                    <option value="100" />
                    <option value="200" />
                    <option value="300" />
                    <option value="500" />
                    <option value="1000" />
                  </datalist>
                </div>
                
              </div>

              <div className="border border-[#C9C9C9] rounded px-3 py-3 flex flex-col gap-0 mb-4">
                <span className="text-[11px] leading-[14px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#707070" }}>Project Details*</span>
                <textarea 
                  name="message"
                  required
                  placeholder="Tell us about your branding, materials, colors, logo requirements, packaging, target market, or any other details." 
                  rows={3} 
                  className="bg-transparent outline-none resize-none text-[14px] leading-[18px] mt-1 placeholder:text-[#9CA3AF] focus:placeholder-transparent" 
                  style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#0D0D0D" }} 
                />
              </div>

              {/* Buttons matching the Jiu Jitsu Page Layout */}
              <div className="space-y-3 md:space-y-4 mb-4 mt-8 md:mt-12">
                <RollingButton type="submit" disabled={isSubmitting} className={`w-full bg-[#0D0D0D] text-white text-[14px] leading-[18px] tracking-[0.1px] font-normal py-4 md:py-[18px] uppercase md:tracking-wide rounded-[4px] ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}>
                  {isSubmitting ? "Submitting..." : "Request Manufacturing Quote"}
                </RollingButton>
                <RollingButton type="button" className="w-full border border-[#0D0D0D] text-[#0D0D0D] text-[13px] tracking-[0px] font-normal py-4 md:py-[18px] uppercase md:text-sm md:tracking-wide rounded-[4px]">
                  Ask About Samples
                </RollingButton>
              </div>
            </form>

            <p className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#999999] text-center md:text-xs">
              Share your product specs and our team will respond with MOQ, sample, and wholesale production options.
            </p>
          </div>
        </div>
      </section>

      {/* --- Features Strip --- */}
      <section className="px-6 md:px-16 pb-16 md:pb-24 flex justify-center">
        <div className="w-full max-w-[2560px]">
          <hr className="border-t border-gray-200 mb-8 md:mb-10 w-full" />
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center lg:justify-between gap-6 lg:gap-10">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] flex items-center justify-center shrink-0"><CheckIcon /></div>
                <p className="text-[15px] leading-[21px] tracking-[0.45px] font-medium text-[#0D0D0D] text-left md:text-[15px] md:leading-snug md:tracking-normal max-w-[250px]">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- You May Also Like --- */}
      <section className="bg-white px-4 md:px-16 py-10 md:py-24 border-y border-[#C9C9C9] md:border-y-0 md:border-t md:border-gray-100 flex justify-center">
        <div className="max-w-[2560px] w-full overflow-hidden">
          <div className="flex items-end justify-between mb-6 md:mb-16 gap-4">
            <h2 className="text-[26px] leading-[26px] md:text-[37px] md:leading-[46px] tracking-[-0.5px] font-bold text-[#0D0D0D] uppercase max-w-[302px] md:max-w-none md:tracking-normal md:normal-case">
              Martial Arts Uniform Manufacturing Options
            </h2>
            <Link href="/products" className="text-[14px] leading-[18px] font-bold text-[#0D0D0D] whitespace-nowrap shrink-0 md:hidden">View all</Link>
            <div className="hidden md:flex items-center gap-[6px] shrink-0 z-10 relative pb-2">
              <Link href="/products" className="text-[14px] leading-[18px] tracking-[0.1px] font-bold text-[#0D0D0D] shrink-0 hover:underline md:uppercase md:flex md:items-center md:gap-1 md:text-sm md:tracking-normal mr-2 md:mr-4">
                View all
                <svg className="hidden md:inline-block" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" /></svg>
              </Link>
              <button onClick={() => scrollRelated(-1)} aria-label="Previous" className="w-[30px] h-[30px] flex items-center justify-center text-gray-400 hover:text-black transition"><ArrowLeft /></button>
              <button onClick={() => scrollRelated(1)} aria-label="Next" className="w-[30px] h-[30px] flex items-center justify-center text-black hover:opacity-70 transition"><ArrowRight /></button>
            </div>
          </div>

          <div ref={relatedScrollerRef} className="grid grid-cols-2 gap-3 md:flex md:overflow-x-auto md:gap-6 md:snap-x md:snap-mandatory hide-scrollbar md:pb-4">
            {relatedProducts.map((product, i) => (
              <div key={i} data-related-card className="border border-[#C9C9C9] rounded bg-white flex flex-col md:w-[360px] md:snap-start md:shrink-0 md:rounded-none group">
                <Link href={product.href} className="block p-2 md:p-0">
                  <div className="relative flex items-center justify-center aspect-square md:aspect-auto md:h-[280px] bg-gray-100 overflow-hidden rounded-sm md:rounded-none">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain p-4 md:p-0 md:object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#0D0D0D] text-white text-[10px] font-medium px-4 py-2 uppercase tracking-wider">Quick View</span>
                    </div>
                  </div>
                </Link>
                <div className="px-2 pb-2 flex flex-col gap-2 md:px-5 md:py-4 md:flex-row md:items-center md:justify-between md:gap-0 mt-auto border-t border-transparent md:border-gray-200">
                  <span className="text-[12px] leading-[15px] font-bold text-[#0D0D0D] text-left md:text-[14px] md:leading-[18px] md:uppercase">{product.name}</span>
                  <RollingButton
                    href={product.href}
                    className="text-[10px] leading-[12px] font-bold text-[#0D0D0D] underline md:no-underline md:border md:border-[#0D0D0D] md:px-3 md:py-1.5 md:uppercase md:text-[10px] md:font-medium text-left rounded-[4px]"
                  >
                    {product.cta}
                  </RollingButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Quality Control Banner --- */}
      <section className="px-0 md:px-6 py-16 md:py-24 flex justify-center">
        <div className="relative rounded-none overflow-hidden max-w-[2560px] w-full mx-auto">
          <div className="absolute inset-0 bg-black">
            <img src="/Page 7/01.png" alt="Quality Control" className="w-full h-full object-cover opacity-50" />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6 md:py-36 md:px-8">
            <h2 className="font-['Switzer',sans-serif] text-[32px] leading-[38.4px] tracking-[-0.32px] font-semibold text-[#FFFFFF] text-center mb-6 md:mb-8 max-w-[654px] uppercase md:font-['FFF_Acid_Grotesk',sans-serif] md:text-[26px] md:font-bold md:leading-tight md:tracking-normal">
              Quality Control for Every Production Run
            </h2>
            <p className="text-[15px] leading-[18px] tracking-[0px] font-normal text-[#FFFFFF] text-center max-w-[654px] md:text-base md:text-white/80 md:leading-relaxed">
              Every approved sample becomes the benchmark for bulk manufacturing. We check sizing, stitching, fabric finish, reinforcement points, logo placement, labeling, and packaging before production moves into final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* --- MOQ, Pricing, and Samples --- */}
      <section className="px-6 md:px-20 py-16 md:py-24 flex justify-center w-full border-t border-gray-100">
        <div className="w-full max-w-[2560px]">
          <h2 className="text-[22px] leading-[28px] tracking-[0px] font-bold text-[#0D0D0D] text-left mb-6 md:mb-8 md:text-[37px] md:leading-[46px] md:tracking-tight">
            MOQ, Pricing, and Samples
          </h2>
          <p className="text-[13px] leading-[20px] tracking-[0px] font-normal text-[#434343] text-left mb-10 md:mb-16 max-w-[1280px] md:text-base md:text-[#666666] md:leading-relaxed">
            Minimum order quantities and pricing depend on fabric selection, customization level, branding method, packaging, and total order volume. Share your requirements and we&apos;ll recommend the best starting point for your martial arts uniform project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {moqCards.map((card, i) => (
              <div key={i} className="bg-[#F5F5F5] p-6 md:p-8">
                <h3 className="text-[15px] leading-[20px] tracking-[0px] font-bold text-[#0D0D0D] text-left mb-3 md:mb-4 uppercase md:text-sm md:tracking-wide">{card.title}</h3>
                <p className="text-[12px] leading-[18px] tracking-[0px] font-normal text-[#434343] text-left md:text-sm md:text-[#666666] md:leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-[#D7DADE]">
        <div className="max-w-[2560px] mx-auto px-6 md:px-10 py-12 md:py-16 flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
          <div className="lg:w-1/2">
            <h3 className="mb-4 md:mb-6 text-[47px] leading-[58px] tracking-[-1.9px] font-medium text-[#000000] text-left md:text-[#0D0D0D] md:tracking-tight">
              Start Your Private Label<br className="hidden md:block" /><span className="md:hidden"> </span>Manufacturing Project
            </h3>
            <a href="mailto:hello@sarlamathletics.com" className="text-[28px] leading-[36px] md:text-[47px] md:leading-[58px] tracking-[-1.9px] font-medium text-[#A5A5A5] text-left transition break-all hover:text-[#000000] md:tracking-tight block">
              hello@sarlamathletics.com
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-16">
            <div className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "Private Label", href: "/privatelabel" },
                { name: "Manufacturing Process", href: "/manufacture" }
              ].map((link) => (
                <a key={link.name} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px] font-normal text-[#000000]">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {[
                { name: "About", href: "/aboutus" },
                { name: "Contact", href: "/contact" },
                { name: "Request Quote", href: "/contact" }
              ].map((link) => (
                <a key={link.name} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px] font-normal text-[#000000]">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {[
                { name: "Boxing Gloves", href: "/details" },
                { name: "Martial Arts Uniforms", href: "/karatesuit" },
                { name: "MMA Gear", href: "/mmagloves" },
                { name: "Training Accessories", href: "/trainingpad" }
              ].map((link) => (
                <a key={link.name} href={link.href} className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px] font-normal text-[#000000]">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-0" />

        <div className="max-w-[2560px] mx-auto px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
          <Link href="/" className="block">
            <span className="text-[69px] leading-[85%] tracking-[-0.03em] font-bold italic text-[#000000] text-left uppercase md:text-[101px] md:tracking-tight md:text-[#0D0D0D]">
              sarlam<br className="hidden md:block" /><span className="md:hidden"> </span>athletics
            </span>
          </Link>
        </div>

        <div className="bg-black">
          <div className="max-w-[2560px] mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
            <span className="text-[12px] leading-[16px] tracking-[0px] font-normal text-[#E3E2E2] text-left">
              © 2026 Sarlam Athletics. Private-label sports equipment manufacturer for combat sports brands.
            </span>
            <span className="text-[12px] leading-[18px] tracking-[0px] font-medium text-[#FFFFFF] text-center md:text-left uppercase">
              USA (USD $) / English
            </span>
          </div>
        </div>
      </footer>

      {/* --- CSS Animations --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
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
        `
      }} />
    </div>
  );
}