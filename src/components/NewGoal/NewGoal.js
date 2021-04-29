import React, { useState } from "react";
import "./NewGoal.css";
// import NewGoalModal from "./model/NewGoal";


const NewGoal = ({ onAddGoal }) => {
    
//   const [inputValue, setInputValue] = useState("");
  let enteredText;
  const addGoalHandler = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    onAddGoal(newGoal);
    enteredText ="";
  };

  const textChangeHandler = (event) => {
    // setInputValue(event.target.value);
    enteredText = event.target.value;
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input
        name="newGoal"
        aria-label="newGoal"
        placeholder="New Goal"
        type="text"
        value={enteredText}
        onChange={textChangeHandler}
        // value={inputValue}
      ></input>
      <button type="submit">Add Goals</button>
    </form>
  );
};

export default NewGoal;
