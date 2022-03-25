import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // we set enterNameIsValid as true as default to avoid to see the error message at the beginning
  // but it's not optimal, and it's not... true!
  // we can have strange behaviors if you are using the state for other things
  // so we set it false as default and introduce an additional state
  // touched + !valid  => error message
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  // we introduce a validation when the input lose the focus (blur)
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    // browser validation setting state for conditional render
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName("");
    //nameInputRef.current.value = ''; // not ideal, don't manipulate the DOM!
  };

  // we will check INvalid (touched + !valid)
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // setting the name of the class dinamically
  const nameInputClass = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
