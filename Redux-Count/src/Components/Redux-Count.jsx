import React, { useReducer } from 'react'

const intialState = { count: 0 }

function ReduxCount() {

    const reduce = (state, action) => {
        switch (action.type) {
            case "inc":
                return { count: state.count + 1 }
            case "dec":
                return { count: state.count - 1 }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reduce, intialState)

    return (
        <div>
            <button onClick={() => { dispatch({ type: "dec" }) }}>-</button>
            {state.count}
            <button onClick={() => { dispatch({ type: "inc" }) }}>+</button>
        </div>
    )
}

export default ReduxCount
