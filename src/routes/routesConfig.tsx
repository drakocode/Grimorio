// src/routes.tsx
import React from 'react';
import { Home } from '../pages/home';


// Interface simples para garantir que toda rota tenha um caminho e um componente
export interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

// Lista centralizada de caminhos do Grimório
export const routesConfig: RouteConfig[] = [
  {
    path: '/',
    element: <Home />
  }/* ,
  {
    path: '/cabala',
    element: <CabalaHome />
  },
  {
    path: '/tarot',
    element: <TarotHome />
  },
  {
    path: '/astrologia',
    element: <AstrologyHome />
  },
  {
    path: '/goetia',
    element: <GoetiaHome />
  } */
];