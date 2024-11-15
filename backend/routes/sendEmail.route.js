import { sendEmail } from "../controllers/sendEmail.controller.js";
import { Router } from "express";

const router = Router();

router.post('/contact', sendEmail);

export default router;
