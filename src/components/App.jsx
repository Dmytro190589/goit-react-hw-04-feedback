import { useState } from 'react';
import React from 'react';
import css from './App.module.css'

import Statistics from '../components/Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeadbackOptions/FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const stateInput = e => {
    const num = e.currentTarget.textContent.toLowerCase();
    switch (num) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };
const totalNum = countTotalFeedback();
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / totalNum) * 100);
  };
  return (
    <div className={css.container}>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={stateInput}
        />
      </Section>

      <Section title="Statistics">
        {!totalNum? (
          <Notification />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
}
