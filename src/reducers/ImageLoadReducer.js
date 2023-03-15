import * as reduxToolkit from "@reduxjs/toolkit";
const { createSlice } = reduxToolkit.default ?? reduxToolkit;

const initialState = {
    condition: false,
    imageArray: [false,false,false,false]
}

const imageLoadSlice = createSlice({
    name: "imageLoad",
    initialState,
    reducers: {
        imageLoad(state, action) {
            state.imageArray[action.payload] = true
        },
        resetImageLoad(state, action) {
            return initialState
        }
    }
})

export const { imageLoad, resetImageLoad } = imageLoadSlice.actions;
export default imageLoadSlice.reducer;