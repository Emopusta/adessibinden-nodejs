import express from "express";
import { authorizeUser } from "../middlewares/authorizeUser.js";
import { getByUserIdUserProfile, createUserProfile, updateUserProfile } from "../controllers/userProfileController.js";

const router = express.Router();

router.get("/GetById", getByUserIdUserProfile);
router.post("/", createUserProfile);
router.put("/", updateUserProfile);

export default router;