import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import checkWin from '../functions/checkWin';
import { addLetter, changeAdding } from '../reducers/Dashboard';
import { updatePuzzleNull } from '../reducers/Puzzle';
import "./styles/key.css"


function Key({ letter = null, id }) {
    const challenge = useSelector(state => state.challenge);
    const answer = useSelector(state => state.answer);
    const puzzle = challenge.puzzle;
    const dispatch = useDispatch();

    const handleKeyClick = () => {
        //if (answer.add) {
        //let gameCondition = checkWin(challenge, answer);
        //dispatch(changeAdding(gameCondition))
        dispatch(addLetter({id, letter}))
        dispatch(updatePuzzleNull({letter, id}))
        //}        
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