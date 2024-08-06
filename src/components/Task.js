import React from "react";

function Task({ category, text, onDelete }) {
  const handleDelete = () => {
    onDelete(); // Call the delete function passed as a prop
  };

  return (
    <div className="task">
      <div className="label">{category}</div> {/* Display the task's category */}
      <div className="text">{text}</div> {/* Display the task's text */}
      <button className="delete" onClick={handleDelete}>X</button> {/* Attach onClick event */}
    </div>
  );
}

export default Task;
