// import { useForm } from "react-hook-form";
import style from "./filtre.module.css";

function Filtre({
  query,
  setQuery,
}: { query: string; setQuery: (s: string) => void }) {
  const handleChange = (e: { target: { value: string } }) =>
    setQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitValue(submitValue);
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
