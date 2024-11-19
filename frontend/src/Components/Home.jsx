import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css"
const Home = () => {
    const [emp,setEmp]=useState([]);
    useEffect(()=>{
        getEmployees();
    },[])
    const getEmployees=async()=>{
        const res=await fetch("http://localhost:3000/api/getemployees")
        const data=await res.json();
        // console.log(data);
        setEmp([...data])
    }
  return (
    <>
    <div className="navbar">
      <h1>NOVAVI</h1>
      <div className="right">
          
          <div className="button1">
              <Link to={"/adde"}><button>Add employee</button></Link>
          </div>
      </div>
    </div>
    <div className="contentss" >
    {
        emp.map((employ)=>        <div className="contentt" key={employ._id}>
        <Link to={`/profile/${employ._id}`}>
            <div className="imgg">
                <img src={employ.profile} alt=""/>
            </div>
            <div className="detailss">
                <h2>{employ.name}</h2>
                <h3>{employ.designation}</h3>
            </div>
        </Link>
    </div>)
    }
        
    </div>
    </>
  )
}

export default Home
