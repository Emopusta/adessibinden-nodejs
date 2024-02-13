import express from "express";
import { deletePhoneProduct, getByIdDetailsForUpdatePhoneProduct, getPhoneProductByProductId } from "../controllers/phoneProductController.js";


const router = express.Router();

router.get("/", getPhoneProductByProductId);
router.get("/UpdateDetails", getByIdDetailsForUpdatePhoneProduct);
router.delete("/:ProductId", deletePhoneProduct);

export default router;