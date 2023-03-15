import { useSelector } from "react-redux"
import BackArrow from "./BackArrow";
import Coins from "./Coins";
import Level from "./Level";
import "./styles/top.css"

function Top() {
    const level = useSelector(state => state.challenge).level;
  return (
    <div className="top w-screen h-1/6 flex flex-row items-start justify-between px-16 pt-5 select-none">
        <BackArrow />
        <Level />
        <Coins />
    </div>
    
  )
}

export default Top