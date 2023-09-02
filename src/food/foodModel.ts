import prisma from '../util/prisma-client';

export async function getFood() {
  return  await prisma.food.findMany();
}
