import prisma from '../util/prisma-client';

interface IUser {
  supabase_id: string,
  email: string,
}

export async function createUser(user: IUser) {
  return await prisma.user.create({
    data: user
  })
}

export async function addKitchenRelationship(id: number, kitchen_id: number) {
  return await prisma.user.update({
    where: { id: id },
    data: {
      kitchens: {
        connect: { id: kitchen_id }
      }
    },
    include: {
      kitchens: true,
      invites: true
    }
  });
}

export async function getUsers() {
  return await prisma.user.findMany({
    include: { 
      kitchens: true,
      invites: true
     }
  })
}

export async function getById(id: number) {
  return await prisma.user.findUnique({
    where: {
      id: id
    },
    include: { 
      kitchens: true,
      invites: true
     }
  })
}

export async function getByEmail(email: string) {
  return await prisma.user.findUnique({
    where: {
      email: email
    },
    include: { 
      kitchens: true,
      invites: true
    }
  })
}

export async function getBySupabaseId(supabase_id: string) {
  return await prisma.user.findUnique({
    where: {
      supabase_id: supabase_id
    },
    include: { 
      kitchens: true,
      invites: true
     } 
  })
}

export async function deleteUserById(id: number) {
  return  await prisma.user.delete({
    where: {id: id}
  });
}