import React, { useContext } from "react";
import { MyContext } from "./Abe.jsx";

function Tile() {
const myValue = useContext(MyContext); 
  return (
    <div>
      return{<div>Welcome : {myValue}</div>}
    </div>
  );
}

export default Tile;
