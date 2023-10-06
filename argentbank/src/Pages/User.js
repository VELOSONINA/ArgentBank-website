// User.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import accountData from '../Components/Accounts';

const User = ({ username }) => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    setAccounts(accountData);
  }, []);

  return (
    <div>
      <Header username={username} />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{username}!</h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account, index) => (
          <section className="account" key={index}>
            <div className="account-content-wrapper">
              <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">{account.description}</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default User;
