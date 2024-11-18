import React from 'react'
import { Link } from 'react-router-dom'
import "../css/profile.css"
const Profile = () => {
  return (
    <div className="body">
    <div className="contentss" >
        <div className="content">
            <div className="img">
                <img src="../img/pp.avif" alt=""/>
            </div>
            <div className="details">
                <table className="table">
                <tbody>
                    <tr>
                        <th>Emp-ID</th>
                        <td>empid</td>
                    </tr>
                    <tr>
                        <th>Emp-Name</th>
                        <td>name</td>
                    </tr>
                    <tr>
                        <th>DOB</th>
                        <td>dob</td>
                    </tr>
                    <tr>
                        <th>Salary</th>
                        <td>salary</td>
                    </tr>
                    <tr>
                        <th>Experience</th>
                        <td>experience</td>
                    </tr>
                    <tr>
                        <th>Designation</th>
                        <td>designation</td>
                    </tr>
                    <tr>
                        <th >Email</th>
                        <td>email</td>
                    </tr>
                    <tr>
                        <th >Phone</th>
                        <td>phone</td>
                    </tr>
                    <tr>
                        <th >Place</th>
                        <td>place</td>
                    </tr>
                    <tr>
                        <td  colSpan={2} className='action' >
                            <button><Link to={'/edit'}>Edit</Link></button>
                        
                            <button  >Delete</button>
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
