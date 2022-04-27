import React from "react";

export default function JobPositionTable(props) {
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>ID</th>
          <th>Job Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.jobPositions.map((jp) => (
          <tr key={jp.id}>
            <th>{jp.id}</th>
            <td>{jp.jobTitle}</td>
            <td>
              <button onClick={() => props.editCallback(jp)}>Edit</button>
              <button onClick={() => props.deleteCallback(jp.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
