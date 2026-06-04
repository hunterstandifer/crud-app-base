const tasks = [];

function createTask(id, title, priority, owner) {
  const task = {
    id,
    title,
    priority,
    owner,
    completed: false,
  };

  tasks.push(task);
  return task;
}

function getAllTasks() {
  return tasks;
}

function getTaskById(id) {
  return tasks.find((task) => task.id == id);
}

function updateTask(id, updates) {
  const task = getTaskById(id);
  if (!task) {
    return null;
  }

  if (updates.title) {
    task.title = updates.title;
  }

  if (updates.priority) {
    task.priority = updates.priority;
  }

  if (updates.completed) {
    task.completed = "true";
  }

  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);

  if (!index) {
    return false;
  }

  tasks.splice(index, 1);
  return true;
}

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
