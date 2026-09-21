interface TornEdgeProps {
  color: string;
  flip?: boolean;
}

// A jagged torn-paper edge, stretched full width via preserveAspectRatio="none".
export default function TornEdge({ color, flip = false }: TornEdgeProps) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-16 w-full sm:h-20 ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M0,80 L0,28 L40,42 L82,18 L126,38 L168,10 L214,34 L258,16 L300,40 L344,20 L388,44
           L432,14 L476,36 L520,22 L564,46 L608,18 L652,38 L696,12 L740,40 L784,20 L828,44
           L872,16 L916,36 L960,10 L1004,38 L1048,20 L1092,44 L1136,16 L1180,40 L1224,18
           L1268,42 L1312,14 L1356,36 L1400,22 L1440,38 L1440,80 Z"
        fill={color}
      />
    </svg>
  );
}
