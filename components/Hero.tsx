'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import doctorImg from '../public/boris-doctor.png';
import fanImg from '../public/boris-fan.png';
import escudoImg from '../public/Escudo_de_Club_Bolívar.svg.png';
import FloatingParticles from './FloatingParticles'; // Pendiente: actualizar con escudo de Bolívar

interface HeroProps {
    isFanMode: boolean;
}

export default function Hero({ isFanMode }: HeroProps) {
    // Configuración de contenido según modo
    const content = isFanMode ? {
        title: "¡LA ACADEMIA VIBRA!",
        subtitle: "Pasión por la medicina, corazón celeste.",
        badges: [
            "Técnica y Elegancia",
            "Tradición Bolivarista",
            "Celeste de Corazón"
        ],
        buttonText: "Agendar Consulta",
        buttonClass: "bg-sky-50 text-sky-900 border-2 border-sky-500 hover:bg-sky-100 transition-all shadow-lg",
        highlightClass: "text-sky-600",
        backgroundText: "BORIS"
    } : {
        title: "Dr. Boris Delgado Bernal",
        subtitle: "Médico Cirujano especializado en Gerencia y Administración Hospitalaria.",
        badges: [
            "Jefe Médico - Caja de Salud de Caminos",
            "Director Hospital N°1 Obrajes",
            "Maestría en Administración en Salud - U. de Chile"
        ],
        buttonText: "Agendar Consulta",
        buttonClass: "bg-blue-50 text-blue-900 border-2 border-blue-600 hover:bg-blue-100 transition-all shadow-lg",
        highlightClass: "text-blue-700",
        backgroundText: "BORIS"
    };

    return (
        <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
            {/* Partículas flotantes en modo Fan */}
            {isFanMode && <FloatingParticles />}

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
                    className={`font-montserrat uppercase select-none pointer-events-none ${isFanMode ? 'text-sky-900/5' : 'text-slate-900/5'
                        }`}
                    style={{
                        fontSize: 'clamp(200px, 30vw, 500px)',
                        lineHeight: 0.8,
                        letterSpacing: '-0.05em',
                        WebkitTextStroke: isFanMode ? '3px rgba(234, 179, 8, 0.2)' : '2px rgba(59, 130, 246, 0.05)',
                        textShadow: isFanMode ? '0 0 80px rgba(234, 179, 8, 0.3)' : 'none'
                    }}
                >
                    {content.backgroundText}
                </motion.h1>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] py-8 lg:py-12">

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
                                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 lg:mb-6 leading-[0.9] font-montserrat tracking-tight ${isFanMode ? 'text-white' : 'text-academy-main'}`}
                                style={isFanMode ? {
                                    textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)'
                                } : {}}
                            >
                                {isFanMode ? (
                                    <>¡LA <span
                                        className="inline-block bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent"
                                    >ACADEMIA</span> VIBRA!</>
                                ) : (
                                    <><span className="text-slate-900">Dr. Boris</span> <span className="bg-gradient-to-r from-blue-700 to-indigo-800 text-transparent bg-clip-text">Delgado Bernal</span></>
                                )}
                            </motion.h1>

                            <motion.p
                                key={isFanMode ? "fan-sub" : "doc-sub"}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.7 }}
                                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 lg:mb-8 leading-relaxed font-medium ${isFanMode ? 'text-white' : 'text-slate-700'}`}
                                style={isFanMode ? {
                                    textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '0.75rem',
                                    display: 'inline-block'
                                } : {}}
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
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${isFanMode
                                        ? 'bg-white text-sky-900 border-2 border-white hover:bg-bolivar-gold hover:text-sky-900 hover:border-bolivar-gold shadow-lg'
                                        : 'bg-blue-50 text-blue-900 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-400'
                                        }`}
                                >
                                    <span>{badge}</span>
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
                    <div className="relative z-30 order-1 lg:order-2 h-[500px] lg:h-[70vh] flex items-end justify-end">
                        {/* Escudo del equipo (solo en modo hincha) - Detrás de la foto */}
                        {isFanMode && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
                                animate={{
                                    opacity: [0.4, 0.7, 0.4],
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
                                    top: '40%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 5
                                }}
                            >
                                <Image
                                    src={escudoImg}
                                    alt="Escudo Club Bolívar"
                                    fill
                                    className="object-contain"
                                    style={{
                                        filter: 'drop-shadow(0 15px 60px rgba(234, 179, 8, 0.8)) drop-shadow(0 0 40px rgba(0, 168, 232, 0.6)) brightness(1.2) saturate(1.3)'
                                    }}
                                />
                            </motion.div>
                        )}

                        {/* Resplandor decorativo con pulso */}
                        <motion.div
                            animate={{
                                backgroundColor: isFanMode ? "rgba(0, 168, 232, 0.4)" : "rgba(37, 99, 235, 0.2)",
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                scale: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="absolute w-[600px] h-[600px] rounded-full blur-[140px] -z-10"
                        />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isFanMode ? 'fan-img' : 'doc-img'}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                                transition={{ duration: 0.6 }}
                                className="absolute bottom-0 right-0 lg:right-10 w-full max-w-[350px] sm:max-w-[450px] lg:max-w-[600px] z-20"
                                style={{
                                    height: 'clamp(50vh, 70vh, 85vh)',
                                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                                }}
                            >
                                <Image
                                    src={isFanMode ? fanImg : doctorImg}
                                    alt={isFanMode ? "Hincha de Bolívar" : "Dr. Boris"}
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





