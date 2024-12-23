import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('/api/events').then((response) => {
      const calendarEvents = response.data.map((event) => ({
        title: event.name,
        date: event.date,
      }));
      setEvents(calendarEvents);
    });
  }, []);

  return <FullCalendar plugins={[dayGridPlugin]} events={events} />;
}

export default Calendar;
