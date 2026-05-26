import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../../components/Card';

function Home() {
  const secoes = [
    {
      titulo: "Astrologia",
      descricao: "Descubra a dança dos astros e como o mapa astral influencia sua jornada.",
      imagem: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500", // Imagem temporária
      link: "/astrologia"
    },
    {
      titulo: "Goetia",
      descricao: "Estudos profundos sobre os mistérios, chaves e invocações da tradição salomônica.",
      imagem: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500", // Imagem temporária
      link: "/goetia"
    },
    {
      titulo: "Tarot",
      descricao: "Consulte os arcanos maiores e menores para desvelar os segredos do oculto.",
      imagem: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500", // Imagem temporária
      link: "/tarot"
    }
  ];

  return (
    <div className="home-page">
      <header className="home-hero">
        <h1>Almanaque Oculto</h1>
        <p>Explore as ciências antigas e os mistérios do universo</p>
      </header>

      <div className="cards-grid">
        {secoes.map((secao, index) => (
          <Card 
            key={index}
            titulo={secao.titulo}
            descricao={secao.descricao}
            imagem={secao.imagem}
            link={secao.link}
          />
        ))}
      </div>



<div className="min-h-screen bg-abyss pt-20 relative overflow-hidden">
      {/* Camada global de efeitos visuais de ambiente */}
     {/*  <div className="cinematic-vignette" /> */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(140,13,30,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Hero Section Cinematográfica */}
      <section className="relative h-[65vh] flex flex-col justify-center items-center text-center px-4 border-b border-white/[0.02]">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-gold-venerable text-[11px] uppercase mb-4 tracking-[0.4em]"
        >
          Omnia Mea Mecum Porto
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl font-bold uppercase text-white tracking-[0.15em] mb-4"
        >
          Almanaque Oculto
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-silver/60 font-light text-sm md:text-base max-w-2xl tracking-wide leading-relaxed italic"
        >
          Uma biblioteca hermética digital dedicada à preservação, simetria e estética das ciências proibidas e mistérios intemporais.
        </motion.p>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="h-[1px] bg-gold-venerable/40 mt-8"
        />
      </section>

      {/* Grid Central de Navegação */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secoes.map((secao, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative bg-cathedral/50 backdrop-blur-sm border border-white/[0.04] p-6 shadow-2xl transition-all duration-500 hover:border-gold-venerable/40 hover:shadow-gold-glow"
            >
              {/* Box da imagem */}
              <div className="h-44 w-full overflow-hidden relative border border-white/[0.02] mb-6">
                <img 
                  src={secao.imagem} 
                  alt={secao.titulo} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cathedral/90 to-transparent" />
              </div>

              {/* Textos */}
              <span className="text-[10px] tracking-[0.3em] uppercase text-crimson block mb-1 font-serif">
                {secao.sub}
              </span>
              <h2 className="font-serif text-2xl tracking-[0.1em] text-white mb-3 uppercase group-hover:text-gold-venerable transition-colors">
                {secao.titulo}
              </h2>
              <p className="text-xs text-silver/60 font-light leading-relaxed mb-6 tracking-wide">
                {secao.descricao}
              </p>

              {/* Botão de Redirecionamento */}
              <Link 
                to={secao.link}
                className="inline-block w-full text-center py-2.5 text-[10px] font-serif tracking-[0.3em] uppercase text-gold-venerable border border-gold-venerable/20 bg-gold-venerable/[0.02] transition-all duration-300 hover:bg-gold-venerable hover:text-black hover:font-bold"
              >
                Adentrar Portal
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>







    </div>

      

  );
}

export default Home;