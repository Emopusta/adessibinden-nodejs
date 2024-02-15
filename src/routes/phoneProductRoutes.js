import express from "express";
import { createPhoneProduct, deletePhoneProduct, getByIdDetailsForUpdatePhoneProduct, getPhoneProductByProductId, updatePhoneProduct } from "../controllers/phoneProductController.js";


const router = express.Router();

router.get("/", getPhoneProductByProductId);
router.get("/UpdateDetails", getByIdDetailsForUpdatePhoneProduct);
router.delete("/:ProductId", deletePhoneProduct);
router.put("/", updatePhoneProduct);
router.post("/", createPhoneProduct);

export default router;