import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const positivePercentage = `${(props.good / all) * 100} %`;

  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return (
      <div>
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positivePercentage} />
      </div>
    );
  }

  return <p>No feedback given</p>;
};

const Statistic = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Title title="give feedback" />
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Title title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
