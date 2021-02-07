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
        <table>
          <tbody>
            <Statistic text="good" value={props.good} />
            <Statistic text="neutral" value={props.neutral} />
            <Statistic text="bad" value={props.bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positivePercentage} />
          </tbody>
        </table>
      </div>
    );
  }

  return <p>No feedback given</p>;
};

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title title="give feedback" />
      <Button
        handleClick={() => setGood((prevGood) => prevGood + 1)}
        text="good"
      />
      <Button
        handleClick={() => setNeutral((prevNeutral) => prevNeutral + 1)}
        text="neutral"
      />
      <Button handleClick={() => setBad((prevBad) => prevBad + 1)} text="bad" />
      <Title title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
