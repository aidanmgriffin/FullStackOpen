const Header = (props) => {
  console.log("Header: ", props);
  return (
    <div>
      <h1> {props.course.name}</h1>
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
  console.log("Content: ", props);

  return (
    <div>
      <Part
        partName={props.parts[0].name}
        numExercises={props.parts[0].exercises}
      />
      <Part
        partName={props.parts[1].name}
        numExercises={props.parts[1].exercises}
      />
      <Part
        partName={props.parts[2].name}
        numExercises={props.parts[2].exercises}
      />
    </div>
  );
};

const Total = (props) => {
  console.log("Total: ", props);
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
