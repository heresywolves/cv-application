import Spoiler from "./Spoiler"
import PropTypes from 'prop-types';
import crossImg from "../assets/cross.svg"

function SummaryAndSkillsInput(props) {
  return (
    <div className="summary-and-skills">
      <Spoiler
        name="Summary and Skills"
        isOpen={false}
        content={
          <>
            <label htmlFor="summaryInput">Summary</label>
            <textarea 
              rows="6"
              value={props.summary} 
              onChange={(e) => {props.setSummary(e.target.value)}} 
              type="text" 
              id="summaryInput"></textarea>
            <label>Skills</label>
            {props.skills.map(
              (item, index) => {
                return (
                  <div key={index} className='skill-input'>
                    <input 
                      value={item} 
                      onChange={props.handleSkillChange} 
                      type="text" 
                      id={'skill-' + index}
                    />
                    <button 
                      className='remove-skill'
                      onClick={() => props.handleDeleteSkill(index)}
                      ><img src={crossImg} width={20} alt="" /></button>
                  </div>
                )
              }
            )}
            <button className="add-entry-button" onClick={props.handleAddSkill}>+ Add</button>
          </>
        }
      />
    </div>
  )
}

SummaryAndSkillsInput.propTypes = {
  summary: PropTypes.string.isRequired,
  setSummary: PropTypes.func.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  handleSkillChange: PropTypes.func.isRequired,
  handleDeleteSkill: PropTypes.func.isRequired,
  handleAddSkill: PropTypes.func.isRequired,
}

export default SummaryAndSkillsInput;