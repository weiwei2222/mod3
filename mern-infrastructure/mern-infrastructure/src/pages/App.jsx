import { useState } from "react";
import "./App.css";
import AuthPage from "./AuthPage";
import NewOrderPage from "./NewOrderPage";
import OrderHistoryPage from "./OrderHistoryPage";

function App() {
  const [user, setUser] = useState(null);

  // in here
  // use the useState hook to define a state variable called user
  // initialize that to null
  // the setter function should be named according to converntion

  return (
    <>
      {user ? <NewOrderPage /> : <AuthPage />}
      <OrderHistoryPage />
    </>
  );
}

export default App;
