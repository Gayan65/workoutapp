import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const { Schema } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

//static signup method
userSchema.statics.signup = async function (email, password) {
    if (!email || !password) {
        throw Error("Fields can not be blank!");
    }

    if (!validator.isEmail(email)) {
        throw Error("Email is not valid!");
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("password is not strong!");
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("This email in use!");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = this.create({ email, password: hash });

    return user;
};

export const User = mongoose.model("User", userSchema);
