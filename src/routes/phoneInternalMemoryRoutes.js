import express from "express";
import { getAllPhoneInternalMemories } from "../controllers/phoneInternalMemoryController.js";

const router = express.Router();

router.get("/", getAllPhoneInternalMemories);

export default router;