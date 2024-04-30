import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
   
  const yearFilterHandler = (event) => {
    props.getYear(event.target.value);
  };

  return (
    <div className="expenses-filters">
      <div className="expenses-filter-control">
        <label className="year">Filter By Year</label>
        <select name="year" value={props.selected}  className="drop-down" onChange={yearFilterHandler}>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
          <option value='2026'>2026</option>
          <option value='2027'>2027</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
