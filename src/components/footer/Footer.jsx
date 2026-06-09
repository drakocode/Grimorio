import React from 'react';
import '../../styles/Footer.styles.css';

const Footer = () => {
  const currentTimestamp = new Date().toISOString().slice(0, 19) + 'Z';
  
  return (
    <footer className="ritual-footer">
      <div className="footer-inner">
        <div className="footer-block">
          <p className="footer-label">ARCHIVE PROTOCOL</p>
          <p className="footer-value font-mono">SECURE_LOCK // V2.0.26</p>
        </div>
        <div className="footer-block center-block">
          <div className="ritual-pulse"></div>
          <p className="footer-value font-mono">SYSTEM_OPERATIONAL // {currentTimestamp}</p>
        </div>
        <div className="footer-block alignment-right">
          <p className="footer-label">CLASSIFICATION</p>
          <p className="footer-value font-mono">TOP_LEVEL_ESOTERIC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;