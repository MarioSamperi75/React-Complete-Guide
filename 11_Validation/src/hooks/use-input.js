// We create a custom hook to externalize the logic in SimpleInput.js
// and to reduce code repetition.
// nameInput and emailInput use the same states and methods (see SimpleInput.js)
// next step: use the hook in SimpleInput.js and clean the code
// first for the name then for the email

import { useState } from "react";

const useInput = (validateValueFunction) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValueFunction(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
