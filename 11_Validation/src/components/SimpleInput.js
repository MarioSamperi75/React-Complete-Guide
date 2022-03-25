import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  // we manage enterNameIsValide some a normal variable and we derive it from enteredName
  // we don't really need two states
  // so we can delete all the corresponding setState- Cleaner code!
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");
  // we will check INvalid to render conditionallu components and style
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // we can check the validity of the overall form in case there is many inputs fields
  // now we can for example disable the button in !formIsValid
  let formIsValid = false;

  // in case we are many inputs we just use && (&& enteredAgeIsValid...)
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  // we introduce a validation when the input lose the focus (blur)
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    //resetting logic
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  // setting the name of the class dinamically
  const nameInputClass = enteredNameIsInvalid
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
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {enteredNameIsInvalid && (
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
