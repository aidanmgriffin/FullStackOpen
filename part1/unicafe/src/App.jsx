import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  );
};

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const all = props.all;
  const positive = Math.round((props.good / props.all) * 100) / 100;
  const average = Math.round(((good * 1 + bad * -1) / all) * 100) / 100;

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={all}/>
            <StatisticLine text="average" value={average}/>
            <StatisticLine text="positive" value={positive}/>
          </tbody>
        </table>
      </div>
    );
  }
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [count, setCount] = useState(0);

  const handleGoodClick = () => {
    console.log("handling good");

    setGood(good + 1);
    setAll(all + 1);
    setCount(count + 1);
  };

  const handleNeutralClick = () => {
    console.log("handling neutral");

    setNeutral(neutral + 1);
    setAll(all + 1);
    setCount(count + 1);
  };

  const handleBadClick = () => {
    console.log("handling bad");

    setBad(bad + 1);
    setAll(all + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        count={count}
      />
    </div>
  );
};

export default App;
