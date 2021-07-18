import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="controls">
      {options.map(option => (
        <button
          key={option}
          name={option}
          type="button"
          className={s.button}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
