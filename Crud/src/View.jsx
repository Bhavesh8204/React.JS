import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function View() {
  const[empData,setempData]=useState("");

  const {empid} =useParams();
  useEffect(() => {
    fetch("http://localhost:8000/Employe/"+empid).then((res) => res.json()).then((data) => setempData(data));
  }, []);

  
  return (
    <div>
      <h1 className='m-2 text-center'>
        View Profile
      </h1>
    <table class="table m-5">
    <thead>
      <tr>
        <th>Id</th>
         <td>
          {empData.id}
         </td>
        
      </tr>
      <tr>
        <th>Name</th>
<td>{empData.name}</td>
        
      </tr>
      <tr>
        <th>Email</th>
        <td>{empData.email}</td>
        
      </tr>
      <tr>
        <th>Phone</th>
        <td>{empData.phone}</td>
        
      </tr>
    </thead>
  
  </table>
  <Link to="/">
  <button className='btn btn-lg d-block m-auto btn-primary'>
    Go Back
  </button>
  </Link>
    </div>
  )
}

export default View
