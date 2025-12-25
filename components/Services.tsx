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
            title: "Medicina General",
            description: "Atención médica integral y diagnóstico preciso para diversas patologías.",
        },
        {
            icon: Scissors,
            title: "Cirugía Laparoscópica",
            description: "Procedimientos quirúrgicos mínimamente invasivos con rápida recuperación.",
        },
        {
            icon: HeartPulse,
            title: "Gerencia Hospitalaria",
            description: "Administración y gestión de servicios de salud con excelencia y eficiencia.",
        },
    ];

    return (
        <section id="servicios" className="py-12 sm:py-14 md:py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 font-montserrat tracking-tight ${isFanMode ? 'text-white' : 'text-slate-900'}`}
                    style={isFanMode ? { textShadow: '0 4px 12px rgba(0, 0, 0, 0.6)' } : {}}
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
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`group relative p-8 rounded-2xl transition-all duration-500 overflow-hidden ${isFanMode
                                ? "bg-white/95 backdrop-blur-sm border-2 border-bolivar-celeste shadow-xl shadow-bolivar-celeste/20 hover:shadow-2xl hover:shadow-bolivar-gold/30 hover:border-bolivar-gold hover:-translate-y-2"
                                : "bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-200 hover:-translate-y-1"
                                }`}
                        >
                            {/* Número decorativo de fondo */}
                            {/* Número decorativo de fondo */}
                            <div className={`absolute top-4 right-4 text-9xl font-bold opacity-5 select-none ${isFanMode ? 'text-sky-900' : 'text-slate-900'}`}>
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            {/* Shine effect */}
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"
                                style={{ transform: 'skewX(-20deg)' }}
                            />
                            {/* Icono */}
                            {/* Icono */}
                            <motion.div
                                className="mb-6 relative z-10"
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <service.icon
                                    className={`w-16 h-16 ${isFanMode
                                        ? 'text-sky-500'
                                        : 'text-academy-blue'
                                        }`}
                                    strokeWidth={1.5}
                                />
                            </motion.div>

                            {/* Título */}
                            <h3 className={`text-2xl font-bold mb-4 relative z-10 text-slate-900 ${isFanMode ? 'font-montserrat uppercase tracking-wide' : ''
                                }`}>
                                {service.title}
                            </h3>

                            {/* Descripción */}
                            <p className={`text-base leading-relaxed relative z-10 text-slate-600
                                }`}>
                                {service.description}
                            </p>

                            {/* Línea decorativa inferior */}
                            <div className={`mt-6 h-1 w-16 rounded-full transition-all duration-300 ${isFanMode
                                ? 'bg-sky-500 group-hover:w-full'
                                : 'bg-blue-500 group-hover:w-full'
                                }`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}





