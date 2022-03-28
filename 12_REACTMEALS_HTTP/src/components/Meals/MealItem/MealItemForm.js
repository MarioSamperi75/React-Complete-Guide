import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // we want first to extract the entered amount
  // we will use ref
  // but Input is a customComponent, ref doesn't exist!
  // so we have to forward ref from input.js
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    //Validation
    // we create a state (amountIsValid), we change it in the validation
    // and we render a msg error conditionally
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
      // pass the enteredAmount value from child to parent
      // we will manage AddItem in  MealItem.js
      // because we needs more properties to add the Item
      props.onAddToCart(enteredAmountNumber);
    }
  };
  // Add noValidate property form on order to try the extra validation
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id, // this changed!
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
