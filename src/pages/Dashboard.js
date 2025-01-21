// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import TaskList from '../components/Tasks/TaskList';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Load tasks from localStorage or API
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const addTask = (task) => {
        const updatedTasks = [...tasks, task];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return (
        <div className="dashboard">
            <h1>My Tasks</h1>
            <TaskList tasks={tasks} deleteTask={deleteTask} />
            <button onClick={() => addTask({ id: Date.now(), text: 'New Task' })}>
                Add Task
            </button>
        </div>
    );
};

export default Dashboard;
