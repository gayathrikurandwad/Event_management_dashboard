import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventManagementPage from './pages/EventManagementPage';
import AttendeeManagementPage from './pages/AttendeeManagementPage';
import TaskTrackerPage from './pages/TaskTrackerPage';
import Login from './pages/Login';
import Calendar from './components/Calendar';

function App() {
  const [token, setToken] = useState(null);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventManagementPage />} />
        <Route path="/attendees" element={<AttendeeManagementPage />} />
        <Route path="/tasks" element={<TaskTrackerPage />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
