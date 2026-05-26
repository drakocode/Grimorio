import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
const location = useLocation();
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Astrologia', path: '/astrologia' },
    { name: 'Goetia', path: '/goetia' },
    { name: 'Tarot', path: '/tarot' }
  ];



  return (
    <nav className="navbar fixed w-full bg-black/60 backdrop-blur-xl border-b border-white/[0.03] shadow-2xl z-50 flex items-center justify-between px-6 py-4">
      <div className="nav-logo">
        <Link to="/" className="flex items-center gap-2">
            <span className="text-gold-venerable transition-transform duration-700 group-hover:rotate-180">❖</span>
            <span className="group-hover:text-gold-venerable transition-colors duration-300">Portal Esotérico</span>
          </Link>
      </div>
      <ul className="nav-links">
        {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path} className="relative py-2">
                <Link 
                  to={link.path} 
                  className={`transition-colors duration-300 hover:text-white ${isActive ? 'text-gold-venerable' : 'text-silver'}`}
                >
                  {link.name}
                </Link>
                {/* Linha animada abaixo do link ativo */}
                {isActive && (
                  <motion.div 
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-crimson to-transparent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default Navbar;
