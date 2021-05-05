import SingleMeter from "./SingleMeter";
import "./meterBox.css";

const MeterBox = ({ totalAmount }) => {
  //console.log(selectedYears);
  /*const months = selectedYears.map((year) =>
    year.date.toLocaleString("en-Us", { month: "numeric" })
  );
  console.log(months);*/
  const monthlyAmount = [
    { Jan: totalAmount[0] },
    { Feb: totalAmount[1] },
    { March: totalAmount[2] },
    { April: totalAmount[3] },
    { May: totalAmount[4] },
    { June: totalAmount[5] },
    { July: totalAmount[6] },
    { Aug: totalAmount[7] },
    { Sep: totalAmount[8] },
    { Oct: totalAmount[9] },
    { Nov: totalAmount[10] },
    { Dec: totalAmount[11] },
  ];
  return (
    <div className="meterBox">
      {monthlyAmount.map((Amount) => (
        <SingleMeter
          key={Object.keys(Amount)}
          totalExp={Object.values(Amount)}
          month={Object.keys(Amount)}
        />
      ))}
    </div>
  );
};

export default MeterBox;
