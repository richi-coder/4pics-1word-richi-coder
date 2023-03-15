import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetDashboard, setGameCondition } from '../reducers/Dashboard';
import { createPuzzle, nextPuzzle } from '../reducers/Puzzle';
import storage from "../services/localStorage"
import service from "../services/firebase"

function StartButton() {
    const dispatch = useDispatch();
    let storeChallenge = storage.getItem("challenges") ? JSON.parse(storage.getItem("challenges")) : null;
    let gameData = storage.getItem("gameData") ? JSON.parse(storage.getItem("gameData")) : null;

    function startGame() {
        service.uploadChallenges();
        console.log(storeChallenge)
        dispatch(nextPuzzle(storeChallenge[gameData.level]))
        dispatch(resetDashboard())
        setTimeout(() => {
            dispatch(setGameCondition("started"))
        }, 1000);
    }

  return (
    <button onClick={startGame} className='bg-green-400 p-5'>START</button>
  )
}

export default StartButton