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
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/10">
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                {/* Logo/Nombre */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3"
                >
                    <div className={`text-lg sm:text-xl md:text-2xl font-bold ${isFanMode
                            ? 'text-yellow-400 font-anton uppercase tracking-wide'
                            : 'text-white'
                        }`}>
                        {isFanMode ? 'DR. EL TIGRE' : 'Dr. Jackaroe Reis'}
                    </div>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`transition-colors text-sm lg:text-base ${isFanMode
                                    ? 'text-yellow-300 hover:text-yellow-100 font-bold'
                                    : 'text-gray-300 hover:text-white'
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
                            ? 'text-yellow-400 hover:bg-yellow-500/20'
                            : 'text-white hover:bg-white/10'
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
                                ? 'bg-slate-900/95 border-t-2 border-yellow-500'
                                : 'bg-slate-900/95 border-t border-slate-700'
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
                                    className={`block py-3 px-4 rounded-lg transition-colors text-lg ${isFanMode
                                            ? 'text-yellow-300 hover:bg-yellow-500/20 font-bold'
                                            : 'text-gray-300 hover:bg-white/10'
                                        }`}
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            {/* Mobile Theme Toggle */}
                            <div className="pt-4 border-t border-slate-700">
                                <ThemeToggle isFanMode={isFanMode} toggle={toggleTheme} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
