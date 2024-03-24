import { useRef, useState } from "react";
import ResultModal from "./ResultModal";


export default function TimerChallenge({title,targetTime}){
    let timer=useRef();
    const dialog=useRef();
    const[timerStarted,setTimerStarted]=useState(false)
    const [isExpired,setIsExpired]=useState(false)
    function handleStart(){
        timer.current=setTimeout(()=>
        {
            setIsExpired(true);
            dialog.current.showModal();
        },targetTime*1000
        );
        
        setTimerStarted(true)
    }
    function handleStop(){
        clearTimeout(timer.current)
    }
return (<>
{isExpired &&  <ResultModal ref={dialog} targetTime={targetTime} result="Lost"/>}
<section className="challenge">
    <h2 >{title}</h2>{isExpired && <p>You lost</p>}
    <p className="challenge-time">{targetTime} second{targetTime>1 ? "s" :""}</p>
    <p><button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "stop" : "start"} Challenge</button></p>
    <p className={timerStarted? "active" :undefined}> Time is {timerStarted? "running" : "Inactive"}</p>
</section>
</>
);
} 