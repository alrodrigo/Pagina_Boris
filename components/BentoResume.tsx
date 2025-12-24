'use client';

import { motion } from 'framer-motion';
import { Hospital, GraduationCap, Users, BookOpen, Award, Briefcase } from 'lucide-react';

interface BentoResumeProps {
    isFanMode: boolean;
}

export default function BentoResume({ isFanMode }: BentoResumeProps) {
    const cardBaseClass = isFanMode
        ? "bg-yellow-500 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
        : "bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-slate-600/50 shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 hover:scale-[1.02]";

    return (
        <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
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
                    {isFanMode ? 'CURRICULUM DEL CAMPEÓN' : 'Trayectoria Profesional'}
                </motion.h2>

                {/* Bento Grid - Responsive */}
                <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">

                    {/* Tarjeta Grande - Formación Académica */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={!isFanMode ? { y: -5 } : {}}
                        className={`p-5 sm:p-6 md:p-8 rounded-2xl transition-all duration-300 ${cardBaseClass} ${isFanMode ? 'transform rotate-1 hover:rotate-0' : ''
                            }`}
                    >
                        {isFanMode && (
                            <div
                                className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none rounded-2xl"
                                style={{
                                    backgroundImage: `url('/scratch texture.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                        )}
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                            <GraduationCap className={`w-10 h-10 mb-4 relative z-10 ${isFanMode ? 'text-black' : 'text-blue-400'}`} />
                        </motion.div>
                        <h3 className={`text-2xl font-bold mb-4 relative z-10 ${isFanMode ? 'text-black font-anton uppercase' : 'text-white'}`}>
                            Formación Académica
                        </h3>
                        <ul className={`space-y-2 text-sm relative z-10 ${isFanMode ? 'text-black' : 'text-gray-300'}`}>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-blue-400'}`}>•</span>
                                <span><strong>Médico Cirujano</strong> – UNSLP y U. Católica de Chile</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-blue-400'}`}>•</span>
                                <span><strong>Cirugía General</strong> – Universidad de Zulia</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-blue-400'}`}>•</span>
                                <span><strong>Cirugía Digestiva y Laparoscopía Avanzada</strong> – U. de Cali, Colombia</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-blue-400'}`}>•</span>
                                <span><strong>Cirugía Bariátrica y Alta Complejidad</strong> – Hospital Goiás, Brasil</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-blue-400'}`}>•</span>
                                <span><strong>Medicina Regenerativa y Docencia</strong> – U. de Corrientes, Argentina</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-blue-400'}`}>•</span>
                                <span><strong>Maestría en Gerencia Hospitalaria</strong> – U. Franz Tamayo, Bolivia</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Tarjeta Alta - Experiencia Actual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={!isFanMode ? { y: -5 } : {}}
                        className={`p-8 rounded-2xl transition-all duration-300 ${cardBaseClass} ${isFanMode ? 'transform -rotate-1 hover:rotate-0' : ''
                            }`}
                    >
                        {isFanMode && (
                            <div
                                className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none rounded-2xl"
                                style={{
                                    backgroundImage: `url('/scratch texture.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                        )}
                        <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ duration: 0.3 }}>
                            <Hospital className={`w-10 h-10 mb-4 relative z-10 ${isFanMode ? 'text-black' : 'text-blue-400'}`} />
                        </motion.div>
                        <h3 className={`text-2xl font-bold mb-4 relative z-10 ${isFanMode ? 'text-black font-anton uppercase' : 'text-white'}`}>
                            Experiencia Actual
                        </h3>
                        <ul className={`space-y-2 text-sm relative z-10 ${isFanMode ? 'text-black' : 'text-gray-300'}`}>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-blue-400'}`}>•</span>
                                <span className="font-semibold">Director Médico y Jefe de Enseñanza – Clínica Unifranz (2018 - Actualidad)</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-blue-400'}`}>•</span>
                                <span className="font-semibold">Cirujano Digestivo – Hospital Municipal Modelo Corea (2018 - Actualidad)</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Tarjeta Ancha - Liderazgo y Docencia */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={!isFanMode ? { y: -5 } : {}}
                        className={`md:col-span-2 md:row-span-2 p-6 rounded-2xl transition-all duration-300 ${cardBaseClass} ${isFanMode ? 'transform rotate-1 hover:rotate-0' : ''
                            }`}
                    >
                        {isFanMode && (
                            <div
                                className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none rounded-2xl"
                                style={{
                                    backgroundImage: `url('/scratch texture.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                        )}
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                            <Users className={`w-9 h-9 mb-3 relative z-10 ${isFanMode ? 'text-black' : 'text-blue-400'}`} />
                        </motion.div>
                        <h3 className={`text-xl font-bold mb-3 relative z-10 ${isFanMode ? 'text-black font-anton uppercase' : 'text-white'}`}>
                            Liderazgo y Docencia
                        </h3>
                        <ul className={`space-y-2 text-sm relative z-10 ${isFanMode ? 'text-black' : 'text-gray-300'}`}>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-blue-400'}`}>•</span>
                                <span>Decano Segundo en Enfermería – UNSLP (2012-2013)</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-blue-400'}`}>•</span>
                                <span>Jefe de Enseñanza – Hospital Modelo Corea (2018-2019)</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-blue-400'}`}>•</span>
                                <span>Docente de Cirugía I-II – U. Franz Tamayo (2020-2022)</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Tarjeta Destacada - Publicaciones */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={!isFanMode ? { y: -5 } : {}}
                        className={`md:col-span-2 md:row-span-2 p-6 rounded-2xl transition-all duration-300 ${cardBaseClass} ${isFanMode ? 'transform -rotate-1 hover:rotate-0' : ''
                            }`}
                    >
                        {isFanMode && (
                            <div
                                className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none rounded-2xl"
                                style={{
                                    backgroundImage: `url('/scratch texture.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                        )}
                        {!isFanMode && (
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent pointer-events-none rounded-2xl" />
                        )}
                        <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ duration: 0.3 }}>
                            <BookOpen className={`w-9 h-9 mb-3 relative z-10 ${isFanMode ? 'text-black' : 'text-yellow-400'}`} />
                        </motion.div>
                        <h3 className={`text-xl font-bold mb-3 relative z-10 ${isFanMode ? 'text-black font-anton uppercase' : 'text-yellow-400'}`}>
                            Publicaciones
                        </h3>
                        <ul className={`space-y-2 text-sm relative z-10 ${isFanMode ? 'text-black' : 'text-gray-200'}`}>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-yellow-400'}`}>•</span>
                                <span className="font-semibold">Autor: "Fundamentos Básicos de la Cirugía Clínica"</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-yellow-400'}`}>•</span>
                                <span className="font-semibold">Coautor: Manual MAgMA (Medicina en Muy Alta Altitud)</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-yellow-400'}`}>•</span>
                                <span>Artículo: "Uso de Estereotaxia en Tuberculosis Cerebral"</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-black' : 'text-yellow-400'}`}>•</span>
                                <span>Coautor: "Neuroanatomía y Aplicaciones Clínicas"</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Tarjeta Extra - Reconocimiento */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        whileHover={!isFanMode ? { y: -5, scale: 1.02 } : {}}
                        className={`md:col-span-2 p-8 rounded-2xl transition-all duration-300 relative overflow-hidden ${isFanMode
                            ? 'bg-yellow-500 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                            : 'bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 backdrop-blur-sm border-2 border-blue-500/50 shadow-2xl hover:shadow-blue-500/40'
                            }`}
                    >
                        {isFanMode && (
                            <div
                                className="absolute inset-0 opacity-15 mix-blend-multiply pointer-events-none rounded-2xl"
                                style={{
                                    backgroundImage: `url('/scratch texture.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                        )}
                        <div className="flex items-center gap-5 relative z-10">
                            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} transition={{ duration: 0.3 }}>
                                <Award className={`w-14 h-14 flex-shrink-0 ${isFanMode ? 'text-black' : 'text-yellow-400'}`} />
                            </motion.div>
                            <div>
                                <h3 className={`text-2xl font-bold mb-2 ${isFanMode ? 'text-black font-anton uppercase' : 'text-white'}`}>
                                    {isFanMode ? 'RECONOCIMIENTO ESTRELLA DE LA SALUD' : 'Vocación y Compromiso'}
                                </h3>
                                <p className={`text-base ${isFanMode ? 'text-black font-semibold' : 'text-gray-300'}`}>
                                    {isFanMode
                                        ? 'Premiado por su contribución excepcional a la medicina y educación en Bolivia.'
                                        : 'Dedicación a la cirugía y la enseñanza, transmitiendo conocimiento y experiencia. Referente en cirugía digestiva en Bolivia.'}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
