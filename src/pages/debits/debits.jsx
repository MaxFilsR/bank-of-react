import React from "react";
import { useState } from "react";

const DebitsPage = ({ balance, addDebit, debits }) => {
  const [description, setDescription]=useState('');
  const[amount, setAmount]=useState('');

  const handleChanges=(event)=>{
    event.preventDefault();
    const NumericAmount=parseFloat(amount);
    if(NumericAmount>0 && description){
      const newDebit ={
        description: description,
        amount: NumericAmount
      };
      addDebit(newDebit);
      setDescription('');
      setAmount('');
    }
      else{
        alert("Please fill description and amount.")
      }
  };


  return (
    <div className="dashboard-page-content-container">
      <main className="dashboard-page-content">
        <h1 className="page-title">Debits</h1>
        <p>
          <strong>Current Balance:</strong> ${balance.toLocaleString("en-US")}
        </p>
        <form onSubmit={handleChanges}>
          <div>
            <label>Description: </label>
            <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(event)=>setDescription(event.target.value)}

            />
          </div>
          <div>
            <label>Amount: </label>
            <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(event)=>setAmount(event.target.value)}
            />
            </div>
            <button type="submit"> Add Debit</button>
          </form>
          <h3> Debit History</h3>
          {debits.map((debit,index)=>(
            <div key={index} style={{border: '1px solid #ccc', margin: '10px', padding:'10px'}}>
              <p><strong>Description:</strong>{debit.description}</p>
              <p><strong> Amount:</strong>${debit.amount.toLocaleString("en-US")}</p>
              <p><strong> Date:</strong>{debit.date}</p>
            </div>
          ))}

      </main>
    </div>
  );
};

export default DebitsPage;
