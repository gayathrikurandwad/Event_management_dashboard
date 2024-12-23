import axios from 'axios';

export const getEvents = async () => {
    const response = await axios.get('/api/events');
    return response.data;
};

export const createEvent = async (event) => {
    const response = await axios.post('/api/events', event);
    return response.data;
};
