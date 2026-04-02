import React, { useContext } from "react";
import TaskContext from "../context/TaskManagement/TaskContext";

const useTaskManager = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("TaskContext must be inside Task Provider");
  }
  return context;
};

export default useTaskManager;
