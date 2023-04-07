import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import  {searchuser } from '../Features/Createuserslice';

const Navbar = () => {
  const dispatch =useDispatch()
  const [searchdata, setsearchdata]=useState([]);

  const allusers=useSelector((state)=>state.app.user)

  // fuction search handle change jhdh
  const handletochange=(e)=>{
    setsearchdata(e.target.value)
  }
  // console.log("changes data",searchdata);
  useEffect(()=>{
  dispatch(searchuser(searchdata))
  },[searchdata])

  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">CRUD</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Create post</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/read">All Post ({allusers.length})</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" onChange={handletochange} aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
