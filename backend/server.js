import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import workoutRouter from "./routes/workouts.js";
import { Workout } from "./models/WorkoutModel.js";

//express app
const app = express();

//middleware
app.use(express.json()); // FOR ACCESSING THE BODY IN A POST REQUEST

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use("/api/workouts", workoutRouter);

//mongodb connection
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        //express server
        app.listen(process.env.PORT, () => {
            console.log(
                `DB Connected & Backend server is running on PORT : ${process.env.PORT}`
            );
        });
    })
    .catch((err) => console.log(err));
