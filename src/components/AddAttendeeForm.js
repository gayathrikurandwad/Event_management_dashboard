import React, { useState } from 'react';

const AddAttendeeForm = ({ onAddAttendee }) => {
    const [form, setForm] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddAttendee(form);
        setForm({ name: '', email: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <button type="submit">Add Attendee</button>
        </form>
    );
};

export default AddAttendeeForm;
