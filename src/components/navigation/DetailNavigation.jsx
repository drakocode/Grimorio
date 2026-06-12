import { Link } from 'react-router-dom';
import '../../styles/DetailNavigation.styles.css';

const DetailNavigation = ({ items, currentId, basePath, paramName = 'id' }) => {
  const currentIndex = items.findIndex(item => {
    if (paramName === 'number') {
      return item[paramName] === currentId;
    }
    return item.id === currentId;
  });

  if (currentIndex === -1) return null;

  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  const getPrevLink = () => {
    if (!prevItem) return null;
    if (paramName === 'number') {
      return `${basePath}/${prevItem[paramName]}`;
    }
    return `${basePath}/${prevItem.id}`;
  };

  const getNextLink = () => {
    if (!nextItem) return null;
    if (paramName === 'number') {
      return `${basePath}/${nextItem[paramName]}`;
    }
    return `${basePath}/${nextItem.id}`;
  };

  return (
    <nav className="detail-navigation font-mono">
      <div className="nav-container">
        {prevItem ? (
          <Link to={getPrevLink()} className="nav-button nav-prev">
            <span className="nav-arrow">←</span>
            <span className="nav-text">
              <span className="nav-label">ANTERIOR</span>
              <span className="nav-title">{prevItem.title || prevItem.name}</span>
            </span>
          </Link>
        ) : (
          <div className="nav-button nav-prev nav-disabled">
            <span className="nav-arrow">←</span>
            <span className="nav-text">
              <span className="nav-label">ANTERIOR</span>
              <span className="nav-title">—</span>
            </span>
          </div>
        )}

        <div className="nav-counter">
          <span className="current-index">{currentIndex + 1}</span>
          <span className="total-count">de {items.length}</span>
        </div>

        {nextItem ? (
          <Link to={getNextLink()} className="nav-button nav-next">
            <span className="nav-text">
              <span className="nav-label">PRÓXIMO</span>
              <span className="nav-title">{nextItem.title || nextItem.name}</span>
            </span>
            <span className="nav-arrow">→</span>
          </Link>
        ) : (
          <div className="nav-button nav-next nav-disabled">
            <span className="nav-text">
              <span className="nav-label">PRÓXIMO</span>
              <span className="nav-title">—</span>
            </span>
            <span className="nav-arrow">→</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DetailNavigation;

