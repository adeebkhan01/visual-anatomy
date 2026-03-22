import React from 'react';

const evidenceBadge = {
  Strong: 'bg-evidence-strong/20 text-evidence-strong',
  Moderate: 'bg-evidence-moderate/20 text-evidence-moderate',
  Emerging: 'bg-evidence-emerging/20 text-evidence-emerging',
};

export default function SupplementList({ supplements }) {
  if (!supplements || supplements.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">Supplements & Compounds</h3>
      <div className="space-y-3">
        {supplements.map((supp, i) => (
          <div key={i} className="bg-navy-800 rounded-lg p-4 border border-navy-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-white">{supp.name}</span>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${evidenceBadge[supp.evidenceLevel] || 'bg-slate-600/30 text-slate-400'}`}>
                {supp.evidenceLevel}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-1">{supp.benefit}</p>
            <p className="text-[10px] text-slate-500">{supp.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
