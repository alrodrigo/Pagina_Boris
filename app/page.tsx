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

  // Colores dinámicos según el modo
  // Doctor: Primary Dark (#0f172a)
  // Hincha: Negro intenso con rayas amarillas
  const backgroundColor = isFanMode ? '#000000' : '#0f172a';
  const textColor = isFanMode ? 'text-white' : 'text-white';
  const cardBg = isFanMode ? 'bg-white/90 border-black/10' : 'bg-white/5 border-white/10';

  return (
    <motion.div
      className={`min-h-screen font-sans selection:bg-accent-gold selection:text-black relative overflow-hidden`}
      animate={{ backgroundColor }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Rayas diagonales amarillas para modo Hincha */}
      {isFanMode && (
        <>
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-br from-yellow-500 to-yellow-600 transform rotate-12 translate-x-16" />
            <div className="absolute top-0 right-32 w-24 h-full bg-gradient-to-br from-yellow-500 to-yellow-600 transform rotate-12" />
            <div className="absolute top-0 right-64 w-16 h-full bg-gradient-to-br from-yellow-500 to-yellow-600 transform rotate-12 -translate-x-8" />
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-br from-yellow-500 to-yellow-600 transform -rotate-12 -translate-x-16" />
            <div className="absolute top-0 left-32 w-24 h-full bg-gradient-to-br from-yellow-500 to-yellow-600 transform -rotate-12" />
          </div>
          {/* Textura grunge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: 'url(/tigre-bg.jpg)' }}
          />
          {/* Capa de textura de rasguños adicional */}
          <div
            className="absolute inset-0 z-0 opacity-25 mix-blend-overlay"
            style={{
              backgroundImage: `url('/scratch texture.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </>
      )}
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
    </motion.div>
  );
}
