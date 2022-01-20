import "./ChartBar.css";

const ChartBar = (props) => {
  // we have to calculate the height of the filling and pass it as inline style to chart-bar__fill
  // styling needs an object
  let barFillHeight = "0%";

  // percentage calculation
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"; // we need a string
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
