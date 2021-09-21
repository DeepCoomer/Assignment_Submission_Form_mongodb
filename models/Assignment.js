const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    student: String,
    rollno: Number,
    year: String,
    email: String,
    drivelink: String,
    pdf: String,
}, { timestamps: true });

module.exports = new mongoose.model("Submission", AssignmentSchema);