import Separator from "../reusables/ui/Separator";
import "./style.css";
import TaskItem from "./TaskItem";
import useTaskManager from "../../hooks/useTaskManager";
import Filters from "../TaskFilters";

const FILTERS = ["all", "completed", "pending"];

const TaskList = () => {
  const { tasks, setFilter, filter } = useTaskManager();
  return (
    <>
      <div className="tasklist-wrapper">
        <Filters setFilter={setFilter} filters={FILTERS} selected={filter} />
        {tasks.length > 0 && (
          <p className="tasks-length">Total : {tasks.length}</p>
        )}
      </div>
      <div className="tasks-section">
        {tasks.length ? (
          <>
            <Separator />
            <div className="tasks-list">
              {tasks?.map((item) => (
                <TaskItem key={item.id} task={item} />
              ))}
            </div>
          </>
        ) : (
          <p className="tasks-not-found">No tasks found.</p>
        )}
      </div>
    </>
  );
};

export default TaskList;
