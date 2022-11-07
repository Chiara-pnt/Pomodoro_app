import React from 'react';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';
import ResetButton from './ResetButton';


const Timer = ({ handleClickSettings, timerLength, workBreak, isPaused, mode, secondsLeft, setIsPaused, setTimerLength }) => {

  console.log(timerLength)
  
const minutes = Math.floor(secondsLeft / 60);
let seconds = secondsLeft % 60;
if(seconds < 10) seconds = '0'+ seconds;

const handlePause = () => {
  setIsPaused(!isPaused)
}

const handleReset = () => {

}

const handleTimerChange = (e) => {
  setTimerLength(e.target.value)
}

  return (
    <div>


      <div>
        <label>Work minutes: {timerLength}:00</label>
        <input 
        
        type="number" 
        name="pomodoro" 
        id="pomodoro" 
        min="5" 
        max="90" 
        defaultValue={timerLength}
        onChange={handleTimerChange}
        ></input>
        <label>Break minutes: {workBreak}:00</label>
        <input 
        type="number" 
        name="workBreak" 
        id="workBreak" 
        min="1" 
        max="30" 
        defaultValue={workBreak}
        ></input>
    </div>


      <div>
        {mode === 'work' ? <p>Working time!</p> : <p>You're on Break!</p>}
      </div>
      <div className='timer'>
        {minutes + ':' + seconds}
      </div>
    <div style={{ margin:'20px'}}>
      {
        isPaused ? 
        <PlayButton onClick={handlePause} />
        :
        <PauseButton onClick={handlePause} />
      }
       <ResetButton onClick={handleReset} />
       
        <div style={{ marginTop: '20px'}}>
            <SettingsButton onClick={handleClickSettings}/>
        </div>
    </div>
    </div>
  )
}

export default Timer