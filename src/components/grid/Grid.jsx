import '../../styles/Grid.styles.css';

const RitualGrid = ({ columns = 3, children, className = "" }) => {
  return (
    <div 
      className={`ritual-grid grid-cols-${columns} ${className}`}
    >
      {children}
    </div>
  );
};

export default RitualGrid;