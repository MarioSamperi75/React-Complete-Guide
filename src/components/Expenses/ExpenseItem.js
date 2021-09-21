import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// we test a button element to show how to trigg an event
// onClick could just have an anonimous function, but it's better to create a function (clickHandler)
// and invoke it from onClick: no too much logic in the JSX!
// No parentesis () efter clickHandler (22). The function doesn't have to start right away, but just "on click"!!!

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Clicked!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
