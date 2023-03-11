import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Answer() {
  const win = useSelector(state => state.answer).win;
  const puzzle = useSelector(state => state.challenge);
  const answer = puzzle.answer;
  const [response, setResponse] = useState("Response");
  const [correct, setCorrect] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    if (response === answer) {
      setCorrect(true)
    } else {
      setCorrect(false)
    }
  }
  
  useEffect(() => {
  }, [win])
  

  return (
    <>
    
    <form onSubmit={(e) => handleSubmit(e)}>


    <label htmlFor="input">
    <input id='input' onChange={(e) => setResponse(e.target.value)} type="text" className='text-black' />
    </label>
    <label htmlFor="submit-button">
    <button id='submit-button' className='bg-sky-100 text-black px-6 py-4' type="submit">PLAY</button>
    </label>
    </form>

    Gamer Response: <div className='bg-slate-100' style={{color: correct ? "green" : "red"}}>{response}</div>
    <h2>{win.toString()}</h2>

    </>
  )
}

export default Answer