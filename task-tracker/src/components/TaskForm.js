// /src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onAddTask, onUpdateTask, selectedTask, onCancelEdit }) => {
    const [taskName, setTaskName] = useState('');
    const [status, setStatus] = useState('not started');
    const [urgency, setUrgency] = useState('low');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        if (selectedTask) {
            setTaskName(selectedTask.taskName);
            setStatus(selectedTask.status);
            setUrgency(selectedTask.urgency);
            setStartDate(selectedTask.startDate);
            setEndDate(selectedTask.endDate);
        }
    }, [selectedTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = {
            taskName,
            status,
            urgency,
            startDate,
            endDate,
        };

        if (selectedTask) {
            onUpdateTask({ ...selectedTask, ...taskData });
        } else {
            onAddTask(taskData);
        }

        setTaskName('');
        setStatus('not started');
        setUrgency('low');
        setStartDate('');
        setEndDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task Name:
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
            </label>

            <label>
                Status:
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Enter status" />
            </label>

            <label>
                Urgency:
                <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>

            <label>
                Start Date:
                <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="MM-DD-YYYY" />
            </label>

            <label>
                End Date:
                <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="MM-DD-YYYY" />
            </label>

            <button type="submit">{selectedTask ? 'Update Task' : 'Add Task'}</button>

            {selectedTask && (
                <button type="button" onClick={onCancelEdit}>
                    Cancel Edit
                </button>
            )}
        </form>
    );
};

export default TaskForm;