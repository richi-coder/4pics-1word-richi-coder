import { createSlice } from "@reduxjs/toolkit";

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
            state.puzzle = state.puzzle.concat(action.payload)
        },
        updatePuzzle(state, action) {
            
        }
    }
})

export const { createPuzzle } = puzzleSlice.actions;
export default puzzleSlice.reducer;