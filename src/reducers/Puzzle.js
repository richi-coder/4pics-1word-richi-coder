import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    level: 1,
    number: 5,
    imageURL: ["https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_2417_1.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_2417_2.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_2417_3.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_2417_4.jpg"],
    imageContent: ["gymnastics", "horse", "woman and horse", "wooden horse for kids"],
    answer: "horse"
}

const puzzleSlice = createSlice({
    name: "challenge",
    initialState,
    reducers: {
        addAnswer(state, action) {
            return ["hi", "how", "are", "you"]
        }
    }
})

export const { addAnswer } = puzzleSlice.actions;
export default puzzleSlice.reducer;