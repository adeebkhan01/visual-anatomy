import React from 'react';

const sourceBadge = {
  PubMed: 'bg-green-500/20 text-green-400',
  WHO: 'bg-blue-500/20 text-blue-400',
  NHS: 'bg-teal-500/20 text-teal-400',
};

const conditionBadgeColors = {
  'cardiovascular-disease': 'bg-red-500/20 text-red-400',
  'type-2-diabetes': 'bg-amber-500/20 text-amber-400',
  cancer: 'bg-purple-500/20 text-purple-400',
  arthritis: 'bg-cyan-500/20 text-cyan-400',
  'chronic-kidney-disease': 'bg-emerald-500/20 text-emerald-400',
  'liver-disease': 'bg-orange-500/20 text-orange-400',
  'neurodegenerative-disease': 'bg-pink-500/20 text-pink-400',
  'respiratory-disease': 'bg-indigo-500/20 text-indigo-400',
};

export default function ResearchList({ items, title, conditionBadge }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        {title && <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{title}</h3>}
        {conditionBadge && (
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${conditionBadgeColors[conditionBadge] || 'bg-slate-600/30 text-slate-400'}`}>
            Condition
          </span>
        )}
      </div>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="bg-navy-800 rounded-lg p-4 border border-navy-700">
            <div className="flex items-start justify-between gap-2 mb-2">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent-blue hover:text-accent-cyan transition-colors"
              >
                {item.title}
              </a>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${sourceBadge[item.source] || 'bg-slate-600/30 text-slate-400'}`}>
                {item.source}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
