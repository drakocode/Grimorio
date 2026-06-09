import React from 'react';
import { Link } from 'react-router-dom';
import { astrologicalAspects } from '../../../data/astrology/astrologyData';
import '../../../styles/AspectsHome.styles.css';

const AspectsHome = () => {
  return (
    <div className="aspects-page-container">
      
      {/* PAINEL ESQUERDO: Manifesto de Geometria Sagrada */}
      <aside className="aspects-manifesto-panel">
        <div className="sticky-aspects-content">
          <Link to="/astrology" className="btn-back-to-astro font-mono">
            ← RETORNAR AO MANUAL CELESTE
          </Link>
          
          <div className="aspects-archive-tag font-mono">MS_ASPECTS_05</div>
          <h1 className="aspects-main-title">Angular Mechanics</h1>
          <div className="aspects-architectural-line"></div>
          <p className="aspects-description-text">
            O alinhamento harmônico de forças celestes. Os aspectos representam equações geométricas precisas no círculo zodiacal, determinando canais de cooperação ou focos de atrito entre os astros.
          </p>
          
          {/* Caixa de Telemetria de Geometria */}
          <div className="aspects-telemetry-box font-mono">
            <div className="aspects-tel-row">
              <span className="tel-label">DIVISÃO_GEOMÉTRICA:</span>
              <span className="tel-value text-gold">360°_TEAR_CÓSMICO</span>
            </div>
            <div className="aspects-tel-row">
              <span className="tel-label">MÉTODOS_ANÁLISE:</span>
              <span className="tel-value">HARMONIA_E_TENSÃO</span>
            </div>
            <div className="aspects-tel-row">
              <span className="tel-label">MODO_VETORIAL:</span>
              <span className="tel-value text-crimson">RESONÂNCIA_POLAR</span>
            </div>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Listagem de Aspectos */}
      <section className="aspects-stream-panel">
        <div className="aspects-stream-tag font-mono">// ANGULAR_MECHANICS_FEED</div>
        
        <div className="aspects-list-container">
          {astrologicalAspects.map((aspect) => (
            <div key={aspect.id} className="aspect-occult-card">
              <div className="aspect-card-header font-mono">
                <span className="aspect-symbol">{aspect.symbol}</span>
                <span className="aspect-degree text-gold">{aspect.degree}</span>
              </div>
              
              <div className="aspect-card-body">
                <h3 className="aspect-card-title">{aspect.name}</h3>
                <div className="aspect-nature-tag font-mono">
                  NATUREZA: <span className="text-crimson">{aspect.nature.toUpperCase()}</span>
                </div>
                
                {/* Medidor de Tensão Dinâmica */}
                <div className="aspect-tension-container font-mono">
                  <div className="tension-label-row">
                    <span>TENSÃO_DE_CAMPO:</span>
                    <span className="text-gold">{aspect.tension}%</span>
                  </div>
                  <div className="tension-track">
                    <div 
                      className="tension-fill" 
                      style={{ width: `${aspect.tension}%` }}
                    ></div>
                  </div>
                </div>

                <p className="aspect-description">{aspect.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AspectsHome;
