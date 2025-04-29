import React from 'react'
import Parent from "./Parent.jsx"
export const MyContext = React.createContext();
function Grandparent() {
  return (
    <div>
    <MyContext.Provider value={"Hello mybeloved grandchild! This is how usecontext works in data transfering from me without transfering it to your parents"}>
        <Parent />
    </MyContext.Provider>
        
    </div>
  )
}

export default Grandparent;