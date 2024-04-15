import React from "react";
import "./table.css"; // Import the CSS file

const TableComponent = ({ players, score }) => {
  console.log(score, "tabledata");

  return (
    <div className="container2"> {/* Applying container class */}
      <h2>Players</h2>
      <table> {/* Applying table class */}
        <tr>
          {players.map((player, index) => (
            <th key={index}>{player}</th>
          ))}
        </tr>
        {players.map((player, index) => (
          <td key={index}>{score[index] || 0}</td>
        ))}
      </table>
    </div>
  );
};

export default TableComponent;
