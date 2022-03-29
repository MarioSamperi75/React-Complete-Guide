import classes from "./Checkout.module.css";

// we add a new cancel button, type 'button' to not submit
// we receive a props on cancle from Card
// in Card this action is associated with closing the form
const Checkout = (props) => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};
export default Checkout;
