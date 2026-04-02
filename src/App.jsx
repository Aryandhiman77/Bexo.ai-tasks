import { useState } from "react";
import Filters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskManagement/TaskProvider";
import "./styles/global.css";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <TaskProvider>
      <div className="box">
        <h1 className="app-heading">Todo App</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
