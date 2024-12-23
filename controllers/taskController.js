const Task = require('../models/taskModel');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ event: req.params.eventId }).populate('attendee');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTask = async (req, res) => {
    const { name, deadline, attendee } = req.body;

    if (!name || !deadline || !attendee) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const task = new Task({ name, deadline, attendee, event: req.params.eventId });
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTaskStatus = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, { status: req.body.status }, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getTasks, createTask, updateTaskStatus };
