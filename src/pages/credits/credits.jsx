import React from "react";
import { useState } from "react";



const CreditsPage = ({ balance, addCredit, credits }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);

    if (numericAmount > 0 && description.trim()) {
      const newCredit = {
        description: description.trim(),
        amount: numericAmount
      };

      addCredit(newCredit);
      setDescription('');
      setAmount('');
    }
    else {
      alert("Please fill in both description and amount.")
    }
  };


  return (
    <div className="dashboard-page-content-container">
      <main className="dashboard-page-content">
        <h1 className="page-title">Credits</h1>

        {/* Display Account Balance */}
        <p>
          <strong>Current Balance:</strong> ${balance.toLocaleString("en-US")}
        </p>

        {/* Adding Credit Form */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Description: </label>
            <input 
              type = "text"
              placeholder= "Enter credit description"
              value = {description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Amount: </label>
            <input 
              type= "number"
              step= "0.01"
              min= "0.01"
              placeholder= "0.00"
              value= {amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreditsPage;
