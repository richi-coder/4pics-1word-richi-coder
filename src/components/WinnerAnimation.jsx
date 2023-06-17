import { useEffect, useState } from 'react'
import "./styles/winneranimation.css"
import { useSelector } from 'react-redux';
import WinnerCoin from './WinnerCoin';

function WinnerAnimation() {
    const [elements] = useState(new Array(5).fill(null));
    const [animationClass, setAnimationClass] = useState(new Array(5).fill('top-0 left-0'))
    const [numberAnimation, setNumberAnimation] = useState('')
    const win = useSelector(state => state.answer).win;
    const nextButton = useSelector(state => state.answer).nextButton;

  useEffect(() => {
    if (nextButton) {
      setAnimationClass([
        'top-[0vh] -left-[8vw]',
        'top-[12vh] -left-[5vw]',
        'top-[15vh] left-[0vw]',
        'top-[12vh] left-[5vw]',
        'top-[0vh] left-[8vw]',
      ])
      setNumberAnimation('scale-110')
      setTimeout(() => {
        setAnimationClass(new Array(5).fill('-top-[50vh] left-[50vw]'))
        setNumberAnimation('opacity-0')
      }, 1000);
      setTimeout(() => {
        setNumberAnimation('opacity-100')
      }, 4000);
    } else {
      setAnimationClass(new Array(5).fill('top-0 left-0'))
    }
  }, [nextButton])
  

  return (
    <>
    
    <div className='winner-animation flex flex-row items-center justify-center w-screen h-screen relative'>
        {/* {
            elements.map((element,i) => <div key={i} className='animation-element'></div>)
        } */}
        
        {
          win ?
          <>
          {
            elements.map((element,i) => <WinnerCoin key={i} animationClass={animationClass[i]} />)
          }
          <div className={`winnerNumber text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[750] font-bold text-amber-500 transition-all duration-300 ${numberAnimation}`} style={{textShadow: '0px 0px 15px black'}}>5+</div>
          </>
          :
          null
        }
        
    </div>
    </>
  )
}

export default WinnerAnimation