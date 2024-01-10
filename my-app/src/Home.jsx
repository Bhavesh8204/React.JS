import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const users = useSelector(state => state.xyz)
    const go = useNavigate()

    const HandleEdit = (id) => {

        go('/Edit/' + id)

    }

    return (
        <div className='container'>
            <h1 className='my-3'>Json CRUD</h1>
            <Link to={"/Create"} className='btn btn-primary m-3'>Add Employe (+)</Link>
            <table className="table ">
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
                        users.map((items) => (
                            <tr key={items.id}>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td>{items.phone}</td>
                                <td>
                                    <button className='btn btn-success me-2' onClick={() => HandleEdit(items.id)} >Edit</button>
                                    <button className='btn btn-danger me-2' >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home
