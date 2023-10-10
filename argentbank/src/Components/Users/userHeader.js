import React from 'react'
import Button from '../Button';

function userHeader({ userName }) {
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

export default userHeader
