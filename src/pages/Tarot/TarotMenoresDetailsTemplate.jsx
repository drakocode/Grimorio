import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { tarotMenoresData } from "../../data/Tarot/tarotMenoresData";

// Configuração heráldica para injetar cores e glifos dependendo do naipe da carta
const ELEMENT_THEME = {
  paus: { glifo: '🜂', color: 'text-amber-500', border: 'border-amber-500/30', bg: 'bg-amber-500/[0.01]', hover: 'hover:bg-amber-500/[0.02]' },
  copas: { glifo: '🜄', color: 'text-cyan-400', border: 'border-cyan-400/30', bg: 'bg-cyan-500/[0.01]', hover: 'hover:bg-cyan-500/[0.02]' },
  espadas: { glifo: '🜁', color: 'text-crimson', border: 'border-crimson/30', bg: 'bg-crimson/[0.01]', hover: 'hover:bg-crimson/[0.02]' },
  ouros: { glifo: '🜃', color: 'text-emerald-400', border: 'border-emerald-400/30', bg: 'bg-emerald-500/[0.01]', hover: 'hover:bg-emerald-500/[0.02]' }
};

const TarotMenoresDetails = () => {
  const { id } = useParams();

  // Força o scroll para o topo com suavidade sempre que mudar de carta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const card = tarotMenoresData[id];

  // Fallback de segurança caso o slug na URL seja digitado incorretamente
  if (!card) {
    return (
      <div className="min-h-screen bg-abyss flex flex-col justify-center items-center font-serif text-center px-6">
        <h2 className="text-xl text-crimson tracking-[0.25em] mb-2">✦ ARCANO NÃO ENCONTRADO ✦</h2>
        <p className="text-silver/50 text-xs font-sans italic max-w-sm">Esta lâmina menor não consta nos registros atuais do Livro de Thoth.</p>
        <Link 
          to="/tarot/arcanos-menores" 
          className="text-[10px] text-gold-venerable border border-gold-venerable/20 px-6 py-2.5 uppercase tracking-widest mt-6 hover:bg-gold-venerable hover:text-black transition-all"
        >
          Retornar aos Menores
        </Link>
      </div>
    );
  }

  // Identifica as propriedades do tema elemental baseado no naipe (suit) da carta
  const suitKey = card.suit.toLowerCase();
  const theme = ELEMENT_THEME[suitKey] || { glifo: '✦', color: 'text-gold-venerable', border: 'border-white/10', bg: 'bg-white/[0.01]', hover: 'hover:bg-white/[0.02]' };

  // Extrai todas as chaves do objeto de dados para criar uma ordem de navegação cíclica e dinâmica
  const ARCANOS_MENORES_ORDER = Object.keys(tarotMenoresData);
  const currentIndex = ARCANOS_MENORES_ORDER.indexOf(id);
  
  const prevIndex = currentIndex === 0 ? ARCANOS_MENORES_ORDER.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === ARCANOS_MENORES_ORDER.length - 1 ? 0 : currentIndex + 1;

  const prevSlug = ARCANOS_MENORES_ORDER[prevIndex];
  const nextSlug = ARCANOS_MENORES_ORDER[nextIndex];

  return (
    <div className="min-h-screen bg-abyss text-silver pb-24 relative overflow-hidden">
      {/* Vinhetas e overlays atmosféricos de névoa escura */}
      <div className="absolute top-0 left-0 w-full h-[85vh] bg-gradient-to-b from-transparent to-abyss z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-venerable/[0.02] rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ================= HERO SECTION DA LÂMINA ================= */}
      <section className="relative h-[65vh] w-full flex items-end justify-center overflow-hidden border-b border-white/[0.02]">
        <img 
          src={card.banner || card.image} 
          alt={card.title} 
          className="absolute inset-0 w-full h-full object-cover filter brightness-[35%] contrast-[115%] saturate-[60%] scale-105" 
        />
        
        <div className="max-w-5xl w-full mx-auto px-6 pb-16 relative z-20 flex flex-col items-center md:items-start text-center md:text-left gap-5">
          {/* Medalhão com o Glifo Elemental do Naipe */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`font-serif text-xl font-bold bg-black/70 w-14 h-14 rounded-full border flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] select-none ${theme.color} ${theme.border}`}
          >
            {theme.glifo}
          </motion.div>

          <div className="space-y-1">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <h1 className="font-serif text-4xl md:text-6xl font-light tracking-[0.15em] text-white uppercase drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                {card.title}
              </h1>
            </div>
            <p className="text-xs md:text-sm text-silver/60 italic font-sans max-w-2xl leading-relaxed tracking-wide uppercase pt-1">
              ✦ Domínio de {card.suit} • {card.element || card.archetype || "Forças Microcósmicas"} ✦
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
              Assinatura Elemental
            </h3>
            <div className="space-y-3.5">
              {/* Renderização condicional dinâmica para metadados mapeados ou chaves diretas */}
              {card.metadata ? (
                card.metadata.map((meta, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs py-1 border-b border-white/[0.01] last:border-0 font-light">
                    <span className="text-silver/40 flex items-center gap-2 uppercase tracking-wider text-[10px]">
                      <span className="text-gold-venerable/60">{meta.icon}</span> {meta.label}
                    </span>
                    <span className="text-white font-medium tracking-wide text-right">{meta.value}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-white/[0.01] font-light">
                    <span className="text-silver/40 uppercase tracking-wider text-[10px]">✦ Naipe</span>
                    <span className="text-white font-medium tracking-wide text-right uppercase">{card.suit}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-white/[0.01] font-light">
                    <span className="text-silver/40 uppercase tracking-wider text-[10px]">🜚 Regência</span>
                    <span className="text-white font-medium tracking-wide text-right">{card.regency || "Cotidiana / Terrestre"}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-white/[0.01] last:border-0 font-light">
                    <span className="text-silver/40 uppercase tracking-wider text-[10px]">⚖ Número</span>
                    <span className="text-white font-medium tracking-wide text-right">{card.number || "N/A"}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Selo Estilizado Dinâmico de Fundo */}
          <div className="hidden lg:block text-center border border-white/[0.01] p-6 opacity-20">
            <span className={`font-serif text-5xl block select-none mb-1 ${theme.color}`}>{theme.glifo}</span>
            <span className="text-[8px] tracking-[0.3em] uppercase block font-serif">Sicut Superius, Sic Inferius</span>
          </div>
        </div>

        {/* COLUNA DIREITA: As Duas Forças do Oráculo (Luz e Sombra) */}
        <div className="lg:col-span-2 space-y-10 font-sans">
          
          {/* Descrição Geral da Lâmina */}
          <div className="space-y-2">
            <h3 className="font-serif text-[11px] tracking-[0.25em] uppercase text-gold-venerable">O Manifesto Cósmico</h3>
            <p className="text-sm text-silver/80 font-light leading-relaxed text-justify tracking-wide">
              {card.description || card.meaning || "O fluxo das energias sutis materializadas nas experiências e vivências do plano inferior."}
            </p>
          </div>

          {/* Luz */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`border-l-2 bg-emerald-500/[0.01] p-5 rounded-r-sm space-y-2 group transition-colors duration-300 border-emerald-500/30 hover:bg-emerald-500/[0.02]`}
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-xs">🜁</span>
              <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-emerald-400 group-hover:text-emerald-300 transition-colors">
                Caminho Reto (Polaridade Luz)
              </h4>
            </div>
            <p className="text-sm text-silver/70 font-light leading-relaxed text-justify tracking-wide font-sans">
              {card.light || card.positive || "Aspectos benéficos, construções ativas e virtudes integradas trazidas por esta lâmina."}
            </p>
          </motion.div>

          {/* Sombra */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`border-l-2 bg-crimson/[0.01] p-5 rounded-r-sm space-y-2 group transition-colors duration-300 border-crimson/30 hover:bg-crimson/[0.02]`}
          >
            <div className="flex items-center gap-2">
              <span className="text-crimson text-xs">🜄</span>
              <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-crimson group-hover:text-red-400 transition-colors">
                Caminho Inverso (Polaridade Sombra)
              </h4>
            </div>
            <p className="text-sm text-silver/70 font-light leading-relaxed text-justify tracking-wide font-sans">
              {card.shadow || card.negative || "Bloqueios, excessos egóicos ou emanações estagnadas que demandam transmutação consciente."}
            </p>
          </motion.div>

          {/* ================= CONTROLES DE NAVEGAÇÃO CÍCLICA ================= */}
          <div className="pt-10 border-t border-white/[0.03] flex flex-row items-center justify-between gap-4 text-[10px] font-serif tracking-[0.2em] uppercase select-none">
            {/* Arcano Anterior */}
            <Link 
              to={`/tarot/arcanos-menores/${prevSlug}`}
              className="text-silver/40 hover:text-gold-venerable transition-all duration-300 flex items-center gap-1 group max-w-[40%] truncate"
            >
              <span className="transition-transform group-hover:-translate-x-1 shrink-0">←</span> 
              <span className="truncate">{tarotMenoresData[prevSlug]?.title}</span>
            </Link>

            {/* Link de Retorno ao Deck Menor */}
            <Link 
              to="/tarot/arcanos-menores" 
              className="text-gold-venerable/40 hover:text-gold-venerable transition-colors duration-300 tracking-[0.3em] text-[9px] shrink-0"
            >
              🜹 Voltar ao Deck
            </Link>

            {/* Próximo Arcano */}
            <Link 
              to={`/tarot/arcanos-menores/${nextSlug}`}
              className="text-silver/40 hover:text-gold-venerable transition-all duration-300 flex items-center gap-1 group max-w-[40%] text-right justify-end"
            >
              <span className="truncate">{tarotMenoresData[nextSlug]?.title}</span>
              <span className="transition-transform group-hover:translate-x-1 shrink-0">→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TarotMenoresDetails;