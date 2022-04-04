import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";

//  ACTION CREATOR: a function returning a function
//  we can dispatch action in it AND execute requests
//  it is not possible to use asunc code in the reducer

// #1 fetching data and #2 updating the page when starting
// (replacing the empty cart with the db cart)
// we will call it from an useEffect (app.js) with empty deps
// so that it runs just at the beginning
export const fetchCartData = () => {
  return async (dispatch) => {
    // we create a function and we invoke it in the try-catch
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-7b575-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();

      return data;
    };

    try {
      //#1
      const cartData = await fetchData();
      // cartData has already the structure we need
      //#2
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending data failes",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-7b575-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        //we create a new object to not send
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something cart data failed");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending data failes",
        })
      );
    }
  };
};
