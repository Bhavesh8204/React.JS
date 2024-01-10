import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers } from './UseReducer'
import { useNavigate } from 'react-router-dom'

function Create() {

    const [id, setid] = useState("")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const go = useNavigate()
    const users = useSelector(state => state.xyz)

    const dispatch = useDispatch()

    const Handlesubmit = (e) => {
        e.preventDefault();
        dispatch(addUsers({id:users.length+1,name,email,phone}));
        go('/');
    }

    return (
        <div className=' d-flex justify-content-center m-4'>
            <div className="col-6 border p-4 border-2 ">
                <h1>Add Employe</h1>
                <form action="" className='text-start' onSubmit={Handlesubmit} >
                    <div className='mb-3'>
                        <label className='form-lable' htmlFor="">ID</label>
                        <input value={id} type="text" disabled={true} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-lable' htmlFor="">Name</label>
                        <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-lable' htmlFor="">Email</label>
                        <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-lable' htmlFor="">Phone</label>
                        <input type="text" value={phone} onChange={(e) => { setphone(e.target.value) }} className='form-control' />
                    </div>
                    <div >
                        <button className='btn btn-primary me-2'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create
