import express from "express";
import { login, logout, refreshToken, register } from "../controllers/authController.js";
import { authorizeUser } from "../middlewares/authorizeUser.js";


const router = express.Router();


router.post("/Login", login);
router.post("/Register", register);
router.post("/Logout", authorizeUser,  logout);
router.get("/RefreshToken", refreshToken);



export default router;