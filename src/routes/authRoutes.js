import express from "express";
import { login, logout, register } from "../controllers/authController.js";
import { authorizeUser } from "../middlewares/authorizeUser.js";


const router = express.Router();


router.post("/login", login);
router.post("/register", register);
router.post("/logout", authorizeUser,  logout);



export default router;