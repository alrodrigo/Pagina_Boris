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
            description: "Evaluación clínica completa en Hospital Corea o Unifranz."
        },
        {
            number: "03",
            icon: Trophy,
            title: "Victoria y Salud",
            description: "Protocolos quirúrgicos y de recuperación de vanguardia."
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
            description: "Evaluación clínica completa en Hospital Corea o Unifranz."
        },
        {
            number: "03",
            icon: Award,
            title: "Tratamiento Integral",
            description: "Protocolos quirúrgicos y de recuperación de vanguardia."
        }
    ];

    const locations = [
        {
            name: "Hospital Municipal Modelo Corea",
            location: "El Alto",
            schedule: "Lunes - Miércoles",
            mapUrl: "https://maps.google.com/?q=Hospital+Municipal+Modelo+Corea+El+Alto"
        },
        {
            name: "Clínica Unifranz",
            location: "La Paz",
            schedule: "Martes - Jueves",
            mapUrl: "https://maps.google.com/?q=Clinica+Unifranz+La+Paz"
        }
    ];

    return (
        <footer className="bg-primary-dark relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                {/* PARTE 1: El Proceso */}
                <section className="py-12 sm:py-16 md:py-20 border-b border-slate-800">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 ${isFanMode
                            ? 'text-white font-anton uppercase tracking-widest'
                            : 'text-white'
                            }`}
                        style={isFanMode ? { textShadow: '0 0 20px rgba(234, 179, 8, 0.6), 3px 3px 6px rgba(0,0,0,0.8)' } : {}}
                    >
                        {isFanMode ? 'TU CAMINO A LA VICTORIA' : 'Tu camino hacia la recuperación'}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative"
                            >
                                {/* Número grande con gradiente */}
                                <div className={`text-6xl sm:text-7xl md:text-8xl font-bold mb-4 ${isFanMode
                                    ? 'text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 font-anton'
                                    : 'text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600'
                                    }`}>
                                    {step.number}
                                </div>

                                {/* Icono */}
                                <div className="mb-6">
                                    <step.icon
                                        className={`w-12 h-12 ${isFanMode
                                            ? 'text-yellow-500'
                                            : 'text-blue-400'
                                            }`}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                {/* Título */}
                                <h3 className={`text-2xl font-bold mb-3 ${isFanMode
                                    ? 'text-yellow-400 font-anton uppercase'
                                    : 'text-white'
                                    }`}>
                                    {step.title}
                                </h3>

                                {/* Descripción */}
                                <p className={`text-base leading-relaxed ${isFanMode
                                    ? 'text-gray-300'
                                    : 'text-gray-400'
                                    }`}>
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* PARTE 2: Tarjetas de Ubicación */}
                <section className="py-20 border-b border-slate-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {locations.map((location, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className={`p-8 rounded-2xl ${isFanMode
                                    ? 'bg-slate-900/80 border-2 border-yellow-500/50'
                                    : 'bg-slate-800/50 backdrop-blur-sm border border-slate-700'
                                    }`}
                            >
                                <h3 className={`text-2xl font-bold mb-4 ${isFanMode
                                    ? 'text-yellow-400 font-anton uppercase'
                                    : 'text-white'
                                    }`}>
                                    {location.name}
                                </h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3">
                                        <MapPin className={`w-5 h-5 ${isFanMode ? 'text-yellow-500' : 'text-blue-400'}`} />
                                        <span className="text-gray-300">{location.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className={`w-5 h-5 ${isFanMode ? 'text-yellow-500' : 'text-blue-400'}`} />
                                        <span className="text-gray-300">{location.schedule}</span>
                                    </div>
                                </div>

                                <a
                                    href={location.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all ${isFanMode
                                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500 hover:bg-yellow-500 hover:text-black'
                                        : 'bg-blue-500/20 text-blue-400 border border-blue-500 hover:bg-blue-500 hover:text-white'
                                        }`}
                                >
                                    <MapPin className="w-4 h-4" />
                                    Ver en Mapa
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* PARTE 3: Gran Botón CTA */}
                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-center p-12 rounded-3xl ${isFanMode
                            ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border-2 border-yellow-500'
                            : 'bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30'
                            }`}
                    >
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isFanMode
                            ? 'text-white font-anton uppercase tracking-wide'
                            : 'text-white'
                            }`}>
                            {isFanMode ? '¡JUGUEMOS EN EQUIPO POR TU SALUD!' : '¿Listo para agendar?'}
                        </h2>

                        <motion.a
                            href="https://wa.me/59177777777"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: isFanMode
                                    ? ['8px 8px 0px 0px rgba(0,0,0,1)', '12px 12px 0px 0px rgba(0,0,0,1)', '8px 8px 0px 0px rgba(0,0,0,1)']
                                    : ['0 20px 60px rgba(59, 130, 246, 0.3)', '0 20px 80px rgba(59, 130, 246, 0.5)', '0 20px 60px rgba(59, 130, 246, 0.3)']
                            }}
                            transition={{
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className={`inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full text-base sm:text-lg md:text-xl font-bold transition-all ${isFanMode
                                ? 'bg-yellow-500 text-black border-2 border-black hover:translate-x-[4px] hover:translate-y-[4px]'
                                : 'bg-blue-600 text-white hover:bg-blue-500'
                                }`}
                        >
                            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span className="whitespace-nowrap">{isFanMode ? 'Contactar al Dr. Tigre' : 'WhatsApp Profesional'}</span>
                        </motion.a>
                    </motion.div>
                </section>

                {/* Copyright */}
                <div className="py-8 border-t border-slate-800">
                    <p className={`text-center text-sm ${isFanMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        © 2025 Dr. Jackaroe Reis - La Paz, Bolivia
                    </p>
                </div>

            </div>
        </footer>
    );
}
