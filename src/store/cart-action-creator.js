import { uiActions } from "./ui";

// create action creator (to fetch data from firebase)
export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotifications({
        title: "pending",
        status: "pending",
        message: "Fetching Cart Data!",
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-489ae-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
    } catch (error) {
      dispatch(
        uiActions.showNotifications({
          title: "error",
          status: "error",
          message: "Fetching Cart Data Failed!",
        })
      );
    }
  };
};

// create custom action creator (to send data)
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotifications({
        title: "pending",
        status: "pending",
        message: "Sedning Cart Data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-489ae-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotifications({
          status: "success",
          title: "success",
          message: "Sent Cart Data Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotifications({
          status: "error",
          title: "error",
          message: "Sending Cart Data failed!",
        })
      );
    }
  };
};
