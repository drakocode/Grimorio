import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imgGoetia from '../../assets/goetiaHome.jpeg';
import imgAstrology from '../../assets/astrologyHome.jpeg';
import imgTarot from '../../assets/tarotHome.jpeg';
import imgOraculo from '../../assets/tarot/tiragens.jpeg';

// Função auxiliar simétrica para injetar estilos baseados na tradição ocultista de cada portal
const getPortalStyle = (titulo) => {
  const cleanTitle = titulo ? titulo.toLowerCase() : '';
  if (cleanTitle.includes('astrologia')) return 'text-gold-venerable border-gold-venerable/30 bg-gold-venerable/5';
  if (cleanTitle.includes('goetia')) return 'text-crimson border-crimson/30 bg-wine/10';
  if (cleanTitle.includes('tarot')) return 'text-purple-400 border-purple-400/30 bg-purple-900/10';
  if (cleanTitle.includes('oráculo')) return 'text-gold-venerable border-gold-venerable/30 bg-gold-venerable/5';
  return 'text-silver border-silver/30 bg-white/5';
};

function Home() {
  const secoes = [
    {
      titulo: "Astrologia",
      sub: "Scientia Stellarum",
      descricao: "Descubra a geometria sagrada dos astros, trânsitos celestes e como o mapa natal influencia sua jornada telúrica.",
      imagem: imgAstrology,
      link: "/astrologia",
    },
    {
      titulo: "Goetia",
      sub: "Ars Theurgia",
      descricao: "Estudos profundos sobre os mistérios, chaves de comando e invocações heráldicas da tradição salomônica.",
      imagem: imgGoetia,
      link: "/goetia",
    },
    {
      titulo: "Tarot",
      sub: "Clavicula Oraculi",
      descricao: "Consulte a galeria oculta dos arcanos maiores e menores para desvelar os espelhos arquetípicos da alma.",
      imagem: imgTarot,
      link: "/tarot",
    },
    {
      titulo: "Oráculo",
      sub: "Sapientia Divina",
      descricao: "Explore as diversas formas de oráculos e suas aplicações para a adivinhação.",
      imagem: imgOraculo,
      link: "/tarot/oraculo",
    }
  ];

  // Orquestração das animações de entrada (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-abyss text-silver pt-20 relative overflow-hidden">
      {/* Camada global de efeitos visuais de ambiente */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(140,13,30,0.06)_0%,transparent_60%)] pointer-events-none" />

      {/* ================= HERO SECTION CINEMATOGRÁFICA ================= */}
      <section className="relative h-[65vh] flex flex-col justify-center items-center text-center px-6 border-b border-white/[0.02]">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-gold-venerable text-[10px] uppercase mb-4 tracking-[0.4em]"
        >
          ✦ Omnia Mea Mecum Porto ✦
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-4xl md:text-6xl font-light uppercase text-white tracking-[0.18em] mb-4"
        >
          Almanaque Oculto
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-silver/60 font-light text-xs md:text-sm max-w-xl tracking-widest leading-relaxed italic font-sans"
        >
          Uma biblioteca hermética digital dedicada à preservação, simetria e
          estética das ciências proibidas e mistérios intemporais.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-venerable/40 to-transparent mt-8"
        />
      </section>

      {/* ================= GRID CENTRAL DE NAVEGAÇÃO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {secoes.map((secao) => {
            const portalStyle = getPortalStyle(secao.titulo);

            return (
              <motion.div
                key={secao.titulo}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div>
                  <div className="relative overflow-hidden bg-cathedral/40 backdrop-blur-md border border-white/[0.04] p-5 transition-all duration-500 shadow-2xl rounded-sm hover:border-gold-venerable/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]">
                    
                    {/* Cantoneiras do Grimório Unificadas */}
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/10 group-hover:border-gold-venerable/50 transition-colors" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/10 group-hover:border-gold-venerable/50 transition-colors" />
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/10 group-hover:border-gold-venerable/50 transition-colors" />
                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/10 group-hover:border-gold-venerable/50 transition-colors" />

                    {/* Box da imagem (Simetria h-44) */}
                    <div className="h-44 w-full overflow-hidden relative border border-white/[0.01]">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        src={secao.imagem}
                        alt={secao.titulo}
                        className="w-full h-full object-cover filter grayscale brightness-[50%] contrast-[110%] group-hover:grayscale-0 group-hover:brightness-[35%] transition-all duration-700"
                      />
                      {/* Vinheta interna do card */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cathedral/90 via-black/10 to-transparent z-15" />
                      
                      {/* Selo Místico Decorativo no Canto Inferior */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xs text-gold-venerable opacity-40 group-hover:opacity-100 group-hover:border-gold-venerable/40 transition-all z-20 font-serif">
                        🜁
                      </div>
                    </div>

                    {/* Informações */}
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-serif tracking-widest text-white group-hover:text-gold-venerable transition-colors duration-300 uppercase">
                          {secao.titulo}
                        </h3>
                        <span className={`text-[8px] uppercase tracking-[0.2em] px-2 py-0.5 border shrink-0 ${portalStyle}`}>
                          {secao.sub}
                        </span>
                      </div>
                      
                      <p className="text-xs text-silver/70 font-light leading-relaxed tracking-wide font-sans line-clamp-3 min-h-[54px]">
                        {secao.descricao}
                      </p>

                      {/* Botão de Redirecionamento Premium Alquímico */}
                      <Link to={secao.link} className="block pt-2">
                        <div className="relative w-full text-center py-2.5 text-[9px] font-serif tracking-[0.35em] uppercase text-silver border border-white/[0.05] bg-black/30 transition-all duration-500 hover:text-white group/btn overflow-hidden">
                          {/* Linhas de Canto Estilo Moldura de Grimório Antigo (Reveladas no Hover) */}
                          <span className="absolute top-0 left-0 w-[1px] h-0 bg-gold-venerable group-hover/btn:h-full transition-all duration-300 ease-out" />
                          <span className="absolute top-0 left-0 w-0 h-[1px] bg-gold-venerable group-hover/btn:w-full transition-all duration-300 ease-out delay-75" />

                          <span className="absolute bottom-0 right-0 w-[1px] h-0 bg-gold-venerable group-hover/btn:h-full transition-all duration-300 ease-out" />
                          <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-gold-venerable group-hover/btn:w-full transition-all duration-300 ease-out delay-75" />

                          {/* Efeito Interno de Brilho de Luz ao passar o mouse */}
                          <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 bg-gradient-to-r from-transparent via-gold-venerable/[0.05] to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                          {/* Texto com transição suave de espaçamento */}
                          <span className="relative z-10 block transition-all duration-500 group-hover/btn:tracking-[0.4em]">
                            Adentrar Portal
                          </span>
                        </div>
                      </Link>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Rodapé Interno da Home */}
      <div className="text-center pb-12 opacity-20 select-none">
        <span className="text-[9px] tracking-widest font-serif uppercase">
          As Above, So Below • Grimório Digital 2026
        </span>
      </div>
    </div>
  );
}

export default Home;