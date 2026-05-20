export interface NavLink {
  text: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bg: "off-white-1" | "off-white-2" | "off-white-3" | "white";
}

export interface CaseStudy {
  companyLogoSrc: string;
  companyLogoAlt: string;
  title: string;
  href: string;
  quote: string;
  personName: string;
  personTitle: string;
  personAvatarSrc: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarSrc?: string;
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}
