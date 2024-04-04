import React from "react";

const TableComponent = ({ players, score }) => {
  console.log(score, "tabledata");

  return (
    <div>
      <h2>Players</h2>
      <table style={{ border: "1px solid black" }}>
        <tr>
          {players.map((player, index) => (
            <th key={index} style={{ border: "1px solid black" }}>
              {player}{" "}
            </th>
          ))}
        </tr>
        {players.map((player, index) => (
          <th style={{ border: "1px solid black" }} key={index}>
            {score[index] || 0}
          </th>
        ))}
      </table>
    </div>
  );
};

export default TableComponent;
