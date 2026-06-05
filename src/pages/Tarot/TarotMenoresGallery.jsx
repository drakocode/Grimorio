import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { tarotMenoresData } from '../../data/Tarot/tarotMenoresData';

// Definição dos altares dos Naipes com suas propriedades místicas e correspondências
const NAIPES_CONFIG = [
  {
    id: 'paus',
    name: 'Naipe de Paus',
    element: 'Fogo • Atividade & Criatividade',
    glifo: '🜂',
    desc: 'O reino da centelha vital, da força de vontade, da ambição e dos movimentos espirituais e iniciáticos.',
    bgSpotlight: 'bg-amber-500/5',
    tagStyle: 'text-amber-500 border-amber-500/30 bg-amber-950/10',
    btnStyle: 'hover:border-amber-500/40 hover:text-amber-500 hover:bg-amber-500/5'
  },
  {
    id: 'copas',
    name: 'Naipe de Copas',
    element: 'Água • Emoção & Intuição',
    glifo: '🜄',
    desc: 'O espelho das águas internas, dos mistérios do coração, dos afetos, da memória e da profundidade psíquica.',
    bgSpotlight: 'bg-cyan-500/5',
    tagStyle: 'text-cyan-400 border-cyan-400/30 bg-cyan-950/10',
    btnStyle: 'hover:border-cyan-400/40 hover:text-cyan-400 hover:bg-cyan-400/5'
  },
  {
    id: 'espadas',
    name: 'Naipe de Espadas',
    element: 'Ar • Intelecto & Conflito',
    glifo: '🜁',
    desc: 'O gume afiado da mente lógica, a esfera da verdade cortante, dos ideais, da justiça e das batalhas mentais.',
    bgSpotlight: 'bg-rose-500/5',
    tagStyle: 'text-crimson border-crimson/30 bg-wine/10',
    btnStyle: 'hover:border-crimson/40 hover:text-crimson hover:bg-wine/10'
  },
  {
    id: 'ouros',
    name: 'Naipe de Ouros',
    element: 'Terra • Manifestação & Matéria',
    glifo: '🜃',
    desc: 'A fundação sólida no plano físico, o santuário do trabalho, das riquezas materiais, do corpo e da estabilidade terrena.',
    bgSpotlight: 'bg-emerald-500/5',
    tagStyle: 'text-emerald-400 border-emerald-400/30 bg-emerald-950/10',
    btnStyle: 'hover:border-emerald-400/40 hover:text-emerald-400 hover:bg-emerald-500/5'
  }
];

