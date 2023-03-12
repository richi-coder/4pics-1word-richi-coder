import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPuzzle } from '../reducers/Puzzle';
import Key from './Key'
import "./styles/keyboard.css"

function Keyboard() {
    const dispatch = useDispatch();
    const readChallenge = useSelector(state => state.challenge);
    const challengePuzzle = readChallenge.puzzleString.split("");
    const puzzle = readChallenge.puzzle;

    useEffect(() => {
        //let puzzleToSave = challengePuzzle.map((letter, i) => ({id: i, letter}))
        dispatch(createPuzzle(challengePuzzle))
    }, [])
    

  return (
    <div className='keyboard-container flex flex-col m-auto w-full h-2/3'>
      <div className='keyboard flex items-center justify-center flex-row flex-wrap w-full'>
          {
              puzzle.map((letter, i) => <Key key={i} letter={letter} id={i} />)
          }
          <audio id='audio' src="src/assets/tap.wav">
		      </audio>
      </div>
    </div>
  )
}

export default Keyboard