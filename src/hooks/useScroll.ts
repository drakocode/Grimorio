import { useState, useEffect } from 'react';

// Contrato de retorno do Hook para garantir previsibilidade
interface ScrollData {
  scrollY: number;
  scrollProgress: number;
} 

export const useScroll = (): ScrollData => {
  // O TypeScript infere automaticamente o tipo 'number' através do valor inicial (0)
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const currentPosition = window.scrollY;
      
      // Cálculo da altura máxima rolável da página
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Evita divisão por zero caso a página não tenha scroll vertical
      const progress = totalHeight > 0 ? currentPosition / totalHeight : 0;
      
      setScrollY(currentPosition);
      setScrollProgress(progress);
    };

    // { passive: true } sinaliza ao navegador que a função não vai cancelar o scroll,
    // melhorando drasticamente a performance de renderização.
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollProgress };
};