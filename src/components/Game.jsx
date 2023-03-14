import ImageContainer from "./ImageContainer";
import Answer from "./Answer";
import Dashboard from "./Dashboard";
import Keyboard from "./Keyboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import checkWin from "../functions/checkWin";
import { changeAdding, setGameCondition } from "../reducers/Dashboard";
import GamerInput from "./GamerInput";
import "./styles/game.css";
import WinnerInterface from "./WinnerInterface";
import Level from "./Level";
import service from "../services/firebase"


function Game() {
  const dispatch = useDispatch()

  useEffect(() => {
   setTimeout(() => {
    console.log(service
      .loadChallenges())
    //dispatch(setGameCondition("starting"))
   }, 0);
  }, [])
  

  return (
    <div className="game w-screen bg-gray-900 flex">
      <Level />
      <ImageContainer />
      <GamerInput />
      <WinnerInterface />
    </div>
  );
}

export default Game;
