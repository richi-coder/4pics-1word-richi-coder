import { useSelector } from "react-redux";
import StartButton from "./StartButton";
import storage from "../services/localStorage";
import "./styles/loader.css";

function Loader() {
  const gameCondition = useSelector((state) => state.answer).gameCondition;

  const reStartGame = () => {
    storage.removeItem('gameData')
    storage.removeItem('challenges')
    window.location.replace('/')
  }

  return (
    <div
      style={{ display: gameCondition == "loading" || gameCondition == "starting" || gameCondition == "end" ? "flex" : "none" }}
      className="loader w-screen h-screen bg-gray-900 z-50 absolute top-0 left-0 flex-col items-center justify-center"
    >
      {
      gameCondition === "loading" ?
      <div className="text-white text-3xl md:text-5xl">
        LOADING
      </div>
      : gameCondition === "starting" ?
      <StartButton />
      : gameCondition === 'end' ?
      <div className="text-white text-2xl md:text-3xl text-center flex flex-col items-center gap-y-5">
        <div>No more challanges available.<br />Please wait for updates!</div>
        <br />
        <button
          onClick={reStartGame}
          className='bg-green-800 rounded hover:text-black px-3 py-2'>
            RESTART GAME
        </button>
      </div> :
      null
      }
      <audio id="start-sound" src="/startButton.wav"></audio>
    </div>
  );
}

export default Loader;
