import { Workout } from "../models/WorkoutModel.js";

// get all workouts

// get a single workout

// create a workout
export const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update a workout

// delete a workout
