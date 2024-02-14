import express from "express";
import { getAllProducts, getByCreatorUserIdProducts } from "../controllers/productController.js";


const router = express.Router();

router.get("/", getAllProducts);
router.get("/GetByCreator", getByCreatorUserIdProducts);


export default router;