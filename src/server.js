const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middlewares/auth");
require("dotenv").config();
connectDB();

app.use(cors({
    origin: ["http://localhost:5173", "https://todo-frontend-flax-one.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

const User = require("./models/User");
const Task = require("./models/Task");

function generateToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
}

app.get("/", (req, res) => {
    res.send("Server is running...");
});

app.post("/api/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email" });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name: name.trim(),
            email: email.trim(),
            password: hashPassword
        });
        res.json({
            message: "User creation Successful",
            token: generateToken(newUser._id),
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found,Please signup" });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Incorrect Password" });
        }
        res.json({
            token: generateToken(user._id),
            id: user._id,
            email: user.email,
            name: user.name,
            message: "Welcome back " + user.name
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.post("/api/profile", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if (!user) {
            return res.status(400).json({ message: "User not found,Please signup" });
        }
        res.json({
            email: user.email,
            name: user.name
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.post("/api/createtask", authMiddleware, async (req, res) => {
    try {
        const { title, description, priority, status, date } = req.body;
        if (!title || !description || !priority || !status) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const task = await Task.create({
            title,
            description,
            date,
            priority,
            status,
            userId: req.userId
        })
        res.json({
            message: "Task created Successfully",
            task
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get("/api/gettasks", authMiddleware, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.userId }).sort({ createdAt: -1 });
        res.json({
            message: "Tasks fetched Successfully",
            tasks
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

app.put("/api/edittask/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({ _id: id, userId: req.userId });
        if (!task) {
            return res.status(400).json({ message: "Task not found" });
        }
        const { title, description, priority, status, date } = req.body;
        if (title) {
            task.title = title;
        }
        if (description) {
            task.description = description;
        }
        if (priority) {
            task.priority = priority;
        }
        if (status) {
            task.status = status;
        }
        if (date) {
            task.date = date;
        }
        if (!task.userId) {
            task.userId = req.userId;
        }
        await task.save();
        res.json({
            message: "Task updated Successfully",
            task
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

app.delete("/api/deletetask/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOneAndDelete({ _id: id, userId: req.userId });
        if (!task) {
            return res.status(400).json({ message: "Task not found" });
        }
        res.json({
            message: "Task deleted Successfully",
            task
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});


