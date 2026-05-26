import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signDetailsData } from '../../../data/Astrology/SignsDetailsData';

const SignDetailsTemplate = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const data = signDetailsData[id];

  // Caso o usuário acesse uma rota inexistente
  if (!data) {
    return (
      <div className="min-h-screen bg-abyss flex flex-col justify-center items-center text-center font-serif">
        <h2 className="text-xl text-crimson tracking-[0.2em] mb-2">✦ SIGNO NÃO ENCONTRADO ✦</h2>
        <p className="text-silver/50 text-xs font-sans italic">Este quadrante zodiacal não está registrado em nossos tomos antigos.</p>
        <Link to="/astrologia/signos" className="mt-6 text-[10px] text-gold-venerable tracking-widest border border-gold-venerable/20 px-6 py-2 uppercase hover:bg-gold-venerable hover:text-black transition-all">Voltar à Roda</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-abyss text-silver pb-24 relative overflow-hidden">
      {/* Efeito de vinheta e névoa mística */}
      <div className="absolute top-0 left-0 w-full h-[85vh] bg-gradient-to-b from-transparent to-abyss z-10 pointer-events-none" />
   {/*    <div className="cinematic-vignette" /> */}

      {/* ================= HERO SECTION CINEMATOGRÁFICA ================= */}
      <section className="relative h-[65vh] w-full flex items-end justify-center overflow-hidden border-b border-white/[0.02]">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src={data.banner} 
          alt={data.title} 
          className="absolute inset-0 w-full h-full object-cover filter saturate-[80%] contrast-[110%] scale-105 opacity-60" 
        />
        
        <div className="max-w-5xl w-full mx-auto px-6 pb-16 relative z-20 flex flex-col items-center md:items-start text-center md:text-left gap-5">
          {/* Glifo Runas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.7, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-20 h-20 rounded-full bg-black/80 backdrop-blur-md border border-gold-venerable/30 flex items-center justify-center text-4xl text-gold-venerable shadow-inner-dark"
          >
            {data.symbol}
          </motion.div>
          <div>
            <span className="text-[10px] tracking-[0.5em] uppercase text-crimson font-serif block mb-1">Círculo Astrológico</span>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-[0.15em] text-white uppercase drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
              {data.title}
            </h1>
            <p className="mt-3 text-silver/60 italic font-light text-xs md:text-sm max-w-2xl tracking-wide">
              ✦ {data.archetype}
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTEÚDO PRINCIPAL (LAYOUT GRID) ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-20">
        
        {/* COLUNA ESQUERDA: Métricas Alquímicas & Índice do Livro */}
        <div className="space-y-8">
          {/* Caixa de Correspondências de Luxo */}
          <div className="bg-cathedral/80 backdrop-blur-md border border-white/[0.04] p-5 relative shadow-inner-dark">
            {/* Cantoneiras Minimalistas */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gold-venerable/30" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gold-venerable/30" />
            
            <h3 className="font-serif text-[11px] tracking-[0.25em] uppercase text-gold-venerable mb-4 pb-2 border-b border-white/[0.05]">Correspondências</h3>
            <div className="space-y-3">
              {data.metadata.map((meta, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs font-light py-1 border-b border-white/[0.01]">
                  <span className="text-silver/40 flex items-center gap-2 uppercase tracking-wider text-[10px]">
                    <span className="text-gold-venerable/50">{meta.icon}</span> {meta.label}
                  </span>
                  <span className="text-white font-medium tracking-wide">{meta.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sumário para Navegação Rápida com Scroll Ativo */}
          <div className="hidden lg:block sticky top-28 bg-black/20 p-4 border-l border-white/[0.05] space-y-3">
            <span className="text-[9px] tracking-[0.3em] uppercase text-silver/40 font-serif block">Sumário do Tomo</span>
            <ul className="space-y-2 text-xs">
              {data.chapters.map((chap, idx) => {
                const chapId = `chap-${idx}`;
                return (
                  <li key={idx}>
                    <a 
                      href={`#${chapId}`} 
                      className="text-silver/50 hover:text-gold-venerable tracking-wide transition-colors block py-1 font-serif uppercase text-[10px]"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(chapId)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      🜏 {chap.title}
                    </a>
                  </li>
                );
              })}
              <li>
                <a 
                  href="#compatibilidade" 
                  className="text-silver/50 hover:text-gold-venerable tracking-wide transition-colors block py-1 font-serif uppercase text-[10px]"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("compatibilidade")?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  🜏 Afinidades e Conflitos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COLUNA DIREITA: Capítulos de Texto e Tabelas de Afinidade */}
        <div className="lg:col-span-3 space-y-16">
          
          {/* Renderização de Capítulos Narrativos */}
          {data.chapters.map((chapter, idx) => {
            const chapId = `chap-${idx}`;
            return (
              <motion.article 
                id={chapId}
                key={idx}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 group"
              >
                <h2 className="font-serif text-lg tracking-[0.2em] text-white uppercase mb-3 group-hover:text-gold-venerable transition-colors">
                  {chapter.title}
                </h2>
                <div className="mystic-divider max-w-xs mb-5 opacity-30" />
                <p className="text-sm md:text-base text-silver/80 font-light leading-relaxed tracking-wide text-justify whitespace-pre-line">
                  {chapter.content}
                </p>
              </motion.article>
            );
          })}

          {/* ================= SEÇÃO DE COMPATIBILIDADE ================= */}
          <motion.section 
            id="compatibilidade"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-28 pt-8 border-t border-white/[0.03] space-y-6"
          >
            <div>
              <h2 className="font-serif text-lg tracking-[0.2em] text-white uppercase mb-2">
                Afinidades e Conflitos Energéticos
              </h2>
              <p className="text-xs text-silver/60 italic font-light leading-relaxed tracking-wide">
                {data.compatibility.dynamic}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Aliados Cósmicos */}
              <div className="bg-cathedral/40 border border-white/[0.02] p-5 rounded-none shadow-inner-dark">
                <h4 className="text-xs font-serif tracking-[0.25em] text-emerald-500 uppercase mb-4 flex items-center gap-2">
                  <span>✦</span> Aliados Ideais
                </h4>
                <div className="space-y-3">
                  {data.compatibility.allies.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-2.5 bg-black/20 border border-white/[0.01]">
                      <span className="text-sm font-medium text-white tracking-wide">{item.name}</span>
                      <span className="text-[10px] tracking-wider text-silver/50 uppercase italic">{item.relation}</span>
                      <span className="text-[9px] px-2 py-0.5 border border-white/5 text-silver/40 uppercase">{item.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desafios Cármicos */}
              <div className="bg-cathedral/40 border border-white/[0.02] p-5 rounded-none shadow-inner-dark">
                <h4 className="text-xs font-serif tracking-[0.25em] text-crimson uppercase mb-4 flex items-center gap-2">
                  <span>✦</span> Atritos Críticos
                </h4>
                <div className="space-y-3">
                  {data.compatibility.challengers.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-2.5 bg-black/20 border border-white/[0.01]">
                      <span className="text-sm font-medium text-white tracking-wide">{item.name}</span>
                      <span className="text-[10px] tracking-wider text-silver/50 uppercase italic">{item.relation}</span>
                      <span className="text-[9px] px-2 py-0.5 border border-white/5 text-silver/40 uppercase">{item.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Botão de Retorno */}
            <div className="pt-8 text-center md:text-left">
              <Link 
                to="/astrologia/signos"
                className="inline-block text-[10px] font-serif tracking-[0.3em] text-gold-venerable uppercase border border-gold-venerable/20 px-8 py-3 bg-gold-venerable/[0.01] transition-all hover:bg-gold-venerable hover:text-black hover:font-bold"
              >
                ← Retornar à Roda Zodiacal
              </Link>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default SignDetailsTemplate;