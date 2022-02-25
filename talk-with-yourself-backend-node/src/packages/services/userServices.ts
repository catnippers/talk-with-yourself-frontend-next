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
