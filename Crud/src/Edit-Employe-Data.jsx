import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditEmployeData() {
 
  const [id, setid] = useState("")
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const go = useNavigate()
  const {empid} = useParams()
  const datas = {id,name,email,phone}

useEffect(()=>{
  fetch("http://localhost:8000/employe/" + empid).then((res)=>res.json()).then((data)=>{
    setid(data.id)
    setname(data.name)
    setemail(data.email)
    setphone(data.phone)
  })
},[empid])
  
  const handleEdit = (e) => {
    e.preventDefault()

    fetch("http://localhost:8000/employe/" + empid,{
      method:"PUT",
      headers:{"Content-type":"Application/json"},
      body:JSON.stringify(datas)
    }).then((res)=>alert("Employe Data Edited ..!",go("/")))
  }

  return (
    <div className='col-6 m-auto my-5 border border-3 '>
      <h1 className='m-4 text-center'>Edit Employe Detailes</h1>
      <form onSubmit={handleEdit} className='m-4 text-start'>
        <div className='mb-2'>
          <label className='form-lable' htmlFor="">ID</label>
          <input type="text" value={id} onChange={(e) => setid(e.target.value)} disabled={true} className='form-control' />
        </div>
        <div className='mb-2'>
          <label className='form-lable' htmlFor="">Name</label>
          <input type="text" value={name} onChange={(e) => setname(e.target.value)} className='form-control' />
        </div>
        <div className='mb-2'>
          <label className='form-lable' htmlFor="">Email</label>
          <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className='form-control' />
        </div>
        <div className='mb-2'>
          <label className='form-lable' htmlFor="">Phone</label>
          <input type="text" value={phone} onChange={(e) => setphone(e.target.value)} className='form-control' />
        </div>
        <div className="my-3">
          <button className='btn btn-success me-2' type="submit">Save</button>
          <button className='btn btn-secondary' onClick={()=>{go("/")}}>Go Back</button>
        </div>
      </form >
    </div>
  )
}

export default EditEmployeData
