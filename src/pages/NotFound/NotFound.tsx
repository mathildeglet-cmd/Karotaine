import { useEffect, useRef } from "react";
import styles from "./NotFound.module.css";
import carrotBoy from "/CarrotBoy.png"; 

const NotFound = () => {
  const carrotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 100;
    let y = 100;
    let dirX = 1;
    let dirY = 1;
    const speed = 3;

    const carrotElement = carrotRef.current;

    if (!carrotElement) return;

    const carrotWidth = carrotElement.offsetWidth;
    const carrotHeight = carrotElement.offsetHeight;

    let animationFrameId: number;

    const animate = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (y + carrotHeight >= screenHeight || y <= 0) {
        dirY *= -1;
      }

      if (x + carrotWidth >= screenWidth || x <= 0) {
        dirX *= -1;
      }

      x += dirX * speed;
      y += dirY * speed;

      carrotElement.style.transform = `translate(${x}px, ${y}px) rotate(${Date.now() / 20}deg)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <div className={styles.blur}>
        <p className={styles.message}>Oops! No carrots here!</p>
        <a href="/" className={styles.link}>
          Take me Home
        </a>
      </div>
      <div ref={carrotRef} className={styles.carrot}>
        <img src={carrotBoy} alt="Bouncing Carrot Boy" />
      </div>
    </div>
  );
};

export default NotFound;
