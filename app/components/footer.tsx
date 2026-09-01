import Link from "next/link";
import { FooterTagline } from "./footer/footer";

export type FooterProps = {
  tagline: FooterTagline;
};

type FooterLink = {
  label: string;
  href: string;
};

const navigation: FooterLink[][] = [
  [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Private Label", href: "/privatelabel" },
    { label: "Manufacturing Process", href: "/manufacture" },
  ],
  [
    { label: "About", href: "/aboutus" },
    { label: "Contact", href: "/contact" },
    { label: "Request Quote", href: "/contact" },
  ],
  [
    { label: "Boxing Gloves", href: "/details" },
    { label: "Martial Arts Uniforms", href: "/karatesuit" },
    { label: "MMA Gear", href: "/mmagloves" },
    { label: "Training Accessories", href: "/trainingpad" },
  ],
];

const linkClass = "transition border-b border-gray-200 pb-2 hover:opacity-70";
const linkStyle = {
  fontFamily: "'FFF Acid Grotesk', sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "17px",
  color: "#000000",
};

export function Footer({ tagline }: FooterProps) {
  return (
    <footer className="w-full bg-white border-t border-[#D7DADE]">
      <div className="max-w-[2560px] mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-12">
          <div className="lg:w-1/2">
            <h3
              className="max-w-[672px] mb-4 md:mb-6 text-[32px] leading-[38px] md:text-[47px] md:leading-[58px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: "-1.9px",
                color: "#000000",
              }}
            >
              {tagline}
            </h3>
            <a
              href="mailto:hello@sarlamathletics.com"
              className="block transition break-all hover:text-[#000000] text-[22px] leading-[30px] md:text-[47px] md:leading-[58px]"
              style={{
                fontFamily: "'FFF Acid Grotesk', sans-serif",
                fontWeight: 500,
                letterSpacing: "-1.9px",
                color: "#000000",
              }}
            >
              hello@sarlamathletics.com
            </a>
          </div>

          <div className="hidden lg:flex gap-16">
            {navigation.map((column, columnIndex) => (
              <nav key={columnIndex} className="flex flex-col gap-3" aria-label={columnIndex === 0 ? "Main navigation" : columnIndex === 1 ? "Company navigation" : "Product navigation"}>
                {column.map((link) => (
                  <Link key={link.label} href={link.href} className={linkClass} style={linkStyle}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>

          <div className="lg:hidden flex flex-col gap-3">
            {navigation.flat().map((link) => (
              <Link key={link.label} href={link.href} className={linkClass} style={linkStyle}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-[#D7DADF] my-8 md:my-12" />

        <Link href="/" className="block">
          <span
            className="uppercase text-[69px] leading-[85%] md:text-[101px] md:leading-[85%]"
            style={{
              fontFamily: "'FFF Acid Grotesk', sans-serif",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#000000",
            }}
          >
            sarlam<br />athletics
          </span>
        </Link>
      </div>

      <div className="bg-[#0D0D0D]">
        <div className="max-w-[2560px] mx-auto px-5 md:px-8 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
          <span className="text-[12px] leading-[16px] text-[#E3E2E2]">
            © 2026 Sarlam Athletics. Private-label sports equipment manufacturer for combat sports brands.
          </span>
          <span className="uppercase text-[12px] leading-[18px] font-medium text-white">
            USA (USD $) / English
          </span>
        </div>
      </div>
    </footer>
  );
}
