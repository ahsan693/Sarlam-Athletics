"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "../home/home";

// ─── Rolling Text Button Component ──────────────────────────────────────────
const RollingButton = ({
  href,
  children,
  className = "",
  style = {},
  onClick,
}: any) => {
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
      <Link
        href={href}
        className={`group/btn relative inline-flex items-center justify-center overflow-hidden ${className}`}
        style={style}
      >
        {content}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`group/btn relative inline-flex items-center justify-center overflow-hidden ${className}`}
      style={style}
    >
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

// ─── Footer Navigation Row (Mobile flat list with arrows) ──────────────────
const FooterNavRow = ({
  label,
  href,
  showDivider = true,
}: {
  label: string;
  href: string;
  showDivider?: boolean;
}) => (
  <div className={`flex flex-col ${showDivider ? "gap-[12px]" : ""}`}>
    <a
      href={href}
      className="flex items-center justify-between h-[17px]"
      style={{
        fontFamily: "'FFF Acid Grotesk', sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
        color: "#0D0D0D",
      }}
    >
      <span>{label}</span>
      <svg
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7.5H19M19 7.5L13 1.5M19 7.5L13 13.5"
          stroke="#0D0D0D"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
    {showDivider && <div className="h-[1px] bg-[#D7DADF]" />}
  </div>
);

