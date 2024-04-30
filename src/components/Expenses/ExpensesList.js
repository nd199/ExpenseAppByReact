import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpensesList = (props) => {
  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul>
        {props.list.map((e) => (
          <ExpenseItem
            key={e.id}
            expense={e.name}
            amount={e.amount}
            date={e.date}
          />
        ))}
    </ul>
  );
};

export default ExpensesList;
