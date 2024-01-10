import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function EditEmploye() {

    const [id, setid] = useState("")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const go = useNavigate()
    const datas = { id, name, email, phone }
    const { empid } = useParams()

    useEffect(() => {
        fetch("http://localhost:8000/employe/" + empid).then((res)=>res.json()).then((data)=>{
            setid(data.id)
            setname(data.name)
            setemail(data.email)
            setphone(data.phone)
          })
    }, [])

    const handlesubmit = (e) => {

        e.preventDefault()

        fetch("http://localhost:8000/employe/" + empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(datas)
        }).then((res)=>alert("Your Data Edited..!", go("/")))

    }

    return (
        <div className=' d-flex justify-content-center m-4'>
            <div className="col-6 border p-4 border-2 ">
                <h1>Add Employe</h1>
                <form action="" className='text-start' onSubmit={handlesubmit}>
                    <div className='mb-3'>
                        <label htmlFor="">ID</label>
                        <input type="text" value={id} disabled={true} onChange={(e) => { setid(e.target.value) }} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Name</label>
                        <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Email</label>
                        <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="">Phone</label>
                        <input type="text" value={phone} onChange={(e) => { setphone(e.target.value) }} className='form-control' />
                    </div>
                    <div >
                        <button className='btn btn-primary me-2'>Update</button>
                        <button className='btn btn-info me-2' onClick={() => { go("/") }}>Go Back</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditEmploye
