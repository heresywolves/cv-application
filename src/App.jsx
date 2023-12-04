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
      school: 'London City University',
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

  function handleEducationChange(e) {
    const targetId = +e.target.id.split('-')[1];
    const inputKey = e.target.id.split('-')[0];

    const newEducationList = educationList.map((entry) => {
      if (entry.id === targetId) {
        // return the same entry but with the edited key value pair. inputKey is passed in as input id
        return { ...entry, [inputKey]: e.target.value }
      }
      return entry
    })

    setEducationList(newEducationList);
  }

  function handleAddEducation() {
    const newEducationEntry = {
      school: '',
      degree: '',
      start: '',
      end: '',
      location: '',
      id: Date.now()
    }

    setEducationList((prevEducationList) => [...prevEducationList, newEducationEntry])
  }

  function handleDeleteEntry(e) {
    const targetId = +e.target.className.split(' ')[1];
    const newEducationList = educationList.filter((entry) => {
      return (entry.id !== targetId)
    })
    setEducationList(newEducationList);
  }
  
  return (
    <div className="content-container">
      <div className="form-container">
        <form onSubmit={handeSendForm}>
          <div className="personal-details">
            <h4>Personal Details</h4>
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
            <h4>Education</h4>
            {educationList.map(
              (item) => {
                return (
                  <div key={item.id} className='education-entry-form'>
                    <label htmlFor={'school-' + item.id}>School</label>
                    <input 
                      value={item.school} 
                      onChange={handleEducationChange} 
                      type="text" 
                      id={'school-' + item.id}
                    />
                    <label htmlFor={'degree-' + item.id}>Degree</label>
                    <input 
                      value={item.degree} 
                      onChange={handleEducationChange}
                      type="text" 
                      id={'degree-' + item.id}
                    />
                    <label htmlFor={'start-' + item.id}>Start</label>
                    <input 
                      value={item.start} 
                      onChange={handleEducationChange}
                      type="text" 
                      id={'start-' + item.id}
                    />
                    <label htmlFor={'end-' + item.id}>End</label>
                    <input 
                      value={item.end} 
                      onChange={handleEducationChange}
                      type="text" 
                      id={'end-' + item.id}
                    />
                    <label htmlFor={'location-' + item.id}>Location</label>
                    <input 
                      value={item.location} 
                      onChange={handleEducationChange}
                      type="text" 
                      id={'location-' + item.id}
                    />
                    <button 
                      className={"delete-entry " + item.id} 
                      onClick={handleDeleteEntry}
                    >Remove</button>
                  </div>
                )
              }
            )}
            <button onClick={handleAddEducation}>+ Add</button>
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


export default App
