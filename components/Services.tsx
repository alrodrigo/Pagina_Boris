'use client';

import { motion } from 'framer-motion';
import { Activity, Scissors, HeartPulse } from 'lucide-react';

interface ServicesProps {
    isFanMode: boolean;
}

export default function Services({ isFanMode }: ServicesProps) {
    const services = [
        {
            icon: Activity,
            title: "Cirugía Bariátrica",
            description: "Control de peso y mejora metabólica con técnicas mínimamente invasivas.",
        },
        {
            icon: Scissors,
            title: "Cirugía Digestiva",
            description: "Tratamiento experto para patologías de estómago, colon y vesícula.",
        },
        {
            icon: HeartPulse,
            title: "Laparoscopía Avanzada",
            description: "Cirugía de alta complejidad con incisiones mínimas y rápida recuperación.",
        },
    ];

    return (
        <section className="py-12 sm:py-16 md:py-24 bg-primary-dark relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 ${isFanMode
                        ? 'text-white font-anton uppercase tracking-widest'
                        : 'text-white'
                        }`}
                    style={isFanMode ? { textShadow: '0 0 20px rgba(234, 179, 8, 0.6), 3px 3px 6px rgba(0,0,0,0.8)' } : {}}
                >
                    {isFanMode ? 'SERVICIOS DEL CAMPEÓN' : 'Tratamientos Especializados'}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className={`group p-8 rounded-2xl transition-all duration-300 ${isFanMode
                                ? 'bg-slate-900/80 backdrop-blur-sm border-2 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] transform hover:rotate-1'
                                : 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 shadow-xl hover:shadow-2xl hover:border-blue-500/50'
                                }`}
                        >
                            {/* Icono */}
                            <motion.div
                                className="mb-6"
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <service.icon
                                    className={`w-16 h-16 ${isFanMode
                                        ? 'text-yellow-500'
                                        : 'text-blue-400'
                                        }`}
                                    strokeWidth={1.5}
                                />
                            </motion.div>

                            {/* Título */}
                            <h3 className={`text-2xl font-bold mb-4 ${isFanMode
                                ? 'text-yellow-400 font-anton uppercase tracking-wide'
                                : 'text-white'
                                }`}>
                                {service.title}
                            </h3>

                            {/* Descripción */}
                            <p className={`text-base leading-relaxed ${isFanMode
                                ? 'text-gray-300'
                                : 'text-gray-400'
                                }`}>
                                {service.description}
                            </p>

                            {/* Línea decorativa inferior */}
                            <div className={`mt-6 h-1 w-16 rounded-full transition-all duration-300 ${isFanMode
                                ? 'bg-yellow-500 group-hover:w-full'
                                : 'bg-blue-500 group-hover:w-full'
                                }`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
