import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spoiler from './components/Spoiler'


function App() {
  // const [count, setCount] = useState(0)
  function handeSendForm(e) {
    e.preventDefault();
  }
  
  return (
    <div className="content-container">
      <div className="form-container">
        <form onSubmit={handeSendForm}>
          <label htmlFor="nameInput">Full name</label>
          <input type="text" id="nameInput"/>
          <label htmlFor="emailInput">Email</label>
          <input type="text" id="emailInput"/>
          <label htmlFor="phoneInput">Phone number</label>
          <input type="text" id="phoneInput"/>
          <label htmlFor="addressInput">Address</label>
          <input type="text" id="addressInput"/>
        </form>
      </div>
      <div className="preview-container">
      </div>
    </div>
  )
}



export default App
