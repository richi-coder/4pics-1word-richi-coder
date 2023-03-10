import { useSelector } from 'react-redux'
import Image from './Image'

function ImageContainer() {
  const challenge = useSelector(state => state.challenge);
  const images = challenge.imageURL;
  return (
    <div className='flex flex-row flex-wrap w-100 items-center'>
        {images.map((imageUrl, i) => 
            <Image key={i} url={imageUrl}/>
        )}
    </div>
    
  )
}

export default ImageContainer