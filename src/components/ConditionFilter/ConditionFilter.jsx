import React from 'react';
import conditions from '../../data/conditions';

const conditionColors = {
  'cardiovascular-disease': { bg: 'bg-red-500/20', border: 'border-red-500', text: 'text-red-400', activeBg: 'bg-red-500' },
  'type-2-diabetes': { bg: 'bg-amber-500/20', border: 'border-amber-500', text: 'text-amber-400', activeBg: 'bg-amber-500' },
  cancer: { bg: 'bg-purple-500/20', border: 'border-purple-500', text: 'text-purple-400', activeBg: 'bg-purple-500' },
  arthritis: { bg: 'bg-cyan-500/20', border: 'border-cyan-500', text: 'text-cyan-400', activeBg: 'bg-cyan-500' },
  'chronic-kidney-disease': { bg: 'bg-emerald-500/20', border: 'border-emerald-500', text: 'text-emerald-400', activeBg: 'bg-emerald-500' },
  'liver-disease': { bg: 'bg-orange-500/20', border: 'border-orange-500', text: 'text-orange-400', activeBg: 'bg-orange-500' },
  'neurodegenerative-disease': { bg: 'bg-pink-500/20', border: 'border-pink-500', text: 'text-pink-400', activeBg: 'bg-pink-500' },
  'respiratory-disease': { bg: 'bg-indigo-500/20', border: 'border-indigo-500', text: 'text-indigo-400', activeBg: 'bg-indigo-500' },
};

export default function ConditionFilter({ activeConditions, onToggle }) {
  return (
    <div className="flex flex-wrap gap-2">
      {conditions.map((condition) => {
        const isActive = activeConditions.includes(condition.id);
        const colors = conditionColors[condition.id] || {};
        return (
          <button
            key={condition.id}
            onClick={() => onToggle(condition.id)}
            title={condition.description}
            className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 ${
              isActive
                ? `${colors.activeBg} border-transparent text-white`
                : `bg-transparent ${colors.border} ${colors.text} hover:${colors.bg}`
            }`}
          >
            {condition.name}
          </button>
        );
      })}
    </div>
  );
}
