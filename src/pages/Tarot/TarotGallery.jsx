import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tarotDetailsData } from '../../data/Tarot/tarotDetails';

// Função auxiliar simétrica para injetar estilos baseados na natureza arquetípica do arcano
const getArcanoStyle = (number) => {
  if (number === "0" || number === "XXI") return 'text-gold-venerable border-gold-venerable/30 bg-gold-venerable/5';
  if (["I", "IV", "VII", "XI", "XIX"].includes(number)) return 'text-crimson border-crimson/30 bg-wine/10'; // Ativos/Fogo
  if (["II", "III", "IX", "XVIII", "XX"].includes(number)) return 'text-purple-400 border-purple-400/30 bg-purple-900/10'; // Intuitivos/Água
  return 'text-silver border-silver/30 bg-white/5'; // Mental/Neutro
};

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
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-abyss text-silver pt-32 pb-24 relative overflow-hidden">
      {/* Detalhes de Background (Vignette e Névoa Mística) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-venerable/5 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
         {/* ================= HERO SECTION CINEMATOGRÁFICA ================= */}
              <section className="relative h-[65vh] flex flex-col justify-center items-center text-center px-6 border-b border-white/[0.02]">
                <motion.div
                  initial={{ opacity: 0, letterSpacing: "0.1em" }}
                  animate={{ opacity: 1, letterSpacing: "0.4em" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="text-gold-venerable text-[10px] uppercase mb-4 tracking-[0.4em]"
                >
                  ✦ O Livro de Thoth & As Lâminas Sagradas ✦
                </motion.div>
        
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="font-serif text-4xl md:text-6xl font-light uppercase text-white tracking-[0.18em] mb-4"
                >
                  Os Arcanos Maiores
                </motion.h1>
        
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-silver/60 font-light text-xs md:text-sm max-w-xl tracking-widest leading-relaxed italic font-sans"
                >
                  Contemple os espelhos do inconsciente e os moldes arquetípicos da alma. Selecione uma lâmina iniciática para desvelar seus segredos herméticos, caminhos cabalísticos e polaridades oraculares.
                </motion.p>
        
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 }}
                  className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-venerable/40 to-transparent mt-8"
                />
              </section>
        

        {/* ================= GRADE DO DECK DE TAROT (ESTRUTURA COMPATÍVEL ZODIAC) ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {arcanos.map((arcano) => {
            const arcanoStyle = getArcanoStyle(arcano.number);

            return (
              <motion.div
                key={arcano.slug}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div>
                  <div className="relative overflow-hidden bg-cathedral/40 backdrop-blur-md border border-white/[0.04] p-5 transition-all duration-500 shadow-2xl rounded-sm group-hover:border-gold-venerable/40 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]">
                    
                    {/* Cantoneiras do Grimório */}
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />
                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-gold-venerable/20 group-hover:border-gold-venerable/60 transition-colors" />

                    {/* Banner do Arcano (A Lâmina) */}
                    <div className="relative h-44 w-full overflow-hidden border border-white/[0.01]">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        src={arcano.banner}
                        alt={arcano.title}
                        className="h-full w-full object-cover filter brightness-[65%] contrast-[110%] group-hover:brightness-[35%] transition-all duration-500"
                      />
                      {/* Vinheta interna do card */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cathedral/90 via-black/20 to-transparent z-15" />
                      
                      {/* Glifo Flutuante Metálico (Número Romano do Arcano) */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 flex items-center justify-center font-serif text-xs text-gold-venerable tracking-tighter shadow-lg group-hover:text-white group-hover:border-gold-venerable/40 transition-colors z-20">
                        {arcano.number}
                      </div>
                    </div>

                    {/* Informações */}
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-serif tracking-widest text-white group-hover:text-gold-venerable transition-colors duration-300 uppercase truncate pr-2">
                          {arcano.title}
                        </h3>
                        <span className={`text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 border shrink-0 ${arcanoStyle}`}>
                          Arcano {arcano.number}
                        </span>
                      </div>
                      
                      {/* Arquetipo/Descrição Tratada */}
                      <p className="text-xs text-silver/70 font-light leading-relaxed line-clamp-3 min-h-[54px]">
                        {arcano.description || (arcano.archetype ? arcano.archetype.split(',')[0] : "O mistério supremo contido nesta lâmina sagrada.")}
                      </p>
                      
                      {/* Botão de Rito Sincronizado */}
                      <Link to={`/tarot/arcanos-maiores/${arcano.slug}`}>
                        <div className="pt-2">
                          <div className="w-full py-2 bg-black/30 border border-white/[0.05] text-[9px] tracking-[0.3em] text-silver uppercase text-center group-hover:border-gold-venerable/50 group-hover:text-white group-hover:bg-gold-venerable/10 transition-all duration-300">
                            Desvelar Mistério
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

        {/* Rodapé Interno */}
        <div className="text-center mt-20 opacity-20 select-none">
          <span className="text-[9px] tracking-widest font-serif uppercase">
            Axioma Hermeticum • Veritas Invenietur
          </span>
        </div>

      </div>
    </div>
  );
};

export default TarotGallery;