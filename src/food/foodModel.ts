import prisma from '../util/prisma-client';

interface IFood {
  name: string,
  bought_on: Date,   
  updated_on: Date,
  inStock: boolean,
}

export async function createFood(kitchenId: number, food: IFood) {
  return await prisma.food.create({
    data: {
      ...food, // Spread the food object to include its properties
      kitchen: {
        connect: { id: kitchenId },
      },
    },
  });
}
export async function updateFoodById(foodId: number, foodUpdate: IFood) {
  return  await prisma.food.update({
    where: {
      id: foodId
    },
    data: foodUpdate
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

export async function deleteFoodById(foodId: number) {
  return  await prisma.food.delete({
    where: {id: foodId}
  });
}