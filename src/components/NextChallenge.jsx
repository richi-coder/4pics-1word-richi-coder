import { useDispatch } from "react-redux"
import { addCoins, initializeDashboard, resetDashboard, setGameCondition } from "../reducers/Dashboard";
import { createPuzzle, nextPuzzle } from "../reducers/Puzzle";
import "./styles/nextchallenge.css"
import storage from "../services/localStorage"
import { resetImageLoad } from "../reducers/ImageLoadReducer";
import { useRef } from "react";

function NextChallenge() {
  const dispatch = useDispatch();
  const nextAnimated = useRef();

  function goNextChallenge() {
    let nextSound = document.querySelector("#next-sound");
    nextSound.play()
    nextAnimated.current.classList.add("nextAnimated")
    
    let storeChallenge = storage.getItem("challenges") ? JSON.parse(storage.getItem("challenges")) : null;
    let gameData = storage.getItem("gameData") ? JSON.parse(storage.getItem("gameData")) : null;
    gameData.level++;
    console.log(gameData, "GAME DATA")

    storage.setItem("gameData", JSON.stringify(gameData))

      setTimeout(() => {
        dispatch(setGameCondition("loading"))
        dispatch(nextPuzzle(storeChallenge[gameData.level]))
        dispatch(resetDashboard())
        dispatch(resetImageLoad())
        dispatch(addCoins())
        nextAnimated.current.classList.remove("nextAnimated")
  }, 1000);
    
        
    
  }

  return (
    <div className='h-1/2 w-full flex flex-col items-center justify-end'>
    <button
    ref={nextAnimated}
    onClick={goNextChallenge}
    className='next-button text-white font-bold bg-green-500 mb-10 select-none z-50'>NEXT</button>
    </div>
  )
}

export default NextChallenge