import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import { getTasks, updateTaskStatus } from '../api/taskApi';

const TaskTrackerPage = () => {
    const [tasks, setTasks] = useState([]);
    const eventId = "123"; // Replace with dynamic ID based on your requirements

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const data = await getTasks(eventId);
        setTasks(data);
    };

    const handleStatusUpdate = async (taskId, status) => {
        await updateTaskStatus(eventId, taskId, status);
        fetchTasks();
    };

    return (
        <div>
            <h1>Task Tracker</h1>
            <TaskList tasks={tasks} onStatusUpdate={handleStatusUpdate} />
        </div>
    );
};

export default TaskTrackerPage;
