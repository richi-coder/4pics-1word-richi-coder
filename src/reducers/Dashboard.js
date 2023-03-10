import { createSlice, removeListener } from "@reduxjs/toolkit";

const initialState = {
    add: true,
    dashboardResponse: []
};

const dashboardSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {
        addLetter(state, action) {
            state.dashboardResponse.push(action.payload)
        },
        changeAdding(state, action) {
            return {
                ...state,
                add: action.payload
            }
        }
        /*
        removeLetter(state, action) {

            const index = state.puzzle.indexOf(action.payload)
            state.puzzle[in] = ""
        }*/
    }
})

export const { addLetter, removeLetter, changeAdding } = dashboardSlice.actions;
export default dashboardSlice.reducer;