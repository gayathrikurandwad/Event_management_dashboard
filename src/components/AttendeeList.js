import React from 'react';

const AttendeeList = ({ attendees }) => {
    return (
        <ul>
            {attendees.map(attendee => (
                <li key={attendee._id}>
                    {attendee.name} - {attendee.email}
                </li>
            ))}
        </ul>
    );
};

export default AttendeeList;
