import prisma from '../util/prisma-client';

export async function createFood(kitchenId: number, foodName: string) {
  return  await prisma.food.create({
    data: {
      name: foodName,
      kitchen: {
        create: [
          { kitchen: { connect: { id: kitchenId } } },
        ],
      },
    },
  });
}

export async function getFoodById(foodId: number) {
  return  await prisma.food.findUnique({
    where: {id: foodId}
  });
}
export async function getFood() {
  return  await prisma.food.findMany();
}
