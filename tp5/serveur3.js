const http = require('http');
const fs = require('fs');

const serveur = http.createServer((req, res) => {
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end("<h1>Erreur 404</h1><p>Fichier introuvable</p>");
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <html>
          <body>
            <h1>Mon serveur Node.js</h1>
            <p>${data}</p>
            <footer>© Maram NodeJS</footer>
          </body>
        </html>
      `);
    }
  });
});

serveur.listen(3000, () => {
  console.log("Serveur HTML actif sur http://localhost:3000");
});
