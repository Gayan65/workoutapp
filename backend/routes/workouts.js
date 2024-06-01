import express from "express";
import {
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

//GET All workouts
router.get("/", getAllWorkouts);

//GET a single workout
router.get("/:id", getSingleWorkout);

//POST a workout
router.post("/", createWorkout);

//DELETE a workout
router.delete("/:id", (req, res) => {
    res.json({ msg: "DELETE a workout" });
});

//UPDATE a workout
router.patch("/:id", (req, res) => {
    res.json({ msg: "UPDATE a workout" });
});

export default router;
