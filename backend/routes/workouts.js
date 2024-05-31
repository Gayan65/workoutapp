import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ msg: "running successfully  !" });
});

export default router;
