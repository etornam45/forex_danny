import React from 'react';
import './PlanCard.scss'; // Create a CSS file for styling

interface PlanCardProps {
  title: string;
  minimum: string;
  maximum: string;
  shared: string;
  returns: string;
  withdrawal: string;
  duration: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  minimum,
  maximum,
  shared,
  returns,
  withdrawal,
  duration,
}) => {
  return (
    <div className="plan-card">
      <h2>{title}</h2>
      <p>{minimum}</p>
      <p>{maximum}</p>
      <p>{shared}</p>
      <p>{returns}</p>
      <p>{withdrawal}</p>
      <p>{duration}</p>
    </div>
  );
};

export default PlanCard;
