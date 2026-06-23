// src/features/home.tsx
import React from "react";
import { Grid } from "../components/layout/grid";
import { Card } from "../components/layout/card";
import { homeManifesto, homeData } from "../data/homeData";
import { useScroll } from '../hooks/useScroll';
import '../styles/home.css';

export const Home: React.FC = () => {

  const { scrollProgress } = useScroll();


  return (
    <div className="home-ritual-workspace">
      {/* Structural Asymmetric Framework */}
      <div className="manifesto-anchor-section">
        <div className="sticky-manifesto-container">
          <div className="manifesto-sigil font-mono">{homeManifesto.sigil}</div>
          <h2 className="manifesto-title">{homeManifesto.title}</h2>
          <div className="architectural-divider"></div>
          <p className="manifesto-text">{homeManifesto.declaration}</p>
          
          {/* Dynamic Ritual Progress Metric */}
          <div className="ritual-progress-bar-container">
            <div className="progress-label font-mono">WORKSPACE_DEPTH</div>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${scrollProgress * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Content Stream Section */}
      <div className="content-stream-section">
        <div className="section-title-tag font-mono">// FORBIDDEN_SECTORS_REGISTERED</div>
        <Grid columns={1}>
          {homeData.map((sector) => (
            <Card
              key={sector.id}
              id={sector.id}
              title={sector.title}
              subTitle={sector.subTitle}
              description={sector.description}
              image={sector.image}
              metadata={sector.metadata}
              path={sector.path}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};
