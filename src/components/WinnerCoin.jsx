import './styles/coins.css'

function WinnerCoin({ animationClass }) {
  return (
    <img className={`w-16 md:w-24 -mx-7 transition-all duration-1000 relative z-[700] winnerCoin ${animationClass} select-none`} src="/coin.png" alt="coins" />
  )
}

export default WinnerCoin