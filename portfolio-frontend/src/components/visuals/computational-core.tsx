import { Icon, type IconName } from "../ui/icon";

const modules = [
  { name: "Agentic AI", icon: "spark", position: "agent" },
  { name: "Backend systems", icon: "server", position: "backend" },
  { name: "System design", icon: "layers", position: "system" },
  { name: "Product development", icon: "cube", position: "product" },
] as const satisfies readonly { name: string; icon: IconName; position: string }[];

const floorLines = Array.from({ length: 13 }, (_, index) => index * 43 - 258);

function CoreNode({ x, y, width = 23 }: { x: number; y: number; width?: number }) {
  const rise = width * 0.55;
  const height = width * 1.42;

  return (
    <g transform={`translate(${x} ${y})`} strokeLinejoin="round">
      <path d={`M0 ${-rise} ${width} 0 0 ${rise} ${-width} 0Z`} fill="url(#node-top)" stroke="#57f9d5" strokeOpacity=".75" />
      <path d={`M${-width} 0 0 ${rise}V${rise + height}L${-width} ${height}Z`} fill="url(#node-left)" stroke="#30d8b0" strokeOpacity=".62" />
      <path d={`M0 ${rise} ${width} 0V${height}L0 ${rise + height}Z`} fill="url(#node-right)" stroke="#30d8b0" strokeOpacity=".6" />
      <path d="M0-3 5 0 0 3-5 0Z" fill="#b0ffeb" filter="url(#core-light)" />
      <path d="M0-2.6 4 0 0 2.6-4 0Z" fill="#dcfff5" />
    </g>
  );
}

