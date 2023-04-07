import React from 'react'
import "./Popup.css";
import { useSelector } from 'react-redux';
const Popup = ({ id, setshowpopup }) => {
    const alluser = useSelector((state) => state.app.user)
    // filter the single user 
    const singleuser = alluser.filter((res) => res.id === id);
    // console.log(singleuser);
     
    return (
        <div className="box">
            <div className="box1">
                <button onClick={() => [setshowpopup(false)]} type="button" className="btn btn-danger" style={{ marginLeft: "110px", border: "1px solid black" }} >X</button>
                <div className="container" style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <h4>{singleuser[0].name}</h4>
                <h4>{singleuser[0].email}</h4>
                <h4>{singleuser[0].age}</h4>
                <h4>{singleuser[0].gender}</h4>
                </div>
            </div>
        </div>
    )
}

export default Popup
