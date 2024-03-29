import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { initializeCoins, resetDashboard, setGameCondition } from '../reducers/Dashboard';
import { nextPuzzle } from '../reducers/Puzzle';
import storage from "../services/localStorage"
import { resetImageLoad } from '../reducers/ImageLoadReducer';
import "./styles/startButton.css"

function StartButton() {
    const dispatch = useDispatch();
    const animatedButton = useRef();
    let storeChallenge = storage.getItem("challenges") ? JSON.parse(storage.getItem("challenges")) : null;
    let gameData = storage.getItem("gameData") ? JSON.parse(storage.getItem("gameData")) : null;

    function startGame() {
        let startAudio = document.querySelector("#start-sound");
        startAudio.play()
        animatedButton.current.classList.add("startButton")
        setTimeout(() => {
          console.log(storeChallenge[gameData.level]);
            if (storeChallenge[gameData.level]) {
              dispatch(nextPuzzle(storeChallenge[gameData.level]))
              dispatch(resetDashboard())
              dispatch(resetImageLoad())
              dispatch(initializeCoins())
              dispatch(setGameCondition("started"))
            } else {
              dispatch(setGameCondition('end'))
              return
            }
        }, 1400);
    }

  return (
    <button ref={animatedButton} onClick={startGame} className='bg-green-500 py-5 w-1/2 text-3xl border-2 rounded-lg text-white font-bold hover:text-black transition-colors'>START</button>
  )
}

export default StartButton