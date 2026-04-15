import prisma from '../config/db.js';

export async function findAll(filter) {
  const where = {};

  if (filter === true) {
    where.completed = true;
  }

  else if (filter === false){
    where.completed = false;
  }

  return prisma.task.findMany({where,});
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
