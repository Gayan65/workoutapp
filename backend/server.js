import express from "express";
import "dotenv/config";
import workoutRouter from "./routes/workouts.js";

//express app
const app = express();

//middleware
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});

app.use("/api/workouts", workoutRouter);

//express server
app.listen(process.env.PORT, () => {
    console.log(`Backend server is running on PORT : ${process.env.PORT}`);
});
