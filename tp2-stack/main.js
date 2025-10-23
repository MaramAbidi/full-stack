// ==========================
// Exercice 1 - Variables
// ==========================
let age = 25;
let name = "Alice";
let isStudent = true;
console.log("Âge :", age);
console.log("Nom :", name);
console.log("Étudiant :", isStudent);

// ==========================
// Exercice 2 - Opérateurs
// ==========================
let x = 5, y = 10;
console.log("Addition :", x + y);
console.log("Soustraction :", x - y);
console.log("Multiplication :", x * y);
console.log("Division :", x / y);
console.log("x == y ?", x == y);
console.log("x === y ?", x === y);
console.log("x > y ?", x > y);

// ==========================
// Exercice 3 - Structures
// ==========================
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}

for (let i = 1; i <= 10; i++) {
  console.log("For loop :", i);
}

let fruits = ["pomme", "banane", "orange"];
let i = 0;
while (i < fruits.length) {
  console.log("Fruit :", fruits[i]);
  i++;
}

// ==========================
// Exercice 4 - Fonctions
// ==========================
function addition(a, b) {
  return a + b;
}
console.log("Addition (fonction) :", addition(3, 4));

let multiply = (a, b) => a * b;
console.log("Multiplication (fonction fléchée) :", multiply(3, 4));

// ==========================
// DOM et Événements
// ==========================
let button = document.querySelector("#monBouton");
let div = document.querySelector("#maDiv");

button.addEventListener("click", function() {
  div.innerText = "Le texte a changé !";
  div.style.backgroundColor = "lightblue";
  div.style.fontSize = "20px";
});

// Ajouter un nouvel élément <p>
let p = document.createElement("p");
p.innerText = "Paragraphe ajouté dynamiquement.";
div.appendChild(p);
