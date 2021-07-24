// src/components/TaskList.stories.js

import React from "react";

import TaskList, { Tasksprops } from "./taskList";
import * as TaskStories from "./Task.stories";

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [
    (story: any) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
};

const Template = (args: Tasksprops) => <TaskList {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [
    { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
    { ...TaskStories.Default.args.task, id: "7", title: "Task 7" },
    { ...TaskStories.Default.args.task, id: "8", title: "Task 8" },
    { ...TaskStories.Default.args.task, id: "9", title: "Task 9" },
    { ...TaskStories.Default.args.task, id: "10", title: "Task 10" },
  ],
};

export const WithPinnedTasks: any = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading: any = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty: any = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
