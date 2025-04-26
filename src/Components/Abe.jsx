import React from 'react'
import Degefa from "./Degefa.jsx"
export const MyContext = React.createContext();
function Abe() {
  return (
    <div>
    <MyContext.Provider value={"Tile selam nwu?"}>
        <Degefa />
    </MyContext.Provider>
        
    </div>
  )
}

export default Abe