import { useSelector } from 'react-redux'
import Image from './Image'

function ImageContainer() {
  const challenge = useSelector(state => state.challenge);
  const images = challenge.imageURL;
  return (
      <div style={{border: "1px solid white"}} className='flex flex-row h-2/3 aspect-square flex-wrap items-center justify-center'>
          {images.map((imageUrl, i) => 
              <Image key={i} url={imageUrl}/>
          )}
      </div>
  )
}

export default ImageContainer