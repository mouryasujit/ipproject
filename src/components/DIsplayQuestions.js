import React from "react";
import data from "../assets/Data.json";

const DIsplayQuestions = ({ index }) => {
  let val = data[index];
  // console.log(val.statement1);

  return (
    <div>
      Question for this Round
      <ul>
        <h2>{val.statement1}</h2>
        <h2>{val.statement2}</h2>
        <h2>{val.statement3}</h2>
      </ul>
    </div>
  );
};

export default DIsplayQuestions;
