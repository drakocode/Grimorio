import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// IMPORTAÇÃO DOS DADOS ORIGINAIS DOS ARCANOS
import { tarotDetailsData } from "../../data/Tarot/tarotDetails";

// Métodos de tiragem disponíveis na mesa ritualística
const SPREADS = [
  {
    id: "daily",
    title: "Carta do Dia",
    slots: 1,
    description:
      "Uma única lâmina para orientar a energia e o direcionamento das suas próximas 24 horas.",
    labels: ["Conselho Central"],
    bgKey: "o-louco",
  },
  {
    id: "three-cards",
    title: "Tríade Temporal",
    slots: 3,
    description:
      "Análise linear do seu fluxo de energia através do tempo cronológico.",
    labels: [
      "O Passado (Raiz)",
      "O Presente (Desafio)",
      "O Futuro (Tendência)",
    ],
    bgKey: "a-roda-da-fortuna",
  },
];

// Transforma o objeto tarotDetailsData em uma lista plana para sorteio interno
const TAROT_DECK = Object.entries(tarotDetailsData).map(([slug, data]) => ({
  slug,
  ...data,
}));

const TarotSpreads = () => {
  const [selectedSpread, setSelectedSpread] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [revealedIndex, setRevealedIndex] = useState({});

  const handleSelectSpread = (spread) => {
    setSelectedSpread(spread);
    setDrawnCards([]);
    setRevealedIndex({});
  };

  // As lâminas nascem ocultas e guardam sua posição invertida de forma fixa
  const handleEmbaralhar = () => {
    if (!selectedSpread) return;

    const shuffled = [...TAROT_DECK].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, selectedSpread.slots).map((card) => ({
      ...card,
      isInverted: Math.random() > 0.75, // 25% de chance da lâmina vir invertida
    }));

    setDrawnCards(selected);
    setRevealedIndex({}); 
  };

  const toggleRevealCard = (idx) => {
    setRevealedIndex((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 relative z-10">

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
          Oráculo
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

      {/* 
      
      
      
      ================= SELEÇÃO DE MÉTODOS DE TIRAGEM ================= 
      
      
      
      */}
      <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 max-w-4xl mx-auto mb-16 pt-16 flex-wrap">
        {SPREADS.map((spread) => {
          const isSelected = selectedSpread?.id === spread.id;
          const cardBgImage = tarotDetailsData[spread.bgKey]?.banner;

          return (
            <button
              key={spread.id}
              onClick={() => handleSelectSpread(spread)}
              className={`relative flex flex-col justify-between p-3.5 rounded-sm transition-all duration-500 text-left group select-none ${
                isSelected
                  ? "border-2 border-gold-venerable bg-cathedral shadow-[0_15px_35px_rgba(184,134,11,0.15)] scale-[1.02]"
                  : "border-2 border-white/[0.04] bg-black/20 hover:border-crimson/30 hover:scale-[1.01]"
              }`}
              style={{
                width: "176px", 
                height: "288px", 
              }}
            >
              {/* Moldura Alquímica Interna */}
              <div
                className={`absolute inset-1 border pointer-events-none z-20 transition-colors duration-500 ${
                  isSelected
                    ? "border-gold-venerable/15"
                    : "border-white/[0.02] group-hover:border-crimson/10"
                }`}
              />

              {/* Topo: Identificação do Tipo de Oráculo */}
              <div className="text-[9px] font-serif tracking-widest uppercase flex justify-between border-b border-white/[0.05] pb-1 w-full relative z-10">
                <span className={isSelected ? "text-gold-venerable" : "text-silver/40 group-hover:text-silver/60 transition-colors"}>
                  Oráculo
                </span>
                <span className={isSelected ? "text-gold-venerable" : "text-silver/30"}>
                  ✦ {spread.slots} {spread.slots === 1 ? "Lâmina" : "Lâminas"}
                </span>
              </div>

              {/* Container da Imagem Centralizada (Estética Gallery) */}
              <div className="w-full h-[52%] my-auto overflow-hidden border border-white/[0.03] bg-black/40 relative z-10 rounded-xs">
                {cardBgImage && (
                  <img
                    src={cardBgImage}
                    alt=""
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.85] sepia-[0.15] transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-cathedral via-transparent to-transparent opacity-60" />
              </div>

              {/* Textos Informativos Inferiores */}
              <div className="space-y-1 w-full relative z-10">
                <h3
                  className={`font-serif text-xs uppercase tracking-wider truncate transition-colors duration-300 ${
                    isSelected ? "text-gold-venerable" : "text-white group-hover:text-gold-venerable"
                  }`}
                >
                  {spread.title}
                </h3>
                <p className="text-[9px] text-silver/50 font-light leading-tight line-clamp-3 border-t border-white/[0.03] pt-1">
                  {spread.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* 
      
      
      
      ================= MESA DE LEITURA (RITUAL) ================= 
      
      
      
      */}
      <AnimatePresence mode="wait">
        {selectedSpread && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center space-y-12"
          >
            <button
              onClick={handleEmbaralhar}
              className="font-serif text-[11px] tracking-[0.3em] uppercase text-black bg-gold-venerable px-8 py-3 hover:bg-white transition-all shadow-[0_4px_20px_rgba(184,134,11,0.3)] hover:scale-105"
            >
              🜿 Embaralhar Lâminas
            </button>

            {/* Grid das Cartas Dispostas na Mesa */}
            {drawnCards.length > 0 && (
              <div className="flex flex-row items-center justify-center gap-6 sm:gap-8 pt-10 px-4 flex-wrap w-full">
                {drawnCards.map((card, idx) => {
                  const isRevealed = !!revealedIndex[idx];
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center space-y-4 p-3 bg-black/20 rounded-md border border-white/[0.03]"
                    >
                      {/* Cabeçalho da Posição */}
                      <div className="text-center space-y-1 border-b border-white/[0.05] pb-2 w-full min-w-[180px]">
                        <span className="text-[10px] font-serif tracking-widest text-gold-venerable font-medium uppercase block">
                          {selectedSpread.labels[idx]}
                        </span>
                        <span className="text-[9px] text-silver/40 font-sans tracking-wider block">
                          {isRevealed ? "[ Revelada ]" : "[ Clique para virar ]"}
                        </span>
                      </div>

                      {/* Card Container */}
                      <div
                        onClick={() => toggleRevealCard(idx)}
                        className="cursor-pointer group select-none"
                        style={{
                          perspective: "1000px",
                          width: "176px",
                          height: "288px",
                        }}
                      >
                        <div
                          className="relative w-full h-full transition-transform duration-700"
                          style={{
                            transformStyle: "preserve-3d",
                            transform: isRevealed ? "rotateY(180deg)" : "rotateY(0deg)",
                            width: "176px",
                            height: "288px",
                          }}
                        >
                          {/* VERSO DA CARTA (DORSO) */}
                          <div
                            className="absolute inset-0 bg-arcane-back border-2 border-crimson/20 flex flex-col items-center justify-center p-3 shadow-2xl group-hover:border-crimson/40 transition-colors rounded-sm bg-[#110909]"
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              width: "176px",
                              height: "288px",
                              zIndex: isRevealed ? 0 : 2,
                            }}
                          >
                            <div className="w-full h-full border border-crimson/5 flex flex-col items-center justify-center relative overflow-hidden">
                              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-crimson/20" />
                              <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-crimson/20" />
                              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-crimson/20" />
                              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-crimson/20" />
                              <span className="text-2xl text-crimson/30 font-serif transform group-hover:scale-110 transition-transform duration-500">
                                🜏
                              </span>
                            </div>
                          </div>

                          {/* FRENTE DA CARTA (ESTÉTICA IDÊNTICA À GALLERY) */}
                          <div
                            className="absolute inset-0 bg-cathedral border-2 border-gold-venerable/30 p-3.5 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.9)] overflow-hidden rounded-sm text-left"
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                              width: "176px",
                              height: "288px",
                              zIndex: isRevealed ? 2 : 0,
                            }}
                          >
                            {/* Moldura Interna */}
                            <div className="absolute inset-1 border border-gold-venerable/5 pointer-events-none z-20" />

                            {/* Topo: Identificação do Arcano */}
                            <div className="text-[9px] font-serif text-gold-venerable tracking-widest uppercase flex justify-between border-b border-white/[0.05] pb-1 relative z-10">
                              <span>Arcano {card.number}</span>
                              <span className={card.isInverted ? "rotate-180 text-crimson" : ""}>
                                ✦
                              </span>
                            </div>

                            {/* Container da Imagem Centralizada (Estética Gallery) */}
                            <div className="w-full h-[52%] my-auto overflow-hidden border border-white/[0.03] bg-black/40 relative z-10 rounded-xs">
                              <img
                                src={card.banner}
                                alt={card.title}
                                className={`w-full h-full object-cover filter contrast-[1.05] brightness-[0.85] sepia-[0.15] transition-transform duration-500 ${
                                  card.isInverted ? "rotate-180 scale-x-[-1]" : ""
                                }`}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-cathedral via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Textos e Rodapé */}
                            <div className="space-y-1 relative z-10">
                              <h4 className="font-serif text-xs text-white uppercase tracking-wider flex items-center gap-1.5 truncate">
                                {card.title}
                                {card.isInverted && (
                                  <span className="text-[8px] text-crimson lowercase font-sans">
                                    (invertida)
                                  </span>
                                )}
                              </h4>

                              <p className="text-[9px] text-gold-venerable/70 font-serif italic line-clamp-1">
                                {card.archetype}
                              </p>

                              <p className="text-[9px] text-silver/50 font-light leading-tight line-clamp-2 border-t border-white/[0.03] pt-1">
                                {card.isInverted ? card.shadow : card.light}
                              </p>

                              <Link
                                to={`/tarot/arcanos-maiores/${card.slug}`}
                                className="block text-center text-[8px] tracking-[0.2em] text-gold-venerable/60 hover:text-white uppercase pt-1.5 border-t border-white/[0.03] transition-colors relative z-20"
                                onClick={(e) => e.stopPropagation()} 
                              >
                                Decifrar Mistério →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.section>
        )}
      </AnimatePresence>

{/* Rodapé Interno */}
        <div className="text-center mt-20 opacity-20 select-none">
          <span className="text-[9px] tracking-widest font-serif uppercase">
            Axioma Hermeticum • Veritas Invenietur
          </span>
        </div>



    </div>
  );
};

export default TarotSpreads;