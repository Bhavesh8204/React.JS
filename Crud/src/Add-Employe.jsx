import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddEmploye() {

  const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const go = useNavigate()
  const datas = {id,name,email,phone}
  
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:8000/employe",{
      method:"POST",
      headers:{"Content-type":"Application/json"},
      body:JSON.stringify(datas)
    }).then((res)=>alert("Data Added ..!",go("/")))
  }

  return (
    <div className='col-6 m-auto my-5 border border-3'>
      <h1 className='m-4 text-center'>Registration Form</h1>
      <form onSubmit={handleSubmit} className='m-4 text-start'>
        <div className='mb-2'>
          <label className='form-lable' htmlFor="">ID</label>
          <input type="text" onChange={(e) => setid(e.target.value)} disabled={true} className='form-control' />
        </div>
        <div className='mb-2'>
          <label className='form-lable' htmlFor="">Name</label>
          <input type="text" onChange={(e) => setname(e.target.value)} className='form-control' />
        </div>
        <div className='mb-2'>
          <label className='form-lable' htmlFor="">Email</label>
          <input type="email" onChange={(e) => setemail(e.target.value)} className='form-control' />
        </div>
        <div className='mb-2'>
          <label className='form-lable' htmlFor="">Phone</label>
          <input type="text"onChange={(e) => setphone(e.target.value)} className='form-control' />
        </div>
        <div className="my-3">
          <button className='btn btn-success me-2' type="submit">Submit</button>
          <button className='btn btn-secondary' onClick={()=>{go("/")}}>Go Back</button>
        </div>
      </form >
    </div>
  )
}

export default AddEmploye
