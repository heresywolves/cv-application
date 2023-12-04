import Spoiler from "./Spoiler"
import PropTypes from 'prop-types';

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

PersonalDetailsInput.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  setPhone: PropTypes.func.isRequired,
  address: PropTypes.string.isRequired,
  setAddress: PropTypes.func.isRequired,
}

export default PersonalDetailsInput;