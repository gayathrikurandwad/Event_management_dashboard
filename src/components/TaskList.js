import React from 'react';

const TaskList = ({ tasks, onStatusUpdate }) => {
    const progress = (tasks.filter((task) => task.status === 'Completed').length / tasks.length) * 100;

return (
  <div>
    <h1>Task Tracker</h1>
    <div style={{ width: '100%', backgroundColor: '#ccc', height: '20px', borderRadius: '5px', marginBottom: '20px' }}>
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: 'green',
          height: '100%',
          borderRadius: '5px',
        }}
      />
    </div>
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          {task.name} - {new Date(task.deadline).toLocaleDateString()} - {task.status}
          <button onClick={() => onStatusUpdate(task._id, 'Completed')}>Mark Completed</button>
        </li>
      ))}
    </ul>
  </div>
);
      }

export default TaskList;
