import React from "react";
import PropTypes from "prop-types";
import Button from "../../Layouts/Button";
import accountsData from "../../../Datas/accountsData"; 

// Composant AccountItem
function AccountItem({ id, title, amount, description }) {
  return (
    <section className="account" key={id}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button className="transaction-button">View transactions</Button>
      </div>
    </section>
  );
}

AccountItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired,
};

// Composant Accounts
function Accounts() {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accountsData.map((account) => (
        <AccountItem key={account.id} {...account} />
      ))}
    </>
  );
}

export default Accounts;
