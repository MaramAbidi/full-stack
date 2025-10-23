/* 
ex1:

import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId); // Nettoyage à la désinstallation
  }, []);

  return <p>Heure actuelle : {time.toLocaleTimeString()}</p>;
}

export default Timer;

usage in App.jsx :

import React from 'react';
import Timer from './Timer';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>Exercice 1 : useEffect - Timer</h1>
      <Timer />
    </div>
  );
}

export default App;




ex2:
import React, { useState, createContext, useContext } from 'react';

// Création du contexte
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', minHeight: '100vh', transition: '0.3s' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Thème actuel : {theme}</p>
      <button onClick={toggleTheme}>Changer le thème</button>
    </div>
  );
}



Usage in App.jsx:

import React from 'react';
import { ThemeProvider, ThemeToggle } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 20 }}>
        <h1>Exercice 2 : useContext - Thème</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;






ex3:

import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Erreur lors du chargement des utilisateurs');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>;

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;



Usage in App.jsx:
import React from 'react';
import UserList from './UserList';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>Exercice 3 : Appel API avec useEffect</h1>
      <UserList />
    </div>
  );
}

export default App;
*/
