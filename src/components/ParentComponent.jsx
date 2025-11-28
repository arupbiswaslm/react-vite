import React, { useState, createContext, useContext } from "react";

import { UserContext }  from "../shared/UserContext.js";

import Navbar from './Navbar.jsx'
import DisplayChild from "./DisplayChild.jsx";
import ButtonChild from "./ButtonChild.jsx";

function ParentComponent() {
  
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "John Da", email: "johnda@gmail.co.in" });

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <UserContext.Provider value={user}>
      <Navbar />
      <div>
        <h4>Its Parent Component</h4>
        <DisplayChild count={count} />
        <ButtonChild onButtonClick={incrementCount} />
      </div>
    </UserContext.Provider>
  );
}

export default ParentComponent;
