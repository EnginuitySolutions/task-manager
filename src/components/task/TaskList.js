// src/components/Tasks/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask }) => {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
            ))}
        </ul>
    );
};

export default TaskList;
