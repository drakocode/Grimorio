import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContentCard = ({ item, categoryPath }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <Link to={`/${categoryPath}/${item.path}`}>
        {/* Container do Card - Glassmorphism gótico */}
        <div className="relative overflow-hidden rounded-none bg-cathedral/80 backdrop-blur-md border border-white/[0.05] p-5 transition-all duration-500 shadow-inner-dark group-hover:border-crimson/40 group-hover:shadow-crimson-glow">
          
          {/* Cantos ornamentais minimalistas estilo grimório */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gold-venerable/30 group-hover:border-gold-venerable/80 transition-colors" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gold-venerable/30 group-hover:border-gold-venerable/80 transition-colors" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gold-venerable/30 group-hover:border-gold-venerable/80 transition-colors" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gold-venerable/30 group-hover:border-gold-venerable/80 transition-colors" />

          {/* Imagem com Zoom Cinematográfico */}
          <div className="relative h-56 w-full overflow-hidden border border-white/[0.02]">
            <motion.img
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover filter grayscale-[40%] contrast-[110%] group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Gradiente de sombra interno */}
            <div className="absolute inset-0 bg-gradient-to-t from-cathedral via-transparent to-black/40" />
          </div>

          {/* Conteúdo textual */}
          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-gold-faded uppercase">
              <span>✦</span>
              <span>Arcano Geral</span>
            </div>
            
            <h3 className="text-xl font-serif font-medium tracking-[0.15em] text-white group-hover:text-gold-venerable transition-colors duration-300 uppercase">
              {item.title}
            </h3>
            
            <p className="text-xs text-silver/70 font-light leading-relaxed tracking-wide line-clamp-2">
              {item.desc}
            </p>
            
            {/* Botão de Exploração Metálico/Sombrio */}
            <div className="pt-3">
              <div className="w-full text-center py-2 bg-black/40 border border-white/[0.08] text-[10px] tracking-[0.25em] text-silver uppercase group-hover:border-crimson group-hover:text-white group-hover:bg-wine/20 transition-all duration-300">
                Explorar Rito
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ContentCard;

