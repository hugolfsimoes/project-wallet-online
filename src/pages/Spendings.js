import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import MyContext from "../providers/MyContext";

export default function Spendings() {
  let { deposit, setDeposit } = useContext(MyContext);
  const [arrSpending, setArrSpending] = useState([]);
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDeposit((deposit += Number(amount)));
  }, [arrSpending]);

  function handleChange({ target }) {
    target.name === "amount"
      ? setAmount(Number(target.value))
      : setDescription(target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setArrSpending([
      ...arrSpending,
      {
        amount: amount,
        description: description,
      },
    ]);
  }

  function deleteSpending(index) {
    setDeposit(deposit - arrSpending[index].amount);
    const auxArr = arrSpending;
    auxArr.splice(index, 1);
    setArrSpending(auxArr);
  }
  return (
    <div>
      <Header pageName="Spending" />
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
          Add Spending
        </button>
      </form>
      return (
      <table>
        <thead>
          <tr>
            <td>Spending</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {arrSpending.map((spen, index) => {
            return (
              <tr key={index}>
                <td>R$ {Number(spen.amount).toFixed(2)}</td>
                <td>{spen.description}</td>
                <button type="button" onClick={() => deleteSpending(index)}>
                  X
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>Total = R${deposit.toFixed(2)}</div>
    </div>
  );
}
