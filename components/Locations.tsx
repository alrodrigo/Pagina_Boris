'use client';

import { motion } from 'framer-motion';
import { MapPin, Building, Navigation } from 'lucide-react';

interface LocationsProps {
    isFanMode: boolean;
}

export default function Locations({ isFanMode }: LocationsProps) {
    const locations = [
        {
            name: "Hospital Municipal Modelo Corea",
            role: "Cirujano Digestivo & Jefe de Enseñanza",
            location: "El Alto",
            mapUrl: "https://maps.google.com/?q=Hospital+Municipal+Modelo+Corea+El+Alto"
        },
        {
            name: "Clínica Unifranz",
            role: "Director Médico",
            location: isFanMode ? "La Paz - Cuna del Tigre" : "La Paz",
            mapUrl: "https://maps.google.com/?q=Clinica+Unifranz+La+Paz"
        }
    ];

    return (
        <section className="py-24 bg-primary-dark relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`text-4xl md:text-6xl font-bold text-center mb-16 ${isFanMode
                        ? 'text-white font-anton uppercase tracking-widest'
                        : 'text-white'
                        }`}
                    style={isFanMode ? { textShadow: '0 0 20px rgba(234, 179, 8, 0.6), 3px 3px 6px rgba(0,0,0,0.8)' } : {}}
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
                            className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${isFanMode
                                ? 'bg-slate-900/90 border-2 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]'
                                : 'bg-slate-800/60 backdrop-blur-sm border border-slate-700 shadow-xl hover:shadow-2xl hover:border-blue-500/50'
                                }`}
                        >
                            {/* Fondo decorativo con patrón de mapa */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
                            </div>

                            <div className="relative p-8">
                                {/* Icono */}
                                <div className="mb-6">
                                    <Building
                                        className={`w-12 h-12 ${isFanMode
                                            ? 'text-yellow-500'
                                            : 'text-blue-400'
                                            }`}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                {/* Nombre del consultorio */}
                                <h3 className={`text-2xl font-bold mb-3 ${isFanMode
                                    ? 'text-yellow-400 font-anton uppercase tracking-wide'
                                    : 'text-white'
                                    }`}>
                                    {location.name}
                                </h3>

                                {/* Rol */}
                                <p className={`text-base mb-4 ${isFanMode
                                    ? 'text-gray-300 font-medium'
                                    : 'text-gray-400'
                                    }`}>
                                    {location.role}
                                </p>

                                {/* Ubicación */}
                                <div className="flex items-center gap-2 mb-6">
                                    <MapPin
                                        className={`w-5 h-5 ${isFanMode
                                            ? 'text-yellow-500'
                                            : 'text-blue-400'
                                            }`}
                                    />
                                    <span className={`text-sm font-semibold ${isFanMode
                                        ? 'text-yellow-300'
                                        : 'text-blue-300'
                                        }`}>
                                        {location.location}
                                    </span>
                                </div>

                                {/* Botón Cómo llegar */}
                                <a
                                    href={location.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${isFanMode
                                        ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-[0_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px]'
                                        : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg hover:shadow-xl'
                                        }`}
                                >
                                    <Navigation className="w-4 h-4" />
                                    Cómo llegar
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
