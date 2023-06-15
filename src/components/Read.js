import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setdata] = useState([]);

    function getdata() {
        axios.get("https://63d015d110982404378cda70.mockapi.io/crud")
            .then((response) => {
                setdata(response.data);
            })

    }
  
   function handleDelete(id){
    axios.delete(`https://63d015d110982404378cda70.mockapi.io/crud/${id}`)
   .then(()=>{
    getdata();
})
   }

   function setDataToStorage(id,name,age,email){
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('age', age)
    localStorage.setItem('email', email)

   }
       useEffect(() => {
          getdata();
    }, [])
    return (
        <>
            <div className='row mt-4'>
                <div className='col-md-12'>
                    <div className='mt-3 mb-3'>
                        <Link to='/create'>
                        <button className='btn btn-primary'>Create New User</button>
                        </Link>
                    </div>
                    <table className='table table-bordered table-hover table-dark table-striped'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item)=>{
                                    return(
                                        <>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.e_age}</td>
                                            <td>{item.e_email}</td>
                                            <td>
                                            <Link to='/edit'>
                                            <button className='btn btn-primary' onClick={()=>setDataToStorage(item.id,item.e_name,item.e_age,item.e_email)}>Edit</button>
                                            </Link>
                                            </td>
                                            <td>
                                            <button className='btn btn-danger'onClick={()=>{if(window.confirm("Are you want to delete this data")) {handleDelete(item.id)}}}> Delete</button>

                                            </td>

                                      </tr> 
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Read
