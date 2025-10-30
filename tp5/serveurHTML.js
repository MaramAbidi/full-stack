const http = require('http');
const fs = require('fs');

const serveur = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end("Erreur serveur");
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

serveur.listen(3000, () => {
  console.log("Serveur HTML sur http://localhost:3000");
});
