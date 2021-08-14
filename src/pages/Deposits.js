import React, { useContext, useState, useEffect } from "react";
import MyContext from "../providers/MyContext";
import Header from "../components/Header";

export default function Deposits() {
  let { deposit, setDeposit } = useContext(MyContext);
  const [arrDeposits, setArrDeposits] = useState([]);
  const [amount, setAmount] = useState(0);
  const [description, setdescription] = useState("");

  useEffect(() => {
    setDeposit((deposit += Number(amount)));
  }, [arrDeposits]);

  function handleChange({ target }) {
    target.name === "amount"
      ? setAmount(Number(target.value))
      : setdescription(target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setArrDeposits([
      ...arrDeposits,
      {
        amount: amount,
        description: description,
      },
    ]);
  }
  return (
    <div>
      <Header pageName="Deposit" />
      <form>
        <label htmlFor="quantia-input">
          Value:{" "}
          <input
            id="quantia-input"
            type="number"
            name="amount"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description-deposit-input">
          Description:{" "}
          <input
            id="description-deposit-input"
            type="text"
            name="description"
            onChange={handleChange}
          />
        </label>
        <button type="submit" onClick={handleClick}>
          Add Deposit
        </button>
      </form>
      return (
      <table>
        <thead>
          <tr>
            <td>Deposit</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {arrDeposits.map((dep) => {
            return (
              <tr>
                <td>R$ {Number(dep.amount).toFixed(2)}</td>
                <td>{dep.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>Total = R${deposit.toFixed(2)}</div>
    </div>
  );
}
