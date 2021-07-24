import React from "react";
import { TaskInterface } from "../interfaces/task.interface";
import Task from "./task";

export interface Tasksprops {
  loading?: boolean;
  tasks: TaskInterface[];
  onPinTask?: (id: string) => void;
  onArchiveTask?: (id: string) => void;
  onUnPinTask?: (id: string) => void;
}
const TaskList: React.FC<Tasksprops> = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
  onUnPinTask,
}) => {
  const events = {
    onPinTask,
    onArchiveTask,
    onUnPinTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return <div className="list-items">{LoadingRow}</div>;
  }
  if (tasks?.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  ];
  console.log(tasksInOrder);

  return (
    <div style={{boxShadow:"10px 20px 30px 30px #888888"}} className="max-w-xl mx-auto bg-gray-200 p-4 my-6 rounded-md  ">
      {!!tasksInOrder &&
        tasksInOrder.map((task) => (
          <Task key={task.id} task={task} {...events} />
        ))}
    </div>
  );
};

export default TaskList;
