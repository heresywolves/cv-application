import Spoiler from "./Spoiler"
import PropTypes from 'prop-types';
import crossImg from "../assets/cross.svg"

function ExperienceInput(props) {
  return (
    <div className="experience">
        <Spoiler
          name="Experience"
          isOpen={false}
          content={
            <>
              {props.experienceList.map(
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
                            onChange={props.handleExperienceChange}
                            type="text" 
                            id={'company-' + item.id}
                          />
                          <label htmlFor={'position-' + item.id}>Position</label>
                          <input 
                            value={item.position} 
                            onChange={props.handleExperienceChange}
                            type="text" 
                            id={'position-' + item.id}
                          />
                          <label htmlFor={'start-' + item.id}>Start Date</label>
                          <input 
                            value={item.start} 
                            onChange={props.handleExperienceChange}
                            type="text" 
                            id={'start-' + item.id}
                          />
                          <label htmlFor={'end-' + item.id}>End Date</label>
                          <input 
                            value={item.end} 
                            onChange={props.handleExperienceChange}
                            type="text" 
                            id={'end-' + item.id}
                          />
                          <label htmlFor={'location-' + item.id}>Location</label>
                          <input 
                            value={item.location} 
                            onChange={props.handleExperienceChange}
                            type="text" 
                            id={'location-' + item.id}
                          />
                          <label htmlFor={'description-' + item.id}>Description</label>
                          <textarea
                            rows={6}
                            value={item.description} 
                            onChange={props.handleExperienceChange}
                            type="text" 
                            id={'description-' + item.id}
                          />
                          <button 
                            className={"delete-entry " + item.id} 
                            onClick={props.handleDeleteExperience}
                          ><img src={crossImg} width={20} alt="" />Remove</button>
                        </div>
                      }
                      />
                      )
                  }
                )
              }
            <button className="add-entry-button" onClick={props.handleAddExperience}>+ Add</button>
          </>    
        }  
      />
    </div>
  )
}

ExperienceInput.propTypes = {
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
  handleExperienceChange: PropTypes.func.isRequired,
  handleDeleteExperience: PropTypes.func.isRequired,
  handleAddExperience: PropTypes.func.isRequired,
}

export default ExperienceInput;