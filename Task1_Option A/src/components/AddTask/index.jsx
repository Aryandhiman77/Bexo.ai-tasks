import { useState } from "react";
import useTaskManager from "../../hooks/useTaskManager";

const AddTask = () => {
  const [task, setTask] = useState("");
  const { addTask } = useTaskManager();

  const handleOnChange = (e) => {
    setTask(e.target.value.toString());
  };
  const handleSaveTask = (e) => {
    e.preventDefault();
    if (task === "") {
      document.getElementById("task-input").style.border = "2px solid red";
      return;
    }
    document.getElementById("task-input").style.border = "1px solid gray";
    addTask(task);
    setTask("");
  };
  return (
    <form className="task-input-row flex gap-4" onSubmit={handleSaveTask}>
      <input
        id="task-input"
        type="text"
        className="text-input"
        name="tasks"
        required
        title="Enter Task"
        placeholder="Add a new task..."
        onChange={handleOnChange}
        value={task}
      />
      <button
        className="button text-white rounded-sm"
        type="submit"
        disabled={task.length === 0}
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
