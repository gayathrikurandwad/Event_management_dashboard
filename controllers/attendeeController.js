const Attendee = require('../models/attendeeModel');

const getAttendees = async (req, res) => {
    try {
        const attendees = await Attendee.find().populate('tasks');
        res.status(200).json(attendees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addAttendee = async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    try {
        const attendee = new Attendee({ name, email });
        const savedAttendee = await attendee.save();
        res.status(201).json(savedAttendee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAttendee = async (req, res) => {
    try {
        await Attendee.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Attendee deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAttendees, addAttendee, deleteAttendee };
