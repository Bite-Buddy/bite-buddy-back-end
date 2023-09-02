import prisma from '../util/prisma-client';

interface IUser {
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
