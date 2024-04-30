import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesList from "./ExpensesList";
import AddExpense from "./AddExpense";

const Dummy = [
  { id: 1, name: "Car Wash", amount: 23.02, date: new Date(2024, 2, 26) },
  {
    id: 2,
    name: "Groceries",
    amount: 45.232,
    date: new Date(2024, 2, 10),
  },
  { id: 3, name: "Insurance", amount: 432.32, date: new Date(2024, 3, 4) },
  {
    id: 4,
    name: "Gasoline",
    amount: 100.211,
    date: new Date(2024, 4, 13),
  },
];

const Expenses = () => {
  const [filteredYear, selectFilteredYear] = useState("2024");
  const [expenses, setExpenses] = useState(Dummy);
  const [newExpenseToggle, setNewExpenseToggle] = useState(false);

  const getyearFilter = (year) => {
    selectFilteredYear(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const newExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const toggleNewExpenseHandler = () => {
    setNewExpenseToggle(!newExpenseToggle);
  };

  return (
    <div>
      <AddExpense toggleNewExpense={toggleNewExpenseHandler} />
      {newExpenseToggle && 
      <NewExpense onCreatingExpense={newExpenseHandler}
      toggleNewExpense={toggleNewExpenseHandler} />}
      <li>
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} getYear={getyearFilter} />
          <ExpensesList list={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
};

export default Expenses;
