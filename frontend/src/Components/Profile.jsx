import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import "../css/profile.css"
const Profile = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    // console.log(id);
    const [employ,setEmploy]=useState({});
    useEffect(()=>{
        getEmploy();
    },[])
    const getEmploy=async()=>{
        const res=await fetch(`http://localhost:3000/api/getemploy/${id}`);
        const data=await res.json();
        // console.log(data);
        setEmploy({...data})
    }
    const deleteEmploy=async()=>{
        const res=await fetch(`http://localhost:3000/api/deleteemploy/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
          })
        
    const result= await res.json();
    if (res.status===201){
        setEmploy({});
        alert(result.msg);
        navigate('/')
    }else{
        alert(result.msg)
    }

    }
  return (
    <div className="body">
    <div className="contentss" >
        <div className="content">
            <div className="img">
                <img src={employ.profile} alt=""/>
            </div>
            <div className="details">
                <table className="table">
                <tbody>
                    <tr>
                        <th>Emp-Name</th>
                        <td>{employ.name}</td>
                    </tr>
                    <tr>
                        <th>DOB</th>
                        <td>{employ.dob}</td>
                    </tr>
                    <tr>
                        <th>Salary</th>
                        <td>Rs. {employ.salary}/-</td>
                    </tr>
                    <tr>
                        <th>Experience</th>
                        <td>{employ.experience}</td>
                    </tr>
                    <tr>
                        <th>Designation</th>
                        <td>{employ.designation}</td>
                    </tr>
                    <tr>
                        <th >Email</th>
                        <td>{employ.email}</td>
                    </tr>
                    <tr>
                        <th >Phone</th>
                        <td>{employ.phone}</td>
                    </tr>
                    <tr>
                        <th >Place</th>
                        <td>{employ.place}</td>
                    </tr>
                    <tr>
                        <td  colSpan={2} className='action' >
                            <button><Link to={`/edit/${employ._id}`}>Edit</Link></button>
                        
                            <button  onClick={deleteEmploy}>Delete</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Profile
