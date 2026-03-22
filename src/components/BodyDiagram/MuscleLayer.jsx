import React from 'react';

export default function MuscleLayer({ visible }) {
  if (!visible) return null;
  return (
    <g id="muscle-layer" opacity="0.4">
      <text x="200" y="160" textAnchor="middle" fill="#94a3b8" fontSize="12">
        Muscle layer — coming soon
      </text>
    </g>
  );
}
