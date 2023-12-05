import { useState } from 'react'
import arrowImg from '../assets/arrow-down.png'

const Spoiler = ({ name, content, isOpen }) => {
  const [isSpoilerVisible, setSpoilerVisible] = useState(isOpen);
  const toggleSpoiler = () => {
    setSpoilerVisible(!isSpoilerVisible);
  }

  return (
    <div className={`spoiler ${isSpoilerVisible ? 'opened' : 'closed'}`}>
      <button onClick={toggleSpoiler}>
        {name}
        <img 
          className={`arrow ${isSpoilerVisible ? 'rotate' : ''}`}
          width={15} 
          src={arrowImg} 
          alt=""
          style={{ transform: isSpoilerVisible ? 'rotate(180deg)' : 'rotate(0deg)'}}  
        />
      </button>
      <div className="content-wrapper">
       {isSpoilerVisible && content}
      </div>
    </div>
  )
}

export default Spoiler;