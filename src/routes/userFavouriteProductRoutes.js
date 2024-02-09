import express from "express";
import { getByUserIdUserFavouriteProduct } from "../controllers/userFavouriteProductController.js";


const router = express.Router();

router.get("/GetByUserId/:userId", getByUserIdUserFavouriteProduct)

export default router;