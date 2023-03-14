import ImageContainer from "./ImageContainer"
import Answer from "./Answer"
import Dashboard from "./Dashboard"
import Keyboard from "./Keyboard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import checkWin from "../functions/checkWin"
import { changeAdding, setGameCondition } from "../reducers/Dashboard"
import GamerInput from "./GamerInput"
import "./styles/game.css"
import WinnerInterface from "./WinnerInterface"
import Loader from "./Loader"
import { queryChallenges } from "../services/firebase"

function Game() {
  const  dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGameCondition("loading"))
    let firebaseChallenges;
    // let querySnapshot = 
    //queryChallenges()
      
  }, [])
  
  
  return (
    <div className="game w-screen bg-gray-900 flex">
      <ImageContainer />
      <GamerInput />
      <WinnerInterface />
      <Loader />
    </div>
  )
}

export default Game