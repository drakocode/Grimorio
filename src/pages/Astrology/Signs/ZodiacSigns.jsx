import React from 'react';
import { motion } from 'framer-motion';
import { zodiacData } from '../../../data/Astrology/signs/zodiac'; 
import ZodiacCard from '../../../components/cards/ZodiacCard';

const ZodiacSigns = () => {
  return (
    <div className="min-h-screen bg-abyss pt-36 pb-24 px-6 relative overflow-hidden">
      {/* Atmosfera Mística de Fundo (Aura Púrpura Nebulosa) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(88,28,135,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(140,13,30,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
         


         {/* ================= HERO SECTION CINEMATOGRÁFICA ================= */}
               <section className="relative h-[65vh] flex flex-col justify-center items-center text-center px-6 border-b border-white/[0.02]">
                 <motion.div
                   initial={{ opacity: 0, letterSpacing: "0.1em" }}
                   animate={{ opacity: 1, letterSpacing: "0.4em" }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="text-gold-venerable text-[10px] uppercase mb-4 tracking-[0.4em]"
                 >
                   ✦ Roda Astrológica ✦
                 </motion.div>
         
                 <motion.h1
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1, delay: 0.3 }}
                   className="font-serif text-4xl md:text-6xl font-light uppercase text-white tracking-[0.18em] mb-4"
                 >
                   Os 12 Signos do Zodíaco
                 </motion.h1>
         
                 <motion.p
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 1, delay: 0.6 }}
                   className="text-silver/60 font-light text-xs md:text-sm max-w-xl tracking-widest leading-relaxed italic font-sans"
                 >
                   As doze emanações da abóbada celeste. Explore os segredos, temperamentos e regências de cada arquétipo arcaico.
                 </motion.p>
         
                 <motion.div
                   initial={{ scaleX: 0 }}
                   animate={{ scaleX: 1 }}
                   transition={{ duration: 1.2, delay: 0.8 }}
                   className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-venerable/40 to-transparent mt-8"
                 />
               </section>
        {/* Cabeçalho Cinematográfico */}
        

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