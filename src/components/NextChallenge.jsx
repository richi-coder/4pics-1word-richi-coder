import { useDispatch } from "react-redux"
import { initializeDashboard, resetDashboard, setGameCondition } from "../reducers/Dashboard";
import { createPuzzle, nextPuzzle } from "../reducers/Puzzle";
import "./styles/nextchallenge.css"

function NextChallenge() {
  const dispatch = useDispatch();

  function goNextChallenge() {
    dispatch(setGameCondition("loading"))

    setTimeout(() => {
      const newChallenge = {
        number: 2,
        imageURL: ["https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_2.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_1.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_3.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_4.jpg"],
        answer: "hielo",
        puzzleString: "WEY",
        puzzle: []}

        dispatch(nextPuzzle(newChallenge))
        dispatch(resetDashboard())
    }, 2000);

    
    
    
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