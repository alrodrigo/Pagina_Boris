'use client';

import { motion } from 'framer-motion';

interface TrayectoriaProps {
    isFanMode: boolean;
}

export default function Trayectoria({ isFanMode }: TrayectoriaProps) {
    const items = [
        {
            id: "01",
            title: "Formación",
            content: "Médico Cirujano (U. Católica Chile/UNSLP) y Especialista en Cirugía Digestiva (U. Zulia/Cali)."
        },
        {
            id: "02",
            title: "Cargos Jerárquicos",
            content: "Ex-Decano de Enfermería (UNSLP) y actual Director Médico en Clínica Unifranz."
        },
        {
            id: "03",
            title: "Experiencia Clínica",
            content: "Cirujano en Hospital Municipal Modelo Corea (El Alto)."
        },
        {
            id: "04",
            title: "Autoría",
            content: "Autor del libro Fundamentos Básicos de la Cirugía Clínica y coautor del manual MAgMA."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isFanMode ? 'text-black' : 'text-white'}`}
                >
                    {isFanMode ? 'TRAYECTORIA DE CAMPEÓN' : 'Trayectoria Profesional'}
                </motion.h2>

                <div className="grid grid-cols-1 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group p-8 rounded-xl border transition-all duration-300 hover:shadow-2xl flex flex-col md:flex-row gap-6 md:items-center ${isFanMode
                                    ? "bg-black border-yellow-500 shadow-yellow-500/20"
                                    : "bg-transparent border-white/10 hover:bg-white/5"
                                }`}
                        >
                            <div className="flex-shrink-0">
                                <span className={`text-5xl font-bold tracking-tighter ${isFanMode ? 'text-yellow-500' : 'text-white'}`}>
                                    {item.id}
                                </span>
                            </div>

                            <div className="flex-grow">
                                <h3 className={`text-2xl font-bold mb-2 ${isFanMode ? 'text-yellow-500' : 'text-white'}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-lg leading-relaxed ${isFanMode ? 'text-gray-300' : 'text-white/80'}`}>
                                    {item.content}
                                </p>
                            </div>

                            {/* Decorative gradient for Fan Mode */}
                            {isFanMode && (
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
