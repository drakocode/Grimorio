import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { goetiaDetailsData } from '../../data/Goetia/goetiaDetails';

// Ordem dos Daemons para o sistema de navegação anterior/próximo
const DAEMON_ORDER = ["bael", "paimon"]; // Adicione os novos slugs aqui conforme expandir

const GoetiaDetailsTemplate = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const data = goetiaDetailsData[id];

  // Fallback caso a entidade não exista ou esteja grafada errada
  if (!data) {
    return (
      <div className="min-h-screen bg-abyss flex flex-col justify-center items-center text-center font-serif">
        <h2 className="text-xl text-crimson tracking-[0.25em] mb-2">✦ ENTIDADE NÃO ENCONTRADA ✦</h2>
        <p className="text-silver/50 text-xs font-sans italic">Este espírito não consta nos registros deste grimório salomônico.</p>
        <Link to="/goetia/daemons" className="mt-6 text-[10px] text-gold-venerable tracking-widest border border-gold-venerable/20 px-6 py-2 uppercase hover:bg-gold-venerable hover:text-black transition-all">Ver Daemons</Link>
      </div>
    );
  }

  // Lógica Cíclica de Navegação (Anterior / Próximo)
  const currentIndex = DAEMON_ORDER.indexOf(id);
  const prevIndex = currentIndex === 0 ? DAEMON_ORDER.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === DAEMON_ORDER.length - 1 ? 0 : currentIndex + 1;

  const prevKey = DAEMON_ORDER[prevIndex];
  const nextKey = DAEMON_ORDER[nextIndex];

  return (
    <div className="min-h-screen bg-abyss text-silver pb-24 relative overflow-hidden">
      {/* Camadas atmosféricas de imersão visual */}
      <div className="absolute top-0 left-0 w-full h-[90vh] bg-gradient-to-b from-transparent to-abyss z-10 pointer-events-none" />
     {/*  <div className="cinematic-vignette" /> */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-crimson/5 rounded-full blur-[140px] pointer-events-none z-0" />


      {/* ================= HERO SECTION RITUALÍSTICA ================= */}
      <section className="relative h-[70vh] w-full flex items-end justify-center overflow-hidden border-b border-white/[0.02]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-10" />
        <img 
          src={data.banner} 
          alt={data.title} 
          className="absolute inset-0 w-full h-full object-cover filter brightness-[40%] contrast-[120%] saturate-50 scale-105 opacity-60" 
        />
        
        <div className="max-w-5xl w-full mx-auto px-6 pb-20 relative z-20 flex flex-col items-center md:items-start text-center md:text-left gap-5">
          {/* Rank Hierárquico Tag */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 bg-black/80 backdrop-blur-md border border-crimson/40 text-crimson font-serif text-[10px] tracking-[0.3em] uppercase shadow-[0_0_15px_rgba(139,0,0,0.3)]"
          >
            👑 Grande {data.rank}
          </motion.div>

          <div className="space-y-2">
            <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-[0.25em] text-white uppercase drop-shadow-[0_4px_25px_rgba(0,0,0,1)]">
              {data.title}
            </h1>
            <p className="text-silver/60 italic font-light text-xs md:text-sm max-w-2xl tracking-wide leading-relaxed font-sans">
              ✦ "{data.quote}"
            </p>
          </div>
        </div>
      </section>

      {/* ================= LAYOUT GRID PRINCIPAL ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-20">
        
        {/* COLUNA ESQUERDA: Chaves e Correspondências Alquímicas */}
        <div className="space-y-8">
          <div className="bg-cathedral/60 backdrop-blur-md border border-white/[0.03] p-5 relative shadow-2xl">
            {/* Cantoneiras góticas de canto */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-crimson/30" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-crimson/30" />
            
            <h3 className="font-serif text-[11px] tracking-[0.25em] uppercase text-gold-venerable mb-4 pb-2 border-b border-white/[0.05]">Assinaturas Arcanas</h3>
            <div className="space-y-3.5">
              {data.metadata.map((meta, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs font-light py-1 border-b border-white/[0.01] last:border-0">
                  <span className="text-silver/40 flex items-center gap-2 uppercase tracking-wider text-[10px]">
                    <span className="text-crimson/60">{meta.icon}</span> {meta.label}
                  </span>
                  <span className="text-white font-medium tracking-wide text-right">{meta.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sumário Interno Fixado */}
          <div className="hidden lg:block sticky top-28 bg-black/10 p-4 border-l border-crimson/20 space-y-3">
            <span className="text-[9px] tracking-[0.3em] uppercase text-silver/40 font-serif block">Registros do Pergaminho</span>
            <ul className="space-y-2 text-xs">
              {data.chapters.map((chap, idx) => (
                <li key={idx}>
                  <a 
                    href={`#chap-${idx}`} 
                    className="text-silver/50 hover:text-gold-venerable tracking-wide transition-colors block py-1 font-serif uppercase text-[10px]"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(`chap-${idx}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    🜏 {chap.title}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#geometria" 
                  className="text-silver/50 hover:text-gold-venerable tracking-wide transition-colors block py-1 font-serif uppercase text-[10px]"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("geometria")?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  🜏 Geometria Evocativa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COLUNA DIREITA: Tratados de Texto, Selo Central e Relações */}
        <div className="lg:col-span-3 space-y-16">
          
          {/* Seções Narrativas Teóricas */}
          {data.chapters.map((chapter, idx) => (
            <motion.article 
              id={`chap-${idx}`}
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
              <div className="w-20 h-[1px] bg-crimson/40 mb-5 group-hover:w-40 transition-all duration-500" />
              <p className="text-sm md:text-base text-silver/70 font-light leading-relaxed tracking-wide text-justify whitespace-pre-line font-sans">
                {chapter.content}
              </p>
            </motion.article>
          ))}

          {/* ================= SEÇÃO VISUAL: O SIGILO RITUALÍSTICO ================= */}
          <motion.section 
            id="geometria"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="scroll-mt-28 p-8 bg-cathedral/20 border border-white/[0.02] relative flex flex-col md:flex-row items-center gap-8 shadow-inner-dark overflow-hidden rounded-sm"
          >
            {/* Efeito sutil de flutuação cósmica em background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.04)_0%,transparent_70%)] pointer-events-none" />

            {/* Caixa do Sigilo Clássico */}
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 border border-gold-venerable/30 rounded-full flex items-center justify-center bg-black/60 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative group">
              <div className="absolute inset-2 border border-gold-venerable/5 rounded-full group-hover:border-crimson/20 transition-colors" />
              <span className="font-serif text-6xl md:text-7xl text-gold-venerable filter drop-shadow-[0_0_8px_rgba(184,134,11,0.5)] select-none">
                {data.sigil}
              </span>
            </div>

            {/* Orientações de Amarração Mística */}
            <div className="space-y-4 flex-1">
              <h3 className="font-serif text-sm tracking-[0.2em] text-white uppercase">
                Fixação do Parâmetro Geométrico
              </h3>
              <div className="space-y-3 text-xs text-silver/60 font-light">
                {data.ritualGeometries.map((geo, idx) => (
                  <div key={idx} className="border-b border-white/[0.02] pb-2 last:border-0">
                    <span className="text-gold-venerable/80 font-medium tracking-wide block mb-1">🜁 {geo.aspect}</span>
                    <p className="leading-relaxed">{geo.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ================= CONTROLADORES DE NAVEGAÇÃO ENTRE ENTIDADES ================= */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            {/* Botão Daemon Anterior */}
            <Link 
              to={`/goetia/daemons/${prevKey}`}
              className="w-full sm:w-auto text-center text-[10px] font-serif tracking-[0.2em] text-silver/40 uppercase border border-white/[0.05] px-6 py-3.5 bg-white/[0.01] transition-all hover:border-crimson/40 hover:text-crimson flex items-center justify-center gap-2 group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span> 
              {goetiaDetailsData => goetiaDetailsData[prevKey]?.title || "Anterior"}
            </Link>

            {/* Retorno ao Grimório Central */}
            <Link 
              to="/goetia/daemons"
              className="w-full sm:w-auto text-center text-[9px] font-serif tracking-[0.3em] text-gold-venerable/50 uppercase px-6 py-3 hover:text-gold-venerable transition-colors"
            >
              🜹 Voltar ao Catálogo Goético
            </Link>

            {/* Botão Próximo Daemon */}
            <Link 
              to={`/goetia/daemons/${nextKey}`}
              className="w-full sm:w-auto text-center text-[10px] font-serif tracking-[0.2em] text-silver/40 uppercase border border-white/[0.05] px-6 py-3.5 bg-white/[0.01] transition-all hover:border-crimson/40 hover:text-crimson flex items-center justify-center gap-2 group"
            >
              {goetiaDetailsData => goetiaDetailsData[nextKey]?.title || "Próximo"} 
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.section>

          {/* Detalhe Decorativo de Fundo de Texto de Roda */}
          <div className="text-center pt-4 opacity-10 font-serif text-[10px] uppercase tracking-[0.4em] select-none">
            - IN NOMINE DEI NOSTRI SATANAS LUCIFERI EXCELSI -
          </div>

        </div>
      </div>
    </div>
  );
};

export default GoetiaDetailsTemplate;