import React from 'react';
import { bodySilhouette } from '../../data/organPaths';
import OrganLayer from './OrganLayer';
import MuscleLayer from './MuscleLayer';

export default function BodyDiagram({
  hoveredOrgan,
  selectedOrgan,
  highlightedOrgans,
  showMuscleLayer,
  onOrganHover,
  onOrganSelect,
  onToggleMuscleLayer,
}) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 700"
        className="w-full h-full max-h-[85vh]"
        style={{ maxWidth: '400px' }}
      >
        {/* Body silhouette */}
        <path
          d={bodySilhouette}
          fill="#1e293b"
          stroke="#334155"
          strokeWidth="1.5"
          style={{ pointerEvents: 'none' }}
        />

        {/* Muscle layer placeholder */}
        <MuscleLayer visible={showMuscleLayer} />

        {/* Interactive organ layer */}
        <OrganLayer
          hoveredOrgan={hoveredOrgan}
          selectedOrgan={selectedOrgan}
          highlightedOrgans={highlightedOrgans}
          onOrganHover={onOrganHover}
          onOrganSelect={onOrganSelect}
        />
      </svg>

      {/* Muscle layer toggle */}
      <button
        onClick={onToggleMuscleLayer}
        className={`absolute bottom-4 left-4 px-3 py-1.5 text-xs rounded-md border transition-colors ${
          showMuscleLayer
            ? 'bg-navy-700 border-accent-blue text-accent-blue'
            : 'bg-navy-800 border-navy-600 text-slate-400 hover:border-slate-400'
        }`}
      >
        Muscle Layer
      </button>
    </div>
  );
}
