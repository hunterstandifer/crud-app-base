import { Task, tasks } from "./taskStore";

function printTask(task : Task): void {
  console.log(
    `#${task.id} ${task.title} | priority=${task.priority} | completed=${task.completed} | owner=${task.owner}`,
  );
}

function printTasks(tasks : Task[]): void {
  console.log("\nCurrent Tasks:");
  if (tasks.length === 0) {
    console.log("(none)");
    return;
  }

  tasks.forEach((task : Task) => printTask(task));
}

export {
  printTask,
  printTasks
};
