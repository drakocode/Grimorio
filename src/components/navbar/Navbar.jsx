import '../../styles/Navbar.styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="ceremonial-nav">
      <div className="nav-inner">
        <div className="nav-seal">
          <span className="mono-metadata">INDEX // GRM_00</span>
        </div>
        <Link to="/" className="nav-brand h1">
          <h1>GRIMÓRIO</h1>
        </Link>
        <div className="nav-links">
          <Link to="/astrology" className="nav-item">CELESTIAL</Link>
          <Link to="/tarot" className="nav-item">MANUSCRIPT</Link>
          <Link to="/goetia" className="nav-item">INFERNAL</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;