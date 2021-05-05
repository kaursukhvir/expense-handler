import { useState } from "react";
import Expenses from "./components/Expenses";
import ExpensesList from "./components/ExpensesList";
import FilterYear from "./components/FilterYear";

function App() {
  const [expenses, setExpense] = useState([]);

  const SubmitForm = (expenses) => {
    setExpense((prevState) => {
      return [expenses, ...prevState];
    });
  };
  return (
    <div className="App">
      <Expenses onSubmitForm={SubmitForm} />
      <FilterYear filterBox={expenses} />
      <ExpensesList expenseList={expenses} />
    </div>
  );
}

export default App;
