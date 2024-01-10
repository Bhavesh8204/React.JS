import React, { useContext } from 'react'
import { prop } from '../App'

function Child2() {
  const prop2 = useContext(prop)
  return (
    <div>
      Child-2 {prop2[0].prop2}
    </div>
  )
}

export default Child2
