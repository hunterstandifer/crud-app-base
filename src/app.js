const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("./lib/taskStore");
const { printTask, printTasks } = require("./lib/taskView");

console.log("JavaScript CRUD baseline with intentional bugs\n");

createTask(1, "Set up repo", 1, 101);
createTask(2, "Write docs", 2, 102);
createTask(3, "Prepare demo", "high", 103);

printTasks(getAllTasks());

console.log("\nRead Task #2:");
const taskTwo = getTaskById("2");
if (taskTwo) {
  printTask(taskTwo);
}

console.log("\nUpdate Task #1:");
const updated = updateTask(1, { completed: true, priority: "urgent" });
if (updated) {
  printTask(updated);
}

console.log("\nDelete Task #1 (bug demo):");
const deleted = deleteTask(1);
console.log("Deleted?", deleted);

printTasks(getAllTasks());

console.log(
  "\nLesson 1 goal: fix these JavaScript bugs before TypeScript conversion.",
);
