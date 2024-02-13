import express from "express";
import { getByIdDetailsForUpdatePhoneProduct, getPhoneProductByProductId } from "../controllers/phoneProductController.js";


const router = express.Router();

router.get("/", getPhoneProductByProductId);
router.get("/UpdateDetails", getByIdDetailsForUpdatePhoneProduct);

export default router;