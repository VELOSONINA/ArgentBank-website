import React from 'react'
import Button from '../Button';

function UserHeader({ userName }) {
  return (
    <div className="header">
        <h1>
          Welcome back
          <br />
          {userName}
        </h1>
        <Button className="edit-button" >
          Edit name
        </Button>
    </div>
  );
}

export default UserHeader
