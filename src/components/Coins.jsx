import { useSelector } from 'react-redux'
import "./styles/coins.css"

function Coins() {
  const coins = useSelector(state => state.answer).coins;
  return (
    <div className='w-1/4 text-white flex flex-row items-start justify-end gap-3 italic'>
      <img className='coin-image' src="/coin.png" alt="coins" />
      <div className='coin-number flex flex-col justify-start'>{coins}</div>
    </div>
  )
}

export default Coins