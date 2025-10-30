//console.log("Hello");


/*ex2
const fs = require('fs');

console.log("Reading file, please wait...");

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Erreur de lecture :", err);
    return;
  }
  console.log("Contenu du fichier :", data);
});*/


//ex3


const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bonjour");
});

server.listen(8080, () => {
  console.log("Serveur en écoute sur http://localhost:8080");
});

