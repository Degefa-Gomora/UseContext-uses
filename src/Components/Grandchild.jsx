import React, { useContext } from "react";
import { MyContext } from "./Grandparent.jsx";

function Grandchild() {
const myValue = useContext(MyContext); 
  return (
    <div className="box">
      <p className="title">Display data from Grandparent here</p>
      <div className="value">{myValue}</div>
    </div>
  );
}

export default Grandchild;
