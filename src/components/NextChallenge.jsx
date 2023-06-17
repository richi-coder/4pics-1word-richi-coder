import { useDispatch, useSelector } from "react-redux"
import { addCoins, nextButtonChange, resetDashboard, setGameCondition } from "../reducers/Dashboard";
import { nextPuzzle } from "../reducers/Puzzle";
import "./styles/nextchallenge.css"
import storage from "../services/localStorage"
import { resetImageLoad } from "../reducers/ImageLoadReducer";
import { useRef } from "react";

function NextChallenge() {
  const dispatch = useDispatch();
  const nextAnimated = useRef();
  const nextButton = useSelector(state => state.answer).nextButton;

  function goNextChallenge() {
    let nextSound = document.querySelector("#next-sound");
    nextSound.play()
    nextAnimated.current.classList.add("nextAnimated")
    
    let storeChallenge = storage.getItem("challenges") ? JSON.parse(storage.getItem("challenges")) : null;
    let gameData = storage.getItem("gameData") ? JSON.parse(storage.getItem("gameData")) : null;
    gameData.level++;
    console.log(gameData, "GAME DATA")

    storage.setItem("gameData", JSON.stringify(gameData))
      dispatch(nextButtonChange(true))
      setTimeout(() => {
        dispatch(addCoins())
      }, 700);
      setTimeout(() => {
        dispatch(setGameCondition("loading"))
        console.log(storeChallenge[gameData.level], 'ver next puzzle');
        if (storeChallenge[gameData.level]) {
          dispatch(nextPuzzle(storeChallenge[gameData.level]))
          dispatch(resetDashboard())
          dispatch(resetImageLoad())
      } else {
        dispatch(setGameCondition('end'))
        return
      }
        
        nextAnimated.current.classList.remove("nextAnimated")
  }, 2200);
    
        
    
  }

  return (
    <div className='h-1/2 w-full flex flex-col items-center justify-end'>
    <button
    disabled={nextButton ? true : false}
    ref={nextAnimated}
    onClick={goNextChallenge}
    className='next-button text-white font-bold bg-green-500 mb-10 select-none z-50'>NEXT</button>
    </div>
  )
}

export default NextChallenge