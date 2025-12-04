const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low",
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["todo", "inprogress", "done"],
        default: "todo",
        required: true
    }
})

module.exports = mongoose.model("Task", taskSchema);

