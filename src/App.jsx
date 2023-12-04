import { useState } from 'react'
import './App.css'
import Spoiler from './components/Spoiler'


function App() {
  
  const [name, setName] = useState('Tyler Durden');
  const [email, setEmail] = useState('tylerdurd@gmail.com');
  const [phone, setPhone] = useState('+1 888 888 8888');
  const [address, setAddress] = useState('London, UK');
  const [summary, setSummary] = useState('Versatile and detail-oriented UX/UI Designer with a proven track record of creating visually stunning and user-friendly digital experiences. With a passion for combining aesthetics and functionality, I bring a unique blend of creativity and technical proficiency to every project. Proficient in utilizing design tools and staying abreast of industry trends, I am committed to delivering compelling and intuitive designs that elevate user engagement. Adept at collaborating with cross-functional teams, I thrive in dynamic environments and take pride in turning complex problems into seamless, visually appealing solutions.');
  const [skills, setSkills] = useState([
    'User-Centric Design',
    'Wireframing and Prototyping',
    'Interaction Design',
    'Visual Design',
    'Responsive Web Design',
    'Usability Testing',
    'Design Thinking',
    'Adobe Creative Suite (XD, Photoshop, Illustrator)',
    'Figma and Sketch',
    'HTML, CSS'
  ]);
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
  const [experienceList, setExperienceList] = useState([
    {
      company: 'Umbrella Inc.',
      position: 'UX & UI Designer',
      start: '08/2020',
      end: 'present',
      location: 'New York City, US',
      description: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android.',
      id: 123
    },
    {
      company: 'Black Mesa Labs',
      position: 'UX Research Assistant',
      start: '04/2018',
      end: '02/2019',
      location: 'Berlin, Germany',
      description: 'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.',
      id: 124
    }
  ])
  
  function handelSendForm(e) {
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

  function handleExperienceChange(e) {
    const targetId = +e.target.id.split('-')[1];
    const inputKey = e.target.id.split('-')[0];

    const newExperienceList = experienceList.map((entry) => {
      if (entry.id === targetId) {
        // return the same entry but with the edited key value pair. inputKey is passed in as input id
        return { ...entry, [inputKey]: e.target.value }
      }
      return entry
    })

    setExperienceList(newExperienceList);
  }

  function handleSkillChange(e) {
    const index = +e.target.id.split('-')[1];
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
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

  function handleAddExperience() {
    const newExperienceEntry = {
      company: '',
      position: '',
      start: '',
      end: '',
      location: '',
      description: '',
      id: Date.now()
    }

    setExperienceList((prevExperienceList) => [...prevExperienceList, newExperienceEntry])
  }

  function handleAddSkill() {
    setSkills([...skills, ''])
  }

  function handleDeleteEducation(e) {
    const targetId = +e.target.className.split(' ')[1];
    const newEducationList = educationList.filter((entry) => {
      return (entry.id !== targetId)
    })
    setEducationList(newEducationList);
  }

  function handleDeleteExperience(e) {
    const targetId = +e.target.className.split(' ')[1];
    const newExperienceList = experienceList.filter((entry) => {
      return (entry.id !== targetId)
    })
    setExperienceList(newExperienceList);
  }

  function handleDeleteSkill(index) {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  }

  function handleClearAll() {
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setSummary('');
    setSkills([]);
    setEducationList([]);
    setExperienceList([]);
  }
  
  return (
    <div className="content-container">
      <div className="form-container">
        <form onSubmit={handelSendForm}>
          <PersonalDetailsInput
            name={name}
            setName={setName} 
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            address={address}
            setAddress={setAddress}
          />
          <div className="summary-and-skills">
            <Spoiler
              name="Summary and Skills"
              isOpen={false}
              content={
                <>
                  <label htmlFor="summaryInput">Summary</label>
                  <textarea 
                    rows="6"
                    value={summary} 
                    onChange={(e) => {setSummary(e.target.value)}} 
                    type="text" 
                    id="summaryInput"></textarea>
                  <label>Skills</label>
                  {skills.map(
                    (item, index) => {
                      return (
                        <div key={index} className='skill-input'>
                          <input 
                            value={item} 
                            onChange={handleSkillChange} 
                            type="text" 
                            id={'skill-' + index}
                          />
                          <button 
                            className='remove-skill'
                            onClick={() => handleDeleteSkill(index)}
                            >Remove</button>
                        </div>
                      )
                    }
                  )}
                  <button onClick={handleAddSkill}>+ Add</button>
                </>
              }
            />
          </div>
          <div className="education">
            <Spoiler
              name="Education"
              isOpen={false}
              content={
                <>
                  {educationList.map(
                    (item) => {
                      return (
                        <Spoiler
                          key={item.id}
                          name={(item.school === '') ? 'New School' : item.school}
                          isOpen={false}
                          content={
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
                              <label htmlFor={'start-' + item.id}>Start Date</label>
                              <input 
                                value={item.start} 
                                onChange={handleEducationChange}
                                type="text" 
                                id={'start-' + item.id}
                              />
                              <label htmlFor={'end-' + item.id}>End Date</label>
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
                                onClick={handleDeleteEducation}
                              >Remove</button>
                            </div>
                          }
                        />
                      )
                    }
                    )
                  }
                  <button onClick={handleAddEducation}>+ Add</button>
                </>
              }
            />
          </div>
          <div className="experience">
            <Spoiler
              name="Experience"
              isOpen={false}
              content={
                <>
                  {experienceList.map(
                    (item) => {
                      return (
                        <Spoiler
                          key={item.id}
                          name={(item.company === '') ? 'New Company' : item.company}
                          isOpen={false}
                          content={
                            <div key={item.id} className='experience-entry-form'>
                              <label htmlFor={'company-' + item.id}>Company Name</label>
                              <input 
                                value={item.company} 
                                onChange={handleExperienceChange}
                                type="text" 
                                id={'company-' + item.id}
                              />
                              <label htmlFor={'position-' + item.id}>Company Name</label>
                              <input 
                                value={item.position} 
                                onChange={handleExperienceChange}
                                type="text" 
                                id={'position-' + item.id}
                              />
                              <label htmlFor={'start-' + item.id}>Start Date</label>
                              <input 
                                value={item.start} 
                                onChange={handleExperienceChange}
                                type="text" 
                                id={'start-' + item.id}
                              />
                              <label htmlFor={'end-' + item.id}>End Date</label>
                              <input 
                                value={item.end} 
                                onChange={handleExperienceChange}
                                type="text" 
                                id={'end-' + item.id}
                              />
                              <label htmlFor={'location-' + item.id}>Location</label>
                              <input 
                                value={item.location} 
                                onChange={handleExperienceChange}
                                type="text" 
                                id={'location-' + item.id}
                              />
                              <label htmlFor={'description-' + item.id}>Description</label>
                              <input 
                                value={item.description} 
                                onChange={handleExperienceChange}
                                type="text" 
                                id={'description-' + item.id}
                              />
                              <button 
                                className={"delete-entry " + item.id} 
                                onClick={handleDeleteExperience}
                              >Remove</button>
                            </div>
                          }
                          />
                          )
                      }
                    )
                  }
                  <button onClick={handleAddExperience}>+ Add</button>
                </>    
              }  
            />
          </div>
          <button className='clear-resume' onClick={handleClearAll}>Clear All</button>
        </form>
      </div>
      <div className="preview-container">
        <div className="preview-personal-info">
          <h1>{name}</h1>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Address: {address}</p>
        </div>
        <div className="preview-summary">
          {summary != '' && <h2>Summary</h2>}
          <p>{summary}</p>
        </div>
        <div className="preview-skills">
          {skills.length > 0 && <h2>Skills</h2>}
          {skills.map((skill, index) => {
            return (<p key={index}>{skill}</p>)
          })}
        </div>
        <div className="preview-education">
          {educationList.length > 0 && <h2>Education</h2>}
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
        <div className="preview-experience">
          {experienceList.length > 0 && <h2>Experience</h2>}
          {experienceList.map(
            (item) => {
              return (
                <div className="experience-entry" key={item.id}>
                  <p>{item.company}</p>
                  <p>{item.position}</p>
                  <p>{item.start + " - " + item.end}</p>
                  <p>{item.location}</p>
                  <p>{item.description}</p>
                </div>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}

function PersonalDetailsInput(props) {
  return (
    <div className="personal-details">
      <Spoiler
        name="Personal Details"
        isOpen={true}
        content={
          <>
            <label htmlFor="nameInput">Full name</label>
            <input 
              value={props.name} 
              onChange={(e) => {props.setName(e.target.value)}} 
              type="text" 
              id="nameInput"
            />
            <label htmlFor="emailInput">Email</label>
            <input 
              value={props.email} 
              onChange={(e) => {props.setEmail(e.target.value)}} 
              type="text" 
              id="emailInput"
            />
            <label htmlFor="phoneInput">Phone number</label>
            <input 
              value={props.phone} 
              onChange={(e) => {props.setPhone(e.target.value)}} 
              type="text" 
              id="phoneInput"
            />
            <label htmlFor="addressInput">Address</label>
            <input 
              value={props.address} 
              onChange={(e) => {props.setAddress(e.target.value)}} 
              type="text" 
              id="addressInput"
            />
          </>
        }
      />
    </div>
  )

}


export default App
