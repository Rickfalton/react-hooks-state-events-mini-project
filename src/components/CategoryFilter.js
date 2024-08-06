import React, { useState } from "react";
import TaskList from "./TaskList"; // Adjust the import according to your folder structure

function App() {
  const [tasks] = useState([
    { id: 1, category: "Work", text: "Finish the report" },
    { id: 2, category: "Personal", text: "Buy groceries" },
    { id: 3, category: "Home", text: "Clean the house" },
    { id: 4, category: "Work", text: "Email the client" },
    { id: 5, category: "Personal", text: "Schedule a dentist appointment" },
  ]);

  // Define categories
  const categories = ["All", "Work", "Personal", "Home"];

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} categories={categories} /> {/*to Pass all the tasks and categories */}
    </div>
  );
}

export default App;
