import React from 'react';
import organPaths from '../../data/organPaths';

export default function OrganLayer({
  hoveredOrgan,
  selectedOrgan,
  highlightedOrgans,
  onOrganHover,
  onOrganSelect,
}) {
  const hasHighlight = highlightedOrgans && highlightedOrgans.size > 0;

  return (
    <g id="organ-layer">
      {organPaths.map((organ) => {
        const isHovered = hoveredOrgan === organ.id;
        const isSelected = selectedOrgan === organ.id;
        const isHighlighted = highlightedOrgans?.has(organ.id);
        const isDimmed = hasHighlight && !isHighlighted;

        return (
          <g key={organ.id}>
            <path
              d={organ.d}
              className="organ-path"
              style={{
                fill: isHovered || isSelected ? organ.hoverFill : organ.defaultFill,
                opacity: isDimmed ? 0.25 : 1,
                filter:
                  isSelected
                    ? `drop-shadow(0 0 12px ${organ.hoverFill}) drop-shadow(0 0 24px ${organ.hoverFill})`
                    : isHovered
                    ? `drop-shadow(0 0 8px ${organ.hoverFill})`
                    : 'none',
                transition: 'fill 0.3s ease, opacity 0.3s ease, filter 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={() => onOrganHover(organ.id)}
              onMouseLeave={() => onOrganHover(null)}
              onClick={() => onOrganSelect(organ.id)}
            />
            {/* Label */}
            <text
              x={organ.labelX}
              y={organ.labelY}
              textAnchor={organ.labelX < 200 ? 'end' : organ.labelX > 200 ? 'start' : 'middle'}
              fill={isHovered || isSelected ? '#ffffff' : '#94a3b8'}
              fontSize="11"
              fontWeight={isHovered || isSelected ? '600' : '400'}
              style={{
                opacity: isDimmed ? 0.3 : 1,
                transition: 'opacity 0.3s ease, fill 0.3s ease',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {organ.name}
            </text>
          </g>
        );
      })}
    </g>
  );
}
