import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [tDays, setTDays] = useState("00");
  const [tHours, setTHours] = useState("00");
  const [tMinutes, setTMinutes] = useState("00");
  const [tSeconds, setTSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const endDate = new Date("July 27 2022 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const final = endDate - now;

      const days = Math.floor(final / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (final % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((final % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((final % (1000 * 60)) / 1000);

      if (final < 0) {
        clearInterval(interval.current);
      } else {
        setTDays(days);
        setTHours(hours);
        setTMinutes(minutes);
        setTSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="App">
      <section className="timer-container">
        <section className="timer">
          <div>
            <span className="fas fa-hourglass-half timer-icon"></span>
            <h2>Countdown Timer</h2>
            <p>Countdown to event.</p>
          </div>
          <div>
            <section>
              <p>{tDays}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{tHours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{tMinutes}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{tSeconds}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
