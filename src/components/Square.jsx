import React from 'react'
import { useDispatch } from 'react-redux'
import { removeLetter } from '../reducers/Dashboard';
import "./styles/square.css"

function Square({letter = ""}) {
    const dispatch = useDispatch();
    function handleSquareClick() {
        dispatch(removeLetter())
    }
  return (
    <button
    type='button'
    onClick={() => handleSquareClick()}
    className='square'>{letter}</button>
  )
}

export default Square