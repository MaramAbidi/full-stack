// client/src/components/TaskItem.js
import React from 'react';

export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '8px 12px', borderBottom: '1px solid #eee'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task._id)} />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
      </div>
      <button onClick={() => onDelete(task._id)}>Supprimer</button>
    </li>
  );
}
