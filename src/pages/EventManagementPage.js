import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';
import AddEventForm from '../components/AddEventForm';
import { getEvents, createEvent } from '../api/eventApi';
import { Link } from 'react-router-dom';




const EventManagementPage = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const data = await getEvents();
        setEvents(data);
    };

    const handleAddEvent = async (newEvent) => {
        await createEvent(newEvent);
        fetchEvents();
    };

    return (
        <div>
            <h1>Event Management</h1>
            <AddEventForm onAddEvent={handleAddEvent} />
            <EventList events={events} />
            <Link to="/calendar">View Calendar</Link>
        </div>
    );
};

export default EventManagementPage;
