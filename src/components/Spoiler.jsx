import { useState } from 'react'

const Spoiler = ({ name, content, isOpen }) => {
  const [isSpoilerVisible, setSpoilerVisible] = useState(isOpen);
  const toggleSpoiler = () => {
    setSpoilerVisible(!isSpoilerVisible);
  }

  return (
    <div>
      <button onClick={toggleSpoiler}>
        {name}
      </button>
      {isSpoilerVisible && content}
    </div>
  )
}

export default Spoiler;