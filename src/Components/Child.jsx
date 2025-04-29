import React from 'react'
import Grandchild from './Grandchild.jsx'
function Child({value}) {
  return (
    <div>
      {/* props drill */}
      {/* <Grandchild value={value} />
       */}
          {/* usecontext */}
      <Grandchild/>
    </div>
  );
}

export default Child;