import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function EmployeList() {

  const [empdata, setempdata] = useState("")
  const go = useNavigate()

  useEffect(() => {
    fetch("http://localhost:8000/employe").then((res) => res.json()).then((data) => setempdata(data))
  })

  const HandelEdit = (id) => {
    go("/EditEmploye/" + id)
  }

  const HandelView = (id) => {
    go("/ViewEmploye/" + id)
  }

  const handleDelete = (id) => {

    fetch("http://localhost:8000/employe/" + id, {
      method: "DELETE",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(empdata)
    }).then((res) => alert("Data Deleted ..!", window.location.reload()))
  }

  return (
    <div className='container'>
      <h1 className='my-2'>JSON CRUD</h1>
      <Link to={"/AddEmploye"} className='btn btn-primary m-3'>Add Employe (+)</Link>
      <table className='table table-secondary'>
        <thead>
          <tr className='table-dark'>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            empdata && empdata.map((items) => (
              <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.phone}</td>
                <td>
                  <button className='btn btn-success me-2' onClick={() => { HandelEdit(items.id)}}>Edit</button>
                  <button className='btn btn-danger me-2' onClick={() => { handleDelete(items.id)}}>Delete</button>
                  <button className='btn btn-warning' onClick={() => { HandelView(items.id)}}>View</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default EmployeList
