import Dashboard from './Dashboard'
import Keyboard from './Keyboard'
import "./styles/gamerinput.css"

function GamerInput() {
  return (
    <div className="gamer-input aspect-square flex flex-col justify-around">
        <Dashboard />
        <Keyboard />
    </div>
  )
}

export default GamerInput