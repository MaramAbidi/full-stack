/* ex1:  Bienvenue.jsx
function Bienvenue({ nom }) {
  return <h2>Bienvenue, {nom} !</h2>;
}

export default Bienvenue;

import Bienvenue from './Bienvenue';

function App() {
  return (
    <div>
      <Bienvenue nom="Maram" />
    </div>
  );
}

export default App;


/*ex2
import { useState } from "react";

function Compteur() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Compteur;

import Compteur from './Compteur';

function App() {
  return <Compteur />;
}

export default App;



ex3:
import { useState } from "react";

function Formulaire() {
  const [nom, setNom] = useState("");
  const handleClick = () => alert(`Bonjour, ${nom} !`);

  return (
    <div>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
      <button onClick={handleClick}>Dire Bonjour</button>
    </div>
  );
}

export default Formulaire;

import Formulaire from './Formulaire';

function App() {
  return <Formulaire />;
}

export default App;

ex4:
import { useState } from "react";

function ListeCourses() {
  const [article, setArticle] = useState("");
  const [liste, setListe] = useState([]);

  const ajouter = () => {
    if (article.trim() !== "") {
      setListe([...liste, article]);
      setArticle("");
    }
  };

  return (
    <div>
      <input
        value={article}
        onChange={(e) => setArticle(e.target.value)}
        placeholder="Nouvel article"
      />
      <button onClick={ajouter}>Ajouter</button>

      <ul>
        {liste.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;

// App.jsx
import ListeCourses from './ListeCourses';

function App() {
  return <ListeCourses />;
}

export default App;

*/
