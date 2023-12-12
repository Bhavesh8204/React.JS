import React, { useState } from 'react'

function OpenModel() {

    const [display, setDisplay] = useState(false);

    const toggleDisplay = () => {
        setDisplay(!display);
    };

    return (
        <>
            <div style={{ height: "100px", width: "100px", background: "black", display: display ? 'block' : 'none' }}></div>
            <button onClick={toggleDisplay}>Open Model</button>
        </>
    )
}

export default OpenModel
