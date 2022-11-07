import './App.css';
import Timer from './components/Timer'
import { useState, useEffect  } from 'react';



function App() {

  const [ timerLength, setTimerLength ] = useState(25)
  const [ workBreak, setWorkBreak ] = useState(5)
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(timerLength * 60);
  const [mode, setMode ] = useState('work');

useEffect(() => {

  function switchMode() {
    const nextMode = mode === 'work' ? 'break' : 'work';
     const nextSeconds = (nextMode === 'work' ? timerLength * 60 : workBreak * 60) ;

    setMode(nextMode);

     setSecondsLeft(nextSeconds);
  }

   setSecondsLeft(secondsLeft)

  if(!isPaused) {
    const interval = setInterval(() => {
      setSecondsLeft(secondsLeft => secondsLeft - 1)
    }, 1000)
  
    if(secondsLeft === 0) {
      switchMode()
      clearInterval(interval)
      setIsPaused(false)
    }

    return () => clearInterval(interval)
  }
  
}, [mode, isPaused, secondsLeft, workBreak, timerLength]);


  return (
    <div className="main">
      <Timer 
      timerLength={timerLength}
      workBreak={workBreak}
      isPaused={isPaused}
      secondsLeft={secondsLeft}
      mode={mode}
      setIsPaused={setIsPaused}
      setWorkBreak={setWorkBreak}
      setTimerLength={setTimerLength}
      />
    </div>
  );
}

export default App;
