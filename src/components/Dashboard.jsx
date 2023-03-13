import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeCorrectAnswer, initializeDashboard, setGameCondition } from '../reducers/Dashboard';
import Square from './Square';
import "./styles/dashboard.css"

function Dashboard() {
    const dispatch = useDispatch();
    const gameCondition = useSelector(state => state.answer).gameCondition;
    const challenge = useSelector(state => state.challenge);
    const testing = useSelector(state => state.answer).dashboardResponse;
    const win = useSelector(state => state.answer).win;
    const answer = challenge.answer.split("");
    const dashboardStyle = "dashboard h-1/3 flex flex-row items-end justify-center z-50"

    useEffect(() => {
        if (testing.length === 0) {
        dispatch(initializeDashboard(answer))
        dispatch(initializeCorrectAnswer(challenge.answer))
        dispatch(setGameCondition("started"))
        } 
        if (testing.filter(item => item !== null).length === answer.length && !win) {
            dispatch(setGameCondition("incorrect"))
        } 
        if (testing.filter(item => item!== null).length === answer.length && win) {
            dispatch(setGameCondition("winner"))
            // let audioWon = document.getElementById("won");
            // audioWon.play();
        }
    }, [testing])
    

    return (
    <div className={`${dashboardStyle}`}>
        {
            answer.map((letter,i) => 
                <Square key={i} element={testing[i]} dashPos={i} />
            )
        }
        {/* <audio id='won' src="assets/win.mp3"></audio> */}
    </div>
  )
}

export default Dashboard