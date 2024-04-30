import "./ExpenseDate.css";

function ExpenseDate(props) {
    const month = props.date.toLocaleDateString("en-US", {month: "long"});
    const date = props.date.toLocaleDateString("en-US", {day: "2-digit"});
    const year = props.date.getFullYear();
    return(
        <div className="expense_date">
            <div>{month}</div>
            <div>{date}</div>
            <div>{year}</div>
        </div>
    ); 
}

export default ExpenseDate;