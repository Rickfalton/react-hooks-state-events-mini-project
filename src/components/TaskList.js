import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskList = tasks.map((task) => (
    <Task
      key={task.id} // Use a unique identifier if available
      text={task.text}
      category={task.category}
      onDelete={onDeleteTask} // Correct prop name
    />
  ));

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
