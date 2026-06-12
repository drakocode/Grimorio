import { Link } from 'react-router-dom';
import { qliphothTreeData } from '../../data/cabala/qliphoth/qliphothData';
import '../../styles/QliphothTree.styles.css';

const QliphothTree = () => {
  // Mapa de conexões entre nós
  const connections = [
    // Nó central - conexões principais
    [1, 2],[1, 4],[1, 3],[2, 4],[2, 3],[2, 5],[3,5],[4,5],[4,7],[3,6],
    // Segunda camada
    [5, 6],[5, 7],[5, 8],[5, 9],[5, 10],
    [6, 7],[6,8],[7,9],
    // Terceira camada
    [8, 9],[8, 10],[9, 10]
    
  ];

  // Remover duplicatas
  const uniqueConnections = connections.filter(
    (conn, index, self) =>
      index === self.findIndex(
        (c) =>
          (c[0] === conn[0] && c[1] === conn[1]) ||
          (c[0] === conn[1] && c[1] === conn[0])
      )
  );

  // Posições dos nós (x, y em %)
  const positions = {
    1: [50, 95],
    2: [50, 80],
    3: [30, 65],
    4: [70, 65],
    5: [50, 50],
    6: [30, 40],
    7: [70, 40],
    8: [30, 20],
    9: [70, 20],
    10: [50, 5],
  };

  return (
    <div className="qliphoth-tree-container">
      <svg className="qliphoth-tree-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="rgba(176, 141, 87, 0.4)" />
          </marker>
        </defs>

        {/* Desenhar linhas de conexão */}
        {uniqueConnections.map((conn, idx) => {
          const [start, end] = conn;
          const [x1, y1] = positions[start];
          const [x2, y2] = positions[end];
          return (
            <line
              key={`line-${idx}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              className="qliphoth-connection-line"
              markerEnd="url(#arrowhead)"
            />
          );
        })}

        {/* Desenhar nós */}
        {qliphothTreeData.map((qlipha) => {
          const num = parseInt(qlipha.number);
          const [x, y] = positions[num];

          return (
            <g key={`node-${num}`}>
              {/* Círculo de fundo */}
              <circle
                cx={x}
                cy={y}
                r="5"
                className="qliphoth-node-bg"
              />

              {/* Link clicável */}
              <Link
                to={`/cabala/qliphoth/${qlipha.number}`}
                className="qliphoth-node-link"
              >
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  className="qliphoth-node-circle"
                />
                <text
                  x={x}
                  y={y - 7}
                  className="qliphoth-node-number font-mono"
                  textAnchor="middle"
                >
                  {qlipha.number}
                </text>
                {/* <text
                  x={x}
                  y={y + 2}
                  className="qliphoth-node-name font-mono"
                  textAnchor="middle"
                >
                  {qlipha.name.substring(0, 3)}
                </text> */}
              </Link>

              {/* Tooltip */}
              <title>{`${qlipha.number}. ${qlipha.name}`}</title>
            </g>
          );
        })}
      </svg>

      {/* Legenda dos nós abaixo do SVG */}
      {/* <div className="qliphoth-tree-legend">
        <div className="legend-title font-mono">// NÓDULOS_ABISSAIS</div>
        <div className="legend-nodes">
          {qliphothTreeData.map((qlipha) => (
            <Link
              key={qlipha.number}
              to={`/cabala/qliphoth/${qlipha.number}`}
              className="legend-node-item"
            >
              <span className="legend-number font-mono">#{qlipha.number}</span>
              <span className="legend-name">{qlipha.name}</span>
              <span className="legend-translation">{qlipha.translation}</span>
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default QliphothTree;
