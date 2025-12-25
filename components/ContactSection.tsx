'use client';

import { motion } from 'framer-motion';
import { Calendar, ClipboardCheck, Award, Flag, ClipboardList, Trophy, MapPin, Clock, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
    isFanMode: boolean;
}

export default function ContactSection({ isFanMode }: ContactSectionProps) {
    // Pasos del proceso
    const steps = isFanMode ? [
        {
            number: "01",
            icon: Flag,
            title: "Inicio del Juego",
            description: "Reserva tu hora por WhatsApp sin esperas."
        },
        {
            number: "02",
            icon: ClipboardList,
            title: "Estrategia Táctica",
            description: "Evaluación clínica completa en Caja de Salud de Caminos."
        },
        {
            number: "03",
            icon: Trophy,
            title: "Victoria y Salud",
            description: "Atención médica de calidad y gestión hospitalaria de excelencia."
        }
    ] : [
        {
            number: "01",
            icon: Calendar,
            title: "Agendamiento Digital",
            description: "Reserva tu hora por WhatsApp sin esperas."
        },
        {
            number: "02",
            icon: ClipboardCheck,
            title: "Diagnóstico Preciso",
            description: "Evaluación clínica completa en Caja de Salud de Caminos."
        },
        {
            number: "03",
            icon: Award,
            title: "Tratamiento Integral",
            description: "Atención médica profesional y gestión hospitalaria de excelencia."
        }
    ];

    const locations = [
        {
            name: "Hospital N°1 Obrajes",
            location: "La Paz - Obrajes",
            schedule: "Lunes - Viernes",
            mapUrl: "https://maps.google.com/?q=Hospital+Obrajes+Caja+de+Salud+de+Caminos+La+Paz"
        },
        {
            name: "Caja de Salud de Caminos",
            location: "La Paz - Oficina Central",
            schedule: "Lunes - Viernes",
            mapUrl: "https://maps.google.com/?q=Caja+de+Salud+de+Caminos+La+Paz"
        }
    ];

    return (
        <footer id="contacto" className={`relative overflow-hidden border-t transition-colors duration-700 ${isFanMode ? 'bg-gradient-to-br from-sky-600 via-bolivar-celeste to-sky-700 border-bolivar-gold' : 'bg-white border-slate-200'}`}>
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                {/* PARTE 1: El Proceso */}
                <section className={`py-12 sm:py-16 md:py-20 ${isFanMode ? 'border-b border-white/20' : 'border-b border-slate-200'}`}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 ${isFanMode
                            ? 'text-white font-montserrat uppercase tracking-wide'
                            : 'text-slate-900'
                            }`}
                        style={isFanMode ? { textShadow: '0 2px 8px rgba(0,0,0,0.3)' } : {}}
                    >
                        {isFanMode ? 'TU CAMINO A LA VICTORIA' : 'Tu camino hacia la recuperación'}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 md:gap-6 mt-8 sm:mt-0">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex flex-col items-center justify-center pt-6 pb-2"
                            >
                                {/* Número grande */}
                                <div className={`text-6xl sm:text-7xl md:text-8xl font-bold mb-0 absolute top-0 z-0 opacity-[0.15] select-none ${isFanMode ? 'text-white/40' : 'text-slate-400'
                                    }`}>
                                    {step.number}
                                </div>

                                <div className="relative z-10 text-center flex flex-col items-center mt-8 sm:mt-10">
                                    <div className="flex justify-center mb-3 sm:mb-4">
                                        <step.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${isFanMode ? 'text-bolivar-gold' : 'text-blue-600'}`} />
                                    </div>
                                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${isFanMode ? 'text-white' : 'text-slate-900'}`}>
                                        {step.title}
                                    </h3>
                                    <p className={`text-sm sm:text-base max-w-[250px] mx-auto leading-relaxed ${isFanMode ? 'text-white/90' : 'text-slate-700'}`}>
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* PARTE 2: CTA Final */}
                <section className="py-20 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className={`p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl max-w-4xl mx-auto ${isFanMode ? 'bg-yellow-500 border-2 border-white' : 'bg-white border border-slate-100'}`}
                    >
                        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 font-montserrat tracking-tight ${isFanMode ? 'text-slate-900' : 'text-slate-900'}`}>
                            {isFanMode ? '¡AGENDA TU CITA AHORA!' : 'Agenda tu Consulta'}
                        </h2>

                        <motion.a
                            href="https://wa.me/59175886162"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-lg transition-all w-full sm:w-auto justify-center ${isFanMode
                                ? 'bg-white text-sky-900 border-2 border-white hover:bg-sky-900 hover:text-white hover:border-sky-900'
                                : 'bg-blue-50 text-blue-900 border-2 border-blue-600 hover:bg-blue-100'
                                }`}
                        >
                            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span>{isFanMode ? 'Contactar por WhatsApp' : 'Agendar Cita'}</span>
                        </motion.a>
                    </motion.div>
                </section>

                {/* Copyright */}
                <div className={`py-8 ${isFanMode ? 'border-t border-white/20' : 'border-t border-slate-200'}`}>
                    <p className={`text-center text-sm ${isFanMode ? 'text-white/80' : 'text-slate-500'}`}>
                        © 2025 Dr. Boris Delgado Bernal - La Paz, Bolivia
                    </p>
                    <p className={`mt-2 text-xs text-center ${isFanMode ? 'text-white/60' : 'text-slate-400'}`}>
                        Desarrollado con excelencia médica y pasión deportiva.
                    </p>
                </div>
            </div>
        </footer >
    );
}
