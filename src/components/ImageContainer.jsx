import Image from './Image'

function ImageContainer() {
    const images = ["image-1", "image-2", "image-3", "image-4"]
  return (
    <div style={{display: "flex"}}>
        {images.map(image => 
            <Image content={image}/>
        )}
    </div>
    
  )
}

export default ImageContainer