// The hero illustration: a delivery route that traces itself between stops
// while a vehicle follows it. Pure SVG and CSS, so it needs no library.
const stops = [
  { x: 140, y: 120 },
  { x: 250, y: 170 },
  { x: 330, y: 60 },
  { x: 420, y: 130 },
  { x: 370, y: 240 },
  { x: 220, y: 260 },
];

export default function RouteAnimation() {
  return (
    <svg
      viewBox="0 0 480 300"
      role="img"
      aria-label="Animated delivery route being traced between stops, with a vehicle following it"
      className="route-svg"
    >
      <path
        id="route-path"
        className="route-line"
        d="M60 240 L140 120 L250 170 L330 60 L420 130 L370 240 L220 260 Z"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect
        className="route-stop"
        x="48"
        y="228"
        width="24"
        height="24"
        rx="4"
        fill="var(--ink)"
      />
      {stops.map((stop, index) => (
        <circle
          key={index}
          className="route-stop"
          style={{ animationDelay: `${(index + 1) * 150}ms` }}
          cx={stop.x}
          cy={stop.y}
          r="9"
          fill="#ffffff"
          stroke="var(--ink)"
          strokeWidth="2.5"
        />
      ))}
      <circle r="7" fill="var(--orange)" stroke="var(--ink)" strokeWidth="2">
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          keyPoints="0;1;1"
          keyTimes="0;0.6;1"
          calcMode="linear"
        >
          <mpath href="#route-path" />
        </animateMotion>
      </circle>
    </svg>
  );
}
