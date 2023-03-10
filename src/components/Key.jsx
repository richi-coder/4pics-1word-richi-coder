import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLetter } from '../reducers/Dashboard';
import "./styles/key.css"

function Key({letter = null}) {
    const dispatch = useDispatch();
    const handleKeyClick = () => {
        dispatch(addLetter(letter))
        dispatch()
    }
  return (
    <button 
    style={{visibility: letter ? "visible" : "hidden"}} 
    onClick={() => handleKeyClick(letter)}
    className='key'>{letter}</button>
  )
}

export default Key