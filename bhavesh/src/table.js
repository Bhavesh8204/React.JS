import React, { useEffect, useState } from 'react'

function Table({bhavesh}) {
  const [query, setQuery] = useState('')
  return (
    <div style={{ marginTop: "30px" }}>
      Search In This Table <br />
      <input onChange={(e) => { setQuery(e.target.value) }} />
      <table style={{ border: "1px solid"}}>
        <tr>
          <th>ID</th>
          <th>Name</th> 
          <th>Email</th>
        </tr>
        {bhavesh.filter((items) => items.name.toLowerCase().includes(query)).map((v) => (
          <tr key={v.id}>
            <td>{v.id}</td>  
            <td> {v.name}</td>  
            <td>{v.email}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
export default Table

