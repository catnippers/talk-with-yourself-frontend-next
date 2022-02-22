import express from "express";
import { catchAsync } from "../middlewares/errors";
import { register } from "../controllers/userControllers";

const router = express.Router();

router.get("/", (req, res) => res.send("HOME PAGE"));
router.post("/register", catchAsync(register));
// router.get("/register", (req, res) => res.send("HEJ"));

export default router;
