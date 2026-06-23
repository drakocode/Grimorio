import React from 'react';
import '../../styles/layout/grid.css'; // Ajustado para o padrão de nome simples (ex: grid.css)

// 1. Definição do contrato de propriedades do Grid
interface GridProps {
  columns?: number;           // Opcional (?) pois já tem o valor padrão de 3
  children: React.ReactNode;  // Obrigatório: qualquer elemento React válido
  className?: string;         // Opcional (?) pois inicia como string vazia
}

export const Grid: React.FC<GridProps> = ({ 
  columns = 3, 
  children, 
  className = "" 
}) => {
  return (
    <div className={`ritual-grid grid-cols-${columns} ${className}`}>
      {children}
    </div>
  );
};

export default Grid;