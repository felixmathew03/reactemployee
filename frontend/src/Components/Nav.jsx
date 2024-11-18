import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className="navbar">
    <h1>NOVAVI</h1>
    <div className="right">
        
        <div className="button1">
             <Link to={"/adde"}><button>Add employee</button></Link>
        </div>
    </div>
</div>
  )
}

export default Nav
