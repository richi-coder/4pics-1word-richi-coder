import { useSelector } from 'react-redux'
import Image from './Image'
import "./styles/imagecontainer.css"

function ImageContainer() {
  const challenge = useSelector(state => state.challenge);
  const images = challenge.imageURL;
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