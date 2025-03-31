interface TrajetChoiceStepProps {
  step: {
    label: string;
    time: string;
    distance: string;
  };
}
const TrajetChoiceStep = ({ step }: TrajetChoiceStepProps) => {
  return (
    <div className="trajet__choice-step">
      <div className="trajet__choice-step-time">{step.time}</div>
      <div className="trajet__choice-step-middle">
        <div className="dot"></div>
      </div>
      <div className="trajet__choice-step-content">
        <h5>{step.label}</h5>
        <p>{step.distance}</p>
      </div>
    </div>
  );
};
export default TrajetChoiceStep;
