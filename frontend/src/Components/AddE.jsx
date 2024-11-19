import React, { useState } from 'react'
import "../css/Adde.css"
const AddE = () => {
  const [emp,setEmp]=useState({
    name:"",
    dob:"",
    salary:"",
    experience:"",
    designation:"",
    phone:"",
    email:"",
    place:"",
    profile:""
  })
  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(emp);
    const res=await fetch("http://localhost:3000/api/addemp",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(emp)
    })
    console.log(res);
    
  }
  const handleChange=(e)=>{
    // console.log(e.target.value);
    setEmp((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  const handleFile=async(e)=>{
    // console.log(e.target.files[0]);
    const profile=await convertToBase64(e.target.files[0])
    // console.log(profile);
    setEmp((pre)=>({...pre,profile:profile}))
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
    <div className="container">
        <h1>Employ Registration</h1>
        <form className='forma' onSubmit={handleSubmit}>
          <div className="lefta">
            <label htmlFor="name">Name:</label>
            <input type="text" onChange={handleChange} value={emp.name} id="name" name="name"  />

            <label htmlFor="dob">DOB</label>
            <input type="date" onChange={handleChange} value={emp.dob} id="dob" name="dob" />

            <label htmlFor="salary">Salary</label>
            <input type="number" onChange={handleChange} value={emp.salary} id="salary" name="salary"  />

            <label htmlFor="experience">Experience</label>
            <input type="text" onChange={handleChange} value={emp.experience} id="experience" name="experience"  />

            <label htmlFor="designation">Designation</label>
            <input type="text" onChange={handleChange} value={emp.designation} id="designation" name="designation"  />
            </div>
            <div className="righta">
            <label htmlFor="phone">Phone Number:</label>
            <input type="number" onChange={handleChange} value={emp.phone} id="phone" name="phone"  />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleChange} value={emp.email} id="email" name="email"  />

            <label htmlFor="place">Place</label>
            <input type="text" onChange={handleChange} value={emp.place} id="place" name="place"  />

            <label htmlFor="profile">Profile</label>
            <input type="file" onChange={handleFile} id="profile" name="profile"  />

            <div className="buttons">
                <button >Submit</button>
                <button type="reset">Reset</button>
            </div>
            </div>
        </form>
    </div>
    </div>
  )
}

export default AddE
