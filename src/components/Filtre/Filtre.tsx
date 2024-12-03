import "./filtre.css"; // Assurez-vous d'importer le fichier CSS

function Filtre({ query, setQuery }) {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <form className="filtreContainer">
      <input
        type="text"
        value={query}
        placeholder="Carotcher..."
        className="filtreInput"
        onChange={handleChange}
      />

      <button className="filtreButton" type="button">
        Filter
      </button>
    </form>
  );
}

export default Filtre;
