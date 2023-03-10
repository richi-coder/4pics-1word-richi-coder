import ImageContainer from "./ImageContainer"
import Answer from "./Answer"
import Dashboard from "./Dashboard"
import Keyboard from "./Keyboard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import checkWin from "../functions/checkWin"
import { changeAdding } from "../reducers/Dashboard"

function Game() {
  const dispatch = useDispatch();
  const challenge = useSelector(state => state.challenge);
  const answer = useSelector(state => state.answer);
 
  
  return (
    <>
    <div className="w-full">REACT GAME!</div>
    <ImageContainer />
    <Dashboard />
    <Keyboard />
    <Answer />
    </>
  )
}

export default Game