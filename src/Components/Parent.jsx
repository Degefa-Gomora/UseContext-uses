import React from 'react'
import Child from  "./Child.jsx"
function Parent({value}) {
  return (
    <div>
      {/* props drill */}
      {/* <Child value={value} /> */}

      {/* usecontext */}
      <Child />
    </div>
  );
}

export default Parent;