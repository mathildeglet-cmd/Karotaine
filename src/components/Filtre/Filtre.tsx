import { useState } from "react";
import "./filtre.css"; // Assurez-vous d'importer le fichier CSS

function Filtre({data}) {
  const [query, setQuery] = useState("");

  const 


  const handleFilter = () => {
    // Logique de filtrage ici
    console.log("Filtrer par:", query);
  };

  return (
    <div className="filtreContainer">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Carotcher..."
        className="filtreInput"
      />

      <button onClick={handleFilter} className="filtreButton" type="button">
        Filter
      </button>
    </div>
  );
}

export default Filtre;
