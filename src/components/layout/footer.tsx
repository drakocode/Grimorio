// src/components/footer.tsx
import React, { useState, useEffect } from 'react';
import { footerData } from '../../data/layout/footerData';
import '../../styles/layout/footer.css';

export const Footer: React.FC = () => {
    
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    // Gera o timestamp no padrão ISO (AAAA-MM-DDTHH:MM:SSZ)
    const obterTimestampAtual = (): string => {
      return new Date().toISOString().slice(0, 19) + 'Z';
    };
    
    setTimestamp(obterTimestampAtual());
    
    // Opcional: Mantém o relógio do sistema operacional do grimório rodando em tempo real
    const intervalo = setInterval(() => {
      setTimestamp(obterTimestampAtual());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <footer className="ritual-footer">
      <div className="footer-inner">
        
        {/* Bloco Esquerdo: Protocolo de Arquivo */}
        <div className="footer-block">
          <p className="footer-label">{footerData.archiveLabel}</p>
          <p className="footer-value font-mono">{footerData.versionValue}</p>
        </div>
        
        {/* Bloco Central: Status de Operação do Sistema */}
        <div className="footer-block center-block">
          <div className="ritual-pulse"></div>
          <p className="footer-value font-mono">
            {footerData.statusPrefix}{timestamp}
          </p>
        </div>
        
        {/* Bloco Direito: Nível de Classificação */}
        <div className="footer-block alignment-right">
          <p className="footer-label">{footerData.classificationLabel}</p>
          <p className="footer-value font-mono">{footerData.classificationValue}</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;