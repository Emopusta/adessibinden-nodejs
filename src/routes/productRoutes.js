import express from "express";
import { getAllProducts, getByCreatorUserIdProducts, getByTitleProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/GetByCreator", getByCreatorUserIdProducts);
router.get("/GetByTitle", getByTitleProducts);

export default router;