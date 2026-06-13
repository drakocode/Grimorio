import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../../styles/Navbar.styles.css';

// Configuração da árvore de navegação com subcategorias baseado nas suas rotas
const mainNavigation = [
  { 
    path: '/astrology', 
    label: 'ASTROLOGIA',
    subcategories: [
      { path: '/astrology/signs', label: 'SIGNOS' },
      { path: '/astrology/houses', label: 'CASAS' },
      { path: '/astrology/aspects', label: 'ASPECTOS' }
    ]
  },
  { 
    path: '/tarot', 
    label: 'TAROT',
    subcategories: [
      { path: '/tarot/major-arcana', label: 'ARCANOS MAIORES' },
      { path: '/tarot/minor-arcana', label: 'ARCANOS MENORES' },
      { path: '/readings', label: 'ORACULO' }
    ]
  },
  { 
    path: '/cabala', 
    label: 'CABALA',
    subcategories: [
      { path: '/cabala/tree-of-life', label: 'ÁRVORE DA VIDA' },
      { path: '/cabala/sephirot', label: 'SEPHIROT' },
      { path: '/cabala/tree-of-death', label: 'ÁRVORE DA MORTE' },
      { path: '/cabala/qliphoth', label: 'QLIPHOTH' },
      { path: '/anjos', label: 'ANJOS' }
    ]
  },
  { path: '/goetia', label: 'GOETIA' },
  { path: '/vedas', label: 'VEDAS',
    subcategories: [
      { path: '/vedas/jyotish', label: 'JYOTISH' },
      { path: '/vedas/ayurveda', label: 'AYURVEDA' }
    ]
   },
   {
    path: '/archive', label: 'ARQUIVO',
   }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  /* const [hoveredMenu, setHoveredMenu] = useState(null); */
  const [expandedMobileMenus, setExpandedMobileMenus] = useState({});
  const location = useLocation();
  const { scrollY } = useScroll();

  // Transição suave de opacidade do fundo baseado no scroll existente
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(11, 11, 15, 0.85)', 'rgba(11, 11, 15, 0.98)']
  );

  const toggleMobileSubmenu = (label, e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedMobileMenus(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header 
      style={{ background: headerBg }} 
      className="ceremonial-nav"
    >
      <div className="nav-inner">
        <Link to="/" className="nav-brand" onClick={() => setMobileOpen(false)}>
          <h1 className="unifrakturmaguntia-regular">Grimório</h1>
        </Link>

        

        {/* BOTÃO MOBILE */}
        <motion.button 
          className="lg:hidden nav-mobile-btn" 
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? <X size={20} strokeWidth={1.5} key="close" /> : <Menu size={20} strokeWidth={1.5} key="menu" />}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* PAINEL MOBILE (MENU DROPDOWN E ACCORDION) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden nav-mobile-menu overflow-hidden"
          >
            <div className="py-4 flex flex-col px-6 gap-1">
              {mainNavigation.map((item) => {
                const hasSubs = item.subcategories && item.subcategories.length > 0;
                const isMenuExpanded = !!expandedMobileMenus[item.label];

                return (
                  <div key={item.path} className="flex flex-col mobile-nav-group">
                    <div className="flex items-center justify-between mobile-row-wrapper">
                      <Link
                        to={item.path}
                        className={`nav-mobile-item flex-grow ${isActive(item.path) ? 'is-active' : ''}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {hasSubs && (
                        <button
                          onClick={(e) => toggleMobileSubmenu(item.label, e)}
                          className="mobile-submenu-toggle-btn font-mono"
                        >
                          {isMenuExpanded ? '▲' : '▼'}
                        </button>
                      )}
                    </div>

                    {/* Subcategorias no Mobile */}
                    <AnimatePresence>
                      {hasSubs && isMenuExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 overflow-hidden mobile-sub-container flex flex-col gap-1 mt-1 mb-2"
                        >
                          {item.subcategories.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={`nav-mobile-subitem font-mono ${location.pathname === sub.path ? 'is-active' : ''}`}
                              onClick={() => setMobileOpen(false)}
                            >
                              <span className="bullet-indicator text-crimson">▸</span> {sub.label}
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
}