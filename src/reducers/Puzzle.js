import * as reduxToolkit from "@reduxjs/toolkit";
const { createSlice } = reduxToolkit.default ?? reduxToolkit;

const initialState = {
    number: 2,
    imageURL: ["https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_1.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_2.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_3.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_479_4.jpg"],
    answer: "ice",
    puzzleString: "RCCEMAEIWTRS",
    puzzle: []
}

const puzzleSlice = createSlice({
    name: "challenge",
    initialState,
    reducers: {
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

export const { createPuzzle, updatePuzzleNull, updatePuzzleFill} = puzzleSlice.actions;
export default puzzleSlice.reducer;