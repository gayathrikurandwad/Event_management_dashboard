import React, { useState } from 'react';

const AddEventForm = ({ onAddEvent }) => {
    const [form, setForm] = useState({ name: '', description: '', location: '', date: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddEvent(form);
        setForm({ name: '', description: '', location: '', date: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
            <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
            <input name="date" type="date" value={form.date} onChange={handleChange} required />
            <button type="submit">Add Event</button>
        </form>
    );
};

export default AddEventForm;
