import PropTypes from 'prop-types';

function PreviewPortfolio(props) {
  return (
    <div className="preview-container">
      <div className="preview-personal-info">
        <h1>{props.name}</h1>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
        <p>Address: {props.address}</p>
      </div>
      <div className="preview-summary">
        {props.summary != '' && <h2>Summary</h2>}
        <p>{props.summary}</p>
      </div>
      <div className="preview-skills">
        {props.skills.length > 0 && <h2>Skills</h2>}
        {props.skills.map((skill, index) => {
          return (<p key={index}>{skill}</p>)
        })}
      </div>
      <div className="preview-education">
        {props.educationList.length > 0 && <h2>Education</h2>}
        {props.educationList.map(
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
        {props.experienceList.length > 0 && <h2>Experience</h2>}
        {props.experienceList.map(
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
  )
}

PreviewPortfolio.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  setPhone: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  setSummary: PropTypes.func.isRequired,
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