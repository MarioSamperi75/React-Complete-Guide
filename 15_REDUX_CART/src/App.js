import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
  // we get the notifications from the store
  // and we pass them as props in the notification component
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const dispatch = useDispatch();
  // we can send the requests wherever we want (except the reducer). Here for example.
  // we get the cart with use selector, we send the request in an useEffect
  // and we set the cart as dependency. Whenever the cart changes, we update the database
  // PUT allows to overwrite the entire cart
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // we create a sendData function because we need an asynchronous function
  // and use await before sending messages
  // (it's impossible to use async in the useEffect function)
  // we dispatch notification 1) at the beginning, 2) at the end,
  // 3) we generate an error if response is not ok
  // w4) e dispatch a general error notification if something go wrong
  // in the whole sendData
  useEffect(() => {
    const sendData = async () => {
      // #1
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data...",
        })
      );

      const response = await fetch(
        "https://react-http-7b575-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        // #3
        throw new Error("Something cart data failed");
      }
      // #2
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    // to avoid to send data at the very beginning
    // we should overrwrite the cart with an empty cart
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendData().catch((error) => {
      // #4
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fail to send data",
        })
      );
    });
  }, [cart, dispatch]);

  // we render conditionally notification and we pass the props from the store
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
