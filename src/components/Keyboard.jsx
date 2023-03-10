import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPuzzle } from '../reducers/Puzzle';
import Key from './Key'

function Keyboard() {
    const dispatch = useDispatch();
    const readChallenge = useSelector(state => state.challenge);
    const challenge = readChallenge.puzzleString.split("");
    let puzzleFirst = challenge.slice(0);

    useEffect(() => {
        dispatch(createPuzzle(challenge))
    }, [])
    

  return (
    <div className='flex flex-col items-center justify-center m-auto gap-y-2 w-full'>
    <div className='flex items-center justify-center flex-row flex-wrap gap-2 align' style={{width: "50vw"}}>
        {
            puzzleFirst.map(letter => <Key letter={letter} />)
        }
        
    </div>
 
    </div>
  )
}

export default Keyboard