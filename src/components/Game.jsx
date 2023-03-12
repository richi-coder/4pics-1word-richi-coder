import ImageContainer from "./ImageContainer"
import Answer from "./Answer"
import Dashboard from "./Dashboard"
import Keyboard from "./Keyboard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import checkWin from "../functions/checkWin"
import { changeAdding } from "../reducers/Dashboard"
import GamerInput from "./GamerInput"
import "./styles/game.css"
import WinnerInterface from "./WinnerInterface"

function Game() {
  
  return (
    <div className="game w-screen bg-gray-900 flex">
    <ImageContainer />
    <GamerInput />
    <WinnerInterface />
    
    </div>
  )
}

export default Game