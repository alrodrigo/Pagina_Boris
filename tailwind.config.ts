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
                'bolivar-sky': '#60A5FA', // Sky 500 - Fan Accent
                'bolivar-navy': '#0C4A6E', // Sky 900 - Fan Dark Text
                'bolivar-light': '#E0F2FE', // Sky 100 - Fan Light Background
                'bolivar-celeste': '#00A8E8', // Celeste vibrante oficial
                'bolivar-gold': '#EAB308', // Dorado/Amarillo acento
                'bolivar-navy-dark': '#0A1128', // Azul marino oscuro
                'academy-main': '#0F172A', // Slate 900 - Main Text / Doctor Dark
                'academy-blue': '#1D4ED8', // Blue 700 - Doctor Accent
                'academy-gray': '#F1F5F9', // Slate 100 - Background Base
                'clean-white': '#FFFFFF',
                'bolivar-dark': '#082F49',
                'text-dim': '#94a3b8',
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                bebas: ['var(--font-bebas)'],
                anton: ['var(--font-anton)'],
                montserrat: ['var(--font-montserrat)'],
            },
            backgroundImage: {
                'gradient-academia': 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #0C4A6E 100%)',
                'gradient-celeste': 'linear-gradient(135deg, #BAE6FD 0%, #60A5FA 100%)',
                'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
            },
            animation: {
                'gradient-shift': 'gradient-shift 3s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'slide-in-right': 'slide-in-right 0.5s ease-out',
                'slide-in-left': 'slide-in-left 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.6s ease-out',
                'shine': 'shine 2s ease-in-out infinite',
            },
            keyframes: {
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)' },
                    '50%': { boxShadow: '0 0 40px rgba(96, 165, 250, 0.8)' },
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(100px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                'slide-in-left': {
                    '0%': { transform: 'translateX(-100px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                'fade-in-up': {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'shine': {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
            },
        },
    },
    plugins: [],
};
export default config;

