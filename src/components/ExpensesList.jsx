import List from "./List";

const ExpensesList = ({ expenseList }) => {
  return (
    <div>
      {expenseList.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
};

export default ExpensesList;
