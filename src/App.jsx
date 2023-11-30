import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropTypes from 'prop-types';


function App() {
  // const [count, setCount] = useState(0)
  let mode = 'content';
  
  return (
    <div className="content-container">
      <div className="form-container">
        <OptionModeButtons/>
        <Form mode={mode}/>
      </div>
      <div className="preview-container">
      </div>
    </div>
  )
}

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

function OptionModeButtons() {
  return (
    <div className='option-mode-button-container'>
      <button>Content</button>
      <button>Layout</button>
    </div>
  )
}

function Form({mode}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  if (mode === 'content') {
    return (
      <form onSubmit={handleSubmit}>
        <Spoiler
          name="Personal Information"
          content={
            <div className='personal-info-form-container'>
              <label htmlFor="nameField">Full name</label>
              <input type="text" id="nameField"/>
            </div>
          }
          isOpen={true}
        />
      </form>
    )
  }

  return null; // Return null if the mode is not 'content' or 'layout'
}

// Insures that the 'mode' prop is a required string. Will throw
// A warning if the prop is missing or has wrong type
Form.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default App
