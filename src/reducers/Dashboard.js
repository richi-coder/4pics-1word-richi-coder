import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    add: true,
    dashboardResponse: []
};

const dashboardSlice = createSlice({
    name: "answer",
    initialState,
    reducers: {
        initializeDashboard(state, action) {
            //state.dashboardResponse = action.payload
        },
        addLetter(state, action) {
            state.dashboardResponse.push(action.payload)
        },
        changeAdding(state, action) {
            return {
                ...state,
                add: action.payload
            }
        },
        removeLetter(state, action) {
            alert(state.dashboardResponse)
        }
    }
})

export const { addLetter, removeLetter, changeAdding, initializeDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;