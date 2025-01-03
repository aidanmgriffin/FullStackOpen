const Header = (props) => {
  return (
    <div>
      <h1> {props.courseName}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <h1>
        {props.partName} {props.numExercises}
      </h1>
    </div>
  );
};

const Content = (props) => {
  
  return (
    <div>
      <Part partName={props.content[0].partName} numExercises={props.content[0].numExercises} />
      <Part partName={props.content[1].partName} numExercises={props.content[1].numExercises} />
      <Part partName={props.content[2].partName} numExercises={props.content[2].numExercises} />
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const contents = [
    { partName: part1, numExercises: exercises1 },
    { partName: part2, numExercises: exercises2 },
    { partName: part3, numExercises: exercises3 },
  ];

  return (
    <div>
      <Header courseName={course} />
      <Content content={contents} />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
