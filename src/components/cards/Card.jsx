import '../../styles/Card.styles.css';

const Card = ({ indexId, title, subTitle, description, image, metadata, linkPath }) => {
  return (
    <div className="occult-card-container">
      <div className="card-border-glow-wrapper">
        <div className="card-header-meta">
          <span className="card-index font-mono">{indexId}</span>
          {metadata && <span className="card-tag font-mono">{metadata}</span>}
        </div>
        
        {image && (
          <div className="card-imagery-frame">
            <img src={image} alt={title} className="card-essence-image" />
            <div className="card-image-shadow-overlay"></div>
          </div>
        )}
        
        <div className="card-body-content">
          <h3 className="card-title">{title}</h3>
          {subTitle && <h4 className="card-subtitle">{subTitle}</h4>}
          <p className="card-description">{description}</p>
        </div>

        <div className="card-interactive-footer">
          <a href={linkPath} className="card-ritual-trigger">
            <span>INITIATE RITUAL</span>
            <span className="trigger-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;