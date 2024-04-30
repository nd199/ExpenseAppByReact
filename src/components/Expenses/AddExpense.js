const AddExpense = (props) => {

  const toggleNewExpense = (toggle) => {
    props.toggleNewExpense(toggle);
  }

  
  return (
    <button className="add-expense" onClick={toggleNewExpense}>
      Add New Expense
    </button>
  );
};

export default AddExpense;
