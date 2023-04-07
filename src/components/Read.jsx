import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readuser } from '../Features/Createuserslice';
import { deleteuser } from '../Features/Createuserslice';
import { Link } from 'react-router-dom';
import Popup from './Popup';

const Read = () => {
  const [id, setid] = useState()
  const [showpopup, setshowpopup] = useState(false)
  const dispatch = useDispatch();
  const { user, loading, searchData } = useSelector((state) => state.app)
  
  // console.log("changin the search data",searchData);
  useEffect(() => {
    dispatch(readuser())
  }, []);


  if (loading) {
    return <h1>loading..</h1>
  }
  return (


    <div className='container'>
      {showpopup && <Popup id={id} showpopup={showpopup} setshowpopup={setshowpopup} />}
      <h2 style={{ marginLeft: "500px" }}>All Data</h2>
      <div className='container'>
        {user &&
          user.filter((element) => {
            if (searchData.length === 0) {
              return element;
            } else {
              return element.name.toLowerCase().includes(searchData.toLowerCase())
            }
          })
            .map((res) => (<div key={res.id} className="card w-50 mx-auto my-3">
              <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center" }}>
                <h5 className="card-title">{res.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{res.email}</h6>
                <p className="card-text">{res.gender}</p>
                <div className="container">
                  <button href="#" className="btn btn-primary mx-1" onClick={() => [setid(res.id), setshowpopup(true)]}>View</button>
                  <Link to={`/edit/${res.id}`} className="btn btn-secondary mx-1">Edit</Link>
                  <Link onClick={() => dispatch(deleteuser(res.id))} href="#" className="btn btn-danger mx-1">Delete</Link>
                </div>
              </div>
            </div>))}
      </div>

    </div>

  )
}

export default Read;
