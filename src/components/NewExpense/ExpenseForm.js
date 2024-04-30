import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(" ");
  const [expenseDate, setExpenseDate] = useState("");

  const expenseNameHandler = (event) => {
    setExpenseName(event.target.value);
  };

  const expenseAmountHandler = (event) => {
    setExpenseAmount(event.target.value);
  };

  const expenseDateHandler = (event) => {
    setExpenseDate(event.target.value);
  };

  const onsubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      name: expenseName,
      amount: expenseAmount,
      date: new Date(expenseDate),
    };

    props.onSaveSubmit(expenseData);
    setExpenseName("");
    setExpenseAmount("");
    setExpenseDate("");
  };

  const onCancelHandler = (toggle) => {
    props.onCancel(toggle);
  };

  return (
    <form className="expense_form" onSubmit={onsubmitHandler}>
      <div className="expense_control">
        <div className="expense_control">
          <label>Date :</label>
          <input
            type="Date"
            value={expenseDate}
            name="date"
            min="2024-01-01"
            onChange={expenseDateHandler}
          />
        </div>
        <div className="expense_control">
          <label>Amount : </label>
          <input
            type="number"
            min="0.00"
            value={expenseAmount}
            name="amount"
            step="1.00"
            placeholder="Enter the amount"
            onChange={expenseAmountHandler}
          />
        </div>
        <div className="expense_control">
          <label> Expense : </label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Enter your expense"
            value={expenseName}
            onChange={expenseNameHandler}
          />
        </div>
      </div>
      <div className="buttons">
        <div className="expense_Submit">
          <button className="btn btn-submit" type="submit">
            Add Expense
          </button>
        </div>
        <div className="expense_Cancel">
          <button
            className="btn btn-reset"
            type="reset"
            onClick={onCancelHandler}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
