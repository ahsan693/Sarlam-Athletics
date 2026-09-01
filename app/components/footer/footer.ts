export const footerTaglines = {
  home: "Let's Build Your Sports Brand Together",
  contact: "Let's Build Your Sports Brand Together",
  about: "Let's Build Your Sports Equipment Brand",
  manufacture: "Let's Build Your Sports Equipment Brand",
  products: "Start Your Private Label Manufacturing Project",
  privateLabel: "Ready Build Your Sports Equipment Brand ?",
  product: "Start Your Private Label Manufacturing Project",
} as const;

export type FooterTagline = (typeof footerTaglines)[keyof typeof footerTaglines];
