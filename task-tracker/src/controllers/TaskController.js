// /src/controllers/TaskController.js
import React, { useState } from 'react';
import TaskModel from '../models/TaskModel';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TaskController = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleAddTask = (newTask) => {
        const taskInstance = new TaskModel(
            newTask.taskName,
            newTask.status,
            newTask.urgency,
            newTask.startDate,
            newTask.endDate
        );

        setTasks([...tasks, taskInstance]);
    };

    const handleEditTask = (index) => {
        setSelectedTask(tasks[index]);
    };

    const handleUpdateTask = (updatedTask) => {
        const updatedTasks = [...tasks];
        updatedTasks[tasks.indexOf(selectedTask)] = updatedTask;
        setTasks(updatedTasks);
        setSelectedTask(null);
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleCancelEdit = () => {
        setSelectedTask(null);
    };

    const sortTasksByDate = () => {
        const sortedTasks = [...tasks].sort((a, b) => {
            const dateA = new Date(a.startDate);
            const dateB = new Date(b.startDate);
            return dateA - dateB;
        });
        setTasks(sortedTasks);
    };

    const sortTasksByUrgency = () => {
        const sortedTasks = [...tasks].sort((a, b) => a.urgency.localeCompare(b.urgency));
        setTasks(sortedTasks);
    };

    return (
        <div>
            <TaskForm
                onAddTask={handleAddTask}
                onUpdateTask={handleUpdateTask}
                selectedTask={selectedTask}
                onCancelEdit={handleCancelEdit}
            />
            <button onClick={sortTasksByDate}>Sort by Date</button>
            <button onClick={sortTasksByUrgency}>Sort by Urgency</button>
            <TaskList tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
        </div>
    );
};

export default TaskController;