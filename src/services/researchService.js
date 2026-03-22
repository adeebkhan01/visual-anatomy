import organResearch from '../data/organResearch';
import conditions from '../data/conditions';

export async function getOrganData(organId) {
  return organResearch[organId] || null;
}

export async function getOrganDataForCondition(organId, conditionId) {
  const organ = organResearch[organId];
  if (!organ) return null;
  return {
    ...organ,
    filteredResearch: organ.conditionResearch[conditionId] || [],
  };
}

export async function getAllConditions() {
  return conditions;
}

export async function getOrgansAffectedByCondition(conditionId) {
  return Object.values(organResearch)
    .filter((organ) => organ.conditionResearch[conditionId]?.length > 0)
    .map((organ) => organ.organId);
}

export function getAffectedOrgansSync(conditionIds) {
  const affected = new Set();
  for (const cid of conditionIds) {
    for (const organ of Object.values(organResearch)) {
      if (organ.conditionResearch[cid]?.length > 0) {
        affected.add(organ.organId);
      }
    }
  }
  return affected;
}
