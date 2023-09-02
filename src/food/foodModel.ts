import prisma from '../util/prisma-client';

export async function getFoodById(foodId: number) {
  return  await prisma.food.findUnique({
    where: {id: foodId}
  });
}
export async function getFood() {
  return  await prisma.food.findMany();
}
