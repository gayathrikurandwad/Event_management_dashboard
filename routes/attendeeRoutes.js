const express = require('express');
const { getAttendees, addAttendee, deleteAttendee } = require('../controllers/attendeeController');

const router = express.Router();

router.route('/').get(getAttendees).post(addAttendee);
router.route('/:id').delete(deleteAttendee);

module.exports = router;
