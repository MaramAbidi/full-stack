const http = require('http');

const port = process.argv[2] || 3000;

const serveur = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Serveur lancé sur le port ${port}`);
});

serveur.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
