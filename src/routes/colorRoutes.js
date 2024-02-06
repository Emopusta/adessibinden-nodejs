import express from "express";
import {getAllColors, createColor} from "../controllers/colorController.js"
import { authorizeUser } from "../middlewares/authorizeUser.js";

const router = express.Router();

router.get("/", authorizeUser, getAllColors);
router.post("/create-color", createColor);

export default router;