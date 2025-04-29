import React from 'react'
import Parent from "./Parent.jsx"
export const MyContext = React.createContext();
// console.log(MyContext)
function Grandparent() {
  return (
    <div>
      {/* props drill
      <Parent value="Hello mybeloved grandchild! This is how usecontext works in data transfering from me without transfering it to your parents" />  */}
      
      {/* usecontext */}
      <MyContext.Provider value={"Hello mybeloved grandchild! This is how usecontext works in data transfering from me without transfering it to your parents"}> 
        <Parent/>
      </MyContext.Provider>
    </div>
  );
}

export default Grandparent;