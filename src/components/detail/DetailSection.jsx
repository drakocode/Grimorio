const DetailSection = ({
  tag,
  title,
  content,
  type = 'text',
  items = [],
  subtitle,
}) => {
  return (
    <section className="detail-section">
      {tag && <h3 className="detail-section-tag font-mono">{tag}</h3>}

      {title && <h2 className="detail-section-title">{title}</h2>}

      {subtitle && <p className="detail-section-subtitle">{subtitle}</p>}

      {type === 'text' && content && (
        <p className="detail-section-text">{content}</p>
      )}

      {type === 'list' && items.length > 0 && (
        <ul className="detail-section-list">
          {items.map((item, idx) => {
            if (typeof item === 'string') {
              return (
                <li key={idx} className="detail-list-item">
                  <span className="list-bullet font-mono">▸</span>
                  <p className="list-text">{item}</p>
                </li>
              );
            }
            return (
              <li key={idx} className="detail-list-item">
                <span className="list-bullet font-mono">▸</span>
                <div className="list-item-content">
                  {item.title && <strong className="item-title">{item.title}:</strong>}
                  <p className="list-text">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {type === 'grid' && items.length > 0 && (
        <div className="detail-section-grid">
          {items.map((item, idx) => (
            <div key={idx} className="grid-item">
              {item.label && <span className="grid-label font-mono">{item.label}:</span>}
              <span className="grid-value">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {type === 'custom' && content}
    </section>
  );
};

export default DetailSection;
