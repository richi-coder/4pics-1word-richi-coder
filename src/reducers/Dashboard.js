import { createSlice, removeListener } from "@reduxjs/toolkit";

const initialState = [];

const dashboardSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {
        addLetter(state, action) {
            state.push(action.payload)
        },/*
        removeLetter(state, action) {

            const index = state.puzzle.indexOf(action.payload)
            state.puzzle[in] = ""
        }*/
    }
})

export const { addLetter, removeLetter } = dashboardSlice.actions;
export default dashboardSlice.reducer;