import React from "react";
import "./GoalList.css";

const GoalList = ({goalsData}) => {
    console.log(goalsData);
  return (
    <ul className="goal-list">
    {goalsData.map(item => <li key={item.id}>{item.text}</li> )}
      
    </ul>
  );
};

export default GoalList;
