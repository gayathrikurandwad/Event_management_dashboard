import axios from 'axios';

export const getAttendees = async () => {
    const response = await axios.get('/api/attendees');
    return response.data;
};

export const addAttendee = async (attendee) => {
    const response = await axios.post('/api/attendees', attendee);
    return response.data;
};
