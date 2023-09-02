import prisma from '../util/prisma-client';


export async function createKitchen(userId: number) {
  return  await prisma.kitchen.create({
    data: {
      users: {
        create: [
          { user: { connect: { id: userId } } },
        ],
      },
    },
  });
}

export async function deleteKitchen(kitchenId: number) {
  return  await prisma.kitchen.delete({
    where: {id: kitchenId}
  });
}