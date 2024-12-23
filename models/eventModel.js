const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' }],
});

module.exports = mongoose.model('Event', eventSchema);
