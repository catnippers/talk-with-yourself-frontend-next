import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createUser } from "../services/userServices";

export const register = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = await createUser({
    ...req.body,
    password: hashedPassword,
  });

  res.status(201).json(user);
};
