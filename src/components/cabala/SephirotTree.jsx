import { Link } from 'react-router-dom';
import { sephirotTreeData } from '../../data/cabala/sephirot/sephirotData';
import '../../styles/SephirotTree.styles.css';

const SephirotTree = () => {
  // Mapa de conexões entre nós (Árvore da Vida clássica)
  const connections = [
    // Nó central - conexões principais
    [10, 9],[9, 8],[9, 7],[9, 6],[8, 7],[8, 6],[8,5],[7,6],[7,4],
    // Segunda camada
    [6,5],[6,4],[6,2],[6,3],[6,1],[5,4],[5,3],[5,2],[4,3],[4,2],[5,3],
    // Terceira camada
    [2,3],[2,1],[3,1],
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
    1: [50, 10],
    3: [30, 25],
    2: [70, 25],
    5: [30, 42],
    4: [70, 42],
    6: [50, 50],
    8: [30, 60],
    7: [70, 60],
    9: [50, 75],
    10: [50, 95],
  };

  return (
    <div className="sephirot-tree-container">
      <svg className="sephirot-tree-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
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
              className="sephirot-connection-line"
              markerEnd="url(#arrowhead)"
            />
          );
        })}

        {/* Desenhar nós */}
        {sephirotTreeData.map((sephirah) => {
          const num = parseInt(sephirah.number);
          const [x, y] = positions[num];

          return (
            <g key={`node-${num}`}>
              {/* Círculo de fundo */}
              <circle
                cx={x}
                cy={y}
                r="5"
                className="sephirot-node-bg"
              />

              {/* Link clicável */}
              <Link
                to={`/cabala/sephirot/${sephirah.number}`}
                className="sephirot-node-link"
              >
                <circle
                  cx={x}
                  cy={y}
                  r="5"
                  className="sephirot-node-circle"
                />
                <text
                  x={x}
                  y={y - 7}
                  className="sephirot-node-number font-mono"
                  textAnchor="middle"
                >
                  {sephirah.number}
                </text>
                {/* <text
                  x={x}
                  y={y + 2}
                  className="sephirot-node-name font-mono"
                  textAnchor="middle"
                >
                  {sephirah.name.substring(0, 3)}
                </text> */}
              </Link>

              {/* Tooltip */}
              <title>{`${sephirah.number}. ${sephirah.name}`}</title>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default SephirotTree;
