import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tarotDetailsData } from '../../data/Tarot/tarotDetails';

const TarotGallery = () => {
  // Transforma o objeto de dados em uma array para mapeamento na tela
  const arcanos = Object.entries(tarotDetailsData).map(([key, value]) => ({
    slug: key,
    ...value
  }));

  // Configurações de animação para a entrada em cascata das cartas
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <div className="min-h-screen bg-abyss text-silver pt-32 pb-24 relative overflow-hidden">
      {/* Detalhes de Background (Vignette e Névoa Mística) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-0" />
   {/*    <div className="cinematic-vignette" />
 */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ================= CABEÇALHO DA GALERIA ================= */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-[10px] text-gold-venerable font-serif uppercase block"
          >
            ✦ O Livro de Thoth & As Lâminas Sagradas ✦
          </motion.span>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-[0.15em] text-white uppercase">
            Os Arcanos Maiores
          </h1>
          <div className="mystic-divider mx-auto max-w-xs opacity-40" />
          <p className="text-xs md:text-sm text-silver/60 font-light leading-relaxed tracking-wide">
            Contemple os espelhos do inconsciente e os moldes arquetípicos da alma. Selecione uma lâmina iniciática para desvelar seus segredos herméticos, caminhos cabalísticos e polaridades oraculares.
          </p>
        </div>

        {/* ================= GRADE DO DECK DE TAROT ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {arcanos.map((arcano) => (
            <motion.div key={arcano.slug} variants={cardVariants}>
             <Link 
  to={`/tarot/arcanos-maiores/${arcano.slug}`}
  className="group relative block aspect-[2/3.3] bg-cathedral border border-white/[0.04] overflow-hidden shadow-2xl transition-all duration-500 hover:border-gold-venerable/50"
>
                {/* Cantos ornamentados internos da carta */}
                <div className="absolute inset-3 border border-white/[0.01] pointer-events-none z-20 group-hover:border-gold-venerable/20 transition-colors duration-500" />
                <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/10 group-hover:border-gold-venerable/40 transition-colors" />
                <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/10 group-hover:border-gold-venerable/40 transition-colors" />
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/10 group-hover:border-gold-venerable/40 transition-colors" />
                <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/10 group-hover:border-gold-venerable/40 transition-colors" />

                {/* Imagem de Fundo (A Lâmina) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={arcano.banner} 
                    alt={arcano.title}
                    className="w-full h-full object-cover filter brightness-[65%] contrast-[110%] scale-100 group-hover:scale-110 group-hover:brightness-[45%] transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40 opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Identificador Numérico Central Superior */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
                  <span className="font-serif text-sm tracking-[0.2em] text-gold-venerable/60 group-hover:text-gold-venerable transition-colors">
                    {arcano.number}
                  </span>
                </div>

                {/* Conteúdo da Lâmina (Nome e Subtítulo) */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 text-center">
                  <h2 className="font-serif text-xl tracking-[0.2em] text-white uppercase group-hover:text-gold-venerable transition-colors duration-300">
                    {arcano.title}
                  </h2>
                  
                  {/* Divisória interna que se expande no Hover */}
                  <div className="w-8 h-[1px] bg-gold-venerable/30 mx-auto my-3 group-hover:w-20 transition-all duration-500" />

                  {/* Informações ocultas que aparecem suavemente no Hover */}
                  <div className="h-0 opacity-0 group-hover:h-14 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out space-y-2">
                    <p className="text-[10px] text-silver/60 italic line-clamp-1 px-2">
                      {arcano.archetype.split(',')[0]}
                    </p>
                    <div className="flex justify-center items-center gap-3 text-[9px] uppercase tracking-widest text-gold-venerable/80 pt-1">
                      <span>{arcano.metadata[0]?.value}</span>
                      <span className="text-white/20">•</span>
                      <span>{arcano.metadata[1]?.value}</span>
                    </div>
                  </div>

                  {/* Gatilho de ação visual sutil */}
                  <span className="text-[9px] font-serif tracking-[0.3em] text-white/30 uppercase block mt-2 group-hover:text-white/70 transition-colors">
                    Desvelar Mistério
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default TarotGallery;