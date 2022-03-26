import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // we send a function as argument to the input hook
  // (the specific validation)
  // the hook send back all the values and methods we need
  // we get them by destructuring
  // we can get rid of all states and methods regarding the inputName
  // and refactoring the names when needed
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // validation logic
  const enteredEmailIsValid = enteredEmail.includes("@");
  // we will check INvalid to render conditionallu components and style
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // we can check the validity of the overall form in case there is many inputs fields
  // now we can for example disable the button in !formIsValid
  let formIsValid = false;

  // in case we are many inputs we just use && (&& enteredAgeIsValid...)
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  // we introduce a validation when the input lose the focus (blur)
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    //resetting logic (delegated to the hook)
    resetNameInput();
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  // setting the name of the class dinamically
  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">No empty input, please!</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Enter a valid Email, plese!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
