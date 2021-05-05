import { useState } from "react";
import "./Expenses.css";

const Expenses = ({ onSubmitForm }) => {
  const [formDate, setDate] = useState("");
  const [formTitle, setTitle] = useState("");
  const [formAmount, setAmount] = useState("");
  const [edited, setEdited] = useState(false);
  const [formClass, setClass] = useState("formTop formHide");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    const expenses = {
      id: Math.random(),
      amount: formAmount,
      description: formTitle,
      date: new Date(formDate),
    };
    if (expenses.amount !== "") onSubmitForm(expenses);
    setDate("");
    setTitle("");
    setAmount("");
  };

  const isEditing = () => {
    setEdited(true);
    setClass("formTop");
  };

  const onCancel = () => {
    setEdited(false);
    setClass("formTop formHide");
  };

  return (
    <div className={formClass}>
      {!edited && (
        <button className="formBtn newBtn" onClick={isEditing}>
          Add New Expense
        </button>
      )}
      {edited && (
        <form onSubmit={submit}>
          <div className="form">
            <div className="cancel" onClick={onCancel}>
              <div></div>
              <div></div>
            </div>
            <div className="formTitle">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={formTitle}
                onChange={titleHandler}
                required
              />
            </div>
            <div className="formDate">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                min="2019-01-01"
                max="2022-12-31"
                value={formDate}
                onChange={dateHandler}
                required
              />
            </div>
            <div className="formAmount">
              <label htmlFor="number">Amount</label>
              <input
                type="number"
                id="number"
                min="0"
                value={formAmount}
                onChange={amountHandler}
                required
              />
            </div>
            <div>
              <button className="formBtn" type="submit">
                Add Expenses
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Expenses;
