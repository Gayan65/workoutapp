import express from "express";
import { createWorkout } from "../controllers/workoutController.js";

const router = express.Router();

//GET All workouts
router.get("/", (req, res) => {
    res.json({ msg: "GET All workouts" });
});

//GET a single workout
router.get("/:id", (req, res) => {
    res.json({ msg: "GET a single workout" });
});

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
