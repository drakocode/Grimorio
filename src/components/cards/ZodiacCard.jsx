import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Função auxiliar para dar cores místicas sutis para os elementos da natureza
const getElementStyle = (element) => {
  switch (element) {
    case 'Fogo': return 'text-crimson border-crimson/30 bg-wine/10';
    case 'Terra': return 'text-gold-faded border-gold-faded/30 bg-gold-faded/5';
    case 'Ar': return 'text-silver border-silver/30 bg-white/5';
    case 'Água': return 'text-purple-400 border-purple-400/30 bg-purple-900/10';
    default: return 'text-gray-400 border-white/10';
  }
};

const ZodiacCard = ({ sign }) => {
  const elementStyle = getElementStyle(sign.element);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      {/* Rota direciona para /astrologia/signos/:path */}
      <div>
        <div className="relative overflow-hidden bg-cathedral/90 backdrop-blur-md border border-white/[0.04] p-5 transition-all duration-500 shadow-inner-dark group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          
          {/* Cantoneiras do Grimório */}
          <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />
          <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />

          {/* Banner do Signo */}
          <div className="relative h-44 w-full overflow-hidden border border-white/[0.01]">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={sign.img}
              alt={sign.title}
              className="h-full w-full object-cover filter grayscale-[60%] contrast-[115%] group-hover:grayscale-[20%] transition-all duration-500"
            />
            {/* Vinheta interna do card */}
            <div className="absolute inset-0 bg-gradient-to-t from-cathedral via-black/20 to-transparent" />
            
            {/* Glifo Flutuante Metálico */}
            <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xl text-gold-venerable shadow-lg group-hover:text-white group-hover:border-purple-500/40 transition-colors">
              {sign.symbol}
            </div>
          </div>

          {/* Informações */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-serif tracking-widest text-white group-hover:text-gold-venerable transition-colors duration-300 uppercase">
                {sign.title}
              </h3>
              <span className={`text-[9px] uppercase tracking-[0.2em] px-2.5 py-0.5 border ${elementStyle}`}>
                {sign.element}
              </span>
            </div>
            
            <p className="text-xs text-silver/70 font-light leading-relaxed line-clamp-3 min-h-[54px]">
              {sign.desc}
            </p>
            
            {/* Botão de Rito */}
            <Link to={`/astrologia/signos/${sign.path}`}>
              <div className="pt-2">
                <div className="w-full py-2 bg-black/30 border border-white/[0.05] text-[9px] tracking-[0.3em] text-silver uppercase text-center group-hover:border-purple-500/50 group-hover:text-white group-hover:bg-purple-950/20 transition-all duration-300">
                  Desvelar Arcanos
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default ZodiacCard;