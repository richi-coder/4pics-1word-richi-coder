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
            state.dashboardResponse = action.payload.map(item => null)
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
        }
    }
})

export const { addLetter, removeLetter, changeAdding, initializeDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;