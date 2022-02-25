import express from "express";
import { catchAsync } from "../../middlewares/errors";
import {
  checkLoginStatus,
  getUserInfo,
  login,
  logout,
  register,
} from "../controllers/userControllers";
import { validationSchemas } from "../../validationSchemas";
import { validateData } from "../../middlewares/validateData";
import { validateAuth } from "../../middlewares/validateAuth";

const router = express.Router();

router.post("/session", validateData(validationSchemas.login), catchAsync(login));
router.post("/", validateData(validationSchemas.register), catchAsync(register));

router.delete("/session", logout);
router.get("/session/me", validateAuth, checkLoginStatus);

router.get("/", validateAuth, catchAsync(getUserInfo));

export default router;
