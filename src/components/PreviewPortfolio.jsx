import PropTypes from 'prop-types';
import addressIcon from '../assets/address.svg'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'

function PreviewPortfolio(props) {
  return (
    <div className="preview-container">
      <div className="preview-personal-info">
        <h1>{props.name}</h1>
        <p className='email'><img src={emailIcon} alt="" /> {props.email}</p>
        <p className='phone'><img src={phoneIcon} alt="" /> {props.phone}</p>
        <p><img src={addressIcon} alt="" />{props.address}</p>
      </div>
      <div className="preview-summary">
        {props.summary != '' && <h2>Summary</h2>}
        <p>{props.summary}</p>
      </div>
      <div className="preview-skills">
        {props.skills.length > 0 && <h2>Skills</h2>}
        <div className='skill-entries'>
          {props.skills.map((skill, index) => {
            return (<p key={index}>{skill}</p>)
          })}
        </div>
      </div>
      <div className="preview-education">
        {props.educationList.length > 0 && <h2>Education</h2>}
        {props.educationList.map(
          (item) => {
            return (
              <div className="education-entry" key={item.id}>
                <p>{item.start + ' - ' + item.end}</p>
                <p className='school-name-preview'>{item.school}</p>
                <p>{item.location}</p>
                <p>{item.degree}</p>
              </div>
            )
          }
        )}
      </div>
      <div className="preview-experience">
        {props.experienceList.length > 0 && <h2>Experience</h2>}
        {props.experienceList.map(
          (item) => {
            return (
              <div className="experience-entry" key={item.id}>
                <p>{item.start + " - " + item.end}</p>
                <p className='preview-company-name'>{item.company}</p>
                <p>{item.location}</p>
                <p className='preview-position'>{item.position}</p>
                <p className='preview-experience-description'>{item.description}</p>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

PreviewPortfolio.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  educationList: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  experienceList: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default PreviewPortfolio;