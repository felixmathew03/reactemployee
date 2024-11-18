import React from 'react'
import { Link } from 'react-router-dom'
import "../css/profile.css"
const Profile = () => {
  return (
    <div className="body">
    <div className="contentss" >
        <div className="content">
            <div className="img">
                <img src="" alt=""/>
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
                        <th rowSpan="2">Contact</th>
                        <td>phone</td>
                    </tr>
                    <tr>
                        <td>email</td>
                    </tr>
                    <tr>
                        <td className="actions" colSpan="2">
                            <Link ><button>Edit</button></Link>
                            <button >Delete</button>
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
