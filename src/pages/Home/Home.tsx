import style from "./Home.module.css";


function Home() {
  return (
    <>
    <div>
      <h1 className={style.h1title}>Home</h1>
      <button className="favorite styled" type="button">
        click here
      </button>
    </div>
    </>
  );
}

export default Home;
