import React, { useEffect, useState } from "react";
import "./home.css";
import ME from "../../assets/_ZM_7223.jpg";

const Home = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const countdownDate = new Date("Oct 16, 2022 08:00:00").getTime();

  const startTimer = () => {
    setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <section id="home">
      <br />
      <h2>Save the date</h2>

      <br />
      <div className="container home__container">
        <div className="home__me">
          <div className="home__me-image">
            <img src={ME} alt="me-img" />
          </div>
        </div>

        <div className="home__content">
          <div className="home__cards">
            <article className="home__card">
              <h5>{timerDays}</h5>
              <small>Days</small>
            </article>

            <article className="home__card">
              <h5>{timerHours}</h5>
              <small>Hours</small>
            </article>

            <article className="home__card">
              <h5>{timerMinutes}</h5>
              <small>Minutes</small>
            </article>

            <article className="home__card">
              <h5>{timerSeconds}</h5>
              <small>Seconds</small>
            </article>
          </div>
          <br />
          <p>
            “And of His signs is that He created for you from yourselves mates
            that you may find tranquility in them; and He placed between you
            affection and mercy. Indeed in that are signs for a people who give
            thought..”
            <br /> Qs. Ar Rum : 21
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
