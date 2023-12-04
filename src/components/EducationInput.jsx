import Spoiler from "./Spoiler"
import PropTypes from 'prop-types';

function EducationInput(props) {
  return (
    <div className="education">
      <Spoiler
        name="Education"
        isOpen={false}
        content={
          <>
            {props.educationList.map(
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
                          onChange={props.handleEducationChange} 
                          type="text" 
                          id={'school-' + item.id}
                        />
                        <label htmlFor={'degree-' + item.id}>Degree</label>
                        <input 
                          value={item.degree} 
                          onChange={props.handleEducationChange}
                          type="text" 
                          id={'degree-' + item.id}
                        />
                        <label htmlFor={'start-' + item.id}>Start Date</label>
                        <input 
                          value={item.start} 
                          onChange={props.handleEducationChange}
                          type="text" 
                          id={'start-' + item.id}
                        />
                        <label htmlFor={'end-' + item.id}>End Date</label>
                        <input 
                          value={item.end} 
                          onChange={props.handleEducationChange}
                          type="text" 
                          id={'end-' + item.id}
                        />
                        <label htmlFor={'location-' + item.id}>Location</label>
                        <input 
                          value={item.location} 
                          onChange={props.handleEducationChange}
                          type="text" 
                          id={'location-' + item.id}
                        />
                        <button 
                          className={"delete-entry " + item.id} 
                          onClick={props.handleDeleteEducation}
                        >Remove</button>
                      </div>
                    }
                  />
                )
              }
              )
              }
              <button onClick={props.handleAddEducation}>+ Add</button>
            </>
          }
          />
    </div>
  )
}

EducationInput.propTypes = {
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
  handleEducationChange: PropTypes.func.isRequired,
  handleDeleteEducation: PropTypes.func.isRequired,
  handleAddEducation: PropTypes.func.isRequired,
}

export default EducationInput;