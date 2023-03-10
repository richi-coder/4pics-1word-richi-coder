import ImageContainer from "./ImageContainer"
import Answer from "./Answer"
import Dashboard from "./Dashboard"
import Keyboard from "./Keyboard"

function Game() {
  return (
    <>
    <div className="w-full">REACT GAME!</div>
    <ImageContainer />
    <Dashboard />
    <Keyboard />
    <Answer />
    </>
  )
}

export default Game