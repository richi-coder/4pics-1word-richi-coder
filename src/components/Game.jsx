import ImageContainer from "./ImageContainer";
import Answer from "./Answer";
import Dashboard from "./Dashboard";
import Keyboard from "./Keyboard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import checkWin from "../functions/checkWin";
import { changeAdding, initializeCoins, setGameCondition } from "../reducers/Dashboard";
import GamerInput from "./GamerInput";
import "./styles/game.css";
import WinnerInterface from "./WinnerInterface";
import Top from "./Top";
import service from "../services/firebase";
import storage from "../services/localStorage";
import { createPuzzle, nextPuzzle } from "../reducers/Puzzle";

function Game() {
  const dispatch = useDispatch();

  useEffect(() => {
    // HELPERS
    // window.localStorage.removeItem("challenges")
    // window.localStorage.removeItem("gameData")
    let gameData = storage.getItem("gameData")
      ? JSON.parse(storage.getItem("gameData"))
      : null;
    let storeChallenge = storage.getItem("challenges")
      ? JSON.parse(storage.getItem("challenges"))
      : null;
    if (gameData == null) {
      gameData = {
        level: 0,
        coins: 0,
        data: false,
      };
      storage.setItem("gameData", JSON.stringify(gameData));
      service.loadChallenges();
    } else {
      dispatch(setGameCondition("starting"));
    }
  }, []);

  return (
    <div className="w-screen">
      <Top />
      <div className="game w-full bg-gray-900 flex h-5/6">
        <ImageContainer />
        <GamerInput />
        <WinnerInterface />
      </div>
    </div>
  );
}

export default Game;
