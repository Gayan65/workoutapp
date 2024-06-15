import mongoose from "mongoose";
import { User } from "../models/UserModel.js";

//user login function
export const userLogin = async (req, res) => {
    res.json({ mes: "user login", user: email, password: password });
};

//user signup function
export const userSignup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);
        res.status(200).json({ email, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
