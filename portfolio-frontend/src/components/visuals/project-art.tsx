import type { Project } from "../../data/projects";

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
      <path className="project-flow" d="M43 62 87 98 147 77 191 100 227 64" stroke="#a6ffe8" strokeWidth="1.8" fill="none" />
      {graphNodes.map(([x, y], index) => (
        <g key={x}>
          <circle className={index % 3 === 0 ? "project-pulse" : undefined} cx={x} cy={y} r={index % 3 === 0 ? 9 : 5} fill="#35ebc1" opacity=".24" />
          <circle cx={x} cy={y} r={index % 3 === 0 ? 2.6 : 1.7} fill="#91ffe0" />
        </g>
      ))}
      <rect x="168" y="30" width="18" height="18" rx="3" fill="none" stroke="#71f5ca" strokeOpacity=".62" />
      <path d="m173 39 3 3 5-6" fill="none" stroke="#b6ffe9" strokeLinecap="round" />
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
      <path d="M53 149h181" stroke="#ac8cfa" strokeOpacity=".35" />
      <path className="project-flow" d="M53 149h181" stroke="#dbbeff" strokeWidth="1.7" />
      {[56, 117, 175, 233].map((x) => <circle className="project-pulse" key={x} cx={x} cy="149" r="4.6" fill="#bca0ff" />)}
    </>
  );
}

function TerminalArt() {
  return (
    <>
      <rect x="16" y="8" width="229" height="101" rx="9" fill="#0a151a" stroke="#368374" />
      <path d="M16 28h229" stroke="#28564d" />
      <g fill="#66d7b8"><circle cx="30" cy="18" r="2.2" /><circle cx="40" cy="18" r="2.2" /><circle cx="50" cy="18" r="2.2" /></g>
      <text x="29" y="49" fill="#93f8d7" fontSize="13" fontFamily="monospace">issue → context</text>
      <text x="29" y="72" fill="#72cbb5" fontSize="13" fontFamily="monospace">review checkpoint</text>
      <text x="29" y="94" fill="#abf5e2" fontSize="13" fontFamily="monospace">pull request</text>
      <path className="project-flow" d="M162 45h57v45h-53" fill="none" stroke="#34fac4" strokeWidth="2" />
      <rect className="project-pulse" x="126" y="84" width="8" height="11" rx="1" fill="#7fffd9" />
    </>
  );
}

function DeliveryArt() {
  return (
    <>
      <path d="M27 45h200M171 45v43h49" fill="none" stroke="#398878" strokeWidth="2" />
      <path className="project-flow" d="M27 45h200M171 45v43h49" fill="none" stroke="#79f5d2" strokeWidth="3" />
      {[35, 100, 170, 231].map((x) => (
        <g key={x}>
          <rect x={x - 13} y="32" width="26" height="26" rx="5" fill="#122d2b" stroke="#67ccba" />
          <circle className="project-pulse" cx={x} cy="45" r="3.8" fill="#86fae0" />
        </g>
      ))}
      <path d="m227 81 8 7-8 8-7-8Z" fill="#70dcff" />
      <text x="75" y="101" fill="#96cdbf" fontSize="12" fontFamily="monospace">queue · retry</text>
    </>
  );
}

function ReportArt() {
  return (
    <>
      <path d="M25 11h101l17 19v80H25Z" fill="#192e32" stroke="#528c82" />
      <path d="M126 11v21h17M43 44h68m-68 15h52m-52 15h67m-67 15h48" fill="none" stroke="#70c8b5" />
      <path d="M145 42h99v39h-44l-11 11v-11h-44ZM176 94h68v16h-68Z" fill="#173d38" stroke="#4fc5ae" />
      <path className="project-flow" d="M154 56h69m-69 10h70m-40 36h52" stroke="#a0ffe2" strokeWidth="2" />
    </>
  );
}

const artwork = {
  decisionguard: GraphArt,
  "claim-iq": DocumentsArt,
  "dev-assistant": TerminalArt,
  notifications: DeliveryArt,
  askin: ReportArt,
} satisfies Record<Project["id"], () => React.JSX.Element>;

export function ProjectArt({ id, featured }: { id: Project["id"]; featured?: boolean }) {
  const Artwork = artwork[id];
  return (
    <figure className={`project-art ${featured ? "" : "project-art--compact"}`}>
      <svg viewBox={featured ? "0 0 260 175" : "0 0 260 120"} aria-hidden="true" focusable="false">
        <Artwork />
      </svg>
      <figcaption>{featured ? "Concept illustration" : "Concept"}</figcaption>
    </figure>
  );
}
