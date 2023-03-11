import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAdding, removeLetter, setGameCondition } from '../reducers/Dashboard';
import { updatePuzzleFill } from '../reducers/Puzzle';
import "./styles/square.css"

function Square(props) {
    const challenge = useSelector(state => state.challenge);
    const answer = useSelector(state => state.answer);
    const { element, dashPos } = props
    const dispatch = useDispatch();
    function handleSquareClick() {
      if (element !== null ) {
        dispatch(removeLetter({
          id: dashPos,
          letter: element.letter
        }))
        dispatch(updatePuzzleFill(element))
        dispatch(changeAdding(true))}
        dispatch(setGameCondition("playing"))
    }
  return (
    <button
    type='button'
    onClick={() => handleSquareClick()}
    className='square aspect-square'>{element ? element.letter : ""}</button>
  )
}

export default Square