import express from "express";
import { getPhoneProductByProductId } from "../controllers/phoneProductController.js";


const router = express.Router();

router.get("/", getPhoneProductByProductId)

export default router;