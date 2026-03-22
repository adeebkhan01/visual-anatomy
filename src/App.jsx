import React, { useState, useEffect } from 'react';
import BodyDiagram from './components/BodyDiagram/BodyDiagram';
import ConditionFilter from './components/ConditionFilter/ConditionFilter';
import ResearchPanel from './components/ResearchPanel/ResearchPanel';
import { getOrganData, getAffectedOrgansSync } from './services/researchService';

export default function App() {
  const [hoveredOrgan, setHoveredOrgan] = useState(null);
  const [selectedOrgan, setSelectedOrgan] = useState(null);
  const [activeConditions, setActiveConditions] = useState([]);
  const [showMuscleLayer, setShowMuscleLayer] = useState(false);
  const [organData, setOrganData] = useState(null);

  const activeOrgan = selectedOrgan || hoveredOrgan;

  useEffect(() => {
    let cancelled = false;
    if (!activeOrgan) {
      setOrganData(null);
      return;
    }
    getOrganData(activeOrgan).then((data) => {
      if (!cancelled) setOrganData(data);
    });
    return () => { cancelled = true; };
  }, [activeOrgan]);

  const toggleCondition = (conditionId) => {
    setActiveConditions((prev) =>
      prev.includes(conditionId)
        ? prev.filter((c) => c !== conditionId)
        : [...prev, conditionId]
    );
  };

  const handleOrganSelect = (organId) => {
    setSelectedOrgan((prev) => (prev === organId ? null : organId));
  };

  const highlightedOrgans = activeConditions.length > 0
    ? getAffectedOrgansSync(activeConditions)
    : null;

  return (
    <div className="min-h-screen bg-navy-950 text-slate-200 flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 border-b border-navy-700 flex flex-wrap items-center justify-between gap-4">
        <div className="shrink-0">
          <h1 className="text-lg font-bold text-white tracking-tight">Visual Anatomy</h1>
          <p className="text-xs text-slate-500">Interactive body research explorer</p>
        </div>
        <ConditionFilter activeConditions={activeConditions} onToggle={toggleCondition} />
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Body diagram */}
        <div className="lg:w-1/2 p-4 lg:p-8 flex items-center justify-center">
          <BodyDiagram
            hoveredOrgan={hoveredOrgan}
            selectedOrgan={selectedOrgan}
            highlightedOrgans={highlightedOrgans}
            showMuscleLayer={showMuscleLayer}
            onOrganHover={setHoveredOrgan}
            onOrganSelect={handleOrganSelect}
            onToggleMuscleLayer={() => setShowMuscleLayer((v) => !v)}
          />
        </div>

        {/* Right: Research panel */}
        <div className="lg:w-1/2 border-t lg:border-t-0 lg:border-l border-navy-700 overflow-y-auto">
          <ResearchPanel organData={organData} activeConditions={activeConditions} />
        </div>
      </main>
    </div>
  );
}
