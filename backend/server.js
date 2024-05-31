import express from "express";
import "dotenv/config";

//express app
const app = express();

// test get request
app.get("/", (req, res) => {
    res.json({ message: "running successfully!" });
});

//express server
app.listen(process.env.PORT, () => {
    console.log(`Backend server is running on PORT : ${process.env.PORT}`);
});
