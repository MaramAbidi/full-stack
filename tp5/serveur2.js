const http = require('http');
const fs = require('fs');

const serveur = http.createServer((req, res) => {
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end("Fichier introuvable");
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

serveur.listen(3000, () => {
  console.log("Serveur prêt sur http://localhost:3000");
});
