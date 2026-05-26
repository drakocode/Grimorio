import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { goetiaDaemonsData } from '../../data/Goetia/goetiaData';

const GoetiaGallery = () => {
  // Converte o objeto de daemons em um array tratável para renderização
  const daemons = Object.entries(goetiaDaemonsData).map(([key, value]) => ({
    slug: key,
    ...value
  }));

  // Orquestração das animações de entrada dos cards (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 55, damping: 16 } 
    }
  };

  return (
    <div className="min-h-screen bg-abyss text-silver pt-32 pb-24 relative overflow-hidden">
      {/* Elementos Atmosféricos de Background: Névoa Oculta e Vinheta Cinematográfica */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none z-0" />
      {/* <div className="cinematic-vignette" /> */}
      
      {/* Detalhe sutil de glow ritualístico ao fundo */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ================= TITULO & SUBTITULO OCULTISTA ================= */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.2 }}
            className="text-[10px] text-gold-venerable font-serif uppercase block tracking-[0.4em]"
          >
            ✦ Lemegeton Clavicula Salomonis ✦
          </motion.span>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-[0.2em] text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Os Daemons da Goetia
          </h1>
          <div className="w-16 h-[1px] bg-crimson/60 mx-auto my-4 shadow-[0_0_8px_#8b0000]" />
          <p className="text-xs md:text-sm text-silver/60 font-light leading-relaxed tracking-wide font-sans italic">
            Entre na biblioteca arcana e contemple a hierarquia infernal dos setenta e dois espíritos reis, duques, príncipes e presidentes. Escolha um selo místico para desvelar chaves ritualísticas e regências planetárias.
          </p>
        </div>

        {/* ================= GRID DE CARDS GOÉTICOS ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {daemons.map((daemon) => (
            <motion.div key={daemon.slug} variants={cardVariants}>
              <Link 
                to={`/goetia/daemons/${daemon.slug}`}
                className="group relative block aspect-[3/4] bg-cathedral/40 backdrop-blur-md border border-white/[0.03] overflow-hidden shadow-2xl transition-all duration-500 hover:border-crimson/40 hover:shadow-[0_0_30px_rgba(139,0,0,0.15)] rounded-sm"
              >
                {/* Linha de preenchimento interna para simular o corte de página de pergaminho */}
                <div className="absolute inset-3 border border-white/[0.01] pointer-events-none z-20 group-hover:border-crimson/10 transition-colors duration-500" />
                
                {/* Cantoneiras angulares discretas de grimório antigo */}
                <div className="absolute top-4 left-4 w-1.5 h-1.5 border-t border-l border-white/10 group-hover:border-gold-venerable/30 transition-colors" />
                <div className="absolute top-4 right-4 w-1.5 h-1.5 border-t border-r border-white/10 group-hover:border-gold-venerable/30 transition-colors" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 border-b border-l border-white/10 group-hover:border-gold-venerable/30 transition-colors" />
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 border-b border-r border-white/10 group-hover:border-gold-venerable/30 transition-colors" />

                {/* Camada Dinâmica de Cor Temática (Drapeado de Energia Oculta) */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${daemon.color} mix-blend-color-burn z-15 opacity-60`} />

                {/* Imagem Temática de Fundo Escurecida */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={daemon.banner} 
                    alt={daemon.title}
                    className="w-full h-full object-cover filter brightness-[45%] contrast-[115%] saturate-50 group-hover:scale-105 group-hover:brightness-[25%] transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                </div>

                {/* Conteúdo Superior: Selo/Glifo Planetário e Rank Hierárquico */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                  <span className="font-serif text-[10px] tracking-[0.2em] text-gold-venerable bg-black/60 px-3 py-1 border border-gold-venerable/20 uppercase">
                    👑 {daemon.rank}
                  </span>
                  <span className="font-serif text-lg text-crimson/80 group-hover:text-crimson transition-colors drop-shadow-[0_0_5px_rgba(139,0,0,0.8)]">
                    {daemon.sigil}
                  </span>
                </div>

                {/* Conteúdo Inferior: Título e Descrição Arquetípica */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 text-left">
                  <h2 className="font-serif text-2xl tracking-[0.15em] text-white uppercase group-hover:text-gold-venerable transition-colors duration-300">
                    {daemon.title}
                  </h2>
                  
                  {/* Divisória Rápida de Energia */}
                  <div className="w-10 h-[1px] bg-white/10 my-3 group-hover:w-24 group-hover:bg-crimson/50 transition-all duration-500" />

                  <p className="text-xs text-silver/50 font-light tracking-wide line-clamp-3 mb-4 group-hover:text-silver/80 transition-colors duration-300">
                    {daemon.desc}
                  </p>

                  {/* Microinteração do Gatilho do Botão "Explorar" */}
                  <div className="flex items-center gap-2 text-[9px] font-serif tracking-[0.25em] text-white/40 uppercase group-hover:text-gold-venerable transition-colors pt-2">
                    <span>Abrir Grimório</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Rodapé Interno da Biblioteca */}
        <div className="text-center mt-20 opacity-20">
          <span className="text-[9px] tracking-widest font-serif uppercase">Sub umbra alarum tuarum, Amen.</span>
        </div>

      </div>
    </div>
  );
};

export default GoetiaGallery;