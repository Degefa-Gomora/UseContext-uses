import React, { useContext } from "react";
import { MyContext } from "./Grandparent.jsx";

function Grandchild({value}) {
const myValue = useContext(MyContext);
console.log(myValue) 
  return (
    <div className="box">
      <p className="title">Display data from Grandparent here</p>
      {/* props drill */}
      {/* <div className="value">{value}</div> */}
      {/* context api */}
      {/* <MyContext.Consumer>
        {data => <p>{data}</p>}
      </MyContext.Consumer> */}

      {/* use myValue inplace of value in {} for usecontext*/}
      <div className="value">{myValue}</div>
    </div>
  );
}

export default Grandchild;
