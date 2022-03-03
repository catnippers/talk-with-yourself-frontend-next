import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import {
  activateUser,
  addUserToken,
  createUser,
  findUserByEmail,
  findUserByToken,
} from "../services/userServices";
import { passwordRegex } from "../../validationSchemas";
import { sendEmail } from "../../middlewares/sendEmail";
import { mailOptions } from "../../constants";

export const login = async (req: Request, res: Response) => {
  const user = await findUserByEmail(req.body.email);

  if (!user) {
    return res.status(401).json({ message: "Incorrect login or password." });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    return res.status(401).json({ message: "Incorrect login or password." });
  }

  if (!user.isActive) {
    return res.status(400).json({ message: "Active your account!" });
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

  const token = crypto.randomBytes(16).toString("hex");

  const data = {
    email: req.body.email,
    subject: mailOptions.activate.subject,
    html: mailOptions.activate.html(req.body.email, token),
  };

  try {
    await sendEmail(data);
    const user = await createUser(req.body.email, hashedPassword);
    await addUserToken(user.id, token);
    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Oops, something went wrong, try again." });
  }
};

export const activateAccount = async (req: Request, res: Response) => {
  const user = await findUserByToken(req.body.token);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  if (user.isActive) {
    return res
      .status(400)
      .json({ message: "Your account has already been activated, please log in!" });
  }

  await activateUser(user.id);

  res.status(200).json({ message: "Your account has been activated!" });
};

export const logout = (req: Request, res: Response) => {
  req.session.destroy(err => {
    res.status(400).json({ message: err });
  });
};

export const checkLoginStatus = (req: Request, res: Response) => {
  res.status(200).json({ message: "Status: logged in!" });
};

export const getUserInfo = async (req: Request, res: Response) => {
  const data = Object.fromEntries(
    Object.entries(req.session.user!).filter(item => item[0] !== "password")
  );
  res.status(200).json(data);
};
