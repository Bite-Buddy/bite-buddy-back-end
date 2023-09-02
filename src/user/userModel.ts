import prisma from '../util/prisma-client';

interface IUser {
  email: string,
}

export async function createNewUser(user: IUser) {
  return await prisma.user.create({
    data: user
  })
}

export async function getUsers() {
  return await prisma.user.findMany()
}

