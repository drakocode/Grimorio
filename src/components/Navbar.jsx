import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import iconLight from "../assets/decagramaLight.png";

function Navbar() {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Estrutura de links expandida com subcategorias
  const links = [
    {
      name: "Astrologia",
      path: "/astrologia",
      subcategories: [
        { name: "Signos", path: "/astrologia/signos" },
        { name: "Casas", path: "/astrologia/casas" },
        { name: "Aspectos", path: "/astrologia/aspectos" },
      ],
    },
    {
      name: "Goetia",
      path: "/goetia",
      subcategories: [
        { name: "Daemons", path: "/goetia/daemons" },
        { name: "Rituais", path: "/goetia/rituais" },
      ],
    },
    {
      name: "Tarot",
      path: "/tarot",
      subcategories: [
        { name: "Arcanos Maiores", path: "/tarot/arcanos-maiores" },
        { name: "Arcanos Menores", path: "/tarot/arcanos-menores" },
        { name: "Oráculo", path: "/tarot/oraculo" }
      ],
    },
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
        </Link>
      </div>

      {/* LINKS DE NAVEGAÇÃO */}
      <ul className="nav-links flex items-center gap-8 m-0 list-none">
        {links.map((link, index) => {
          // Verifica se a rota atual começa com o caminho base do link (ex: /tarot ou /tarot/arcanos-menores)
          const isActive = location.pathname.startsWith(link.path);

          return (
            <li
              key={link.path}
              className="relative py-2 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
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

              {/* MENU SUSPENSO (DROPDOWN ANIME) */}
              <AnimatePresence>
                {hoveredIndex === index && link.subcategories && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-44 bg-black/90 backdrop-blur-2xl border border-white/[0.05] shadow-2xl rounded-sm p-2 list-none flex flex-col gap-1 z-50"
                  >
                    {/* Pequena seta oculta no topo do menu */}
                    <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-t border-l border-white/[0.05] rotate-45" />

                    {link.subcategories.map((sub) => {
                      const isSubActive = location.pathname === sub.path;
                      return (
                        <li key={sub.path}>
                          <Link
                            to={sub.path}
                            className={`block px-4 py-2 text-[11px] font-sans tracking-widest uppercase rounded-sm transition-all duration-200 text-center ${
                              isSubActive
                                ? "text-gold-venerable bg-white/[0.03]"
                                : "text-silver/50 hover:text-white hover:bg-white/[0.02]"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;