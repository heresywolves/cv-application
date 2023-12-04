import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Spoiler from './components/Spoiler'


function App() {
  // const [count, setCount] = useState(0)
  
  const [name, setName] = useState('Tyler Durden');
  const [email, setEmail] = useState('tylerdurd@gmail.com');
  const [phone, setPhone] = useState('+1 888 888 8888');
  const [address, setAddress] = useState('London, UK');
  const [educationList, setEducationList] = useState([
    {
      school: 'London City Univercity',
      degree: 'Bachelors in Economics',
      start: '08/2020',
      end: 'present',
      location: 'New York City, US',
      id: 123
    }
  ])
  
  function handeSendForm(e) {
    e.preventDefault();
  }
  
  return (
    <div className="content-container">
      <div className="form-container">
        <form onSubmit={handeSendForm}>
          <div className="personal-details">
            <label htmlFor="nameInput">Full name</label>
            <input 
              value={name} 
              onChange={(e) => {setName(e.target.value)}} 
              type="text" 
              id="nameInput"
            />
            <label htmlFor="emailInput">Email</label>
            <input 
              value={email} 
              onChange={(e) => {setEmail(e.target.value)}} 
              type="text" 
              id="emailInput"
            />
            <label htmlFor="phoneInput">Phone number</label>
            <input 
              value={phone} 
              onChange={(e) => {setPhone(e.target.value)}} 
              type="text" 
              id="phoneInput"
            />
            <label htmlFor="addressInput">Address</label>
            <input 
              value={address} 
              onChange={(e) => {setAddress(e.target.value)}} 
              type="text" 
              id="addressInput"
            />
          </div>
          <div className="education">
            {/* <EducationForm/> */}
            {/* <button onClick={AddEducationForm}>+ Add</button> */}
          </div>
        </form>
      </div>
      <div className="preview-container">
        <div className="preview-personal-info">
          <h1>{name}</h1>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {address}</p>
        </div>
        <div className="preview-education">
          <h2>Education</h2>
          {educationList.map(
            (item) => {
              return (
                <div className="education-entry" key={item.id}>
                  <p>{item.start + ' - ' + item.end}</p>
                  <p>{item.location}</p>
                  <p>{item.school}</p>
                  <p>{item.degree}</p>
                </div>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

// function EducationForm() {
//   return (
//     <div className="education-block">
//       <label htmlFor="schoolInput">School</label>
//       <input type="text" id="schoolInput"/>
//       <label htmlFor="degreeInput">Degree</label>
//       <input type="text" id="degreeInput"/>
//       <label htmlFor="startInput">Start Date</label>
//       <input type="text" id="startInput"/>
//       <label htmlFor="endInput">End Date</label>
//       <input type="text" id="endInput"/>
//       <label htmlFor="locationInput">Location</label>
//       <input type="text" id="locationInput"/>
//     </div>
//   )
// }

//   function AddEducationForm() {
//     return (
//       <div className="education-block">
//         <label htmlFor="schoolInput">School</label>
//         <input type="text" id="schoolInput"/>
//         <label htmlFor="degreeInput">Degree</label>
//         <input type="text" id="degreeInput"/>
//         <label htmlFor="startInput">Start Date</label>
//         <input type="text" id="startInput"/>
//         <label htmlFor="endInput">End Date</label>
//         <input type="text" id="endInput"/>
//         <label htmlFor="locationInput">Location</label>
//         <input type="text" id="locationInput"/>
//       </div>
//     )
//   }


export default App
