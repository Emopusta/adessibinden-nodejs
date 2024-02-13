import express from "express";
import { getByBrandIdPhoneModel } from "../controllers/phoneModelController.js";

const router = express.Router();

router.get("/GetByBrandId", getByBrandIdPhoneModel);

export default router;