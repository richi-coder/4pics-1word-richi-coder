import Dashboard from './Dashboard'
import Keyboard from './Keyboard'

function GamerInput() {
  return (
    <div style={{border: "1px solid white"}} className="w-1/2 aspect-square flex flex-col">
        <Dashboard />
        <Keyboard />
    </div>
  )
}

export default GamerInput