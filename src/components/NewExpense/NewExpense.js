import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const onSaveExpenseDataHandler = (expenseData) => {
    const expense = {
      ...expenseData,
      id : Math.round(Math.random() * 100).toString()
    };
    props.onCreatingExpense(expense);
  };
  
  const toggleNewExpenseHandler = (toggle) =>{
    props.toggleNewExpense(toggle);
  }

  return (
    <div className="new_Expense">
      <ExpenseForm onSaveSubmit={onSaveExpenseDataHandler} 
      onCancel={toggleNewExpenseHandler}/>
    </div>
  );
}

export default NewExpense;
