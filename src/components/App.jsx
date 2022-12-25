import { Component } from 'react';
import React from 'react';

import Statistics from "../components/Statistics/Statistics";
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeadbackOptions/FeedbackOptions';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stateInput = e => {
    const num = e.currentTarget.textContent.toLowerCase();
    this.setState(prevState => ({ [num]: (prevState[num] += 1)
     }));
  };
 

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
 
  render() {
    return (
      <div>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.stateInput}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification />
          ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
          )}
        </Section>
      </div>
    );
  }
}