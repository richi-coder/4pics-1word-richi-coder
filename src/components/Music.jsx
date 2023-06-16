import { useEffect, useRef, useState } from "react"

function Music() {
    const musicRef = useRef();
    let playing = true;

    function playMusic(firstShow) {
      if (playing) {
        playing = false; 
        presentation.classList.add('presentation')
        firstShow.style.display = 'block';
        let music = document.querySelector('#music')
        let music2 = document.querySelector('#music2')

        music2.play()
        setInterval(() => {
          music.play()
        setTimeout(() => { 
          music2.play()
        }, 9450 );
      }, 9450); 
    }
    }

    useEffect(() => {
      let firstShow = document.querySelector('#first-show');
      let presentation = document.querySelector('#presentation')
      
      window.addEventListener('click', () => {
        playMusic(firstShow)
        return window.removeEventListener('click', () => playMusic(firstShow) ) 
        }) 
      
      return
      
    }, [])
    
  return (
    <>
    <audio ref={musicRef} id="music" src="/music.mp3"></audio>
    <audio ref={musicRef} id="music2" src="/music.mp3"></audio>
    </>
  )
}

export default Music