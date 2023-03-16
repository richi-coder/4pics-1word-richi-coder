import { useDispatch, useSelector } from "react-redux";
import { imageLoad } from "../reducers/ImageLoadReducer";
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

  function fullyLoad() {
    dispatch(imageLoad(index))
    console.log(index, "image load")
  }

  return (
    <img
    tabIndex={index+13}
    onLoad={fullyLoad}
    style={{position: "relative"}}
    onClick={expandImage}
    src={url}
    alt="test"
    width={imageWidth[index]}
    className='aspect-square cursor-pointer select-none focus:border-collapse' />
  )
}

export default Image