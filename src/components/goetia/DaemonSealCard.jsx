const DaemonSealCard = ({ daemon }) => {
  return (
    <div className="daemon-seal-card">
      <div className="seal-card-header font-mono">
        <span className="seal-label">[SIGILO]</span>
        <span className="seal-numericId">#{daemon.numericId}</span>
      </div>

      <div className="seal-card-image-container">
        {daemon.seal ? (
          <img
            src={daemon.seal}
            alt={`Sigilo de ${daemon.title}`}
            className="seal-card-image"
          />
        ) : (
          <div className="seal-card-placeholder">
            <div className="seal-placeholder-content">
              <span className="seal-placeholder-symbol">☩</span>
              <span className="seal-placeholder-text font-mono">SIGILO</span>
              <span className="seal-placeholder-name font-mono">{daemon.title}</span>
            </div>
          </div>
        )}
      </div>

      <div className="seal-card-footer font-mono">
        <span className="seal-title">{daemon.title}</span>
      </div>
    </div>
  );
};

export default DaemonSealCard;
