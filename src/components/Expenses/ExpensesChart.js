import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  //we will get the filteredExpenses as props.expenses

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "Maj", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // we increment every value in every month with the amount for that month
  // we recreate the array chartDataPoints
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0 => jan => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  //and we pass the array as props
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
