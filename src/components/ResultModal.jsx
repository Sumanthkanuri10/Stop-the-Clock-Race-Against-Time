import { forwardRef } from "react";
const ResultModal=forwardRef( function ResultModal({result,targetTime},ref){
    return(

        <dialog ref={ref} className="result-modal" open>
            <h2>you {result}</h2>
            <p>The target time was <strong>{targetTime}</strong></p>
            <p> You stopped the timer with <strong> x seconds left</strong></p>
            <form method="dialog" > <button>close</button></form>
                
            

        </dialog>
    );
})
export default ResultModal;