const TarotMenoresGallery = () => {
  // Converte o objeto de dados em array estruturada
  const todasCartas = Object.entries(tarotMenoresData).map(([key, value]) => ({
    slug: key,
    ...value
  }));

  // Função para lidar com a rolagem suave até a âncora do Naipe
  const scrollToNaipe = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Variantes de animação para os containers das seções
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.08 }
    }
  };

  return (
    <div className="min-h-screen bg-abyss text-silver pt-32 pb-24 relative overflow-hidden">
      {/* Detalhes de Ambiente Globais */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ================= HERO SECTION CINEMATOGRÁFICA ================= */}
        <section className="relative h-[45vh] flex flex-col justify-center items-center text-center px-6 border-b border-white/[0.02]">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-gold-venerable text-[10px] uppercase mb-4 tracking-[0.4em]"
          >
            ✦ Os Quatro Pilares Elementais do Microcosmo ✦
          </motion.div>
  
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-4xl md:text-6xl font-light uppercase text-white tracking-[0.18em] mb-4"
          >
            Os Arcanos Menores
          </motion.h1>
  
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-silver/60 font-light text-xs md:text-sm max-w-xl tracking-widest leading-relaxed italic font-sans"
          >
            Acompanhe o desdobramento diário das forças universais. Contemple as lâminas menores divididas por seus respectivos altares e domínios elementais.
          </motion.p>
  
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-venerable/40 to-transparent mt-8"
          />
        </section>

        {/* ================= SELETOR RITUAL DE ANCORAGEM (NOVO) ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 mt-8 mb-24 text-[9px] font-serif tracking-[0.2em] uppercase"
        >
          {NAIPES_CONFIG.map((naipe) => {
            // Verifica se existem cartas para este naipe antes de exibir o botão de atalho
            const temCartas = todasCartas.some(c => c.suit.toLowerCase() === naipe.id);
            if (!temCartas) return null;

            return (
              <button
                key={`btn-${naipe.id}`}
                onClick={() => scrollToNaipe(naipe.id)}
                className={`px-5 py-2.5 border border-white/[0.04] bg-black/20 text-silver/60 transition-all duration-300 rounded-sm flex items-center gap-2 ${naipe.btnStyle}`}
              >
                <span className="text-xs opacity-70 font-sans">{naipe.glifo}</span>
                {naipe.name.replace('Naipe de ', '')}
              </button>
            );
          })}
        </motion.div>

        {/* ================= ALTARES SEPARADOS POR NAIPE ================= */}
        <div className="space-y-32">
          {NAIPES_CONFIG.map((naipe) => {
            // Filtra as cartas pertencentes a este naipe específico
            const cartasDoNaipe = todasCartas.filter(
              (carta) => carta.suit.toLowerCase() === naipe.id
            );

            // Evita renderizar seções caso o naipe ainda esteja sem dados povoantes
            if (cartasDoNaipe.length === 0) return null;

            return (
              <motion.section 
                id={naipe.id} // <-- ID adicionado aqui para receber o foco do scroll suavizado
                key={naipe.id}
                variants={sectionVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative p-8 border border-white/[0.01] bg-white/[0.01] backdrop-blur-sm rounded-sm overflow-hidden scroll-mt-24" // scroll-mt-24 evita que a navbar fixa suma com o topo do altar
              >
                {/* Luz de Fundo Temática do Elemento */}
                <div className={`absolute -top-24 -left-24 w-96 h-96 ${naipe.bgSpotlight} rounded-full blur-[120px] pointer-events-none z-0`} />
                
                {/* Glifo Alquímico de Fundo Gigante */}
                {/* <div className="absolute right-6 top-2 text-[140px] font-serif font-light text-white/[0.02] select-none pointer-events-none z-0 text-right">
  {naipe.glifo}
</div> */}

                {/* Cabeçalho do Altar do Naipe */}
                <div className="relative z-10 border-b border-white/[0.03] pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] font-serif uppercase text-gold-venerable">
                      {naipe.element}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif tracking-widest text-white uppercase mt-1">
                      {naipe.name}
                    </h2>
                  </div>
                  <p className="text-xs text-silver/50 max-w-md font-light leading-relaxed tracking-wider italic">
                    {naipe.desc}
                  </p>
                </div>

                {/* Grade de Lâminas (Cards com Simetria Exata e h-44) */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {cartasDoNaipe.map((carta) => (
                    <motion.div
                      key={carta.slug}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                      }}
                      className="group relative"
                    >
                      <div className="relative overflow-hidden bg-cathedral/50 backdrop-blur-md border border-white/[0.04] p-5 transition-all duration-500 shadow-2xl rounded-sm group-hover:border-gold-venerable/40 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]">
                        
                        {/* Cantoneiras do Grimório */}
                        <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/10 group-hover:border-gold-venerable/50 transition-colors" />
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/10 group-hover:border-gold-venerable/50 transition-colors" />
                        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/10 group-hover:border-gold-venerable/50 transition-colors" />
                        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/10 group-hover:border-gold-venerable/50 transition-colors" />

                        {/* Banner da Lâmina (Simetria h-44 Fixa) */}
                        <div className="relative h-44 w-full overflow-hidden border border-white/[0.01]">
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            src={carta.banner || carta.image}
                            alt={carta.title}
                            className="h-full w-full object-cover filter brightness-[60%] contrast-[110%] group-hover:brightness-[30%] transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-cathedral/90 via-black/20 to-transparent z-15" />
                          
                          {/* Pequeno Glifo no Canto da Lâmina */}
                          <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center font-serif text-xs text-gold-venerable/80 group-hover:text-white group-hover:border-gold-venerable/40 transition-all z-20 shadow-md">
                            {naipe.glifo}
                          </div>
                        </div>

                        {/* Dados Informativos */}
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between items-center gap-1">
                            <h3 className="text-base font-serif tracking-wide text-white group-hover:text-gold-venerable transition-colors duration-300 uppercase truncate">
                              {carta.title}
                            </h3>
                            <span className={`text-[7px] uppercase tracking-[0.15em] px-1.5 py-0.5 border shrink-0 font-sans font-medium ${naipe.tagStyle}`}>
                              {carta.suit}
                            </span>
                          </div>
                          
                          {/* Significado Adaptado */}
                          <p className="text-xs text-silver/70 font-light leading-relaxed line-clamp-3 min-h-[54px] font-sans">
                            {carta.description || carta.meaning || "O fluxo energético e os mistérios quotidianos manifestados por este arcano."}
                          </p>
                          
                          {/* Botão de Linkagem Dinâmica */}
                          <Link to={`/tarot/arcanos-menores/${carta.slug}`}>
                            <div className="pt-2">
                              <div className="w-full py-2 bg-black/30 border border-white/[0.05] text-[9px] tracking-[0.3em] text-silver uppercase text-center group-hover:border-gold-venerable/50 group-hover:text-white group-hover:bg-gold-venerable/10 transition-all duration-300">
                                Desvelar Lâmina
                              </div>
                            </div>
                          </Link>
                        </div>

                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Rodapé Hermético Final */}
        <div className="text-center mt-32 opacity-20 select-none">
          <span className="text-[9px] tracking-widest font-serif uppercase">
            Quattuor Elementa Regnat • Sicut Superius, Sic Inferius
          </span>
        </div>

      </div>
    </div>
  );
};

export default TarotMenoresGallery;