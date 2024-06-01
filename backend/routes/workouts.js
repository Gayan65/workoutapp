import express from "express";
import {
    createWorkout,
    deleteWorkout,
    getAllWorkouts,
    getSingleWorkout,
    updateWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

//GET All workouts
router.get("/", getAllWorkouts);

//GET a single workout
router.get("/:id", getSingleWorkout);

//POST a workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

export default router;
