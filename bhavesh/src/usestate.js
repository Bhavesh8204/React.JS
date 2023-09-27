import { React, useState } from "react";

function SetFormFields() {

    let [Student, setStudent] = useState({
        Name: "Bhavesh",
        Email: "bhaveshahir1210@gmail.com",
        Mobile: "8141825382"
    })

    return (<>
        Name: <input type="text" onBlur={(e) => {
            setStudent({
                ...Student,
                Name: e.target.value
            })
        }} /> <br />
        Email: <input type="text" value={Student.Email} onChange={(e) => {
            setStudent({
                ...Student,
                Email: e.target.value
            })
        }} /> <br />
        Mobile: <input type="text" value={Student.Mobile} onChange={(e) => {
            setStudent({
                ...Student,
                Mobile: e.target.value
            })
        }} /> <br />

        <h2>{Student.Name}</h2>
        <h2>{Student.Email}</h2>
        <h2>{Student.Mobile}</h2>


    </>)

}

export default SetFormFields;