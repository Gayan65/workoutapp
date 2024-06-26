import { Workout } from "../models/WorkoutModel.js";
import mongoose from "mongoose";

// get all workouts
export const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    res.status(200).json(workouts);
};

// get a single workout
export const getSingleWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "workout not found" });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({ error: "workout not found" });
    }

    res.status(200).json(workout);
};

// create a workout
export const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push("title");
    }

    if (!reps) {
        emptyFields.push("reps");
    }

    if (!load) {
        emptyFields.push("load");
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({
            error: "All the fields must be filed",
            emptyFields: emptyFields,
        });
    }

    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update a workout
export const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "workout not found" });
    }

    const workout = await Workout.findByIdAndUpdate(
        { _id: id },
        {
            ...req.body,
        }
    );

    if (!workout) {
        return res.status(404).json({ error: "workout not found" });
    }

    res.status(200).json(workout);
};

// delete a workout
export const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "workout not found" });
    }

    const workout = await Workout.findByIdAndDelete({ _id: id });

    if (!workout) {
        return res.status(404).json({ error: "workout not found" });
    }

    res.status(200).json(workout);
};
