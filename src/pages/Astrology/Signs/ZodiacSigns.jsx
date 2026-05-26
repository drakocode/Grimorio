import React from 'react';
import { motion } from 'framer-motion';
import { zodiacData } from '../../../data/Astrology/zodiac'; 
import ZodiacCard from '../../../components/ZodiacCard';

const ZodiacSigns = () => {
  return (
    <div className="min-h-screen bg-abyss pt-36 pb-24 px-6 relative overflow-hidden">
      {/* Atmosfera Mística de Fundo (Aura Púrpura Nebulosa) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(88,28,135,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(140,13,30,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho Cinematográfico */}
        <motion.header 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="text-[10px] tracking-[0.6em] text-gold-venerable uppercase mb-3 flex justify-center items-center gap-4">
            <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-gold-venerable/40" />
            Roda Astrológica
            <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-gold-venerable/40" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif tracking-[0.25em] text-white uppercase font-bold mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            Os 12 Signos do Zodíaco
          </h1>
          
          <p className="text-silver/60 max-w-xl mx-auto text-xs md:text-sm tracking-wide font-light italic leading-relaxed">
            As doze emanações da abóbada celeste. Explore os segredos, temperamentos e regências de cada arquétipo arcaico.
          </p>
          
          <div className="mystic-divider mt-6 max-w-xs mx-auto" />
        </motion.header>

        {/* Grid de Organização dos 12 Signos */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 } // Revelação em cascata super veloz e elegante
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {zodiacData.map((sign) => (
            <ZodiacCard key={sign.id} sign={sign} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ZodiacSigns;