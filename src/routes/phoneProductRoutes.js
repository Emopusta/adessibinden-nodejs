import express from "express";
import { deletePhoneProduct, getByIdDetailsForUpdatePhoneProduct, getPhoneProductByProductId, updatePhoneProduct } from "../controllers/phoneProductController.js";


const router = express.Router();

router.get("/", getPhoneProductByProductId);
router.get("/UpdateDetails", getByIdDetailsForUpdatePhoneProduct);
router.delete("/:ProductId", deletePhoneProduct);
router.put("/", updatePhoneProduct);

export default router;