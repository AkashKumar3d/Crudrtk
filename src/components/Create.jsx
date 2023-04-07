import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createuser } from '../Features/Createuserslice';
import {useNavigate} from "react-router-dom"
const Create = () => {
    const [users, setusers] = useState({})
    const navigate = useNavigate()

    // dispatch the action 
    const dispatch = useDispatch();

    //  change the input field 
    const handletochange = (e) => {
        setusers({ ...users, [e.target.name]: e.target.value })
        console.log(users);
    }

    // handle to submit button 
    const handletosubmit = (e) => {
        e.preventDefault();
        console.log("summited all data ", users)
        dispatch(createuser(users))
        navigate("/read")
    }
    return (
        <div >
           <h2 style={{display:"flex",justifyContent:"center"}}>User Detail</h2>
            <form className='w-50 mx-auto my-5'onSubmit={handletosubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' onChange={handletochange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" name='email' onChange={handletochange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
                    <input type="text" className="form-control" name='age' onChange={handletochange} id="exampleInputPassword1" />
                </div>
                <div className="form-check my-2">
                    <input className="form-check-input" type="radio" name="gender" onChange={handletochange} value="male" id="flexRadioDisabled" />
                    <label className="form-check-label" htmlFor="flexRadioDisabled">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" onChange={handletochange} value="female" id="flexRadioCheckedDisabled" />
                    <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={handletosubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Create;
