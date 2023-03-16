import { faBackward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function BackArrow() {

  function goHome() {
    let backAudio = document.querySelector("#next-sound")
    backAudio.play()
    setTimeout(() => {
      location.assign("/")
    }, 500);
  }

  return (
    <div 
    className='w-1/4 text-white flex flex-col items-start active:scale-110 transition-all'>
      <FontAwesomeIcon 
      tabIndex={18}
      className="md:text-4xl sm:text-2xl text-lg cursor-pointer"
      onClick={goHome}
      icon={faBackward} />
    </div>
  )
}

export default BackArrow