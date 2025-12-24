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
                'primary-dark': '#0f172a',
                'primary-blue': '#1e40af',
                'accent-gold': '#fbbf24',
                'text-dim': '#94a3b8',
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                bebas: ['var(--font-bebas)'],
                anton: ['var(--font-anton)'],
            },
        },
    },
    plugins: [],
};
export default config;
