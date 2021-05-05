import { useState } from "react";
import MeterBox from "./MeterBox";
import "./FilterYear.css";

const FilterYear = ({ filterBox }) => {
  const [selectedYear, setYear] = useState("2019");
  //const [selectedExpense, setExpense] = useState([]);
  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const years = filterBox.filter(
    (box) => box.date.getFullYear().toString() === selectedYear
  );
  //console.log(years);

  //creating an array of 12 months corresponding to selected year expenditure
  let val = [...Array(12)].map((x) => 0);
  for (let i = 0; i < years.length; i++) {
    const index = parseInt(
      years[i].date.toLocaleString("en-Us", { month: "numeric" })
    );
    val[index - 1] += parseInt(years[i].amount);
    //console.log(val);
  }

  return (
    <div className="filterBox">
      <div className="filter">
        <h1>Expenses per Month</h1>
        <div>
          <select onChange={handleChange} value={selectedYear}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
      <div className="meter">
        <MeterBox totalAmount={val} />
      </div>
    </div>
  );
};

export default FilterYear;
