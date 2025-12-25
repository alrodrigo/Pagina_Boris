'use client';

import { motion } from 'framer-motion';
import { Hospital, GraduationCap, Users, BookOpen, Award, Briefcase } from 'lucide-react';

interface BentoResumeProps {
    isFanMode: boolean;
}

export default function BentoResume({ isFanMode }: BentoResumeProps) {
    const cardBaseClass = isFanMode
        ? "bg-white/95 backdrop-blur-sm border-2 border-bolivar-celeste shadow-xl shadow-bolivar-celeste/20 hover:shadow-2xl hover:shadow-bolivar-gold/30 hover:border-bolivar-gold hover:-translate-y-2 transition-all duration-300"
        : "bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300";

    return (
        <section className="py-12 sm:py-14 md:py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 ${isFanMode ? 'font-montserrat uppercase tracking-wide' : ''
                        }`}
                    style={isFanMode ? {
                        background: 'linear-gradient(135deg, #0F172A 0%, #00A8E8 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 2px 8px rgba(234, 179, 8, 0.3))'
                    } : { color: '#0F172A' }}
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
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                            <GraduationCap className={`w-12 h-12 mb-4 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`} />
                        </motion.div>
                        <h3 className={`text-2xl font-bold mb-2 text-slate-900 ${isFanMode ? 'font-montserrat uppercase tracking-wide' : ''}
                            }`}>
                            Formación Académica
                        </h3>
                        {/* Línea decorativa celeste */}
                        {isFanMode && (
                            <div className="w-20 h-1.5 bg-gradient-to-r from-bolivar-gold via-bolivar-celeste to-bolivar-gold rounded-full mb-4 shadow-lg shadow-bolivar-gold/50" />
                        )}
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
                                <span><strong>Médico Cirujano</strong> – UNSLP y U. Católica de Chile</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
                                <span><strong>Cirugía General</strong> – Universidad de Zulia</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
                                <span><strong>Cirugía Digestiva y Laparoscopía Avanzada</strong> – U. de Cali, Colombia</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
                                <span><strong>Cirugía Bariátrica y Alta Complejidad</strong> – Hospital Goiás, Brasil</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
                                <span><strong>Medicina Regenerativa y Docencia</strong> – U. de Corrientes, Argentina</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
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
                        <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ duration: 0.3 }}>
                            <Hospital className={`w-12 h-12 mb-4 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`} />
                        </motion.div>
                        <h3 className={`text-2xl font-bold mb-2 text-slate-900 ${isFanMode ? 'font-montserrat uppercase tracking-wide' : ''}
                            }`}>
                            Experiencia Actual
                        </h3>
                        {isFanMode && (
                            <div className="w-20 h-1.5 bg-gradient-to-r from-bolivar-gold via-bolivar-celeste to-bolivar-gold rounded-full mb-4 shadow-lg shadow-bolivar-gold/50" />
                        )}
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
                                <span className="font-semibold">Director Médico y Jefe de Enseñanza – Clínica Unifranz (2018 - Actualidad)</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
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
                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                            <Users className={`w-9 h-9 mb-3 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`} />
                        </motion.div>
                        <h3 className={`text-xl font-bold mb-3 text-slate-900 ${isFanMode ? 'font-montserrat uppercase tracking-wide' : ''}
                            }`}>
                            Liderazgo y Docencia
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
                                <span>Decano Segundo en Enfermería – UNSLP (2012-2013)</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
                                <span>Jefe de Enseñanza – Hospital Modelo Corea (2018-2019)</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
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
                        <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ duration: 0.3 }}>
                            <BookOpen className={`w-9 h-9 mb-3 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`} />
                        </motion.div>
                        <h3 className={`text-xl font-bold mb-3 text-slate-900 ${isFanMode ? 'font-montserrat uppercase tracking-wide' : ''}
                            }`}>
                            Publicaciones
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
                                <span className="font-semibold">Autor: "Fundamentos Básicos de la Cirugía Clínica"</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
                                <span className="font-semibold">Coautor: Manual MAgMA (Medicina en Muy Alta Altitud)</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
                                <span>Artículo: "Uso de Estereotaxia en Tuberculosis Cerebral"</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`mr-2 ${isFanMode ? 'text-sky-500' : 'text-blue-600'}`}>•</span>
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
                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 border-2 border-yellow-600 shadow-xl'
                            : 'bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-300'
                            }`}
                    >
                        <div className="flex items-center gap-5">
                            <motion.div whileHover={{ scale: 1.1, rotate: 10 }} transition={{ duration: 0.3 }}>
                                <Award className={`w-14 h-14 flex-shrink-0 ${isFanMode ? 'text-yellow-900' : 'text-blue-600'}`} />
                            </motion.div>
                            <div>
                                <h3 className={`text-2xl font-bold mb-2 ${isFanMode ? 'text-yellow-900 font-montserrat uppercase tracking-wide' : 'text-slate-900'
                                    }`}>
                                    {isFanMode ? 'RECONOCIMIENTO ESTRELLA DE LA SALUD' : 'Vocación y Compromiso'}
                                </h3>
                                <p className={`text-base ${isFanMode ? 'text-yellow-950 font-semibold' : 'text-slate-700'
                                    }`}>
                                    {isFanMode
                                        ? 'Premiado por su contribución excepcional a la medicina y educación en Bolivia.'
                                        : 'Dedicado a la excelencia médica y la formación de nuevas generaciones de profesionales de la salud.'}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
