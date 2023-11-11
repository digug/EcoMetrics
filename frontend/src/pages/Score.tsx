// Score.tsx
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

interface ScoreBarProps {
  score: number;
}

const ScoreBar: React.FC<ScoreBarProps> = ({ score }) => {
  const progress = Math.min(100, Math.max(0, score));
  
  let isBelow50 = true;
  let isBelow75 = true;

  if (progress <= 50) {
    isBelow50 = true;
    isBelow75 = true
  } else if (progress <= 75) {
    isBelow50 = false;
    isBelow75 = true;
  }
  else{
    isBelow50 = false;
    isBelow75 = false;
  }

  return (
    <div className="score-bar">
      <LinearProgress      
        color={isBelow50 ? 'error' : (isBelow75 ? 'warning' : 'success')}
        variant="determinate"
        value={progress}
      />
  </div>
  );
};

export default ScoreBar;
