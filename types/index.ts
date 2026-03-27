export type Category = "wedding" | "birthday" | "anniversary" | "corporate" | "other";
export type Style = "minimalist" | "elegant" | "floral" | "modern" | "classic";
export type PackageType = "basic" | "premium" | "custom";
export type FeatureCategory = "design" | "guest" | "interactive" | "integration";

export interface Template {
    id: string;
    name: string;
    category: Category;
    style: Style;
    thumbnail: string;
    preview: string;
    price: number;
    features: string[];
    popular?: boolean;
}

export interface Feature {
    id: string;
    icon: string;
    title: string;
    description: string;
    category: FeatureCategory;
    benefit: string;
}

export interface PricingTier {
    id: string;
    name: PackageType;
    price: number;
    duration: string;
    features: string[];
    popular?: boolean;
    ctaText: string;
}

export interface Client {
    id: string;
    name: string;
    slug: string;
    package: PackageType;
    eventDetails: {
        title: string;
        date: string;
        time: string;
        location: string;
        mapUrl?: string;
    };
    customizations: {
        template?: string;
        colors?: string[];
        images?: string[];
        music?: string;
    };
    createdAt: Date;
    expiresAt: Date;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Testimonial {
    name: string;
    role: string;
    content: string;
    avatar?: string;
}