import  Axios  from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {

    const[Name , setName]=useState('');
    const[Age , setAge]=useState('');
    const[Email , setEmail]=useState('');
    const navigate=useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        Axios.post("https://63d015d110982404378cda70.mockapi.io/crud",{
            e_name:Name,
            e_age:Age,
            e_email:Email
        }).then(()=>{
            navigate('/');
        })

    }

  return (
    <>
     <div className='row'>
        <div className='col-md-4'>
        <div className='mt-3 mb-3'>
                        <Link to='/'>
                        <button className='btn btn-primary'>Read Data</button>
                        </Link>
                    </div>
            <div className='bg-primary p-4 text-center'>
                <h1>Create Data </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Enter Name</label>
                    <input type='text' placeholder='Name' className='form-control' onChange={(e) =>setName(e.target.value)}></input>
                </div>

                <div className='form-group'>
                    <label>Enter Age</label>
                    <input type='text' placeholder='Age' className='form-control' onChange={(e) =>setAge(e.target.value)}></input>
                </div>

                <div className='form-group'>
                    <label>Enter Email</label>
                    <input type='text' placeholder='Email' className='form-control'  onChange={(e) =>setEmail(e.target.value)}></input>
                </div>
                <br/>

                <div className='d-grid'>
                    <input type='submit' value='Submit' ClassName='btn btn-success'/>
                </div>
            </form>
        </div>
     </div>
      
    </>
  )
}

export default Create
