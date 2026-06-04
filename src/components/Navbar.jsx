import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import iconLight from "../assets/decagramaLight.png";

function Navbar() {
  const location = useLocation();

  const links = [
    /*     { name: 'Home', path: '/' }, */
    { name: "Astrologia", path: "/astrologia" },
    { name: "Goetia", path: "/goetia" },
    { name: "Tarot", path: "/tarot" },
  ];

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-black/60 backdrop-blur-xl border-b border-white/[0.03] shadow-2xl z-50 flex items-center justify-between px-6 py-4">
  
  {/* CONTAINER DA LOGO */}
  <div className="nav-logo flex items-center">
    <Link to="/" className="group flex items-center gap-2">
      <img
        src={iconLight}
        alt="Portal Logo"
        className="!w-6 !h-6 object-contain transition-transform duration-700 group-hover:rotate-180"
      />
      {/* Se quiser reativar o texto no futuro, ele já herda a transição elegante */}
      {/* <span className="text-xs font-serif tracking-widest text-silver group-hover:text-gold-venerable transition-colors duration-300 uppercase">Almanaque</span> */}
    </Link>
  </div>

  {/* LINKS DE NAVEGAÇÃO */}
  <ul className="nav-links flex items-center gap-6 m-0 list-none">
    {links.map((link) => {
      const isActive = location.pathname === link.path;
      return (
        <li key={link.path} className="relative py-1">
          <Link
            to={link.path}
            className={`text-xs font-sans tracking-wider uppercase transition-colors duration-300 hover:text-white ${
              isActive ? "text-gold-venerable" : "text-silver/70"
            }`}
          >
            {link.name}
          </Link>
          
          {/* Linha animada abaixo do link ativo */}
          {isActive && (
            <motion.div
              layoutId="navbar-underline"
              className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-venerable to-transparent"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </li>
      );
    })}
  </ul>
</nav>  );
}

export default Navbar;
