import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tarotCategories } from '../../data/Tarot/tarotData';

const TarotHome = () => {
  return (
    <div className="min-h-screen bg-abyss text-silver pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-transparent to-black/90 pointer-events-none z-0" />
      {/* <div className="cinematic-vignette" /> */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] text-gold-venerable font-serif uppercase block tracking-[0.4em]">
            ✦ Clavicula Oraculi ✦
          </span>
          <h1 className="font-serif text-5xl font-light tracking-[0.15em] text-white uppercase">
            O Portal do Tarot
          </h1>
          <div className="w-12 h-[1px] bg-gold-venerable/40 mx-auto my-3" />
          <p className="text-xs md:text-sm text-silver/60 font-light italic leading-relaxed tracking-wide font-sans">
            Contemple os espelhos arquetípicos da mente e do destino. Adentre os tratados herméticos para desvelar os segredos sob o véu das lâminas sagradas.
          </p>
        </div>

        {/* Grid de Categorias */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {tarotCategories.map((category) => (
            <Link 
              key={category.id}
              to={category.path}
              className="group relative block aspect-[3/4] bg-cathedral/40 backdrop-blur-md border border-white/[0.03] overflow-hidden transition-all duration-500 hover:border-gold-venerable/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] rounded-sm"
            >
              {/* Cantoneiras */}
              <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-gold-venerable/50 transition-colors" />
              <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-white/20 group-hover:border-gold-venerable/50 transition-colors" />
              <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-white/20 group-hover:border-gold-venerable/50 transition-colors" />
              <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-gold-venerable/50 transition-colors" />

              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={category.img} 
                  alt={category.title}
                  className="w-full h-full object-cover filter brightness-40 contrast-110 saturate-50 group-hover:scale-105 group-hover:brightness-25 transition-all duration-700 ease-out"
                />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 text-left space-y-2">
                <h2 className="font-serif text-2xl tracking-[0.1em] text-white uppercase group-hover:text-gold-venerable transition-colors">
                  {category.title}
                </h2>
                <div className="w-8 h-[1px] bg-white/15 my-1 group-hover:w-20 group-hover:bg-gold-venerable/40 transition-all duration-500" />
                <p className="text-xs text-silver/50 font-light tracking-wide line-clamp-3 leading-relaxed font-sans">
                  {category.desc}
                </p>
                <div className="flex items-center gap-1.5 text-[8px] font-serif tracking-[0.3em] text-white/30 uppercase group-hover:text-gold-venerable transition-colors pt-3">
                  <span>Adentrar</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default TarotHome;