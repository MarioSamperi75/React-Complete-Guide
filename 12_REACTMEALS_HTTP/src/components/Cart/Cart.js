import { Fragment, useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
  // we added a CartItem component and set in the list
  // we need also two functoins to edit the quantity from the cart

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  // we delete the dummy array and we add context to show the items in the cart
  // and we change the hardcoded values with real values in the rendered view
  // we show also the order button just if there's something in the cart
  const hasItems = cartCtx.items.length > 0;

  // we get the user data from the child and we send a post request with a new orders object
  // we transform the function to asynchronous to wait the submission and change back the state
  // maybe we should generate and handle an error if the response is not 'ok'...
  //(const response = await fetch(...)   if (!response.ok throw ...))
  const submitOrdersHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-7b575-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  // bind preconfigure the function for future executions and preconfigures the arguments too
  // to ensure that the functions receive the arguments
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        </li>
      ))}
    </ul>
  );

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const isSubmittingModalContent = (
    <Fragment>
      <p>Sending order data...</p>
    </Fragment>
  );

  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrdersHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalAction}
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
