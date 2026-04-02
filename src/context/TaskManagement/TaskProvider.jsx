import { useEffect, useState } from "react";
import TaskContext from "./TaskContext";

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    ...(JSON.parse(localStorage.getItem("tasks")) || []),
  ]);
  const [filter, setFilter] = useState("all");

  const filteredtasks =
    filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  const addTask = (title) => {
    const updatedTaskList = [
      ...tasks,
      { title, status: "pending", id: Date.now() },
    ];
    setTasks(updatedTaskList);
  };
  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  };
  const changeTaskStatus = (id, status) => {
    const modifiedTasks = tasks?.map((t) =>
      t.id === id ? { ...t, status } : t,
    );
    setTasks(modifiedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TaskContext.Provider
      value={{
        tasks: filteredtasks,
        deleteTask,
        changeTaskStatus,
        addTask,
        setFilter,
        filter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
