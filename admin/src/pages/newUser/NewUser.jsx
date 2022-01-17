import React from 'react'
import "./newUser.css"
function NewUser() {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form  className="newUserForm">
                <div className="newUserItem">
                    <label >Username </label>
                    <input type="text" placeholder='john' />
                    </div>
                    <div className="newUserItem">
                    <label >Full name  </label>
                    <input type="text" placeholder='john Smith' />
                    </div>
                    <div className="newUserItem">
                    <label >email</label>
                    <input type="email" placeholder='john@gmail.com' />
                    </div>
                    <div className="newUserItem">
                    <label >Password</label>
                    <input type="password" placeholder='password' />
                    </div>
                    <div className="newUserItem">
                    <label >Phone</label>
                    <input type="text" placeholder='+91 2536654' />
                    </div>
                    <div className="newUserItem">
                    <label >Address</label>
                    <input type="password" placeholder='New York USA' />
                    </div>
                    <div className="newUserItem">
                    <label >Gender</label>
                    <div className="newUserGender">
                    <input type="radio" name='gender' id="male" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name='gender' id="female" value="female" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name='gender' id="other" value="other" />
                    <label htmlFor="other">Other</label>
                    </div>
                    <div className="newUserItem">
                        <label >Active</label>
                        <select name="active" id="active" className="newUserSelect">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    </div>

                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser
