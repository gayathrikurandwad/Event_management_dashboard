import React from 'react';

const EventList = ({ events }) => {
    return (
        <ul>
            {events.map(event => (
                <li key={event._id}>
                    {event.name} - {event.location} - {new Date(event.date).toLocaleDateString()}
                </li>
            ))}
        </ul>
    );
};

export default EventList;
