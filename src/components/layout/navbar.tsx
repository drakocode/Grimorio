// src/components/navbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNavigation } from "../../data/layout/navbarData";
import "../../styles/layout/navbar.css"; // Nome simplificado e sem sufixo redundante

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  // Mapeia o estado de quais menus mobiles estão abertos usando a string do label como chave
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<
    Record<string, boolean>
  >({});

  const location = useLocation();
  const { scrollY } = useScroll();

  // Transição suave de opacidade baseada no scroll (Tipado implicitamente pelo Framer Motion)
  const headerBg: MotionValue<string> = useTransform(
    scrollY,
    [0, 100],
    ["rgba(11, 11, 15, 0.85)", "rgba(11, 11, 15, 0.98)"],
  );

  const toggleMobileSubmenu = (
    label: string,
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedMobileMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const isActive = (path: string): boolean => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header style={{ background: headerBg }} className="ceremonial-nav">
      <div className="nav-inner">
        <Link to="/" className="nav-brand" onClick={() => setMobileOpen(false)}>
          <h1 className="unifrakturmaguntia-regular">Grimório</h1>
        </Link>

        {/* BOTÃO MOBILE */}
        <motion.button
          className="lg:hidden nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <X size={20} strokeWidth={1.5} key="close" />
            ) : (
              <Menu size={20} strokeWidth={1.5} key="menu" />
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* PAINEL MOBILE (MENU DROPDOWN E ACCORDION) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden nav-mobile-menu overflow-hidden"
          >
            <div className="py-4 flex flex-col px-6 gap-1">
              {mainNavigation.map((item) => {
                const hasSubs = !!(
                  item.subcategories && item.subcategories.length > 0
                );
                const isMenuExpanded = !!expandedMobileMenus[item.label];

                return (
                  <div
                    key={item.path}
                    className="flex flex-col mobile-nav-group"
                  >
                    <div className="flex items-center justify-between mobile-row-wrapper">
                      <Link
                        to={item.path}
                        className={`nav-mobile-item flex-grow ${isActive(item.path) ? "is-active" : ""}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {hasSubs && (
                        <button
                          onClick={(e) => toggleMobileSubmenu(item.label, e)}
                          className="mobile-submenu-toggle-btn font-mono"
                        >
                          {isMenuExpanded ? "▲" : "▼"}
                        </button>
                      )}
                    </div>

                    {/* Subcategorias no Mobile */}
                    <AnimatePresence>
                      {hasSubs && isMenuExpanded && item.subcategories && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 overflow-hidden mobile-sub-container flex flex-col gap-1 mt-1 mb-2"
                        >
                          {item.subcategories.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={`nav-mobile-subitem font-mono ${location.pathname === sub.path ? "is-active" : ""}`}
                              onClick={() => setMobileOpen(false)}
                            >
                              <span className="bullet-indicator text-crimson">
                                ▸
                              </span>{" "}
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
