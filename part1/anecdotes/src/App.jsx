import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const TopAnecdote = ({anecdotes, votes}) => {

  let topVote = 0
  let topInd = 0

  for (let vote in votes) {
    if (votes[vote] > topVote) {
      topVote = votes[vote]
      topInd = vote
    }
  }

  return (
    <div>
      <p>{anecdotes[topInd]}</p>
      <p>has {votes[topInd]} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const generateSelected = () => {
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const randomNum = getRandomNumber(0, anecdotes.length - 1); // Generates a random number between 1 and 10 (inclusive)

    setSelected(randomNum);
  };

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={generateSelected} text="next anecdote" />

      <h1>Anecdote with the most votes</h1>
      <TopAnecdote anecdotes = {anecdotes} votes={votes} />
    </div>
  );
};

export default App;


