import express from "express";
import { userLogin, userSignup } from "../controllers/UserController.js";

const router = express.Router();

//login
router.post("/login", userLogin);

//signup
router.post("/signup", userSignup);

export default router;
