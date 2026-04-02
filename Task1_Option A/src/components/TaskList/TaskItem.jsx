import React, { useState } from "react";
import Separator from "../reusables/ui/Separator";
import useTaskManager from "../../hooks/useTaskManager";

const TaskItem = ({ task }) => {
  const { deleteTask, changeTaskStatus } = useTaskManager();

  const toggleTaskStatus = (e) => {
    const status = e.target.checked ? "completed" : "pending";
    changeTaskStatus(task.id, status);
  };
  const completed = task.status === "completed";

  return (
    <>
      <div className="task">
        <label
          htmlFor={task.id}
          className="flex gap-4"
          style={{ cursor: "pointer" }}
          title="Mark as complete"
        >
          <input
            type="checkbox"
            checked={completed}
            id={task.id}
            onChange={toggleTaskStatus}
          />
          <p
            style={{
              opacity: completed ? 0.4 : 1,
              wordBreak: "break-word",
              width: "90%",
              textDecoration: completed ? "line-through" : "none",
            }}
          >
            {task.title}
          </p>
        </label>
        <button onClick={() => deleteTask(task.id)} className="delete-button">
          Delete
        </button>
      </div>
      <Separator />
    </>
  );
};

export default TaskItem;
