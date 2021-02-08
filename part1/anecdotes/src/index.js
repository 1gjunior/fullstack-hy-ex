import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const addVote = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1,
    });
  };

  return (
    <div>
      <div>{props.anecdotes[selected]}</div>
      <ShowResults votes={votes[selected]} />
      <Button label="vote" handleClick={addVote} />
      <Button
        label="next anecdote"
        handleClick={() =>
          setSelected((prevSelected) => (prevSelected = getRand()))
        }
      />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const getRand = (function () {
  let nums = [0, 1, 2, 3, 4, 5];
  let current = [];
  function rand(n) {
    return (Math.random() * n) | 0;
  }
  return function () {
    if (!current.length) current = nums.slice();
    return current.splice(rand(current.length), 1);
  };
})();

const Button = ({ handleClick, label }) => {
  return <button onClick={handleClick}>{label}</button>;
};

const ShowResults = ({ votes }) => {
  return <div>has {votes} votes</div>;
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
