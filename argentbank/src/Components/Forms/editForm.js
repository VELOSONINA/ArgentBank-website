import React, {useState}from 'react'

function EditForm() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const handleClick = (e) => {
    e.preventDefault();
    //Réinitialisation des champs
    setUsername('');
    setFirstName('');
    setLastName('');
  }

    return (
      <form id="edit-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            disabled
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            disabled
          />
        </div>
        <div>
          <button type="submit" className="edit-button">
            Save
          </button>
          <button className="edit-button" onClick={handleClick}>
            Cancel
          </button>
        </div>
      </form>
    );
  }


export default EditForm;


