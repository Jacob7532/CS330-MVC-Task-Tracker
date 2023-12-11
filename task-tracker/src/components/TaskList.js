// /src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <strong>Task Name:</strong> {task.taskName} <br />
                        <strong>Status:</strong> {task.status} <br />
                        <strong>Urgency:</strong> {task.urgency} <br />
                        <strong>Start Date:</strong> {formatDate(task.startDate)} <br />
                        <strong>End Date:</strong> {formatDate(task.endDate)} <br />
                        <button onClick={() => onEditTask(index)}>Edit</button>
                        <button onClick={() => onDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};

export default TaskList;