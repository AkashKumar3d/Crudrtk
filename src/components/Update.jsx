import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {  updateduser} from "../Features/Createuserslice";
const Update = () => {
    const { id } = useParams()
    const navigate=useNavigate()
    const [updateddata, setupdateddata] = useState()
    const alluser = useSelector((state) => state.app.user)
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            const singleuser = alluser.filter((res) => res.id === id)
            setupdateddata(singleuser[0])
        }

    }, [])

    // onchange function 
    const handletochange = (e) => {
        e.preventDefault()
        setupdateddata({ ...updateddata, [e.target.name]: e.target.value })
     
    }
    // console.log("updated data", updateddata)

    // data submite  function 
    const handletosubmit = (e) => {
        e.preventDefault();
        dispatch(updateduser(updateddata))
        navigate("/read")
        // console.log("submited the data ", updateddata)
    }
    
    return (
        <div >
            <h2 style={{ display: "flex", justifyContent: "center" }}>Edit Detail</h2>
            <form className='w-50 mx-auto my-5' onSubmit={handletosubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" value={updateddata && updateddata.name} name='name' id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handletochange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" value={updateddata && updateddata.email} name='email' id="exampleInputPassword1" onChange={handletochange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
                    <input type="text" className="form-control" value={updateddata && updateddata.age} name='age' id="exampleInputPassword1" onChange={handletochange} />
                </div>
                <div className="form-check my-2">
                    <input className="form-check-input" type="radio" name="gender" value="male" id="flexRadioDisabled" checked={updateddata && updateddata.gender == "male"} onChange={handletochange} />
                    <label className="form-check-label" htmlFor="flexRadioDisabled">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" value="female" id="flexRadioCheckedDisabled" checked={updateddata && updateddata.gender === "female"} onChange={handletochange} />
                    <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Update
