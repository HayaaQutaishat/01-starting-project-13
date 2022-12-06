import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/ui";
import React from "react";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  // latest cart state
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // every time cart state changes, send HTTP request to the backend
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotifications({
          title: "pending",
          status: "pending",
          message: "Sedning Cart Data!",
        })
      );
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
      dispatch(
        uiActions.showNotifications({
          status: "success",
          title: "success",
          message: "Sent Cart Data Successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotifications({
          status: "error",
          title: "error",
          message: "Sending Cart Data failed!",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <React.Fragment>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
