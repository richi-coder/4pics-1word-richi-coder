import { useSelector } from 'react-redux'
import Image from './Image'
import "./styles/imagecontainer.css"

function ImageContainer() {
  const challenge = useSelector(state => state.challenge);
  const images = challenge.imageURL;
  return (
      <div className='image-container flex flex-row aspect-square flex-wrap items-center justify-center'>
          {images.map((imageUrl, i) => 
              <Image key={i} url={imageUrl} index={i} />
          )}
      </div>
  )
}

export default ImageContainer