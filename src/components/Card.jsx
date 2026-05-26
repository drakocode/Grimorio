import React from 'react';
import { Link } from 'react-router-dom';

function Card({ titulo, descricao, imagem, link }) {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${imagem})` }}></div>
      <div className="card-content">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <Link to={link} className="card-btn">Explorar</Link>
      </div>
    </div>
  );
}

export default Card;