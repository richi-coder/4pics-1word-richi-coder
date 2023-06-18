import * as reduxToolkit from "@reduxjs/toolkit";
import storage from "../services/localStorage";
const { createSlice } = reduxToolkit.default ?? reduxToolkit;

const initialState = {
    add: true,
    dashboardResponse: [],
    win: false,
    correctAnswer: "",
    gameCondition: "loading",
    coins: 0,
    nextButton: false
};

const dashboardSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {
        resetDashboard(state, action) {
            return {
                ...initialState,
                coins: state.coins
            }
        },
        initializeDashboard(state, action) {
            return {
                ...state,
                dashboardResponse: action.payload.arrayResponse.map(item => null),
                correctAnswer: action.payload.response.toLowerCase()
            }
            
        },
        addLetter(state, action) {
            const index = state.dashboardResponse.indexOf(null)
            if (index !== -1) {
                state.dashboardResponse[index] = action.payload
            }
        },
        changeAdding(state, action) {
            return {
                ...state,
                add: action.payload
            }
        },
        removeLetter(state, action) {
            state.dashboardResponse[action.payload.id] = null
        },
        win(state, action) {
            state.win = state.correctAnswer === state.dashboardResponse.map(item => item ? item.letter : "").join("").toLowerCase()
        },
        setGameCondition(state, action) {
            state.gameCondition = action.payload;
        },
        initializeCoins(state, action) {
            state.coins = JSON.parse(storage.getItem("gameData")).coins
        },
        addCoins(state, action) {
            state.coins = JSON.parse(storage.getItem("gameData")).coins
        },
        nextButtonChange(state, action) {
            state.nextButton = action.payload;
        }
    }
})

export const { addLetter, removeLetter, changeAdding, initializeDashboard, win, initializeCorrectAnswer, setGameCondition, resetDashboard, addCoins, nextButtonChange, initializeCoins } = dashboardSlice.actions;
export default dashboardSlice.reducer;