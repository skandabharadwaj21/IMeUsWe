import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './AddMember.css';


const AddMember = () => {
  const [showDialog, setShowDialog] = useState(false); 
  const [formData, setFormData] = useState({
    relationshipType: '',
    firstName: '',
    middleName: '',
    surname: '',
    status: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    birthPlace: '',
    currentPlace: '',
  });
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Check if all required fields are filled
    const isComplete =  formData.relationshipType.trim() !== '' &&
    formData.firstName.trim() !== '' &&
    formData.surname.trim() !== '';
    setIsFormComplete(isComplete);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/createPerson', formData); // Use axios.post
      console.log('Data saved:', response.data);
      // Reset the form after successful submission
      setFormData({
        relationshipType: '',
        firstName: '',
        middleName: '',
        surname: '',
        status: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        birthPlace: '',
        currentPlace: '',
      });
      setShowDialog(false); // Close the dialog after submission
      setSuccessMessage('You have successfully added a member!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleBack = () => {
    console.log('Go back');
    // Implement any necessary functionality for the back button
  };

  return (
    <div className='container'>
      <div className='my-family'>
        <p>My Family</p>
        <button onClick={() => setShowDialog(true)} className='addMembers'>
          <FontAwesomeIcon icon={faUserGroup} style={{ color: "#ffffff", marginRight: '8px' }} />
          Members
        </button>
        {successMessage && (
                <p className='success-message'>
                  {successMessage}
                </p>
              )}
      </div>
      {showDialog && (
        <div className='dialog'>
          <div className='dialog-content'>
            <form onSubmit={handleSubmit}>
            <div className='dialog-header'>
            <button className='backBtn' onClick={handleBack}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <h2>Member Details</h2>
            <button className={isFormComplete ? 'addButton enabled ' : 'addButton'} disabled={!isFormComplete}> Add Member
            </button>
            </div>
            <div className='profile-div'>
              <img src='plus.png' alt='Add-profile' className='addProfileImg'/>
              <button className='profile-pic'>Add a profile picture</button>
            </div>
            <fieldset className='relation-field'>
                <legend className='relation-legend'>Relationship Type <span className='mandatory'>*</span>:</legend>
            </fieldset>
                <input type='text' className='relation-input' name='relationshipType' value={formData.relationshipType} onChange={handleChange} required placeholder='Mother'/>
                <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} placeholder='First Name' required/>
                <input type='text' name='middleName' value={formData.middleName} onChange={handleChange} placeholder='Middle Name' />
                <input type='text' name='surname' value={formData.surname} onChange={handleChange} placeholder='Surame' required/>
                <label className='status'>Status</label>
                    <div className="status-radio">
                    <label>
                        <input type='radio' name = 'status' value='living' checked ={formData.status === 'living'} onChange={handleChange} />
                        Living
                    </label>
                    <label>
                    <input type='radio' name = 'status' value='deceased' checked ={formData.status === 'deceased'} onChange={handleChange} />
                        Deceased
                    </label>
                    </div>

              <label className='birth-label'>
                Birth Date
                </label>
                <div className='birth-div'>
                <input type='text' name='birthYear' value={formData.birthYear} onChange={handleChange} placeholder='Year'/>
                <select name='birthMonth' value={formData.birthMonth} onChange={handleChange}>
                  <option value='' disabled>Month</option>
                  <option value='January'>January</option>
                  <option value='February'>February</option>
                  <option value='March'>March</option>
                  <option value='April'>April</option>
                  <option value='May'>May</option>
                  <option value='June'>June</option>
                  <option value='July'>July</option>
                  <option value='August'>August</option>
                  <option value='September'>September</option>
                  <option value='October'>October</option>
                  <option value='November'>November</option>
                  <option value='December'>December</option>
                </select>
                <select name='birthDay' value={formData.birthDay} onChange={handleChange}>
                  <option value='' disabled>Day</option>
                  <option value='Sunday'>Sunday</option>
                  <option value='Monday'>Monday</option>
                  <option value='Tuesday'>Tuesday</option>
                  <option value='Wednesday'>Wednesday</option>
                  <option value='Thursday'>Thursday</option>
                  <option value='Friday'>Friday</option>
                  <option value='Saturday'>Saturday</option>
                </select>
                </div>
              <input type='text' name='birthPlace' value={formData.birthPlace} onChange={handleChange} placeholder='Birth Place' required/>
              <input type='text' name='currentPlace' value={formData.currentPlace} onChange={handleChange} placeholder='Current Place' required/>
            </form>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default AddMember;

