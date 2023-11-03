import React, { useState } from 'react'

function ColorChange() {

    const [color, setColor] = useState(false)


    const Changecolor = () => {
        setColor(!color)
    }
    return (
        <div>
            <h1 style={{ color: color ? "red" : "black" }}>Bhavesh</h1>
            <button onClick={Changecolor}>
                color
            </button>
        </div>
    )
}

export default ColorChange
