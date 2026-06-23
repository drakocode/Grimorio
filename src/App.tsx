// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routesConfig } from './routes/routesConfig';
import { Layout } from './components/layout/layout';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* 
        O Layout fica fora do <Routes> para que a Navbar e o Footer 
        não sofram re-render completo ao mudar de página, preservando 
        as animações fluidas do Framer Motion e o estado do Scroll.
      */}
      <Layout>
        <Routes>
          {routesConfig.map((route) => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={route.element} 
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;