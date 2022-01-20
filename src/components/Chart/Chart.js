import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //maxValue: the biggest Value represented in the chart

  //extract just the values from the object dataPoint
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // ... to spread all the values, so they becomes indipendent
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={totalMaximum}
          value={dataPoint.value}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
