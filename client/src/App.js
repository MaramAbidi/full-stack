// client/src/App.js
import React, { useState, useEffect } from 'react';
import API from './api';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchTasks = async () => {
    try {
      const res = await API.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleAdd = async () => {
    if (!newTask.trim()) return;
    try {
      const res = await API.post('/tasks', { title: newTask });
      setTasks(prev => [res.data, ...prev]);
      setNewTask('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (err) { console.error(err); }
  };

  const handleToggle = async (id) => {
    try {
      const res = await API.patch(`/tasks/${id}`);
      setTasks(prev => prev.map(t => t._id === id ? res.data : t));
    } catch (err) { console.error(err); }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem' }}>
      <h1>Liste des tâches</h1>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Ajouter une tâche"
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={handleAdd}>Ajouter</button>
      </div>
      <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}

export default App;
