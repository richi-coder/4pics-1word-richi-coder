import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Answer() {
  const challenge = useSelector(state => state.challenge);
  const answer = challenge.answer;
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

  return (
    <>
    <div >GAME ANSWER GOES HERE!</div>
    
    <form onSubmit={(e) => handleSubmit(e)}>
    <label htmlFor="input">
    <input id='input' onChange={(e) => setResponse(e.target.value)} type="text" className='text-black' />
    </label>
    <label htmlFor="submit-button">
    <button id='submit-button' className='bg-sky-100 text-black px-6 py-4' type="submit">PLAY</button>
    </label>
    </form>

    Gamer Response: <div className='bg-slate-100' style={{color: correct ? "green" : "red"}}>{response}</div>

    </>
  )
}

export default Answer