import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "./lib/taskStore";


import {
  printTask, 
  printTasks
} from "./lib/taskView";


console.log("JavaScript CRUD baseline with intentional bugs\n");

createTask(1, "Set up repo", 1, 101);
createTask(2, "Write docs", 2, 102);
createTask(3, "Prepare demo", 1, 103); // Intentional type inconsistency.

printTasks(getAllTasks());

console.log("\nRead Task #2:");
const taskTwo = getTaskById(2); // Intentional string ID call.
if (taskTwo) {
  printTask(taskTwo);
}

console.log("\nUpdate Task #1:");
const updated = updateTask(1, { completed: true, priority: 3});
if (updated) {
  printTask(updated);
}

console.log("\nDelete Task #1 (bug demo):");
const deleted = deleteTask(1);
console.log("Deleted?", deleted);

printTasks(getAllTasks());

console.log("\nLesson 1 goal: fix these JavaScript bugs before TypeScript conversion.");
