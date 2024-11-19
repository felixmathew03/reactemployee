import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Edit.css'
const Edit = () => {
  const {id}=useParams();
    // console.log(id);
    const [employ,setEmploy]=useState({ })
    useEffect(()=>{
        getEmploy();
    },[])
    const getEmploy=async()=>{
        const res=await fetch(`http://localhost:3000/api/getemploy/${id}`);
        const data=await res.json();
        // console.log(data);
        setEmploy({...data})
    }
    
  const handleChange=(e)=>{
    // console.log(e.target.value);
    setEmploy((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  // console.log(employ);
  
  const handleFile=async(e)=>{
    // console.log(e.target.files[0]);
    const profile=await convertToBase64(e.target.files[0])
    // console.log(profile);
    setEmploy((pre)=>({...pre,profile:profile}))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(emp);
    const res=await fetch(`http://localhost:3000/api/editemploy/${id}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(employ)
    })
    console.log(res);
    
  }
  function convertToBase64(file) {
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror= (error)=>{
            reject(error)
        }
    })
  }

  return (
    <div className="body">
    <div className="containerr">
        <h1>Edit Employ Information</h1>
        <form className='forme' onSubmit={handleSubmit}>
            <div className="lefte">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={handleChange} value={employ.name} />

            <label htmlFor="salary">Salary</label>
            <input type="number" id="salary" name="salary" onChange={handleChange} value={employ.salary} />

            <label htmlFor="dob">DOB</label>
            <input type="date" id="dob" name="dob" onChange={handleChange} value={employ.dob} />

            <label htmlFor="experience">Experience</label>
            <input type="text" id="experience" name="experience" onChange={handleChange} value={employ.experience} />

            <label htmlFor="designation">Designation</label>
            <input type="text" id="designation" name="designation" onChange={handleChange} value={employ.designation} />
            <label htmlFor="phone">Phone Number:</label>
            <input type="number" id="phone" name="phone" onChange={handleChange} value={employ.phone} />

            </div>
        
            <div className="righte">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange} value={employ.email} />

            <label htmlFor="place">Place</label>
            <input type="text" id="place" name="place" onChange={handleChange} value={employ.place} />
              <div className="picss">
                <img src={employ.profile} alt="" />
              </div>

            <label htmlFor="profile">Profile</label>
            <input type="file" onChange={handleFile}  id="profile" name="profile"  />

            <div className="buttons">
                <button >Submit</button>
                
            </div>
            </div>
            
        </form>
    </div>
    </div>
  )
}

export default Edit
