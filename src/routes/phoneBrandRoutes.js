import express from "express";
import { getAllPhoneBrands } from "../controllers/phoneBrandController.js";

const router = express.Router();

router.get("/", getAllPhoneBrands);

export default router;