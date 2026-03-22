import React from 'react';
import ResearchList from './ResearchList';
import SupplementList from './SupplementList';

export default function ResearchPanel({ organData, activeConditions }) {
  if (!organData) {
    return (
      <div className="h-full flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-6xl mb-4 opacity-20">&#129729;</div>
          <p className="text-slate-400 text-sm">Hover over or click an organ to explore research</p>
        </div>
      </div>
    );
  }

  // Gather condition-specific research for active conditions
  const conditionResearchItems = [];
  if (activeConditions.length > 0) {
    for (const cid of activeConditions) {
      const items = organData.conditionResearch?.[cid];
      if (items && items.length > 0) {
        conditionResearchItems.push({ conditionId: cid, items });
      }
    }
  }

  const hasActiveConditions = activeConditions.length > 0;
  const hasConditionResearch = conditionResearchItems.length > 0;

  // Build active condition names for the fallback message
  const conditionNames = activeConditions
    .map((c) => c.replace(/-/g, ' ').replace(/\b\w/g, (ch) => ch.toUpperCase()))
    .join(', ');

  return (
    <div className="p-6 custom-scrollbar h-full overflow-y-auto">
      {/* Organ name + description */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">{organData.name}</h2>
        <p className="text-sm text-slate-400 leading-relaxed">{organData.description}</p>
      </div>

      {/* Research section */}
      {hasActiveConditions && hasConditionResearch && (
        conditionResearchItems.map(({ conditionId, items }) => (
          <ResearchList
            key={conditionId}
            items={items}
            title={conditionId.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
            conditionBadge={conditionId}
          />
        ))
      )}

      {hasActiveConditions && !hasConditionResearch && (
        <div className="mb-6 bg-navy-800 rounded-lg p-4 border border-navy-700">
          <p className="text-sm text-slate-400">
            No specific research found linking <span className="text-slate-300 font-medium">{conditionNames}</span> to the <span className="text-slate-300 font-medium">{organData.name}</span>. Showing general research below.
          </p>
        </div>
      )}

      <ResearchList items={organData.generalResearch} title="General Research" />

      {/* Supplements */}
      <SupplementList supplements={organData.supplements} />
    </div>
  );
}
