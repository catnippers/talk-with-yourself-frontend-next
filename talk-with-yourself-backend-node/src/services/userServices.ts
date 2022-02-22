import { PrismaClient } from "@prisma/client";
import type { UserRegisterData } from "../../../types";
const prisma = new PrismaClient();

export const createUser = ({ email, password }: UserRegisterData) => {
  return prisma.user.create({
    data: { email, password },
  });
};
