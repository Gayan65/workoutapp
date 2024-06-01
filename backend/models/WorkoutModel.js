import mongoose, { model } from "mongoose";

//create schema
const { Schema } = mongoose;

const workoutSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        reps: {
            type: Number,
            required: true,
        },
        load: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Workout = mongoose.model("Workout", workoutSchema);
