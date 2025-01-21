
// src/components/Tasks/TaskItem.js
import React from 'react';

const TaskItem = ({ task, deleteTask }) => (
    <li className="task-item">
        <span>{task.text}</span>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
);

export default TaskItem;
