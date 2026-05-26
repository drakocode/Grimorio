import React from 'react';
import { Link } from 'react-router-dom';

const RelatedMiniCard = ({ item, category }) => {
  return (
    <Link to={`/${category === 'signos' ? 'astrologia/signos' : category}/${item.id}`}>
      <div className="relative group overflow-hidden bg-cathedral/80 border border-white/[0.03] p-4 transition-all duration-500 hover:border-gold-venerable/30 shadow-inner-dark">
        <div className="h-28 w-full overflow-hidden relative mb-3">
          <img src={item.banner} alt={item.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-cathedral to-transparent" />
          <div className="absolute top-2 right-2 text-gold-venerable text-sm">{item.symbol}</div>
        </div>
        <h4 className="font-serif text-sm tracking-[0.15em] text-white uppercase group-hover:text-gold-venerable transition-colors">
          {item.title}
        </h4>
        <span className="text-[9px] tracking-widest text-silver/40 uppercase">Explorar Rito →</span>
      </div>
    </Link>
  );
};

export default RelatedMiniCard;