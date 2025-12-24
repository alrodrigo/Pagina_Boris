'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface ContactProps {
    isFanMode: boolean;
}

export default function Contact({ isFanMode }: ContactProps) {
    return (
        <footer className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-6 text-center z-10 relative">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-4xl md:text-5xl font-bold mb-10 ${isFanMode ? 'text-black' : 'text-white'}`}
                >
                    {isFanMode ? '¿Hablamos de fútbol?' : '¿Listo para mejorar su salud?'}
                </motion.h2>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group flex items-center justify-center gap-3 px-10 py-5 rounded-full text-xl font-bold shadow-2xl mx-auto transition-all ${isFanMode
                            ? 'bg-black text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                >
                    <MessageCircle className="w-6 h-6" />
                    Contactar por WhatsApp
                </motion.button>

                <div className="mt-20 pt-8 border-t border-white/10">
                    <p className={`text-sm ${isFanMode ? 'text-black/60' : 'text-white/40'}`}>
                        &copy; 2025 Dr. Jackaroe Reis - La Paz, Bolivia
                    </p>
                </div>
            </div>

            {/* Background Decorator */}
            <div className={`absolute bottom-0 left-0 w-full h-[50%] -z-0 bg-gradient-to-t ${isFanMode ? 'from-yellow-500/20' : 'from-blue-900/20'} to-transparent`} />
        </footer>
    );
}
