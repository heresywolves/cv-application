import { useState } from 'react'
import './App.css'
import PersonalDetailsInput from './components/PersonalDetailsInput';
import SummaryAndSkillsInput from './components/SummaryAndSkillsInput';
import EducationInput from './components/EducationInput';
import ExperienceInput from './components/ExperienceInput';

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
          <SummaryAndSkillsInput
            summary={summary}
            setSummary={setSummary}
            skills={skills}
            handleSkillChange={handleSkillChange}
            handleDeleteSkill={handleDeleteSkill}
            handleAddSkill={handleAddSkill}
          />
          <EducationInput
            educationList={educationList}
            handleEducationChange={handleEducationChange}
            handleAddEducation={handleAddEducation}
            handleDeleteEducation={handleDeleteEducation}
          />
          <ExperienceInput
            experienceList={experienceList}
            handleExperienceChange={handleExperienceChange}
            handleDeleteExperience={handleDeleteExperience}
            handleAddExperience={handleAddExperience}
          />
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








export default App
