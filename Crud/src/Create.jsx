import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const go = useNavigate();

  const finaldata = { id, name, email, phone };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/Employe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(finaldata)
    }).then((res) => alert("Added Employe Successfully....!", go('/')));

  }
  return (
    <div className='col-6 m-auto my-5 border border-3 '>
      <h1 className='m-4 text-center'>Registration Form</h1>
      <form onSubmit={handleSubmit} className='m-4'>
        <div className='mb-3'>
          <label htmlFor='id' className='form-label'>
            ID
          </label>
          <input
            type='text'
            className='form-control'
            id='id'
            name='id'
            disabled="disabled"
            value={id}
            onChange={(e) => idChange(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={name}
            onChange={(e) => nameChange(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            onChange={(e) => emailChange(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='phone' className='form-label'>
            Phone
          </label>
          <input
            type='text'
            className='form-control'
            id='phone'
            name='phone'
            value={phone}
            onChange={(e) => phoneChange(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <button type='button' onClick={() => go('/')} className='btn btn-secondary ms-2'>
          Go Back
        </button>
      </form>
    </div>
  )
}

export default Create
