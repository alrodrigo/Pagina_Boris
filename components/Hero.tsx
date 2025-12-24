'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import doctorImg from '../public/doctor-profile.png';
import fanImg from '../public/tigre-fan.png';
import escudoImg from '../public/escudo.png';

interface HeroProps {
    isFanMode: boolean;
}

export default function Hero({ isFanMode }: HeroProps) {
    // Configuración de contenido según modo
    const content = isFanMode ? {
        title: "¡EL TIGRE MANDA!",
        subtitle: "Pasión por la medicina, locura por The Strongest.",
        badges: [
            "Garra y Sentimiento",
            "Campeón en la Cancha",
            "Oro y Negro"
        ],
        buttonText: "Hacerse Socio",
        buttonClass: "bg-black text-yellow-500 border border-yellow-500 hover:bg-yellow-500 hover:text-black",
        highlightClass: "text-yellow-500",
        backgroundText: "TIGRE"
    } : {
        title: "Dr. Jackaroe Reis Delgado",
        subtitle: "Cirujano Digestivo y Laparoscopía Avanzada. Especialista en Alta Complejidad.",
        badges: [
            "Director Médico Clínica Unifranz",
            "Decano y Docente Universitario",
            "Formación Internacional (Chile, Brasil, Colombia, Argentina)"
        ],
        buttonText: "Agendar Consulta",
        buttonClass: "bg-blue-600 text-white hover:bg-blue-700",
        highlightClass: "text-blue-400",
        backgroundText: "REIS"
    };

    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
            {/* CAPA 1: Fondo base */}
            <div className="absolute inset-0 z-0" />

            {/* CAPA 2: Texto gigante de fondo */}
            <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
                <motion.h1
                    key={isFanMode ? "fan-bg" : "doc-bg"}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                    className={`font-anton uppercase select-none pointer-events-none ${isFanMode ? 'text-yellow-500/10' : 'text-blue-400/5'
                        }`}
                    style={{
                        fontSize: 'clamp(200px, 30vw, 500px)',
                        lineHeight: 0.8,
                        letterSpacing: '-0.05em',
                        WebkitTextStroke: isFanMode ? '2px rgba(234, 179, 8, 0.1)' : '2px rgba(59, 130, 246, 0.05)'
                    }}
                >
                    {content.backgroundText}
                </motion.h1>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">

                    {/* CAPA 4: Información flotante (Izquierda) */}
                    <div className="relative z-40 order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.h1
                                key={isFanMode ? "fan-title" : "doc-title"}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6 leading-[0.9] ${isFanMode
                                    ? 'text-white font-anton uppercase tracking-wider'
                                    : 'text-white'
                                    }`}
                                style={isFanMode ? {
                                    textShadow: '0 0 20px rgba(234, 179, 8, 0.8), 0 0 40px rgba(234, 179, 8, 0.5), 4px 4px 8px rgba(0,0,0,0.8)',
                                    WebkitTextStroke: '1px rgba(0,0,0,0.5)'
                                } : {}}
                            >
                                {isFanMode ? (
                                    <>¡EL <span className="text-yellow-500" style={{ textShadow: '0 0 30px rgba(234, 179, 8, 1)' }}>TIGRE</span> MANDA!</>
                                ) : (
                                    <>Dr. Jackaroe <span className="text-blue-400">Reis Delgado</span></>
                                )}
                            </motion.h1>

                            <motion.p
                                key={isFanMode ? "fan-sub" : "doc-sub"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.7 }}
                                className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 ${isFanMode ? 'text-gray-200 font-medium' : 'text-gray-300'}`}
                            >
                                {content.subtitle}
                            </motion.p>
                        </motion.div>

                        {/* Badges con mejor legibilidad */}
                        <motion.div
                            key={isFanMode ? "fan-badges" : "doc-badges"}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start"
                        >
                            {content.badges.map((badge, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className={`px-5 py-3 rounded-full text-sm font-bold backdrop-blur-md border-2 shadow-lg ${isFanMode
                                        ? "bg-yellow-500/20 border-yellow-500 text-yellow-400 shadow-yellow-500/50"
                                        : "bg-blue-500/20 border-blue-400/50 text-blue-200 shadow-blue-500/30"
                                        }`}
                                >
                                    {badge}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-10 py-5 rounded-full font-bold text-xl shadow-2xl transition-all ${content.buttonClass}`}
                        >
                            {content.buttonText}
                        </motion.button>
                    </div>

                    {/* CAPA 3: Imagen del doctor/hincha (Derecha) */}
                    <div className="relative z-30 order-1 lg:order-2 h-[600px] lg:h-screen flex items-end justify-end">
                        {/* Escudo del equipo (solo en modo hincha) - Detrás de la foto */}
                        {isFanMode && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                                animate={{
                                    opacity: [0.3, 0.5, 0.3],
                                    scale: [0.95, 1.05, 0.95],
                                    rotate: -5
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[700px] lg:h-[700px] z-10"
                                style={{
                                    top: '45%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                <Image
                                    src={escudoImg}
                                    alt="Escudo The Strongest"
                                    fill
                                    className="object-contain"
                                    style={{
                                        filter: 'drop-shadow(0 10px 40px rgba(234, 179, 8, 0.6)) brightness(1.1)'
                                    }}
                                />
                            </motion.div>
                        )}

                        {/* Resplandor decorativo con pulso */}
                        <motion.div
                            animate={{
                                backgroundColor: isFanMode ? "rgba(234, 179, 8, 0.3)" : "rgba(37, 99, 235, 0.2)",
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                scale: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] -z-10"
                        />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isFanMode ? 'fan-img' : 'doc-img'}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                                transition={{ duration: 0.6 }}
                                className="absolute bottom-0 right-0 lg:right-10 w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[600px] z-20"
                                style={{ height: 'clamp(50vh, 70vh, 85vh)' }}
                            >
                                <Image
                                    src={isFanMode ? fanImg : doctorImg}
                                    alt={isFanMode ? "Fanático del Tigre" : "Dr. Jackaroe Reis"}
                                    fill
                                    placeholder="blur"
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    className="object-contain object-bottom"
                                    style={{
                                        filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.7))'
                                    }}
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
