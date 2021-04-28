import React from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

// in the modern react use the functional component
const App = () => {
  const courseGoals = [
    {id:"cg1",text:"Finish the Tutorial"},
    {id:"cg2",text:"Learn all about the react"},
    {id:"cg3",text:"Help other students in the course"},
  ];
const addNewGoalHandler = (NewGoal) =>{
  courseGoals.push(NewGoal);
  console.log(courseGoals);
}
  return (
    <div className="course-goals">
    <NewGoal onAddGoal={addNewGoalHandler} />
      <h2>Course Goals</h2>
      <GoalList goalsData={courseGoals} />
    </div>
  );
};

// class App extends React.Component {
//   render(){
//     return <h1 title="this is title"><span>This</span> is React</h1>
//   }
// }
export default App;
