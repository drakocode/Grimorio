import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
/* import { tarotDetailsData } from "../../data/Tarot/tarotDetails"; */
import { tarotCardsData } from "../../data/Tarot/tarotData";

// Array indexado para controle cíclico infinito (Botões Anterior / Próximo)
const ARCANOS_ORDER = [
  "o-louco", "o-mago", "a-sacerdotisa", "a-imperatriz", "o-imperador", 
  "o-hierofante", "os-enamorados", "o-carro", "a-forca", "o-eremita", 
  "a-roda-da-fortuna", "a-justica", "o-enforcado", "a-morte", "a-temperanca", 
  "o-diabo", "a-torre", "a-estrela", "a-lua", "o-sol", "o-julgamento", "o-mundo"
];

const TarotDetailsTemplate = () => {
  const { id } = useParams();

  // Força o scroll para o topo com suavidade sempre que mudar de carta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const card = tarotCardsData[id];

  // Fallback de segurança caso o slug na URL seja digitado errado
  if (!card) {
    return (
      <div className="min-h-screen bg-abyss flex flex-col justify-center items-center font-serif text-center px-6">
        <h2 className="text-xl text-crimson tracking-[0.25em] mb-2">✦ ARCANO NÃO ENCONTRADO ✦</h2>
        <p className="text-silver/50 text-xs font-sans italic max-w-sm">Esta lâmina misteriosa não consta nos registros atuais do Livro de Thoth.</p>
        <Link 
          to="/tarot/arcanos-maiores" 
          className="text-[10px] text-gold-venerable border border-gold-venerable/20 px-6 py-2.5 uppercase tracking-widest mt-6 hover:bg-gold-venerable hover:text-black transition-all"
        >
          Retornar ao Deck
        </Link>
      </div>
    );
  }

  // Lógica de cálculo dos vizinhos (Anterior e Próximo)
  const currentIndex = ARCANOS_ORDER.indexOf(id);
  const prevIndex = currentIndex === 0 ? ARCANOS_ORDER.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === ARCANOS_ORDER.length - 1 ? 0 : currentIndex + 1;

  const prevSlug = ARCANOS_ORDER[prevIndex];
  const nextSlug = ARCANOS_ORDER[nextIndex];

  return (
    <div className="min-h-screen bg-abyss text-silver pb-24 relative overflow-hidden">
      {/* Vinhetas e overlays atmosféricos de névoa escura */}
      <div className="absolute top-0 left-0 w-full h-[85vh] bg-gradient-to-b from-transparent to-abyss z-10 pointer-events-none" />
      {/* <div className="cinematic-vignette" /> */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-venerable/[0.02] rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ================= HERO SECTION DA LÂMINA ================= */}
      <section className="relative h-[65vh] w-full flex items-end justify-center overflow-hidden border-b border-white/[0.02]">
        <img 
          src={card.banner} 
          alt={card.title} 
          className="absolute inset-0 w-full h-full object-cover filter brightness-[35%] contrast-[115%] saturate-[60%] scale-105" 
        />
        
        <div className="max-w-5xl w-full mx-auto px-6 pb-16 relative z-20 flex flex-col items-center md:items-start text-center md:text-left gap-5">
          {/* Medalhão com Número Romano/Zero */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-lg font-bold text-gold-venerable bg-black/70 w-14 h-14 rounded-full border border-gold-venerable/30 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.2)] select-none"
          >
            {card.number}
          </motion.div>

          <div className="space-y-1">
            <h1 className="font-serif text-4xl md:text-6xl font-light tracking-[0.15em] text-white uppercase drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
              {card.title}
            </h1>
            <p className="text-xs md:text-sm text-silver/60 italic font-sans max-w-2xl leading-relaxed tracking-wide">
              ✦ {card.archetype}
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORPO DO TRATADO HERMÉTICO ================= */}
      <div className="max-w-5xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-20">
        
        {/* COLUNA ESQUERDA: Assinaturas Ocultas / Metadados */}
        <div className="space-y-6">
          <div className="bg-cathedral/50 backdrop-blur-md border border-white/[0.03] p-5 relative shadow-2xl rounded-sm">
            {/* Cantoneiras decorativas mini */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-gold-venerable/30" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-gold-venerable/30" />
            
            <h3 className="font-serif text-[11px] tracking-[0.25em] uppercase text-gold-venerable mb-4 pb-2 border-b border-white/[0.05]">
              Ancoragem Hermética
            </h3>
            <div className="space-y-3.5">
              {card.metadata.map((meta, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs py-1 border-b border-white/[0.01] last:border-0 font-light">
                  <span className="text-silver/40 flex items-center gap-2 uppercase tracking-wider text-[10px]">
                    <span className="text-gold-venerable/60">{meta.icon}</span> {meta.label}
                  </span>
                  <span className="text-white font-medium tracking-wide text-right">{meta.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selo Estilizado de Fundo de Texto */}
          <div className="hidden lg:block text-center border border-white/[0.01] p-6 opacity-20">
            <span className="font-serif text-5xl text-silver/30 block select-none mb-1">🜚</span>
            <span className="text-[8px] tracking-[0.3em] uppercase block font-serif">Sub Specie Aeternitatis</span>
          </div>
        </div>

        {/* COLUNA DIREITA: As Duas Forças do Oráculo (Luz e Sombra) */}
        <div className="lg:col-span-2 space-y-10 font-sans">
          
          {/* Luz */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-emerald-500/30 bg-emerald-500/[0.01] p-5 rounded-r-sm space-y-2 group hover:bg-emerald-500/[0.02] transition-colors duration-300"
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-xs">🜁</span>
              <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-emerald-400 group-hover:text-emerald-300 transition-colors">
                Caminho Evolutivo (Polaridade Luz)
              </h4>
            </div>
            <p className="text-sm text-silver/70 font-light leading-relaxed text-justify tracking-wide font-sans">
              {card.light}
            </p>
          </motion.div>

          {/* Sombra */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-crimson/30 bg-crimson/[0.01] p-5 rounded-r-sm space-y-2 group hover:bg-crimson/[0.02] transition-colors duration-300"
          >
            <div className="flex items-center gap-2">
              <span className="text-crimson text-xs">🜄</span>
              <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-crimson group-hover:text-red-400 transition-colors">
                Caminho Involutivo (Polaridade Sombra)
              </h4>
            </div>
            <p className="text-sm text-silver/70 font-light leading-relaxed text-justify tracking-wide font-sans">
              {card.shadow}
            </p>
          </motion.div>

          {/* ================= CONTROLES DE NAVEGAÇÃO CÍCLICA ================= */}
          <div className="pt-10 border-t border-white/[0.03] flex flex-row items-center justify-between gap-4 text-[10px] font-serif tracking-[0.2em] uppercase select-none">
            {/* Arcano Anterior */}
            <Link 
              to={`/tarot/arcanos-maiores/${prevSlug}`}
              className="text-silver/40 hover:text-gold-venerable transition-all duration-300 flex items-center gap-1 group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span> 
              <span>{tarotCardsData[prevSlug]?.title}</span>
            </Link>

            {/* Link de Retorno ao Deck Principal */}
            <Link 
              to="/tarot/arcanos-maiores" 
              className="text-gold-venerable/40 hover:text-gold-venerable transition-colors duration-300 tracking-[0.3em] text-[9px]"
            >
              🜹 Voltar ao Deck
            </Link>

            {/* Próximo Arcano */}
            <Link 
              to={`/tarot/arcanos-maiores/${nextSlug}`}
              className="text-silver/40 hover:text-gold-venerable transition-all duration-300 flex items-center gap-1 group"
            >
              <span>{tarotCardsData[nextSlug]?.title}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TarotDetailsTemplate;