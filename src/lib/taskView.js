function printTask(task) {
  console.log(
    `#${task.id} ${task.title} | priority=${task.priority} | completed=${task.completed} | owner=${task.owner}`,
  );
}

function printTasks(tasks) {
  console.log("\nCurrent Tasks:");
  if (tasks.length === 0) {
    console.log("(none)");
    return;
  }

  tasks.forEach((task) => printTask(task));
}

module.exports = {
  printTask,
  printTasks,
};
