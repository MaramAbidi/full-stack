// client/src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onDelete, onToggle }) {
  if (!tasks.length) return <p>Aucune tâche.</p>;
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </ul>
  );
}
