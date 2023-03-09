import { useSelector } from 'react-redux'
import Image from './Image'

function ImageContainer() {
  const challenge = useSelector(state => state.challenge);
  const images = challenge.imageURL;
  const key = challenge.imageContent;
  console.log(challenge.imageURL)
    //const images = ["https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_2417_1.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_2417_2.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_2417_3.jpg", "https://www.scrabblewordsolver.com/storage/cheats/lotum/images/_2417_4.jpg"]
  return (
    <div className='flex flex-row flex-wrap w-100 items-center'>
        {images.map((imageUrl, i) => 
            <Image key={key[i]} url={imageUrl}/>
        )}
    </div>
    
  )
}

export default ImageContainer