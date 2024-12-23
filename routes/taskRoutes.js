const express = require('express');
const { getTasks, createTask, updateTaskStatus } = require('../controllers/taskController');

const router = express.Router();

router.route('/:eventId').get(getTasks).post(createTask);
router.route('/:eventId/:taskId').patch(updateTaskStatus);

module.exports = router;
