import { useDispatch } from "react-redux"
import { addCoins, initializeDashboard, resetDashboard, setGameCondition } from "../reducers/Dashboard";
import { createPuzzle, nextPuzzle } from "../reducers/Puzzle";
import "./styles/nextchallenge.css"
import storage from "../services/localStorage"
import { resetImageLoad } from "../reducers/ImageLoadReducer";

function NextChallenge() {
  const dispatch = useDispatch();

  function goNextChallenge() {
    let nextSound = document.querySelector("#next-sound");
    nextSound.play()
    dispatch(setGameCondition("loading"))
    let storeChallenge = storage.getItem("challenges") ? JSON.parse(storage.getItem("challenges")) : null;
    let gameData = storage.getItem("gameData") ? JSON.parse(storage.getItem("gameData")) : null;
    gameData.level++;
    console.log(gameData, "GAME DATA")

    storage.setItem("gameData", JSON.stringify(gameData))

    dispatch(nextPuzzle(storeChallenge[gameData.level]))
    dispatch(resetDashboard())
    dispatch(resetImageLoad())
    dispatch(addCoins())
    
    //storage.setItem("challenges", JSON.stringify(challengeStore))
    
    //storage.setItem("")

    //setTimeout(() => {
      //dispatch(setGameCondition("started"))
  //}, 1000);
    
        
    
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