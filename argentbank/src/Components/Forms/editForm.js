import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUserNameAsync } from '../../actions/userAction';
import { setUserName } from '../../reducers/userSlice';

function EditForm() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editUserNameAsync(username))
      .then((result) => {
        if (result) {
          console.log('Mise à jour réussie.');
          dispatch(setUserName(username));
          setUsername('');
        } else {
          console.error('Échec lors de la mise à jour.');
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour :', error);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Réinitialisation des champs
    setUsername('username');
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
