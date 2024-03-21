import express from "express";
import {getAllColors, createColor} from "../controllers/colorController.js"
import { authorizeUser } from "../middlewares/authorizeUser.js";
import { authorize } from "../middlewares/authorize.js";

const router = express.Router();

router.get("/",  authorizeUser, authorize("Admin"), getAllColors);
router.post("/create-color", createColor);

export default router;