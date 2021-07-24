import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pinTask, unPinTask, archive } from "../lib/redux";
import { TaskInterface } from "../interfaces/task.interface";
//components
import AddTask from "./addTask";
import TaskList from "./taskList";

const InboxScreen = () => {
  const task = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(task);

  const onPinTask = (id: string) => {
    dispatch(pinTask({ id: id }));
  };
  const onArchiveTask = (id: string) => {
    dispatch(archive({ id: id }));
  };
  const onUnPinTask = (id: string) => {
    dispatch(unPinTask({ id: id }));
  };
  return (
    <div>
      <TaskList
        tasks={task as TaskInterface[]}
        onPinTask={onPinTask}
        onArchiveTask={onArchiveTask}
        onUnPinTask={onUnPinTask}
      />
      <AddTask />
   
    </div>
  );
};

export default InboxScreen;
