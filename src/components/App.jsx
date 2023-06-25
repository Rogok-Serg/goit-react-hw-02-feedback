import { Statistics } from './Statistics/Statistics';
import React from 'react';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {}

  countPositiveFeedbackPercentage() {}

  render() {
    return (
      <div>
        <Statistics />
      </div>
    );
  }
}
