import React from "react";
import PropTypes from "prop-types";

function Task({ category, text, onDelete }) {
  const handleDelete = () => {
    onDelete(text); // Pass the task text to the delete function
  };

  return (
    <div className="task">
      <div className="label">{category}</div> {/* Display the task's category */}
      <div className="text">{text}</div> {/* Display the task's text */}
      <button className="delete" onClick={handleDelete} aria-label={`Delete task: ${text}`}>
        X
      </button> {/* Attach onClick event with accessibility label */}
    </div>
  );
}

// Define prop types for better validation
Task.propTypes = {
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
