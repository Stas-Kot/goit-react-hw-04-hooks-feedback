import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveFedback,
}) {
  return (
    <ul className={s.statistics}>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{total}</span>
      </li>
      <li>
        Positive Feedback: <span>{positiveFedback}%</span>
      </li>
    </ul>
  );
}
