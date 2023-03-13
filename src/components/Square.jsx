import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAdding, removeLetter, setGameCondition } from '../reducers/Dashboard';
import { updatePuzzleFill } from '../reducers/Puzzle';
import "./styles/square.css"

function Square(props) {
    const gameCondition = useSelector(state => state.answer).gameCondition;
    const challenge = useSelector(state => state.challenge);
    const answer = useSelector(state => state.answer);
    const { element, dashPos } = props
    const dispatch = useDispatch();
    const [squareStyle, setSquareStyle] = useState("cuadro");


    function handleSquareClick() {
      if (element !== null && gameCondition !== "winner") {
        let audio = document.getElementById("audio");
        audio.play();
        dispatch(removeLetter({
          id: dashPos,
          letter: element.letter
        }))
        dispatch(updatePuzzleFill(element))
        dispatch(changeAdding(true))
        dispatch(setGameCondition("playing"))
      }
    }

    useEffect(() => {
      switch (gameCondition) {
        case "starting":
          setSquareStyle("starting")
          break;
        
        case "started":
          setSquareStyle("started")
          break;

        case "playing":
          setSquareStyle("playing")
          break;

        case "incorrect":
          setSquareStyle("incorrect")
          break;

        case "winner":
          setSquareStyle("winner")
          break;

        default:
          break;
      }
    }, [gameCondition])
    

  return (
    <button
    type='button'
    onClick={() => handleSquareClick()}
    className={`square aspect-square ${squareStyle}`}>{element ? element.letter : ""}</button>
  )
}

export default Square