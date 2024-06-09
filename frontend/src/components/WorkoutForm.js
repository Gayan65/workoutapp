import { useState } from "react";

const WorkoutForm = () => {
    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(title, load, reps);
    };

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h1>Create Workout</h1>
            <label>Exercise Tile:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />
            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />
            <button>Submit</button>
        </form>
    );
};

export default WorkoutForm;
