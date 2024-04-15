import React from "react";
import data from "../assets/Data.json";
import "./display.css"; // Import the CSS file

const DIsplayQuestions = ({ index }) => {
  let val = data[index];
  // console.log(val.statement1);

  return (
    <div className="containers text-center mt-4"> {/* Applying container class */}
      <div className="question ">
        <h6>Question for this Round</h6>
        <ul>
          <h2>{val.statement1}</h2>
          <h2>{val.statement2}</h2>
          <h2>{val.statement3}</h2>
        </ul>
      </div>
    </div>
  );
};

export default DIsplayQuestions;
