import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const cartDummyData = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];

const Cart = (props) => {
  // we go through the dummy data inside an unordered list
  // we have to use a different syntax for the className because of the '-'
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartDummyData.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>34.96</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
