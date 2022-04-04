import { createSlice } from "@reduxjs/toolkit";

// we create another reducer to show notifications
// that receive an object as payload and return an object ...

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

//  ACTION CREATOR: a function returning a function
//  we can dispatch action in it AND execute requests
//  it is not possible to use asunc code in the reducer
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
        { method: "PUT", body: JSON.stringify(cart) }
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
          message: "Fail to send data",
        })
      );
    }
  };
};

export const uiActions = uiSlice.actions;
export default uiSlice;
