import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setGameCondition } from '../reducers/Dashboard';
import Image from './Image'
import "./styles/imagecontainer.css"

function ImageContainer() {
  const dispatch = useDispatch();
  const challenge = useSelector(state => state.challenge);
  const images = challenge.imageURL;
  const imageLoad = useSelector(state => state.imageLoad);

useEffect(() => {
  //console.log(imageLoad, "imageloadddd")
  if (imageLoad.imageArray.every(image => image !== false)){
  setTimeout(() => {
    dispatch(setGameCondition("started"))
  }, 500);
  }
}, [imageLoad])


  return (
    <div className='top-image-container flex flex-col items-center py-1'>
      <div className='image-container flex flex-row aspect-square flex-wrap items-center justify-center'>
          {images.map((imageUrl, i) => 
              <Image key={i} url={imageUrl} index={i} />
          )}
      </div>

    </div>
  )
}

export default ImageContainer