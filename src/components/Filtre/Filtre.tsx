import style from "./filtre.module.css";

function Filtre({
  query,
  setQuery,
  onSubmit,
}: {
  query: string;
  setQuery: (s: string) => void;
  onSubmit: () => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className={style.filtreContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Choose your ingredient"
        className={style.filtreInput}
        onChange={handleChange}
      />
      <button className={style.filtreButton} type="submit">
        Filter
      </button>
    </form>
  );
}

export default Filtre;
