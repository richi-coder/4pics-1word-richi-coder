import { useSelector } from "react-redux"
import NextChallenge from "./NextChallenge";
import WinnerAnimation from "./WinnerAnimation";
import WinnerMessage from "./WinnerMessage";
import "./styles/winnerinterface.css"

function WinnerInterface() {
    const win = useSelector(state => state.answer).win;
  return (
    <div style={{display: win ? "flex" : "none"}} className="winner-interface absolute top-0 right-0 w-screen h-screen">
    <WinnerAnimation />
    
        <div className='absolute top-0 right-0 w-screen h-screen flex-col items-center justify-between'>
            <WinnerMessage />
            <NextChallenge />
        </div>
    </div>
  )
}

export default WinnerInterface