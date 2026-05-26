import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { universalContent } from '../data/universalContent';
import RelatedMiniCard from '../components/RelatedMiniCard';

const DynamicDetails = ({ categoryKey }) => {
  // Captura o id vindo da rota (ex: :id -> 'aries' ou 'bael')
  const { id } = useParams();

  // Scroll para o topo ao carregar um novo conteúdo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Busca segura na estrutura de dados universal
  const categoryData = universalContent[categoryKey];
  const pageData = categoryData ? categoryData[id] : null;

  // Tela de Erro 404 Estilizada (Grimório Perdido)
  if (!pageData) {
    return (
      <div className="min-h-screen bg-abyss flex flex-col justify-center items-center text-center px-4 font-serif">
        <h2 className="text-2xl text-crimson tracking-[0.2em] mb-2">✦ ARQUIVO PERDIDO ✦</h2>
        <p className="text-silver/50 text-sm max-w-xs font-sans italic">As páginas deste tomo foram arrancadas ou o rito informado não existe nas crônicas atuais.</p>
        <Link to="/" className="mt-8 text-xs text-gold-venerable tracking-widest border border-gold-venerable/30 px-6 py-2 uppercase hover:bg-gold-venerable hover:text-black transition-all">Retornar ao Átrio</Link>
      </div>
    );
  }

  // Resoluções dinâmicas para a seção de relacionados
  const relatedItems = pageData.relatedIds?.map(relatedId => ({
    id: relatedId,
    ...categoryData[relatedId]
  })).filter(item => item.title) || [];

  return (
    <div className="min-h-screen bg-abyss text-silver pb-24 relative overflow-hidden">
      {/* Vinheta ambiental cinematográfica */}
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-transparent to-abyss z-10 pointer-events-none" />
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-end justify-center overflow-hidden border-b border-white/[0.02]">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src={pageData.banner} 
          alt={pageData.title} 
          className="absolute inset-0 w-full h-full object-cover filter contrast-[110%] scale-105" 
        />
        
        <div className="max-w-5xl w-full mx-auto px-6 pb-12 relative z-20 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-16 h-16 rounded-full bg-black/80 backdrop-blur-md border border-gold-venerable/40 flex items-center justify-center text-3xl text-gold-venerable shadow-crimson-glow"
          >
            {pageData.symbol}
          </motion.div>
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-crimson font-serif block mb-1">Registro Hermético</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-[0.1em] text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
              {pageData.title}
            </h1>
            <p className="mt-3 text-silver/60 italic font-light text-sm md:text-base max-w-2xl">
              {pageData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORPO DO CONTEÚDO ================= */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-20">
        
        {/* COLUNA ESQUERDA: Atributos Fixos Rápidos (Metadata) */}
        <div className="space-y-8">
          <div className="bg-cathedral/60 backdrop-blur-md border border-white/[0.03] p-6 relative shadow-inner-dark">
            <div className="absolute top-0 left-4 w-8 h-[1px] bg-gold-venerable/50" />
            <h3 className="font-serif text-xs tracking-[0.25em] uppercase text-gold-venerable mb-4">Correspondências</h3>
            <dl className="space-y-4 text-xs font-light">
              {pageData.info.map((meta, idx) => (
                <div key={idx} className="border-b border-white/[0.03] pb-2 flex justify-between items-center">
                  <dt className="text-silver/40 tracking-wider uppercase">{meta.label}</dt>
                  <dd className="text-white font-medium tracking-wide">{meta.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ÍNDICE RITUALÍSTICO (Scroll Suave de Âncoras) */}
          <div className="hidden lg:block sticky top-28 bg-black/20 p-4 border-l border-white/[0.05] space-y-3">
            <span className="text-[9px] tracking-[0.3em] uppercase text-silver/30 font-serif block">Sumário</span>
            <ul className="space-y-2 text-xs">
              {pageData.sections.map((sec, idx) => {
                const secId = `sec-${idx}`;
                return (
                  <li key={idx}>
                    <a 
                      href={`#${secId}`} 
                      className="text-silver/50 hover:text-gold-venerable tracking-wide transition-colors block py-1 font-serif uppercase text-[11px]"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(secId)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      ❖ {sec.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* COLUNA DIREITA: Blocos Dinâmicos de Texto Reutilizáveis */}
        <div className="lg:col-span-3 space-y-12">
          {pageData.sections.map((section, idx) => {
            const secId = `sec-${idx}`;
            return (
              <motion.article 
                id={secId}
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-28 group"
              >
                <h2 className="font-serif text-xl tracking-[0.15em] text-white uppercase mb-4 group-hover:text-gold-venerable transition-colors">
                  {section.title}
                </h2>
                <div className="mystic-divider max-w-xs mb-6 opacity-40" />
                <p className="text-sm md:text-base text-silver/80 font-light leading-relaxed tracking-wide text-justify whitespace-pre-line">
                  {section.content}
                </p>
              </motion.article>
            );
          })}

          {/* ================= CRÔNICAS RELACIONADAS ================= */}
          {relatedItems.length > 0 && (
            <div className="pt-12 border-t border-white/[0.03]">
              <h3 className="font-serif text-sm tracking-[0.3em] text-gold-venerable uppercase mb-6 flex items-center gap-3">
                <span>✦</span> Linhas de Força Relacionadas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedItems.map((item, idx) => (
                  <RelatedMiniCard 
                    key={idx} 
                    item={item} 
                    category={pageData.relatedCategory} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DynamicDetails;