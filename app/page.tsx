'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import BentoResume from '@/components/BentoResume';
import Services from '@/components/Services';
import Locations from '@/components/Locations';
import ContactSection from '@/components/ContactSection';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [isFanMode, setIsFanMode] = useState(false);

  // Colores dinámicos según el modo (Acentos)
  // Doctor: Azul Real + Slate
  // Hincha: Celeste Bolívar + Slate
  const accentColor = isFanMode ? 'from-sky-500 to-sky-400' : 'from-blue-700 to-blue-600';

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ease-in-out ${isFanMode
        ? 'bg-gradient-to-br from-bolivar-celeste via-sky-400 to-bolivar-celeste' // Fan Mode: Celeste vibrante
        : 'bg-white'    // Doctor Mode: Pure White
        }`}
    >
      {/* Background Decor - Subtle for both */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Fan Mode: Patrón de estadio */}
        {isFanMode && (
          <>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-br from-bolivar-gold to-yellow-300 transform rotate-12 translate-x-16" />
              <div className="absolute top-0 right-32 w-24 h-full bg-gradient-to-br from-bolivar-gold to-yellow-300 transform rotate-12" />
              <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-br from-bolivar-gold to-yellow-300 transform -rotate-12 -translate-x-16" />
            </div>
            {/* Patrón geométrico estilo estadio */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="stadium-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="2" opacity="0.6" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="1" opacity="0.4" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="1" opacity="0.4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#stadium-pattern)" />
              </svg>
            </div>
          </>
        )}
        {/* Doctor Mode: Subtle Blue/Gray Gradients */}
        {!isFanMode && (
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-200 via-slate-100 to-transparent" />
        )}
      </div>
      <Navbar isFanMode={isFanMode} toggleTheme={() => setIsFanMode(!isFanMode)} />

      <main className="pt-20 relative z-10">
        {/* Hero Section con props dinámicas */}
        <div id="inicio">
          <Hero isFanMode={isFanMode} />
        </div>

        {/* BentoResume Section */}
        <div id="experiencia">
          <BentoResume isFanMode={isFanMode} />
        </div>

        {/* Services Section */}
        <div id="servicios">
          <Services isFanMode={isFanMode} />
        </div>

        {/* Locations Section */}
        <div id="ubicaciones">
          <Locations isFanMode={isFanMode} />
        </div>

        {/* ContactSection Feature */}
        <div id="contacto">
          <ContactSection isFanMode={isFanMode} />
        </div>
      </main>
    </main>
  );
}

