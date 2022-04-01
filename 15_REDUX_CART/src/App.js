import { useSelector } from "react-redux";
import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  // we can send the requests wherever we want (except the reducer). Here for example.
  // we get the cart with use selector, we send the request in an useEffect
  // and we set the cart as dependency. Whenever the cart changes, we update the database
  // PUT allows to overwrite the entire cart
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      "https://react-http-7b575-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
