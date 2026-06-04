import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { goetiaDaemonsData } from "../../data/Goetia/goetiaData";

// Função auxiliar simétrica para injetar as cores heráldicas da hierarquia infernal
const getRankStyle = (rank) => {
  const cleanRank = rank ? rank.toLowerCase() : '';
  if (cleanRank.includes('rei')) return 'text-gold-venerable border-gold-venerable/30 bg-gold-venerable/5';
  if (cleanRank.includes('duque')) return 'text-purple-400 border-purple-400/30 bg-purple-900/10';
  if (cleanRank.includes('príncipe') || cleanRank.includes('principe')) return 'text-cyan-400 border-cyan-400/30 bg-cyan-950/10';
  if (cleanRank.includes('presidente')) return 'text-silver border-silver/30 bg-white/5';
  return 'text-crimson border-crimson/30 bg-wine/10'; // Duque / Outros
};

const GoetiaGallery = () => {
  // Converte o objeto de daemons em um array tratável para renderização
  const daemons = Object.entries(goetiaDaemonsData).map(([key, value]) => ({
    slug: key,
    ...value,
  }));

  // Orquestração das animações de entrada dos cards (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-abyss text-silver pt-32 pb-24 relative overflow-hidden">
      {/* Elementos Atmosféricos de Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-crimson/5 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
         {/* ================= HERO SECTION CINEMATOGRÁFICA ================= */}
              <section className="relative h-[65vh] flex flex-col justify-center items-center text-center px-6 border-b border-white/[0.02]">
                <motion.div
                  initial={{ opacity: 0, letterSpacing: "0.1em" }}
                  animate={{ opacity: 1, letterSpacing: "0.4em" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="text-gold-venerable text-[10px] uppercase mb-4 tracking-[0.4em]"
                >
                  ✦ Lemegeton Clavicula Salomonis ✦
                </motion.div>
        
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="font-serif text-4xl md:text-6xl font-light uppercase text-white tracking-[0.18em] mb-4"
                >
                  Os Daemons da Goetia
                </motion.h1>
        
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-silver/60 font-light text-xs md:text-sm max-w-xl tracking-widest leading-relaxed italic font-sans"
                >
                  Entre na biblioteca arcana e contemple a hierarquia infernal dos
            setenta e dois espíritos. Escolha um selo místico para desvelar chaves
            ritualísticas e regências planetárias.
                </motion.p>
        
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-venerable/40 to-transparent mt-8"
                />
              </section>
        

        {/* ================= GRID DE CARDS GOÉTICOS (ESTRUTURA ZODIAC) ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {daemons.map((daemon) => {
            const rankStyle = getRankStyle(daemon.rank);

            return (
              <motion.div
                key={daemon.slug}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div>
                  <div className="relative overflow-hidden bg-cathedral/40 backdrop-blur-md border border-white/[0.04] p-5 transition-all duration-500 shadow-2xl rounded-sm group-hover:border-crimson/40 group-hover:shadow-[0_0_30px_rgba(139,0,0,0.15)]">
                    
                    {/* Cantoneiras do Grimório */}
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />
                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />

                    {/* Banner do Daemon */}
                    <div className="relative h-44 w-full overflow-hidden border border-white/[0.01]">
                      {/* Camada Oculta Dinâmica de Cor (Drapeado de Energia) */}
                      <div className={`absolute inset-0 bg-gradient-to-tr ${daemon.color || 'from-transparent to-black'} mix-blend-color-burn z-10 opacity-40 pointer-events-none`} />
                      
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        src={daemon.banner}
                        alt={daemon.title}
                        className="h-full w-full object-cover filter brightness-[45%] contrast-[115%] saturate-50 group-hover:brightness-[25%] transition-all duration-500"
                      />
                      {/* Vinheta interna do card */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cathedral/90 via-black/20 to-transparent z-15" />
                      
                      {/* Selo/Glifo Flutuante Metálico */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-lg text-crimson drop-shadow-[0_0_3px_rgba(139,0,0,0.8)] shadow-lg group-hover:text-white group-hover:border-crimson/40 transition-colors z-20">
                        {daemon.sigil}
                      </div>
                    </div>

                    {/* Informações */}
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-serif tracking-widest text-white group-hover:text-gold-venerable transition-colors duration-300 uppercase">
                          {daemon.title}
                        </h3>
                        <span className={`text-[9px] uppercase tracking-[0.2em] px-2.5 py-0.5 border ${rankStyle}`}>
                          {daemon.rank}
                        </span>
                      </div>
                      
                      <p className="text-xs text-silver/70 font-light leading-relaxed tracking-wide font-sans line-clamp-3 min-h-[54px]">
                        {daemon.desc}
                      </p>
                      
                      {/* Botão de Rito */}
                      <Link to={`/goetia/daemons/${daemon.slug}`}>
                        <div className="pt-2">
                          <div className="w-full py-2 bg-black/30 border border-white/[0.05] text-[9px] tracking-[0.3em] text-silver uppercase text-center group-hover:border-crimson/50 group-hover:text-white group-hover:bg-wine/20 transition-all duration-300">
                            Desvelar Arcanos
                          </div>
                        </div>
                      </Link>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Rodapé Interno da Biblioteca */}
        <div className="text-center mt-20 opacity-20 select-none">
          <span className="text-[9px] tracking-widest font-serif uppercase">
            Sub umbra alarum tuarum, Amen.
          </span>
        </div>
      </div>
    </div>
  );
};

export default GoetiaGallery;