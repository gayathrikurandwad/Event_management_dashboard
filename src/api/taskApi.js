import axios from 'axios';

export const getTasks = async (eventId) => {
    const response = await axios.get(`/api/tasks/${eventId}`);
    return response.data;
};

export const updateTaskStatus = async (eventId, taskId, status) => {
    const response = await axios.patch(`/api/tasks/${eventId}/${taskId}`, { status });
    return response.data;
};
