const columns = Array.from({ length: 73 }, (_, index) => index);
const rows = Array.from({ length: 14 }, (_, index) => index);

function surfacePoint(column: number, row: number) {
  const x = column / 72;
  const depth = row / 13;
  const crest = 120 * Math.exp(-28 * (x - 0.53) ** 2);
  const ripples = Math.sin(x * 19 - depth * 3) * (16 + depth * 11);
  const y = 153 + depth * 180 - crest * (1 - depth * 0.22) - ripples;
  const projectedX = 720 + (x - 0.5) * (0.94 + depth * 0.27) * 1440;
  return `${projectedX.toFixed(1)},${y.toFixed(1)}`;
}

export function DigitalLandscape() {
  return (
    <svg className="digital-landscape" viewBox="0 0 1440 365" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="landscape-grid" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="25" y2="355">
          <stop stopColor="#43f7cd" stopOpacity=".6" />
          <stop offset=".46" stopColor="#18ae89" stopOpacity=".41" />
          <stop offset="1" stopColor="#16806b" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="landscape-aura">
          <stop stopColor="#09b787" stopOpacity=".25" />
          <stop offset="1" stopColor="#09b787" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="745" cy="155" rx="615" ry="166" fill="url(#landscape-aura)" />
      <g fill="none" stroke="url(#landscape-grid)" strokeWidth=".7">
        {rows.map((row) => (
          <polyline key={row} points={columns.map((column) => surfacePoint(column, row)).join(" ")} />
        ))}
        {columns.filter((column) => column % 2 === 0).map((column) => (
          <polyline key={column} points={rows.map((row) => surfacePoint(column, row)).join(" ")} />
        ))}
      </g>
      <polyline points={columns.map((column) => surfacePoint(column, 0)).join(" ")} fill="none" stroke="#5df6cf" strokeWidth="1.4" strokeOpacity=".68" />
      <polyline points={columns.map((column) => surfacePoint(column, 5)).join(" ")} fill="none" stroke="#38e6bb" strokeWidth="2" strokeOpacity=".53" strokeDasharray="1 19" strokeLinecap="round" />
    </svg>
  );
}
