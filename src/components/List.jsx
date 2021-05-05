import "./list.css";

const List = ({ list }) => {
  const year = list.date.toLocaleString("en-us", {
    year: "numeric",
  });
  const month = list.date.toLocaleString("en-us", {
    month: "long",
  });
  const day = list.date.toLocaleString("en-us", {
    day: "numeric",
  });
  return (
    <div className="list">
      <div className="date">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="title">{list.description}</div>
      <div className="amount">${list.amount}</div>
    </div>
  );
};

export default List;
