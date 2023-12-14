import React from 'react'
import Child1 from './Child-1'
import Child2 from './Child-2'

function Parent() {
  return (
    <div>
      Parent 
      <h1>{<Child1/>}</h1>
      <h1>{<Child2/>}</h1>
    </div>
  )
}

export default Parent
