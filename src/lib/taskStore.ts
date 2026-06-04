export type Task = {
    id: number
    title: string
    priority: number
    owner: number
    completed: boolean
  };


const tasks: Task[] = [];


function createTask(id: number , title: string, priority: number, owner: number) {
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

function getTaskById(id: number) {
  return tasks.find((task) => task.id === id);
}

function updateTask(id: number, updates: Partial<Omit<Task, "id">>): Task | null {
  const task = getTaskById(id);
  if (!task) {
    return null;
  }

  if (updates.title !== undefined) {
    task.title = updates.title;
  }

  if (updates.priority !== undefined) {
    task.priority = updates.priority;
  }

  if (updates.completed !== undefined) {
    task.completed = updates.completed;
  }

  return task;
}

function deleteTask(id: number) {
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return false;
  }

  tasks.splice(index, 1);
  return true;
}



export {createTask, 
   getAllTasks,
   getTaskById, 
   updateTask, 
   deleteTask};