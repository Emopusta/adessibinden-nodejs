import express from "express";
import { deleteUserFavouriteProduct, getByProductAndUserIdUserFavouriteProduct, getByUserIdUserFavouriteProduct, addUserFavouriteProduct } from "../controllers/userFavouriteProductController.js";


const router = express.Router();

router.get("/GetByUserId/:userId", getByUserIdUserFavouriteProduct)
router.get("/GetByProductIdAndUserId/:userId/:productId", getByProductAndUserIdUserFavouriteProduct)
router.delete("/:userId/:productId", deleteUserFavouriteProduct)
router.post("/", addUserFavouriteProduct)

export default router;