const mongoose = require('mongoose');

const attendeeSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

module.exports = mongoose.model('Attendee', attendeeSchema);
