// serveur1.js
const http = require('http');

const serveur = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end("Bonjour");
});

serveur.listen(3000, () => {
  console.log("Serveur en écoute sur http://localhost:3000");
});
