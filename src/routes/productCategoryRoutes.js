import express from "express";
import { getAllProductCategories } from "../controllers/productCategoryController.js"


const router = express.Router();

router.get("/", getAllProductCategories);


export default router;