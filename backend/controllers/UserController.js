import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";

//create jwt
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//user login function
export const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        //create token
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//user signup function
export const userSignup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);

        //create token
        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
