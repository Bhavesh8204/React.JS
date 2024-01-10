import React, { useContext } from 'react'
import { prop } from '../App'

function Child1() {
  const prop1 = useContext(prop)
  return (
    <div>
      Child-1 {prop1[0].prop1 }
    </div>
  )
}

export default Child1
