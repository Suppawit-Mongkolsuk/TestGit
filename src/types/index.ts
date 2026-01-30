// Types for Landing Page Configuration

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaButton: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
  backgroundImage?: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesSection {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  features: string[];
  highlighted?: boolean;
}

export interface ServicesSection {
  title: string;
  subtitle?: string;
  services: Service[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface TeamSection {
  title: string;
  subtitle?: string;
  members: TeamMember[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface TestimonialsSection {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface ContactSection {
  title: string;
  subtitle?: string;
  contactInfo: ContactInfo;
  formEnabled?: boolean;
}

export interface FooterSection {
  companyName: string;
  description?: string;
  copyright: string;
  links: {
    title: string;
    items: NavigationItem[];
  }[];
}

export interface LandingPageConfig {
  siteName: string;
  navigation: NavigationItem[];
  hero: HeroSection;
  features: FeaturesSection;
  services: ServicesSection;
  team?: TeamSection;
  testimonials?: TestimonialsSection;
  contact: ContactSection;
  footer: FooterSection;
}
