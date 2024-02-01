import express from "express";
import { login, logout, refreshToken, register } from "../controllers/authController.js";
import { authorizeUser } from "../middlewares/authorizeUser.js";


const router = express.Router();


router.post("/login", login);
router.post("/register", register);
router.post("/logout", authorizeUser,  logout);
router.get("/RefreshToken", refreshToken);



export default router;