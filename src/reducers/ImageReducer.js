import * as reduxToolkit from "@reduxjs/toolkit";
const { createSlice } = reduxToolkit.default ?? reduxToolkit;

const initialState = {
    imageOpened: false,
    sizes: ["50%","50%","50%","50%"]
};

const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
      selectImage(state, action) {
        let images = state.sizes.map(image => "0%");
        images[action.payload] = "100%"
        return {
            imageOpened: true, 
            sizes: images
        }
      },
      unselectImage(state, action) {
        let images = state.sizes.map(image => "50%")
        return {
            imageOpened: false,
            sizes: images
        }
      }
    }
})

export const { selectImage, unselectImage } = imageSlice.actions;
export default imageSlice.reducer;