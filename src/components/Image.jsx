import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectImage, unselectImage } from "../reducers/ImageReducer";

function Image({url, index}) {
  const imageWidth = useSelector(state => state.image).sizes;
  const imageOpened = useSelector(state => state.image).imageOpened;
  const dispatch = useDispatch();
  function expandImage() {
    if (!imageOpened){
      dispatch(selectImage(index))
    } else {
      dispatch(unselectImage())
    }
  } 


  return (
    <img style={{position: "relative"}} onClick={expandImage} src={url} alt="test" width={imageWidth[index]} className='aspect-square cursor-pointer' />
  )
}

export default Image