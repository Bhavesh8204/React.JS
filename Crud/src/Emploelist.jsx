import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Emploelist() {
  const [empData, setempData] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/Employe").then((res) => res.json()).then((data) => setempData(data));
  }, [])
const go = useNavigate();
const HandelView = (id)=>{
  go('/View/'+id);
}
const HandelEdit =(id)=>{
  go('/Edit/'+id);

}
const HandelDelete =(id)=>{

  fetch("http://localhost:8000/Employe/"+ id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }, body: JSON.stringify(empData)
  }).then((res) => alert("Deleted Employe Successfully....!",window.location.reload()));

}

  return (
    <div>
      <h1 className='m-4 text-center'>JSON SERVER CRUD</h1>
      <Link to="/Create">
        <button className='btn btn-lg btn-primary d-block text-center m-3 m-auto'>
          Add Employee (+)
        </button>
      </Link>
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {
            empData && empData.map((el, i) => (
              <tr key={i}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.phone}</td>
                <td>
                  <div className=' col-5 d-flex justify-content-between'>
                    <button onClick={()=>HandelEdit(el.id)} className='btn btn-md btn-success' >Edit</button>
                    <button onClick={()=>HandelDelete(el.id)} className='btn btn-md btn-danger' >Delete</button>
                  
                    <button onClick={()=>HandelView(el.id)} className='btn btn-md btn-primary' >View</button>

                   
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Emploelist
