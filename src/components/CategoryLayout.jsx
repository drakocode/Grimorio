import { motion } from 'framer-motion';
import ContentCard from './ContentCard';

const CategoryLayout = ({ data, categorySlug }) => {
  return (
    <div className="min-h-screen bg-abyss pt-36 pb-24 px-6 relative overflow-hidden">
      {/* Vinheta local para aprofundar as bordas da página */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(45,13,77,0.12)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(92,13,18,0.1)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho Gótico Premium */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center relative"
        >
          <div className="text-[11px] tracking-[0.5em] text-gold-venerable uppercase mb-3 flex justify-center items-center gap-3">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-venerable/50" />
            Grimório Digital
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-venerable/50" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif tracking-[0.2em] text-white uppercase font-semibold mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
            {data.title}
          </h1>
          
          <p className="text-silver/60 max-w-xl mx-auto text-sm tracking-wide font-light italic leading-relaxed">
            {data.description}
          </p>
          
          <div className="mystic-divider mt-8 max-w-md mx-auto" />
        </motion.header>

        {/* Grid de Cards com animação cascata refinada */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.items.map((item) => (
            <ContentCard key={item.id} item={item} categoryPath={categorySlug} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryLayout;