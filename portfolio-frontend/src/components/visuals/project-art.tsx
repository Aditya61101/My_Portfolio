const graphNodes = [
  [28, 113], [43, 62], [66, 141], [87, 98], [103, 47], [123, 119],
  [147, 77], [162, 137], [177, 39], [191, 100], [227, 64], [240, 125],
] as const;

const graphEdges = [
  [0, 1], [0, 3], [1, 3], [1, 4], [2, 3], [2, 5], [3, 4], [3, 5], [3, 6],
  [4, 6], [5, 6], [5, 7], [6, 7], [6, 8], [6, 9], [7, 9], [7, 11], [8, 9],
  [8, 10], [9, 10], [9, 11], [10, 11],
] as const;

function GraphArt() {
  return (
    <>
      <defs>
        <radialGradient id="graph-glow">
          <stop stopColor="#12e6a7" stopOpacity=".25" /><stop offset="1" stopColor="#12e6a7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="graph-edge" x2="1" y2=".7">
          <stop stopColor="#0d7e64" stopOpacity=".2" /><stop offset="1" stopColor="#59f8d4" stopOpacity=".82" />
        </linearGradient>
      </defs>
      <ellipse cx="157" cy="91" rx="115" ry="76" fill="url(#graph-glow)" />
      <path d="M15 144c47-8 73-124 132-124 47 0 63 42 107 21M24 158c56-13 94-47 152-40s73 30 91 8" fill="none" stroke="#46f3c5" strokeOpacity=".18" strokeDasharray="2 4" />
      <g stroke="url(#graph-edge)" strokeWidth="1">
        {graphEdges.map(([from, to]) => (
          <line key={`${from}-${to}`} x1={graphNodes[from][0]} y1={graphNodes[from][1]} x2={graphNodes[to][0]} y2={graphNodes[to][1]} />
        ))}
      </g>
      {graphNodes.map(([x, y], index) => (
        <g key={x}>
          <circle cx={x} cy={y} r={index % 3 === 0 ? 9 : 5} fill="#35ebc1" opacity=".13" />
          <circle cx={x} cy={y} r={index % 3 === 0 ? 2.6 : 1.7} fill="#91ffe0" />
        </g>
      ))}
    </>
  );
}

function DocumentsArt() {
  return (
    <>
      <defs>
        <linearGradient id="document-surface" x2="1" y2="1">
          <stop stopColor="#49336c" /><stop offset="1" stopColor="#11182a" />
        </linearGradient>
        <radialGradient id="document-glow">
          <stop stopColor="#a985ff" stopOpacity=".27" /><stop offset="1" stopColor="#a985ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="166" cy="84" rx="108" ry="75" fill="url(#document-glow)" />
      <path d="M20 152 173 9m-108 153L219 16m-105 152 139-131M101 4l158 95M68 29l179 111" stroke="#a898fe" strokeOpacity=".12" strokeDasharray="2 5" />
      {[2, 1, 0].map((layer) => (
        <g key={layer} transform={`translate(${71 + layer * 34} ${60 - layer * 17})`} opacity={1 - layer * 0.2}>
          <path d="M0 4Q0-2 5 1l94 35q5 2 5 8v69q0 5-5 3L5 81q-5-2-5-8Z" fill="url(#document-surface)" stroke="#ab93f7" strokeOpacity=".78" />
          <path d="m13 25 25 9m-25 6 67 25m-67-10 54 21m-54-8 37 14" stroke="#ae8bf7" strokeOpacity=".55" strokeWidth="2" strokeLinecap="round" />
          <path d="m13 25 17 6" stroke="#dbbdff" strokeWidth="3" />
        </g>
      ))}
      <path d="m209 107 5 2 1 5 3-3 5 2-2-5 3-3-5-1-2-5-3 4-5-1Z" fill="#c7a8ff" opacity=".6" />
    </>
  );
}

export function ProjectArt({ kind }: { kind: "graph" | "documents" }) {
  return (
    <figure className="project-art">
      <svg viewBox="0 0 260 175" aria-hidden="true" focusable="false">
        {kind === "graph" ? <GraphArt /> : <DocumentsArt />}
      </svg>
      <figcaption>Concept illustration</figcaption>
    </figure>
  );
}
