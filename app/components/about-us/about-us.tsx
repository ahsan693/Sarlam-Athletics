"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "../home/home";

// ─── Rolling Text Button Component ──────────────────────────────────────────
const RollingButton = ({ href, children, className = "", style = {}, onClick }: any) => {
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
      <Link href={href} className={`group/btn relative inline-flex items-center justify-center overflow-hidden ${className}`} style={style}>
        {content}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`group/btn relative inline-flex items-center justify-center overflow-hidden ${className}`} style={style}>
      {content}
    </button>
  );
};

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
    role: "CEO, IronHand Gym",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
  },
  {
    quote:
      "Unlike many manufacturers, Sarlam worked closely with our team to refine materials, branding, and packaging before production. The finished products matched our specifications exactly.",
    name: "Erik Sandell",
    role: "Co-founder, Waypoint Athletics",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
];

export default function PrivateLabel() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[600px] md:h-[534px] 2xl:h-[650px] bg-[#0D0D0D] overflow-hidden -mt-[52px] pt-[52px] md:-mt-[0px] md:pt-[0px]">
        <img
          src="/Page 5/01.png"
          alt="Boxing training ring"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10 md:bg-gradient-to-r md:from-black md:via-black/60 md:to-black/10 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 md:bg-gradient-to-t md:from-black/70 md:via-transparent md:to-black/40" />

        <div className="relative z-20 max-w-[2560px] mx-auto px-5 md:px-16 h-full flex flex-col justify-end pb-[144px] mt-12 md:mt-0">
          <div>
            <p
              className="uppercase mb-4 md:hidden text-[12px] leading-[18px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.15em",
                color: "#FFFFFF",
              }}
            >
              HOME / SERVICES
            </p>
            <h1
              className="max-w-2xl text-[36px] leading-[40px] md:text-[47px] md:leading-[58px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: "-1.9px",
                color: "#FFFFFF",
              }}
            >
              Private Label Manufacturing
            </h1>
            <p
              className="md:hidden mt-4 max-w-sm text-[14px] leading-[20px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Sarlam Athletics delivers high-end custom manufacturing for
              premium combat sports brands worldwide.
            </p>
          </div>

          <div className="mt-[72px] flex flex-col md:flex-row md:items-start gap-6 md:gap-[72px]">
            <div className="space-y-[12px] border-t border-white/20 pt-4 md:border-t-0 md:pt-0">
              <p
                className="uppercase"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "17px",
                  letterSpacing: "0.4px",
                  color: "#FFFFFF",
                }}
              >
                Production Timeline
              </p>
              <p
                className="text-[14px] leading-[16px] md:text-[15px] md:leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                Production: 4–8 Weeks (After Sample Approval)
              </p>
            </div>
            <div className="space-y-[12px] border-t border-white/20 pt-4 md:border-t-0 md:pt-0">
              <p
                className="uppercase"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "17px",
                  letterSpacing: "0.4px",
                  color: "#FFFFFF",
                }}
              >
                Ideal For
              </p>
              <p
                className="text-[14px] leading-[16px] md:text-[15px] md:leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                Sports Brands, Gyms, Retailers & Distributors
              </p>
            </div>
            <div className="space-y-[12px] border-t border-white/20 pt-4 md:border-t-0 md:pt-0">
              <p
                className="uppercase"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "17px",
                  letterSpacing: "0.4px",
                  color: "#FFFFFF",
                }}
              >
                Manufacturing Model
              </p>
              <p
                className="text-[14px] leading-[16px] md:text-[15px] md:leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  color: "#FFFFFF",
                }}
              >
                OEM & Private Label Production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS OVERVIEW ─── */}
      <section className="pt-[80px] md:pt-[120px] bg-white">
        <div className="max-w-[2560px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[36px] pb-[64px]">
            <h2
              className="max-w-[622px] text-[28px] leading-[32px] md:text-[22px] md:leading-[26px] mb-6 md:mb-0"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: "-0.4px",
                color: "#000000",
              }}
            >
              How Our Private Label Manufacturing Process Works
            </h2>
            <div className="max-w-[622px]">
              <p
                className="text-[14px] leading-[22px] md:text-[15px] md:leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  color: "#434343",
                }}
              >
                Sarlam Athletics helps sports brands develop, manufacture, and
                launch custom combat sports equipment through a complete OEM and
                private label production process. From product planning and
                material selection to sampling, branding, manufacturing, and
                worldwide delivery, every stage is managed by our production
                team.
              </p>
              <p
                className="mt-[20px] text-[14px] leading-[22px] md:text-[15px] md:leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  color: "#434343",
                }}
              >
                We manufacture boxing gloves, MMA gear, BJJ uniforms, karate
                apparel, hand wraps, protective equipment, and training
                accessories using premium materials, consistent quality control,
                and scalable wholesale production.
              </p>
              <p
                className="mt-[20px] text-[14px] leading-[22px] md:text-[15px] md:leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  color: "#434343",
                }}
              >
                Whether you're launching a new sports brand or expanding an
                existing product line, we provide flexible production, custom
                branding, and reliable manufacturing support from prototype to
                shipment.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[280px] md:h-[422px] 2xl:h-[700px] overflow-hidden max-w-[2560px] mx-auto md:px-4">
          <img
            src="/Page 5/03.png"
            alt="MMA training in the cage"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ─── DETAIL LIST SECTIONS ─── */}
      <section className="max-w-[2560px] mx-auto px-5 md:px-16 bg-white pt-[72px]">
        {/* What's Included */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[36px] pb-[64px] border-b border-[#D7DADF]">
          <h2
            className="max-w-[622px] text-[22px] leading-[26px] md:text-[22px] md:leading-[26px] mb-4 md:mb-0"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.4px",
              color: "#000000",
            }}
          >
            What's Included in Our Manufacturing Service
          </h2>
          <ul className="space-y-[10px] max-w-[622px]">
            {includedItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "16px",
                    color: "#434343",
                  }}
                >
                  •
                </span>
                <span
                  className="text-[14px] leading-[22px] md:text-[15px] md:leading-[16px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    color: "#434343",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries We Serve */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[36px] py-[64px] md:pt-[72px] md:pb-[64px] border-b border-[#D7DADF]">
          <h2
            className="max-w-[622px] text-[22px] leading-[26px] md:text-[22px] md:leading-[26px] mb-4 md:mb-0"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.4px",
              color: "#000000",
            }}
          >
            Industries We Serve
          </h2>
          <ul className="space-y-[10px] max-w-[622px]">
            {industries.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "16px",
                    color: "#434343",
                  }}
                >
                  •
                </span>
                <span
                  className="text-[14px] leading-[22px] md:text-[15px] md:leading-[16px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    color: "#434343",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center py-[60px] w-full">
          <RollingButton
            href="/contact"
            className="bg-black px-5 py-3 w-full md:w-auto text-white"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "16px",
              borderRadius: "4px",
            }}
          >
            Request a Manufacturing Quote
          </RollingButton>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="max-w-[2560px] mx-auto px-5 md:px-16 pt-[80px] pb-[120px] bg-white">
        <h2
          className="mb-[48px] text-[28px] leading-[32px] md:text-[37px] md:leading-[46px]"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
            fontWeight: 500,
            letterSpacing: "-1.5px",
            color: "#000000",
          }}
        >
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#D7DADF]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`py-8 md:py-8 flex flex-col justify-between ${
                i === 0
                  ? "md:pr-8 md:border-r border-b md:border-b-0 border-[#D7DADF]"
                  : "md:pl-8"
              }`}
              style={{ minHeight: "380px" }}
            >
              <p
                className="mb-6 md:mb-0 text-[18px] leading-[22px] md:text-[22px] md:leading-[26px] max-w-[540px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-0.4px",
                  color: "#000000",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-[44px] h-[44px] rounded-full object-cover"
                />
                <div>
                  <p
                    className="text-[14px] leading-[16px] md:text-[15px] md:leading-[16px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      color: "#434343",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[13px] leading-[16px] md:text-[15px] md:leading-[16px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      color: "#434343",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="max-w-[2560px] mx-auto px-5 md:px-8 py-16 md:py-24 bg-white">
        <div className="relative rounded-[16px] md:rounded-sm overflow-hidden">
          <img src="/Page 5/02.png" alt="BJJ academy training session" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 py-16 px-6 md:py-24 md:px-12 flex flex-col items-center text-center">
            <h2 className="mb-4 md:mb-6 max-w-2xl text-[28px] leading-[34px] md:text-[37px] md:leading-[46px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.5px", color: "#FFFFFF" }}>
              Ready to Start Your Private Label Manufacturing Project?
            </h2>
            <p className="mb-8 md:mb-10 max-w-xl text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "rgba(255,255,255,0.8)" }}>
              Tell us what you want to manufacture, and our team will prepare a production plan, pricing estimate, and recommended manufacturing approach.
            </p>
            <div className="w-full md:w-auto">
              <RollingButton
                href="/contact"
                className="border border-white text-white uppercase w-full md:w-auto rounded-[8px]"
                style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "5%", padding: "16px 24px" }}
              >
                Request A Quote
              </RollingButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-[2560px] mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
            <div className="lg:w-1/2">
              <h3 className="mb-4 md:mb-6 text-[32px] leading-[40px] md:text-[47px] md:leading-[58px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.9px", color: "#000000" }}>
                Start Your Private Label<br className="hidden md:block" /><span className="md:hidden"> </span>Manufacturing Project
              </h3>
              <a href="mailto:hello@sarlamathletics.com" className="transition break-all hover:text-black text-[24px] leading-[30px] md:text-[47px] md:leading-[58px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, letterSpacing: "-1.9px", color: "#A5A5A5" }}>
                hello@sarlamathletics.com
              </a>
            </div>
            
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

            <div className="hidden lg:flex gap-16">
              <div className="flex flex-col gap-3">
                {["Home", "Products", "Private Label", "Manufacturing Process"].map((link) => (
                  <a key={link} href="#" className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>{link}</a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {["About", "Contact", "Request Quote"].map((link) => (
                  <a key={link} href="#" className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>{link}</a>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {["Boxing Gloves", "Martial Arts Uniforms", "MMA Gear", "Training Accessories"].map((link) => (
                  <a key={link} href="#" className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>{link}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#D7DADF] my-8 md:my-12" />

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
            <h2 className="uppercase text-[56px] leading-[90%] md:text-[101px] md:leading-[85%]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 700, fontStyle: "italic", letterSpacing: "-3%", color: "#000000" }}>
              sarlam<br className="hidden md:block" /><span className="md:hidden"> </span>athletics
            </h2>
            <div className="flex flex-col md:items-end gap-2 md:gap-0">
              <span className="md:hidden block text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>
                Website by Sanna Granqvist<br />© 2026
              </span>
              <span className="hidden md:block text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#000000" }}>© 2026</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0D0D0D]">
          <div className="max-w-[2560px] mx-auto px-5 md:px-8 py-4 md:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
            <span className="text-[12px] leading-[16px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, color: "#E3E2E2" }}>
              © 2026 Sarlam Athletics. Private-label sports equipment manufacturer for combat sports brands.
            </span>
            <span className="uppercase text-[12px] leading-[18px]" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, color: "#FFFFFF" }}>USA (USD $) / English</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button className="w-full flex items-center justify-between py-4 md:py-6 text-left" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 500, fontSize: "14px", color: "#000000" }} onClick={() => setOpen(!open)}>
        {title}
        <svg className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="pb-4 md:pb-6 flex flex-col gap-3 md:gap-4">{children}</div>}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="hover:text-[#0D0D0D] transition block" style={{ fontFamily: "'FFF Acid Grotesk', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "17px", color: "#757575" }}>{children}</a>;
}