import React from 'react';
import BackButton from './BackButton';


const SettingPanel = ({timerLength, setTimerLength, workBreak, handleClickSettings, setWorkBreak }) => {

  const handleChange = (e) => {
    setTimerLength((prevBreak) => e.target.value)
  }
  const handleBreak = (e) => {
    setWorkBreak((prevBreak) => e.target.value)
  }
  
   
  return (
    <div style={{ textAlign: 'left', }}>
        <label>Work minutes: {timerLength}:00</label>
        <input 
        type="number" 
        name="pomodoro" 
        id="pomodoro" 
        min="5" 
        max="90" 
        defaultValue={timerLength}
        onChange={handleChange}
        ></input>
        <label>Break minutes: {workBreak}:00</label>
        <input 
        type="number" 
        name="shortBreak" 
        id="short-break" 
        min="1" 
        max="30" 
        defaultValue={workBreak}
        onChange={handleBreak}
        ></input>
        <div>
          <BackButton onClick={handleClickSettings} />
        </div>
        
    </div>
  )
}

export default SettingPanel;