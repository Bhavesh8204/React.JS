import React, { useReducer } from 'react'

export default function Yagneshpractice() {

    const intialvalue = {count:0}
    const reduce = (state,action)=>
    {
      switch(action.name)
      {
        case"bhavesh": return{count:state.count+1}

        case"yagnesh": return{count:state.count-1}
      }
    }

  const [ state,dispacth] = useReducer(reduce,intialvalue)


  function inc()
  {
    dispacth({name:"bhavesh"})
  }



  function dec()
  {
    dispacth({name:"yagnesh"})
  }
  
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DNC</button>
    </div>
  )
}

