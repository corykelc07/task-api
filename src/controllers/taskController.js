import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  try{
    const { completed } = req.query;

      const filter =
        completed === 'true' ? true :
        completed === 'false' ? false :
        undefined;

    const tasks = await taskService.getAllTasks(filter);
    res.json(tasks);
  }catch(err){
    next(err);
  }
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
