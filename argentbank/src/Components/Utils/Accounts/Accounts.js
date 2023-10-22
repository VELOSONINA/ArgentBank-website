import React from "react";
import Button from "../../Button";
import accountsData from "../../../Datas/accountsData"; 

function Accounts() {
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accountsData.map((account) => {
        return (
          <section className="account" key={account.id}>
            <div className="account-content-wrapper">
              <h3 className="account-title">{account.title}</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">
                {account.description}
              </p>
            </div>
            <div className="account-content-wrapper cta">
              <Button className="transaction-button">View transactions</Button>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default Accounts;
