import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#8B5CF6",
                secondary: "#EC4899",
                accent: "#F59E0B",
                background: "#FFFFFF",
                text: "#1F2937",
                "text-light": "#6B7280",
                success: "#10B981",
                error: "#EF4444",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                heading: ["var(--font-poppins)"],
                accent: ["var(--font-playfair)"],
            },
        },
    },
    plugins: [],
};
export default config;