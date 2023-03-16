import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeCorrectAnswer, initializeDashboard, setGameCondition } from '../reducers/Dashboard';
import storage from '../services/localStorage';
import Square from './Square';
import "./styles/dashboard.css"
//import audioWon from '/public/win.mp3'

function Dashboard() {
    const dispatch = useDispatch();
    const gameCondition = useSelector(state => state.answer).gameCondition;
    const challenge = useSelector(state => state.challenge);
    const testing = useSelector(state => state.answer).dashboardResponse;
    const win = useSelector(state => state.answer).win;
    const answer = challenge.answer.split("");
    const dashboardStyle = "dashboard h-1/3 flex flex-row justify-center"

    useEffect(() => {
        if (testing.length === 0) {
            const initDashboard = {
                arrayResponse: answer,
                response: challenge.answer
            }
        dispatch(initializeDashboard(initDashboard))
        console.log("dashboard")
        } 
        if (testing.filter(item => item !== null).length === answer.length && !win) {
            let incorrectAudio = document.querySelector("#wrong")
            incorrectAudio.play()
            dispatch(setGameCondition("incorrect"))
        } 
        if (testing.filter(item => item!== null).length === answer.length && win) {
            let audioWon = document.getElementById("won");
            audioWon.play();
            let gameData = JSON.parse(storage.getItem("gameData"))
            gameData.coins = gameData.coins + 5;
            storage.setItem("gameData", JSON.stringify(gameData))
            dispatch(setGameCondition("winner"))
        }
    }, [testing, challenge.answer])
    

    return (
    <div className={`${dashboardStyle}`}>
        {
            answer.map((letter,i) => 
                <Square key={i} element={testing[i]} dashPos={i} />
            )
        }
        <audio id='won' src="win.mp3"></audio>
        <audio id='wrong' src="wrong.mp3"></audio>
    </div>
  )
}

export default Dashboard