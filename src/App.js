import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Register from "./components/Register";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/firebaseApp";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup operations go here
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
