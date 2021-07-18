import React, { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnClick = e => {
    switch (e.target.name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        break;
    }
  };
  let options = { good, neutral, bad };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const sum = ((good / total) * 100).toFixed(0);
    return total ? sum : 0;
  };

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleBtnClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </div>
  );
}

export default App;
