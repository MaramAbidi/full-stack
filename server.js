const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // pour lire les données du formulaire
app.use(express.static('public'));

// Définir EJS comme moteur de rendu
app.set('view engine', 'ejs');

// --- Données initiales ---
let tasks = [
  { id: 1, title: 'Apprendre Express', done: false },
  { id: 2, title: 'Créer une application de démonstration', done: false },
];

// --- Routes principales ---
app.get('/', (req, res) => {
  res.render('index', { user: 'Maram Abidi' }); // Ton nom ici
});

app.get('/about', (req, res) => {
  res.render('about', { name: 'Maram Abidi' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { email: 'maram.abidi@example.com' });
});

// --- Page des tâches ---
app.get('/tasks', (req, res) => {
  res.render('tasks', { tasks, total: tasks.length });
});

// --- API JSON ---
// Récupérer toutes les tâches
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Ajouter une nouvelle tâche avec validation
app.post('/api/tasks', (req, res) => {
  const title = req.body.title?.trim();
  if (!title) {
    return res.status(400).json({ error: 'Le titre de la tâche est requis.' });
  }
  const newTask = { id: tasks.length + 1, title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Démarrer le serveur
app.listen(PORT, () =>
  console.log(`🚀 Serveur en cours d'exécution sur http://localhost:${PORT}`)
);
