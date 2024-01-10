import React, { useEffect, useState } from 'react'

function Swarch() {

    const [data, setdata] = useState("")

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => setdata(data))
    })


    return (
        <div>
            <input type="text" />
            {
                data && data.map((items) => (
                    <li>{items.name}</li>
                ))
            }
        </div>
    )
}

export default Swarch
