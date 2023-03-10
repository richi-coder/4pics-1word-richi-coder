import React from 'react'
import { useDispatch } from 'react-redux'
import { removeLetter } from '../reducers/Dashboard';
import { updatePuzzleFill } from '../reducers/Puzzle';
import "./styles/square.css"

function Square(props) {
    const { element, dashPos } = props
    //alert(element)
    const dispatch = useDispatch();
    function handleSquareClick() {
        dispatch(removeLetter({
          id: dashPos,
          letter: element.letter
        }))
        dispatch(updatePuzzleFill(element))
    }
  return (
    <button
    type='button'
    onClick={() => handleSquareClick()}
    className='square'>{element ? element.letter : ""}</button>
  )
}

export default Square