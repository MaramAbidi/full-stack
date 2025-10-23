import React, { useState, createContext, useContext } from 'react';

// Création du contexte
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#222222',
        color: theme === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
        transition: 'background-color 0.2s, color 0.2s'
      }}>
        <div style={{ padding: 16 }}>
          <h3>Thème global : {theme}</h3>
          <ThemeToggle />
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ marginBottom: 10 }}>
      <p>Thème actuel : {theme}</p>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Passer en dark' : 'Passer en light'}
      </button>
    </div>
  );
}

export default ThemeContext;
