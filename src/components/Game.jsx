import ImageContainer from "./ImageContainer"
import Answer from "./Answer"
import Dashboard from "./Dashboard"
import Keyboard from "./Keyboard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import checkWin from "../functions/checkWin"
import { changeAdding } from "../reducers/Dashboard"
import GamerInput from "./GamerInput"

function Game() {
  const dispatch = useDispatch();
  const challenge = useSelector(state => state.challenge);
  const answer = useSelector(state => state.answer);
 
  
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-row items-center">
    <ImageContainer />
    <GamerInput />
    {/* <Answer /> */}
    </div>
  )
}

export default Game