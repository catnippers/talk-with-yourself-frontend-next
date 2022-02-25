import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../services/userServices";
import { passwordRegex } from "../../validationSchemas";

// something

export const login = async (req: Request, res: Response) => {
  const user = await findUserByEmail(req.body.email);

  if (!user) {
    return res.status(401).json({ message: "Incorrect login or password." });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    return res.status(401).json({ message: "Incorrect login or password." });
  }

  req.session.isLogged = true;
  req.session.user = user;

  res.status(200).json({ message: "Logged In!" });
};

export const register = async (req: Request, res: Response) => {
  const isUserExists = await findUserByEmail(req.body.email);

  if (isUserExists) {
    return res.status(409).json({ message: "You already have an account. Login!" });
  }

  if (!passwordRegex.test(req.body.password)) {
    return res.status(400).json({
      message: "Błędne dane.",
    });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = await createUser(req.body.email, hashedPassword);

  res.status(201).json(user);
};

export const logout = (req: Request, res: Response) => {
  req.session.destroy(err => {
    res.status(400).json({ message: err });
  });
};

export const checkLoginStatus = (req: Request, res: Response) => {
  res.status(200).json({ message: "Status: zalogowany." });
};

export const getUserInfo = async (req: Request, res: Response) => {
  const data = Object.fromEntries(
    Object.entries(req.session.user!).filter(item => item[0] !== "password")
  );
  res.status(200).json(data);
};
