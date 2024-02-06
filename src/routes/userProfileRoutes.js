import express from "express";
import { authorizeUser } from "../middlewares/authorizeUser.js";
import { getByUserIdUserProfile, createUserProfile } from "../controllers/userProfileController.js";

const router = express.Router();

router.get("/GetById/:userId", getByUserIdUserProfile);
router.post("/", createUserProfile);

export default router;