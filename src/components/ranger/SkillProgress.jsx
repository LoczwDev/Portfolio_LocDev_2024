import React from 'react';

const SkillProgress = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-black">{skill}</span>
        <span className="text-sm font-medium text-accent">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="bg-accent/90 h-2" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillProgress;