export default function PrivateLabel() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[537px] md:h-[534px] 2xl:h-[650px] bg-[#0D0D0D] overflow-hidden -mt-[52px] pt-[52px] md:-mt-[0px] md:pt-[0px]">
        <img
          src="/Page 5/01.png"
          alt="Boxing training ring"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10 md:bg-gradient-to-r md:from-black md:via-black/60 md:to-black/10 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 md:bg-gradient-to-t md:from-black/70 md:via-transparent md:to-black/40" />

        <div className="relative z-20 max-w-[2560px] mx-auto px-5 md:px-16 h-full flex flex-col justify-start md:justify-end pb-0 md:pb-[144px] mt-12 md:mt-0">
          <div>
            <p
              className="mb-4 md:hidden text-[11px] leading-[14px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
            >
              Home / Services
            </p>
            <h1
              className="max-w-2xl text-[32px] leading-[38px] md:text-[47px] md:leading-[58px] tracking-[-1px] md:tracking-[-1.9px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
            >
              Private Label Manufacturing
            </h1>
            <p
              className="md:hidden mt-3 max-w-sm text-[15px] leading-[22px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                color: "#E4E4E4",
              }}
            >
              Sarlam Athletics delivers high-end custom manufacturing for
              premium combat sports brands worldwide.
            </p>
          </div>

          <div className="mt-[32px] md:mt-[72px] flex flex-col md:flex-row md:items-start gap-[20px] md:gap-[72px]">
            <div className="space-y-[6px] md:space-y-[12px]">
              <p
                className="uppercase text-[12px] md:text-[15px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
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
            <div className="space-y-[6px] md:space-y-[12px]">
              <p
                className="uppercase text-[12px] md:text-[15px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
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
            <div className="space-y-[6px] md:space-y-[12px]">
              <p
                className="uppercase text-[12px] md:text-[15px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
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
      <section className="pt-[80px] md:pt-[120px] pb-[80px] md:pb-0 bg-white">
        <div className="max-w-[2560px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[36px] pb-[20px] md:pb-[64px]">
            <h2
              className="max-w-[622px] text-[24px] leading-[30px] md:text-[22px] md:leading-[26px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: "-0.5px",
                color: "#0D0D0D",
              }}
            >
              How Our Private Label Manufacturing Process Works
            </h2>
            <div className="max-w-[622px]">
              <p
                className="text-[15px] leading-[22px] md:text-[15px] md:leading-[16px]"
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
                className="mt-[16px] md:mt-[20px] text-[15px] leading-[22px] md:text-[15px] md:leading-[16px]"
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
                className="mt-[16px] md:mt-[20px] text-[15px] leading-[22px] md:text-[15px] md:leading-[16px]"
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
        <div className="w-full h-[400px] md:h-[422px] 2xl:h-[700px] overflow-hidden max-w-[2560px] mx-auto px-5 md:px-4">
          <img
            src="/Page 5/03.png"
            alt="MMA training in the cage"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

  

      {/* ─── TESTIMONIALS ─── */}
      <section className="max-w-[2560px] mx-auto px-4 md:px-16 pt-[10px] md:pt-[80px] pb-[64px] md:pb-[120px] bg-white">
        <h2
          className="mb-[48px] text-[31px] leading-[39px] md:text-[37px] md:leading-[46px] font-semibold md:font-medium"
          style={{
            fontFamily: "'FFF Acid Grotesk', sans-serif",
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
              className={`py-[48px] md:py-8 flex flex-col gap-[20px] md:gap-0 md:justify-between ${
                i === 0
                  ? "md:pr-8 md:border-r border-b md:border-b-0 border-[#D7DADF]"
                  : "md:pl-8"
              } min-h-0 md:min-h-[380px]`}
            >
              <p
                className="text-[14px] leading-[22.5px] md:text-[22px] md:leading-[26px] max-w-[540px] text-[#47433B] md:text-black"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "-0.4px",
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
                    className="text-[15px] leading-[22.5px] md:text-[15px] md:leading-[16px] text-[#47433B] md:text-[#434343]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[14.5px] leading-[22.5px] md:text-[15px] md:leading-[16px] text-[#47433B] md:text-[#434343]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
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
      <section className="max-w-[2560px] mx-auto px-4 md:px-8 py-[64px] md:py-24 bg-white">
        <div className="relative rounded-[12px] md:rounded-sm overflow-hidden">
          <img
            src="/Page 5/02.png"
            alt="BJJ academy training session"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 py-[100px] px-4 md:py-24 md:px-12 flex flex-col items-center text-center">
            <h2
              className="mb-4 md:mb-6 max-w-2xl text-[24px] leading-[34px] md:text-[37px] md:leading-[46px] font-semibold md:font-medium"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                letterSpacing: "-1.5px",
                color: "#FFFFFF",
              }}
            >
              Ready to Start Your Private Label Manufacturing Project?
            </h2>
            <p
              className="mb-8 md:mb-10 max-w-xl text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Tell us what you want to manufacture, and our team will prepare a
              production plan, pricing estimate, and recommended manufacturing
              approach.
            </p>
            <div className="w-full md:w-auto">
              <RollingButton
                href="/contact"
                className="border border-white text-white uppercase w-full md:w-auto rounded-[6px] md:rounded-[8px] text-[12px] md:text-[14px] font-medium md:font-bold py-[13px] px-[20px] md:py-[16px] md:px-[24px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  letterSpacing: "5%",
                }}
              >
                Request A Quote
              </RollingButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-[2560px] mx-auto px-5 md:px-8 pt-[48px] pb-[40px] md:py-16">
          <div className="flex flex-col lg:flex-row justify-between gap-[16px] md:gap-12">
            <div className="lg:w-1/2">
              <h3
                className="mb-4 md:mb-6 text-[47px] leading-[58px] md:text-[47px] md:leading-[58px]"
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
                className="transition break-all hover:text-black text-[47px] leading-[58px] md:text-[47px] md:leading-[58px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "-1.9px",
                  color: "#A5A5A5",
                }}
              >
                hello@sarlamathletics.com
              </a>
            </div>

            {/* Mobile Footer Navigation — flat list with arrows */}
            <div className="md:hidden mt-8 flex flex-col gap-[40px] pb-0">
              {/* Group 1: Main Navigation */}
              <div className="flex flex-col gap-[12px]">
                <FooterNavRow label="Home" href="/" />
                <FooterNavRow label="Products" href="/products" />
                <FooterNavRow label="Private Label" href="/private-label" />
                <FooterNavRow
                  label="Manufacturing Process"
                  href="/manufacturing"
                  showDivider={false}
                />
              </div>
              {/* Group 2: Secondary Navigation */}
              <div className="flex flex-col gap-[12px]">
                <FooterNavRow label="About" href="/about" />
                <FooterNavRow label="Contact" href="/contact" />
                <FooterNavRow
                  label="Request Quote"
                  href="/contact"
                  showDivider={false}
                />
              </div>
              {/* Group 3: Products */}
              <div className="flex flex-col gap-[12px]">
                <FooterNavRow
                  label="Boxing Gloves"
                  href="/products/boxing-gloves"
                />
                <FooterNavRow
                  label="Martial Arts Uniforms"
                  href="/products/martial-arts"
                />
                <FooterNavRow label="MMA Gear" href="/products/mma" />
                <FooterNavRow
                  label="Training Accessories"
                  href="/products/accessories"
                  showDivider={false}
                />
              </div>
            </div>

            {/* Desktop Footer Navigation — column layout */}
            <div className="hidden lg:flex gap-16">
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
                    className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
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
                    className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
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
                    className="transition border-b border-gray-200 pb-2 hover:opacity-70 text-[14px] leading-[17px]"
                    style={{
                      fontFamily: "'FFF Acid Grotesk', sans-serif",
                      fontWeight: 400,
                      color: "#000000",
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#D7DADF] my-8 md:my-12" />

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 md:gap-0">
            <h2
              className="uppercase text-[69px] leading-[90%] md:text-[101px] md:leading-[85%]"
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
            </h2>
            <div className="flex flex-col md:items-end gap-2 md:gap-0">
              {/* Mobile credits */}
              <div className="md:hidden flex flex-col gap-[8px]">
                <span
                  className="text-[12px] leading-[16px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    color: "#A5A5A5",
                  }}
                >
                  Website by Sanna Granqvist
                </span>
                <span
                  className="text-[14px] leading-[17px]"
                  style={{
                    fontFamily: "'FFF Acid Grotesk', sans-serif",
                    fontWeight: 400,
                    color: "#434343",
                  }}
                >
                  © 2026
                </span>
              </div>
              {/* Desktop credits */}
              <span
                className="hidden md:block text-[12px] leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  color: "#000000",
                }}
              >
                © 2026
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#0D0D0D]">
          <div className="max-w-[2560px] mx-auto px-5 md:px-8 pt-[24px] pb-[32px] md:py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
            {/* Mobile copyright (split into two lines) */}
            <div className="md:hidden flex flex-col gap-[4px]">
              <span
                className="text-[12px] leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  color: "#E3E2E2",
                }}
              >
                © 2026 Sarlam Athletics.
              </span>
              <span
                className="text-[12px] leading-[16px]"
                style={{
                  fontFamily: "'FFF Acid Grotesk', sans-serif",
                  fontWeight: 400,
                  color: "#E3E2E2",
                }}
              >
                Private-label sports equipment manufacturer for combat sports
                brands.
              </span>
            </div>
            {/* Desktop copyright (single line) */}
            <span
              className="hidden md:block text-[12px] leading-[16px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 400,
                color: "#E3E2E2",
              }}
            >
              © 2026 Sarlam Athletics. Private-label sports equipment
              manufacturer for combat sports brands.
            </span>
            <span
              className="uppercase text-[12px] leading-[18px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
            >
              USA (USD $) / English
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
        className="w-full flex items-center justify-between py-4 md:py-6 text-left"
        style={{
          fontFamily: "'FFF Acid Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          color: "#000000",
        }}
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <div className="pb-4 md:pb-6 flex flex-col gap-3 md:gap-4">
          {children}
        </div>
      )}
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="hover:text-[#0D0D0D] transition block"
      style={{
        fontFamily: "'FFF Acid Grotesk', sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
        color: "#757575",
      }}
    >
      {children}
    </a>
  );
}
