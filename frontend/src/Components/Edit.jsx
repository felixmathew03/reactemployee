import React from 'react'
import '../css/Edit.css'
const Edit = () => {
  return (
    <div className="body">
    <div class="containerr">
        <h1>Edit Employ Information</h1>
        <form className='forme'>
            <div className="lefte">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="name" />

            <label for="salary">Salary</label>
            <input type="number" id="salary" name="salary" value="5000" />

            <label for="dob">DOB</label>
            <input type="date" id="dob" name="dob" value="dob" />

            <label for="experience">Experience</label>
            <input type="text" id="experience" name="experience" value="experiance" />

            <label for="designation">Designation</label>
            <input type="text" id="designation" name="designation" value="designation" />
            </div>
        
            <div className="righte">
            <label for="phone">Phone Number:</label>
            <input type="number" id="phone" name="phone" value="88" />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="email" />

            <label for="place">Place</label>
            <input type="text" id="place" name="place" value="place" />

            <label for="profile">Profile</label>
            <input type="file" id="profile" name="profile"  />

            <div class="buttons">
                <button >Submit</button>
                <button type="reset">Reset</button>
            </div>
            </div>
            
        </form>
    </div>
    </div>
  )
}

export default Edit