export function ComputationalCore() {
  return (
    <div className="core-visual">
      <svg className="core-visual__art" viewBox="0 0 640 452" aria-hidden="true" focusable="false">
        <defs>
          <radialGradient id="core-aura">
            <stop stopColor="#00d9a6" stopOpacity=".3" />
            <stop offset=".58" stopColor="#00a681" stopOpacity=".12" />
            <stop offset="1" stopColor="#00a681" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="floor-stroke" x2="0" y2="1">
            <stop stopColor="#4debd3" stopOpacity="0" />
            <stop offset=".53" stopColor="#3ae0bb" stopOpacity=".32" />
            <stop offset="1" stopColor="#3ae0bb" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="orbit-stroke" x2="1" y2=".4">
            <stop stopColor="#00b891" stopOpacity=".14" />
            <stop offset=".44" stopColor="#44f8cd" stopOpacity=".8" />
            <stop offset="1" stopColor="#26cea9" stopOpacity=".28" />
          </linearGradient>
          <linearGradient id="base-top" x2="1" y2="1">
            <stop stopColor="#0a241f" /><stop offset=".58" stopColor="#126052" /><stop offset="1" stopColor="#03977b" />
          </linearGradient>
          <linearGradient id="base-left" x2=".7" y2="1">
            <stop stopColor="#0e423b" /><stop offset="1" stopColor="#051812" />
          </linearGradient>
          <linearGradient id="base-right" x2=".7" y2="1">
            <stop stopColor="#116052" /><stop offset="1" stopColor="#061c1a" />
          </linearGradient>
          <linearGradient id="cube-top" x2="1" y2="1">
            <stop stopColor="#b0ffed" /><stop offset=".43" stopColor="#308979" /><stop offset="1" stopColor="#10594f" />
          </linearGradient>
          <linearGradient id="cube-left" x2="0" y2="1">
            <stop stopColor="#2ba68b" /><stop offset=".36" stopColor="#164c42" /><stop offset=".77" stopColor="#103d34" /><stop offset="1" stopColor="#32f9c4" />
          </linearGradient>
          <linearGradient id="cube-right" x2="0" y2="1">
            <stop stopColor="#0e6053" /><stop offset=".63" stopColor="#083b35" /><stop offset="1" stopColor="#0c9c77" />
          </linearGradient>
          <linearGradient id="node-top" x2="1" y2="1">
            <stop stopColor="#62e7d1" /><stop offset="1" stopColor="#116758" />
          </linearGradient>
          <linearGradient id="node-left" x2="1" y2="1">
            <stop stopColor="#0c6d5d" /><stop offset="1" stopColor="#12332d" />
          </linearGradient>
          <linearGradient id="node-right" x2=".4" y2="1">
            <stop stopColor="#0f4a40" /><stop offset="1" stopColor="#04221b" />
          </linearGradient>
          <filter id="core-light" x="-90%" y="-90%" width="280%" height="280%">
            <feGaussianBlur stdDeviation="4.2" />
          </filter>
        </defs>

        <ellipse cx="323" cy="247" rx="296" ry="200" fill="url(#core-aura)" />
        <g fill="none" stroke="url(#floor-stroke)" strokeWidth=".7">
          {floorLines.map((offset) => (
            <g key={offset}>
              <path d={`M${320 + offset} 447 ${62 + offset * 0.62} 227`} />
              <path d={`M${320 + offset} 447 ${575 + offset * 0.62} 227`} />
            </g>
          ))}
        </g>
        <g fill="none" stroke="url(#orbit-stroke)">
          <ellipse cx="322" cy="227" rx="218" ry="79" transform="rotate(-10 322 227)" />
          <ellipse cx="320" cy="230" rx="256" ry="101" transform="rotate(9 320 230)" strokeDasharray="2 7" opacity=".65" />
          <ellipse cx="322" cy="232" rx="282" ry="122" transform="rotate(-11 322 232)" opacity=".24" />
        </g>
        <path d="m39 110 70-1 66 53m286-17 61-57h72M68 332h45l83-21m257 13 66-10 72 1" fill="none" stroke="#29d3b0" strokeOpacity=".41" strokeDasharray="3 6" />
        <path d="m178 173 67 37m207-53-58 40m-258 122 99-35m205 37-58-39" stroke="#61ffd8" strokeOpacity=".58" fill="none" />
        <g fill="#52ebd0">
          <circle cx="84" cy="182" r="1.7" /><circle cx="476" cy="62" r="1.4" /><circle cx="534" cy="191" r="1.5" />
          <circle cx="219" cy="66" r="1.05" /><circle cx="106" cy="270" r="1" /><circle cx="583" cy="276" r="1.25" />
          <circle cx="246" cy="375" r="1.2" /><circle cx="435" cy="386" r="1.35" /><circle cx="127" cy="115" r="1.15" />
          <circle cx="512" cy="244" r="2.2" /><circle cx="174" cy="272" r="2" />
        </g>
        <path d="m382 35 9 4-9 5-9-5Z" fill="#37e4bd" stroke="#83ffe1" strokeOpacity=".5" />

        <CoreNode x={176} y={154} />
        <CoreNode x={466} y={141} width={24} />
        <g strokeLinejoin="round">
          <path d="M320 203 422 255 320 313 218 255Z" fill="url(#base-top)" stroke="#3feac5" strokeOpacity=".72" />
          <path d="M218 255 320 313v43l-102-57Z" fill="url(#base-left)" stroke="#35b99f" strokeOpacity=".46" />
          <path d="M320 313 422 255v44l-102 57Z" fill="url(#base-right)" stroke="#38c5a5" strokeOpacity=".46" />
          <path d="M227 258 320 309l93-51" fill="none" stroke="#77ffdc" strokeOpacity=".49" />
          <path d="M320 189 397 230 320 272 243 230Z" fill="url(#base-top)" stroke="#59ffdb" strokeOpacity=".89" />
          <path d="M243 230 320 272v30l-77-42Z" fill="url(#base-left)" stroke="#4cecbd" strokeOpacity=".7" />
          <path d="M320 272 397 230v30l-77 42Z" fill="url(#base-right)" stroke="#4cecbd" strokeOpacity=".64" />
          <path d="m243 256 77 43 77-43" fill="none" stroke="#19e9ac" strokeWidth="4" filter="url(#core-light)" />
          <path d="m243 256 77 43 77-43" fill="none" stroke="#50fbd1" strokeWidth="1.4" />
          <path d="M320 184 384 219 320 255 256 219Z" fill="url(#base-top)" stroke="#2dd5ac" strokeOpacity=".8" />
        </g>

        <path d="M320 66 394 106 320 147 246 106Z" fill="url(#cube-top)" stroke="#a8ffe7" strokeOpacity=".95" />
        <path d="M246 106 320 147v87l-74-41Z" fill="url(#cube-left)" stroke="#60e9c7" strokeOpacity=".87" />
        <path d="M320 147 394 106v87l-74 41Z" fill="url(#cube-right)" stroke="#62eac7" strokeOpacity=".8" />
        <path d="m251 190 69 38 69-38" fill="none" stroke="#42ffcf" strokeWidth="7" opacity=".64" filter="url(#core-light)" />
        <path d="M320 148v84m-71-42 71 40 71-40" fill="none" stroke="#a2ffe6" strokeOpacity=".62" strokeWidth="1.3" />
        <path d="m320 101 9 5-9 5-9-5Z" fill="#ddfff6" filter="url(#core-light)" />
        <path d="m320 101 7 4-7 4-7-4Z" fill="#d1fff3" />
        <g stroke="#75ffe0" strokeWidth="3.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="m273 147-11 7 11 16m20-12-9 22m47-21 8-12m9 13 16-19-16-2" opacity=".89" />
          <path d="m304 169 10 14-10 6" opacity=".72" />
        </g>

        <CoreNode x={157} y={300} width={27} />
        <CoreNode x={478} y={288} width={28} />
        <path d="M274 353h92" stroke="#31ffd0" opacity=".32" strokeWidth="4" filter="url(#core-light)" />
      </svg>
      <ul className="core-visual__labels" aria-label="Areas of focus">
        {modules.map(({ name, icon, position }) => (
          <li key={position} className={`core-label core-label--${position}`}>
            <Icon name={icon} />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
