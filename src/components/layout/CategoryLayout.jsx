import { motion } from "framer-motion";
import ContentCard from "../cards/ContentCard";

const CategoryLayout = ({ data, categorySlug }) => {
  return (
    <div className="min-h-screen bg-abyss pt-36 pb-24 px-6 relative overflow-hidden">
      {/* Vinheta local para aprofundar as bordas da página */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(45,13,77,0.12)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(92,13,18,0.1)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= HERO SECTION CINEMATOGRÁFICA ================= */}
        <section className="relative h-[65vh] flex flex-col justify-center items-center text-center px-6 border-b border-white/[0.02]">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-gold-venerable text-[10px] uppercase mb-4 tracking-[0.4em]"
          >
            ✦ Grimório Digital ✦
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-4xl md:text-6xl font-light uppercase text-white tracking-[0.18em] mb-4"
          >
           {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-silver/60 font-light text-xs md:text-sm max-w-xl tracking-widest leading-relaxed italic font-sans"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-venerable/40 to-transparent mt-8"
          />
        </section>
       

        {/* Grid de Cards com animação cascata refinada */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {data.items.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              categoryPath={categorySlug}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryLayout;
