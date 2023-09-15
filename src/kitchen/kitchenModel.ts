import prisma from '../util/prisma-client';

export async function createKitchen(userId: number, name: string) {
  return  await prisma.kitchen.create({
    data: {
      name: name,
      users: {
        connect: {
          id: userId
        }
      }
    }
  });
}

export async function addUserRelationship(id: number, user_id: number) {
  return await prisma.kitchen.update({
    where: { id: id },
    data: {
      users: {
        connect: { id: user_id }
      }
    },
    include: {
      users: true,
    }
  });
}

export async function updateKitchenById(kitchenId: number, name: string) {
  return  await prisma.kitchen.update({
    where: {
      id: kitchenId
    },
    data: {name: name}
  });
}

export async function deleteKitchen(kitchenId: number) {
  return  await prisma.kitchen.delete({
    where: {id: kitchenId}
  });
}


export async function getUsersByKitchen(kitchenId: number) {
  return  await prisma.user.findMany({
    where: {
      kitchens: {
        some: {
          id: kitchenId
        }
      }
    }
  });
}

export async function getById(kitchenId: number) {
  return  await prisma.kitchen.findUnique({
    where: { id: kitchenId },
    include: { food_list: true }
  });
}

export async function getKitchens() {
  return  await prisma.kitchen.findMany();
}