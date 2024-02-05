import express from "express";
import { getPhoneProductByProductId } from "../controllers/phoneProductController.js";


const router = express.Router();

router.get("/:productId", getPhoneProductByProductId)

export default router;