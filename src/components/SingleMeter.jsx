import "./SingleMeter.css";

const SingleMeter = ({ totalExp, month }) => {
  //console.log(totalExp[0]);
  return (
    <div className="SingleMeter">
      <progress
        className="progress"
        value={totalExp[0]}
        max="1000"
        title={totalExp[0]}
      ></progress>
      <h2>{month[0]}</h2>
    </div>
  );
};

export default SingleMeter;
