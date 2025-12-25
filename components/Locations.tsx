'use client';

import { motion } from 'framer-motion';
import { MapPin, Building, Navigation } from 'lucide-react';

interface LocationsProps {
    isFanMode: boolean;
}

export default function Locations({ isFanMode }: LocationsProps) {
    const locations = [
        {
            name: "Hospital N°1 Obrajes",
            role: "Director de Hospital",
            location: "La Paz - Obrajes",
            mapUrl: "https://maps.google.com/?q=Hospital+Obrajes+Caja+de+Salud+de+Caminos+La+Paz"
        },
        {
            name: "Caja de Salud de Caminos",
            role: "Jefe Médico Regional",
            location: isFanMode ? "La Paz - Corazón Celeste" : "La Paz",
            mapUrl: "https://maps.google.com/?q=Caja+de+Salud+de+Caminos+La+Paz"
        }
    ];

    return (
        <section id="ubicaciones" className="py-12 sm:py-14 md:py-16 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-4xl md:text-6xl font-bold text-center mb-16 font-montserrat tracking-tight ${isFanMode ? 'text-white' : 'text-slate-900'}`}
                    style={isFanMode ? { textShadow: '0 4px 12px rgba(0, 0, 0, 0.6)' } : {}}
                >
                    {isFanMode ? 'CONSULTORIOS DEL CAMPEÓN' : 'Ubicaciones de Consulta'}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {locations.map((location, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${isFanMode
                                ? "bg-white/95 backdrop-blur-sm border-2 border-bolivar-celeste shadow-xl shadow-bolivar-celeste/20 hover:shadow-2xl hover:shadow-bolivar-gold/30 hover:border-bolivar-gold hover:-translate-y-2"
                                : "bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-200 hover:-translate-y-2"
                                }`}
                        >
                            {/* Fondo decorativo con patrón de mapa */}
                            <div className="absolute inset-0 opacity-[0.03]">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMjAyQyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
                            </div>

                            <div className="relative p-8">
                                {/* Icono */}
                                <div className="mb-6 relative">
                                    <motion.div
                                        animate={isFanMode ? {
                                            scale: [1, 1.1, 1],
                                        } : {}}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <Building
                                            className={`w-12 h-12 ${isFanMode
                                                ? 'text-sky-500'
                                                : 'text-academy-blue'
                                                }`}
                                            strokeWidth={1.5}
                                        />
                                    </motion.div>
                                </div>

                                {/* Nombre del consultorio */}
                                <h3 className={`text-2xl font-bold mb-3 text-slate-900 ${isFanMode
                                    ? 'font-montserrat uppercase tracking-wide'
                                    : ''
                                    }`}>
                                    {location.name}
                                </h3>

                                {/* Rol */}
                                <p className="text-base mb-4 font-medium text-slate-600">
                                    {location.role}
                                </p>

                                {/* Ubicación */}
                                <div className="flex items-center gap-2 mb-6">
                                    <MapPin
                                        className={`w-5 h-5 ${isFanMode
                                            ? 'text-sky-500'
                                            : 'text-blue-600'
                                            }`}
                                    />
                                    <span className="text-sm font-semibold text-slate-700">
                                        {location.location}
                                    </span>
                                </div>

                                {/* Botón Cómo llegar */}
                                <motion.a
                                    href={location.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${isFanMode
                                        ? 'bg-sky-50 text-sky-900 border-2 border-sky-500 hover:bg-sky-100'
                                        : 'bg-blue-50 text-blue-900 border-2 border-blue-600 hover:bg-blue-100'
                                        }`}
                                >
                                    <Navigation className="w-4 h-4" />
                                    Cómo llegar
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}





