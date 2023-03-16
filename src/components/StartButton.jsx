import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetDashboard, setGameCondition } from '../reducers/Dashboard';
import { createPuzzle, nextPuzzle } from '../reducers/Puzzle';
import storage from "../services/localStorage"
import service from "../services/firebase"
import { resetImageLoad } from '../reducers/ImageLoadReducer';

function StartButton() {
    const dispatch = useDispatch();
    let storeChallenge = storage.getItem("challenges") ? JSON.parse(storage.getItem("challenges")) : null;
    let gameData = storage.getItem("gameData") ? JSON.parse(storage.getItem("gameData")) : null;

    function startGame() {
        let startAudio = document.querySelector("#start-sound");
        startAudio.play()
        service.uploadChallenges();
        console.log(storeChallenge)
        dispatch(nextPuzzle(storeChallenge[gameData.level]))
        dispatch(resetDashboard())
        dispatch(resetImageLoad())
        setTimeout(() => {
            dispatch(setGameCondition("started"))
        }, 1000);
    }

  return (
    <button onClick={startGame} className='bg-green-400 py-5 w-1/2 text-3xl'>START</button>
  )
}

export default StartButton