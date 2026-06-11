import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../../styles/Navbar.styles.css';

const mainNavigation = [
  { path: '/astrology', label: 'ASTROLOGIA' },
  { path: '/tarot', label: 'TAROT' },
  { path: '/cabala', label: 'CABALA' },
  { path: '/anjos', label: 'ANJOS' },
  { path: '/goetia', label: 'GOETIA' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(11, 11, 15, 0.85)', 'rgba(11, 11, 15, 0.98)']
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0.4, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <motion.header
      style={{ backgroundColor: headerBg }}
      className={`ceremonial-nav ${hasScrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.6)]' : ''}`}
    >
      {/* Linha de borda inferior fina com a opacidade controlada pelo scroll */}
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />

      <nav className="nav-inner">
        {/* Identidade Visual / Logo */}
        <Link to="/" className="nav-brand flex items-center gap-3 group relative z-10">
          <div className="flex flex-col">
            <h1>GRIMÓRIO</h1>
            <span className="mono-metadata">
              INDEX // GRM_00
            </span>
          </div>
        </Link>

        {/* Links de Navegação Desktop */}
        {/* <div className="nav-links hidden lg:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive(item.path) ? 'text-gold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div> */}

        {/* Botão de Alternância Mobile Ritualístico */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          className="lg:hidden nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <X size={20} strokeWidth={1.5} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <Menu size={20} strokeWidth={1.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Painel de Navegação Mobile */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden nav-mobile-menu overflow-hidden"
            >
              <div className="py-2 flex flex-col">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-mobile-item ${isActive(item.path) ? 'is-active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}