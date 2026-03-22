import React, { useState } from 'react';
import ResearchList from './ResearchList';
import SupplementList from './SupplementList';

const tabs = [
  { id: 'research', label: 'Research' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'supplements', label: 'Supplements' },
];

export default function ResearchPanel({ organData, activeConditions }) {
  const [activeTab, setActiveTab] = useState('research');

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

  // Gather condition-specific research
  const conditionResearchItems = [];
  const relevantConditions = activeConditions.length > 0 ? activeConditions : Object.keys(organData.conditionResearch || {});
  for (const cid of relevantConditions) {
    const items = organData.conditionResearch?.[cid];
    if (items && items.length > 0) {
      conditionResearchItems.push({ conditionId: cid, items });
    }
  }

  return (
    <div className="p-6 custom-scrollbar h-full overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">{organData.name}</h2>
        <p className="text-sm text-slate-400 leading-relaxed">{organData.description}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-navy-800 rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === tab.id
                ? 'bg-navy-600 text-white'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'research' && (
        <ResearchList items={organData.generalResearch} title="General Research" />
      )}

      {activeTab === 'conditions' && (
        <>
          {conditionResearchItems.length > 0 ? (
            conditionResearchItems.map(({ conditionId, items }) => (
              <ResearchList
                key={conditionId}
                items={items}
                title={conditionId.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              />
            ))
          ) : (
            <p className="text-sm text-slate-500">No condition-specific research available for this organ.</p>
          )}
        </>
      )}

      {activeTab === 'supplements' && (
        <SupplementList supplements={organData.supplements} />
      )}
    </div>
  );
}
