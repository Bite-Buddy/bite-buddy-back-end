import prisma from '../util/prisma-client';

interface IFoodUpdate {
  name?: string,
  bought_on?: Date,   
  updated_on?: Date
}

export async function createFood(kitchenId: number, foodName: string, boughtOn: Date) {
  return await prisma.food.create({
    data: {
      name: foodName,
      bought_on: boughtOn,
      kitchen: {
        connect: {
          id: kitchenId
        }
      }
    }
  });
}

export async function updateFoodById(foodId: number, foodUpdate: IFoodUpdate) {
  return await prisma.food.update({
    where: {
      id: foodId
    },
    data: foodUpdate
  });
}

export async function getFoodById(foodId: number) {
  return await prisma.food.findUnique({
    where: { id: foodId }
  });
}

export async function getFood() {
  return await prisma.food.findMany();
}

export async function deleteFoodById(foodId: number) {
  return await prisma.food.delete({
    where: { id: foodId }
  });
}