import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLetter } from '../reducers/Dashboard';
import { updatePuzzleNull } from '../reducers/Puzzle';
import "./styles/key.css"

function Key({element = { id: "", letter: null}}) {
    const { id, letter } = element;
    const challenge = useSelector(state => state.challenge);
    const puzzle = challenge.puzzle;
    const dispatch = useDispatch();
    const handleKeyClick = () => {
        dispatch(addLetter(letter))
        dispatch(updatePuzzleNull(element))
    }
  return (
    <button 
    disabled={letter ? false : true}
    id={id}
    style={{visibility: letter ? "visible" : "hidden"}} 
    onClick={() => handleKeyClick(letter)}
    className='key'>{letter}</button>
  )
}

export default Key