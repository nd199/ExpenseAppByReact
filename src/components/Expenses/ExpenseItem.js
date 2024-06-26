import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.expense}</h2>
      </div>
      <div className="expense-item_price">${props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
