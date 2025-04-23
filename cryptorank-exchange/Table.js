import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";

function Table({ amount, error }) {
  const calcoins = (rate) => {
    if (amount === "") return "0.00000000";
    if (error) return "n/a"
    return (amount * rate).toFixed(8)
  }

  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((i) => (
            <tr key={i.code}>
              <td>{i.name}</td>
              <td>1 USD = {i.rate} {i.code}</td>
              <td>{calcoins(i.rate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
