import { useState } from "react";
import style from "./Contact.module.css";

function Contact() {
  const [mainPrinciple, setMainPrinciple] = useState("");
  const [actions, setActions] = useState("");
  const [ateCarrot, setAteCarrot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !["Helpful", "Kind", "Benign", "Calm", "Eat Carrots"].includes(
        mainPrinciple,
      )
    ) {
      alert("You must select one of the 5 main principles.");
      return;
    }

    if (!actions.trim()) {
      alert("You must describe your actions.");
      return;
    }

    if (ateCarrot.toLowerCase() !== "yes") {
      setIsSuccessful(false);
    } else {
      setIsSuccessful(true);
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className={style.contactContainer}>
      <h1 className={style.h1title}>What did he do?</h1>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <label htmlFor="principle">
          What main principles did the person transgress?
        </label>
        <div className={style.principles}>
          <div className={style.placeholder}>Helpful</div>
          <div className={style.placeholder}>Kind</div>
          <div className={style.placeholder}>Benign</div>
          <div className={style.placeholder}>Calm</div>
          <div className={style.placeholder}>Eat Carrots</div>
        </div>

        <input
          type="text"
          id="principle"
          value={mainPrinciple}
          onChange={(e) => setMainPrinciple(e.target.value)}
          placeholder="Enter a principle (e.g., Helpful)"
          required
          className={style.input}
        />

        <label htmlFor="actions">What did you do?</label>
        <br />
        <textarea
          id="actions"
          value={actions}
          onChange={(e) => setActions(e.target.value)}
          placeholder="Describe your actions"
          required
          className={style.textarea}
        />
        <br />

        <label htmlFor="carrot">Did you eat carrot today?</label>
        <input
          type="text"
          id="carrot"
          value={ateCarrot}
          onChange={(e) => setAteCarrot(e.target.value)}
          placeholder="Yes or No"
          required
          className={style.input}
        />

        <button
          type="submit"
          className={style.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {isSubmitted && (
        <div className={style.response}>
          {isSuccessful ? (
            <div className={style.successAnimation}>
              <img
                src="https://media.tenor.com/EEFynDfpJYQAAAAM/happy-carrot.gif"
                alt="Success Animation"
              />
              <p>Thank you! Your denunciation has been sent.</p>
            </div>
          ) : (
            <div className={style.failureAnimation}>
              <img
                src="https://cdn.dribbble.com/users/1673663/screenshots/4572035/angry_carrot.gif"
                alt="Failure Animation"
              />
              <p>Oh no! You didn't eat carrot today!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Contact;
