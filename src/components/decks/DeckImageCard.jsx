const DeckImageCard = ({ deck }) => {
  return (
    <div className="deck-card">
      <div className="deck-card-badge font-mono">
        <span className="deck-name-text">{deck.name}</span>
        <span className="deck-year-text">{deck.year}</span>
      </div>
      <div className="deck-card-image-container">
        {deck.image ? (
          <img
            src={deck.image}
            alt={deck.name}
            className="deck-card-image"
          />
        ) : (
          <div className="deck-card-placeholder">
            <span className="placeholder-text font-mono">// IMAGEM_INDISPONÍVEL</span>
            <span className="placeholder-desc font-mono">{deck.name}</span>
          </div>
        )}
      </div>
      {deck.artist && (
        <div className="deck-card-footer font-mono">
          <span className="deck-artist">Artista: {deck.artist}</span>
        </div>
      )}
    </div>
  );
};

export default DeckImageCard;
