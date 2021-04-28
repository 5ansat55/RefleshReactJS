import React from "react";
import GoalList from "./components/GoalList";
import "./App.css";

// in the modern react use the functional component
const App = () => {
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList />
    </div>
  );
};

// class App extends React.Component {
//   render(){
//     return <h1 title="this is title"><span>This</span> is React</h1>
//   }
// }
export default App;
