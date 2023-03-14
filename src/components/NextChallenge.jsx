import { useDispatch } from "react-redux"
import { initializeDashboard, resetDashboard, setGameCondition } from "../reducers/Dashboard";
import { createPuzzle, nextPuzzle } from "../reducers/Puzzle";
import "./styles/nextchallenge.css"

function NextChallenge() {
  const dispatch = useDispatch();

  function goNextChallenge() {
    
    // dispatch(setGameCondition("loading"))
    

      
      
        // dispatch(nextPuzzle(newChallenge))
        // dispatch(resetDashboard())
    
  }

  return (
    <div className='h-1/2 w-full flex flex-col items-center justify-end'>
    <button
    onClick={goNextChallenge}
    className='next-button text-white font-bold bg-green-500 mb-10 select-none z-50'>NEXT</button>
    </div>
  )
}

export default NextChallenge