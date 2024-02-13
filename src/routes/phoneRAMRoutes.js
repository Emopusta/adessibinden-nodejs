import express from "express";
import { getAllPhoneRAMs } from "../controllers/phoneRAMController.js";

const router = express.Router();

router.get("/", getAllPhoneRAMs);

export default router;