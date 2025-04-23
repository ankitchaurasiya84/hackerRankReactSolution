import React, { useEffect, useState } from "react";
import Table from "./Table";

function Main() {
  const [amount,setAmount]=useState("")
  const [error,setError]=useState("")
  const availableBalance=17042.67;

  const handleOnChange=(e)=>{
     let value= e.target.value
      if (value === "") {
        setError("Amount cannot be empty");
        return false
  } else if (value < 0.00) {
    setError("Amount cannot be less than $0.01");
    return false
  } else if (value > availableBalance) {
    setError("Amount cannot exceed the available balance");
  } else {
    setError("");
  }
  setAmount(value)
  }

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange $ <input className="w-10" data-testid="amount-input" required type="number" placeholder="USD" value={amount} 
            onChange={handleOnChange}/> of my $
            <span>{availableBalance}</span>:
          </label>
          {error&& (<p data-testid="error" className="form-hint error-text mt-3 pl-0 ml-0">
            {error}
          </p>)}
          
          {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
        </div>
      </section>
      <Table  amount={amount}
      error={error}/>
      
    </div>
  );
}

export default Main;
