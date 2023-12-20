import express from "express";
import {getAllColors, createColor} from "../controllers/colorController.js"

const router = express.Router();


router.get("/get-colors", getAllColors);
router.post("/create-color", createColor);


export default router;