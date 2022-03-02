import { PrismaClient } from "@prisma/client";
import type { UserRegisterData } from "../../../../types";
const prisma = new PrismaClient();

export const createUser = (email: string, password: string) => {
  return prisma.user.create({
    data: { email, password },
  });
};

export const findUserByEmail = (email: string) => {
  return prisma.user.findFirst({ where: { email } });
};

export const findUserByToken = (token: string) => {
  return prisma.user.findFirst({
    where: { UserToken: { every: { token } } },
  });
};

export const activateUser = (id: number) => {
  return prisma.user.update({
    where: { id },
    data: { isActive: true, updatedAt: new Date() },
  });
};

export const addUserToken = (userId: number, token: string) => {
  return prisma.userToken.create({
    data: {
      userId,
      token,
    },
  });
};
