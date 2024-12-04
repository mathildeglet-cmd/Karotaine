import styles from "./Conseil.module.css";
import angel from "../../assets/images/angel.png";
import marc from "../../assets/images/Marc.png";
import mathilde from "../../assets/images/Mathilde.png";
import charles from "../../assets/images/Charles.png";
import jp from "../../assets/images/JP.png";

const Conseil = () => {
  return (
    <div className={styles.container}>
      <div className={styles.angelWrapper}>
        <img src={angel} alt="Angel" className={styles.angelImage} />
      </div>

      <h1 className={styles.title}>GOUVERNEMENT</h1>

      <div className={styles.membersWrapper}>
        <div className={styles.member}>
          <a
            href="https://github.com/Marc-Juvenal"
            target="_blank"
            rel="noreferrer"
          >
            <img src={marc} alt="Marc" className={styles.memberImage} />
          </a>
          <h2 className={styles.memberName}>Marc</h2>
        </div>
        <div className={styles.member}>
          <a
            href="https://github.com/mathildeglet-cmd"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mathilde} alt="Mathilde" className={styles.memberImage} />
          </a>
          <h2 className={styles.memberName}>Mathilde</h2>
        </div>
        <div className={styles.member}>
          <a
            href="https://github.com/CharlesCatto"
            target="_blank"
            rel="noreferrer"
          >
            <img src={charles} alt="Charles" className={styles.memberImage} />
          </a>
          <h2 className={styles.memberName}>Charles</h2>
        </div>
        <div className={styles.member}>
          <a
            href="https://github.com/JP-Lefever"
            target="_blank"
            rel="noreferrer"
          >
            <img src={jp} alt="JP" className={styles.memberImage} />
          </a>
          <h2 className={styles.memberName}>JP</h2>
        </div>
      </div>
    </div>
  );
};

export default Conseil;
