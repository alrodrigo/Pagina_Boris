'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
    isFanMode: boolean;
    toggleTheme: () => void;
}

export default function Navbar({ isFanMode, toggleTheme }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#experiencia', label: 'Experiencia' },
        { href: '#servicios', label: 'Servicios' },
        { href: '#ubicaciones', label: 'Ubicaciones' },
        { href: '#contacto', label: 'Contacto' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${isFanMode ? 'bg-sky-600/90 shadow-lg border-b border-bolivar-gold/30' : 'bg-white/90 shadow-sm border-b border-slate-200'
            }`}>
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                {/* Logo/Nombre */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3"
                >
                    <div className={`text-lg sm:text-xl md:text-2xl font-bold ${isFanMode
                        ? 'text-white font-montserrat uppercase tracking-wide'
                        : 'text-slate-900'
                        }`}>
                        {isFanMode ? 'DR. BORIS DELGADO' : 'Dr. Boris Delgado Bernal'}
                    </div>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`transition-colors text-sm lg:text-base font-medium ${isFanMode
                                ? 'text-white hover:text-bolivar-gold'
                                : 'text-slate-600 hover:text-blue-700'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop Theme Toggle */}
                <div className="hidden md:block">
                    <ThemeToggle isFanMode={isFanMode} toggle={toggleTheme} />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`md:hidden p-2 rounded-lg transition-colors ${isFanMode
                        ? 'text-white hover:bg-sky-700/50'
                        : 'text-slate-700 hover:bg-slate-100'
                        }`}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`md:hidden overflow-hidden ${isFanMode
                            ? 'bg-white border-t border-sky-100 shadow-xl'
                            : 'bg-white border-t border-slate-200 shadow-xl'
                            }`}
                    >
                        <div className="container mx-auto px-4 py-6 space-y-4">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`block py-3 px-4 rounded-lg transition-colors text-lg font-medium ${isFanMode
                                        ? 'text-slate-700 hover:bg-sky-50 hover:text-sky-600'
                                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'
                                        }`}
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            {/* Mobile Theme Toggle */}
                            <div className="pt-4 border-t border-slate-100">
                                <ThemeToggle isFanMode={isFanMode} toggle={toggleTheme} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}





