import React from "react";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import ResetButton from "./ResetButton";
import Animations from "./Animations";
import { useState, useEffect } from "react";

const Timer = () => {
  const [timerLength, setTimerLength] = useState(25);
  const [workBreak, setWorkBreak] = useState(5);
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(timerLength * 60);
  const [mode, setMode] = useState("work");

  useEffect(() => {
    function switchMode() {
      const nextMode = mode === "work" ? "break" : "work";
      const nextSeconds =
        nextMode === "work" ? timerLength * 60 : workBreak * 60;

      setMode(nextMode);
      setSecondsLeft(nextSeconds);
    }
    setSecondsLeft(secondsLeft);

    if (!isPaused) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);

      if (secondsLeft === 0) {
        switchMode();
        clearInterval(interval);
        setIsPaused(false);
      }

      return () => clearInterval(interval);
    }
  }, [mode, isPaused, secondsLeft, workBreak, timerLength]);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setSecondsLeft(timerLength * 60);
    setMode("work");
    setIsPaused(true);
  };

  const handleTimerChange = (e) => {
    setTimerLength(e.target.value);
    setSecondsLeft(e.target.value * 60);
  };

  const handleBreakChange = (e) => {
    setWorkBreak(e.target.value);
  };

  return (
    <div>
      <div className="form">
        <label>Work minutes: {timerLength}:00</label>
        <input
          type="number"
          min="5"
          max="60"
          value={timerLength}
          onChange={handleTimerChange}
        ></input>
        <label>Break minutes: {workBreak}:00</label>
        <input
          type="number"
          min="1"
          max="30"
          value={workBreak}
          onChange={handleBreakChange}
        ></input>
      </div>

      <div>
        {mode === "work" ? (
          <h2 className="text">Working time!</h2>
        ) : (
          <h2 className="text">You're on Break!</h2>
        )}
      </div>
      <div className="timer">{minutes + ":" + seconds}</div>
      <div style={{ margin: "20px" }}>
        {isPaused ? (
          <PlayButton onClick={handlePause} />
        ) : (
          <PauseButton onClick={handlePause} />
        )}
        <ResetButton onClick={handleReset} />

        <div style={{ marginTop: "20px" }}></div>
      </div>
      <Animations />
    </div>
  );
};

export default Timer;
