import express from "express";
import { UserRegister, getUserDashboard } from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserRegister);

router.post("/dashboard", verifyToken, getUserDashboard);

export default router;
