import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPuzzle } from '../reducers/Puzzle';
import Key from './Key'

function Keyboard() {
    const dispatch = useDispatch();
    const readChallenge = useSelector(state => state.challenge);
    const challengePuzzle = readChallenge.puzzleString.split("");
    const puzzle = readChallenge.puzzle;

    useEffect(() => {
        let puzzleToSave = challengePuzzle.map((letter, i) => ({id: i, letter}))
        dispatch(createPuzzle(puzzleToSave))
    }, [])
    

  return (
    <div className='flex flex-col items-center justify-center m-auto gap-y-2 w-full'>
    <div className='flex items-center justify-center flex-row flex-wrap gap-2 align' style={{width: "50vw"}}>
        {
            puzzle.map(obj => <Key element={obj} />)
        }
        
    </div>
 
    </div>
  )
}

export default Keyboard