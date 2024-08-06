import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]); // Use functional update for better performance
  }

  function handleDeleteTask(deletedTaskText) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.text !== deletedTaskText)); // Use functional update
  }

  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <div className="tasks">
        <h5>Tasks</h5>
        <NewTaskForm
          categories={CATEGORIES.filter((cat) => cat !== "All")}
          onTaskFormSubmit={handleAddTask}
        />
        <TaskList onDeleteTask={handleDeleteTask} tasks={visibleTasks} />
      </div>
    </div>
  );
}

export default App;
