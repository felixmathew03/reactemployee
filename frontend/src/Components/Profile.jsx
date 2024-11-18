import React from 'react'
import { Link } from 'react-router-dom'
import "../css/profile.css"
const Profile = () => {
  return (
    <div className="contentss" id="contents">
        <div className="content">
            <div className="img">
                <img src="" alt="name"/>
            </div>
            <div className="details">
                <table className="table">
                    <thead>

                    <tr>
                        <th>Emp-ID</th>
                        <th>Emp-Name</th>
                        <th>Salary</th>
                        <th>Experience</th>
                        <th>Designation</th>
                        <th >Contact</th>
                        <th >email</th>
                    </tr>
                    </thead>
                    <tbody>

                    
                    <tr>
                        <td>empid</td>
                        <td>name</td>
                        <td>salary</td>
                        <td>experience</td>
                        <td>designation</td>
                        <td>phone</td>
                        <td>email</td>
                 
                    </tr>
                    <tr>
                        <td className="actions" colSpan="2">
                            <Link><button>Edit</button></Link>
                            <button >Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Profile
