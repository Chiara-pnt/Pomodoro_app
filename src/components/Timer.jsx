import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton';


const Timer = ({ handleClickSettings, timerLength, workBreak, isPaused, mode, secondsLeft }) => {

  const totalSeconds = mode === 'work'
  ? timerLength
  : workBreak * 60;
const percentage = Math.round(secondsLeft / totalSeconds * 100);

const minutes = Math.floor(secondsLeft / 60);
let seconds = secondsLeft % 60;
if(seconds < 10) seconds = '0'+ seconds;


  return (
    <div>
        <CircularProgressbar 
        value={percentage} 
        text={minutes + ':' + seconds} 
        styles={buildStyles( {
            strokeLinecap: 'round', 
            textColor: '#fff', pathColor:'#77a6b6', trailColor:'#c9ffe2'
        })} />
    <div style={{ margin:'20px'}}>
      {
        isPaused ? 
        <PlayButton />
        :
        <PauseButton />
      }
       
       
        <div style={{ marginTop: '20px'}}>
            <SettingsButton onClick={handleClickSettings}/>
        </div>
    </div>
    </div>
  )
}

export default Timer