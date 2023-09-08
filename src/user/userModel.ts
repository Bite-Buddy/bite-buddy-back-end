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

export async function getUsers() {
  return await prisma.user.findMany()
}

export async function getById(id: number) {
  return await prisma.user.findUnique({
    where: {
      id: id
    }
  })
}

export async function getBySupabaseId(supabase_id: string) {
  return await prisma.user.findUnique({
    where: {
      supabase_id: supabase_id
    }
  })
}

export async function deleteUserById(id: number) {
  return  await prisma.user.delete({
    where: {id: id}
  });
}