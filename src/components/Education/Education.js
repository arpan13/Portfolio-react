import React from "react";
import "./Education.css";
function Education() {
  return (
    <div className="table__education">
      <table>
        <tr>
          <th>Qualification</th>
          <th>University</th>
          <th>Marks</th>
        </tr>
        <tr>
          <td>10th Standard</td>
          <td>West Board of Scecondary Education</td>
          <td>83.5%</td>
        </tr>
        <tr>
          <td>12th Standard</td>
          <td>West Bengal Council of Higher Scecondary Education</td>
          <td>88.2%</td>
        </tr>
        <tr>
          <td>Electronics and Communication Engineering,BTech</td>
          <td>SRM Institute of Science and Technology</td>
          <td>93%</td>
        </tr>
      </table>
    </div>
  );
}

export default Education;
