import * as reduxToolkit from "@reduxjs/toolkit";
const { createSlice } = reduxToolkit.default ?? reduxToolkit;

const initialState = {
    level: 99999999999999999,
    imageURL: [""],
    answer: "i",
    puzzleString: "i",
    puzzle: []
}

const puzzleSlice = createSlice({
    name: "challenge",
    initialState,
    reducers: {
        nextPuzzle(state, action) {
            return action.payload;
        },
        createPuzzle(state, action) {
            state.puzzle = action.payload;
        },
        updatePuzzleNull(state, action) {
            state.puzzle[action.payload.id] = null
        },
        updatePuzzleFill(state, action) {
            state.puzzle[action.payload.id] = action.payload.letter;
        }
    }
})

export const { createPuzzle, updatePuzzleNull, updatePuzzleFill, nextPuzzle} = puzzleSlice.actions;
export default puzzleSlice.reducer;