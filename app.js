// Étape 2 : Configuration Express et EJS
const express = require('express');
const app = express();

// Définir EJS comme moteur de rendu
app.set('view engine', 'ejs');

// Servir les fichiers statiques (CSS, images, etc.)
app.use(express.static('public'));

// Route principale (page d’accueil)
app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d’accueil !');
});

// Définir une route pour la page de profil
app.get('/profile', (req, res) => {
  const user = {
    name: 'John Doe',
    age: 28,
    occupation: 'Software Engineer',
    hobbies: ['Coding', 'Gaming', 'Hiking']
  };
  res.render('profile', { user });
});

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`✅ Serveur en cours d'exécution sur http://localhost:${PORT}`)
);
