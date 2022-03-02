import express from "express";
import { catchAsync } from "../../middlewares/errors";
import {
  checkLoginStatus,
  getUserInfo,
  login,
  logout,
  register,
  activateAccount,
} from "../controllers/userControllers";
import { validationSchemas } from "../../validationSchemas";
import { validateData } from "../../middlewares/validateData";
import { validateAuth } from "../../middlewares/validateAuth";

const router = express.Router();

router.get("/", validateAuth, catchAsync(getUserInfo));
router.post("/session", validateData(validationSchemas.login), catchAsync(login));
router.post("/", validateData(validationSchemas.register), catchAsync(register));

router.delete("/session", logout);
router.get("/session/me", validateAuth, checkLoginStatus);
router.post("/activate", catchAsync(activateAccount));

router.get("/", validateAuth, catchAsync(getUserInfo));

export default router;
