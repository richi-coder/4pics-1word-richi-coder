import { useSelector } from "react-redux"

function Level() {
    const level = useSelector(state => state.challenge).level;
  return (
    <div className='text-white'>{level}</div>
  )
}

export default Level