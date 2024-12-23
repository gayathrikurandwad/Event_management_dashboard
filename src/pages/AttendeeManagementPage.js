import React, { useEffect, useState } from 'react';
import AttendeeList from '../components/AttendeeList';
import AddAttendeeForm from '../components/AddAttendeeForm';
import { getAttendees, addAttendee } from '../api/attendeeApi';

const AttendeeManagementPage = () => {
    const [attendees, setAttendees] = useState([]);

    useEffect(() => {
        fetchAttendees();
    }, []);

    const fetchAttendees = async () => {
        const data = await getAttendees();
        setAttendees(data);
    };

    const handleAddAttendee = async (newAttendee) => {
        await addAttendee(newAttendee);
        fetchAttendees();
    };

    return (
        <div>
            <h1>Attendee Management</h1>
            <AddAttendeeForm onAddAttendee={handleAddAttendee} />
            <AttendeeList attendees={attendees} />
        </div>
    );
};

export default AttendeeManagementPage;
