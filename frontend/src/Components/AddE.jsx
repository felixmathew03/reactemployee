import React from 'react'
import "../css/Adde.css"
const AddE = () => {
  return (
    <div className="body">
    <div className="container">
        <h1>Employ Registration</h1>
        <form id="frm" method="post">

            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="salary">Salary</label>
            <input type="number" id="salary" name="salary" required />

            <label for="experience">Experience</label>
            <input type="text" id="experience" name="experience" required />

            <label for="designation">Designation</label>
            <input type="text" id="designation" name="designation" required />

            <label for="phone">Phone Number:</label>
            <input type="number" id="phone" name="phone" required />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />

            <div class="profile" id="prf">
                <img src="" class="proimg" id="proimg" alt="" />
            </div>

            <label for="profile">Profile</label>
            <input type="file" id="profile" name="profile" required />

            <div class="buttons">
                <button >Submit</button>
                <button type="reset">Reset</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default AddE
