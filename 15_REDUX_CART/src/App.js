import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./components/UI/cart-actions";

let isInitial = true;
function App() {
  // we get notification from the store
  // and we pass them as props in the notification component
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // fefetchCartData when loading the page
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // we moved all the asynchronous logic in slice-ui.js in the action creator
  //  we import that function (sendCartData) and we call it from here!
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    // the starting update when reloading should dispatch the action
    // 'changed' avoid that
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
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
