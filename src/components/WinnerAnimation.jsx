import { useEffect, useState } from 'react'
import "./styles/winneranimation.css"
import { useSelector } from 'react-redux';
import WinnerCoin from './WinnerCoin';

function WinnerAnimation() {
    const [elements, setElements] = useState(new Array(4).fill(null));
    const [animationClass, setAnimationClass] = useState('top-0 left-0')
    const win = useSelector(state => state.answer).win;
    const nextButton = useSelector(state => state.answer).nextButton;

  useEffect(() => {
    if (nextButton) {
      setAnimationClass('-top-[50vh] left-[50vw]')
    } else {
      setAnimationClass('top-0 left-0')
    }
  }, [nextButton])
  

  return (
    <div className='winner-animation flex flex-row items-center justify-center w-screen h-screen'>
        {/* {
            elements.map((element,i) => <div key={i} className='animation-element'></div>)
        } */}
        {
          win ?
          elements.map((element,i) => <WinnerCoin key={i} animationClass={animationClass} />) :
          null
        }
        
    </div>
  )
}

export default WinnerAnimation