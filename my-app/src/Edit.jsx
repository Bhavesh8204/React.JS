import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EditUsers } from './UseReducer'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {

    const { userid } = useParams()
    const users = useSelector(state => state.xyz)
    const CurrentUser = users.filter((user) => (
        user.id == userid
    ))

    const { name, email, phone } = CurrentUser[0];
    const [uname, setuName] = useState(name)
    const [uemail, setuEmail] = useState(email)
    const [uphone, setuPhone] = useState(phone)

    const dispatch = useDispatch()
    const go = useNavigate()

    const Handlesubmit = (e) => {
        e.preventDefault();
        dispatch(EditUsers({ id: userid, name: uname, email: uemail, phone: uphone }));
        go('/');
    }

    return (
        <div className=' d-flex justify-content-center m-4'>
            <div className="col-6 border p-4 border-2 ">
                <h1>Add Employe</h1>
                <form action="" className='text-start' onSubmit={Handlesubmit} >
                    <div className='mb-3'>
                        <label className='form-lable' htmlFor="">ID</label>
                        <input value={userid} type="text" disabled={true} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-lable' htmlFor="">Name</label>
                        <input type="text" value={uname} onChange={(e) => { setuName(e.target.value) }} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-lable' htmlFor="">Email</label>
                        <input type="text" value={uemail} onChange={(e) => { setuEmail(e.target.value) }} className='form-control' />
                    </div>
                    <div className='mb-3'>
                        <label className='form-lable' htmlFor="">Phone</label>
                        <input type="text" value={uphone} onChange={(e) => { setuPhone(e.target.value) }} className='form-control' />
                    </div>
                    <div >
                        <button className='btn btn-primary me-2'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit
