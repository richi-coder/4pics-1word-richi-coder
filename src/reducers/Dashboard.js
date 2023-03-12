import * as reduxToolkit from "@reduxjs/toolkit";
const { createSlice } = reduxToolkit.default ?? reduxToolkit;

const initialState = {
    add: true,
    dashboardResponse: [],
    win: false,
    correctAnswer: "",
    gameCondition: "starting"
};

const dashboardSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {
        initializeDashboard(state, action) {
            state.dashboardResponse = action.payload.map(item => null)
        },
        initializeCorrectAnswer(state, action) {
            state.correctAnswer = action.payload.toLowerCase();
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
        }
    }
})

export const { addLetter, removeLetter, changeAdding, initializeDashboard, win, initializeCorrectAnswer, setGameCondition } = dashboardSlice.actions;
export default dashboardSlice.reducer;