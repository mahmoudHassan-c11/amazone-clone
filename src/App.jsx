import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Login from "./component/login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useAuth } from "./context/GlobalState";
import BasketPage from "./component/basket/BasketPage";

import Payment from "./component/pyment/Payment";

function App() {
  const { dispatch } = useAuth();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route
          path="/basket"
          element={
            <>
              <Header />
              <BasketPage />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
