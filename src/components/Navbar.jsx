import React from "react";
import { Link } from "react-router-dom";


function Navbar(){


    return (
        <div className="d-flex p-2 justify-content-between align-items-center navbar">
                 
                 <div className="d-flex align-items-center gap-3">
                    <img src='https://i.imghippo.com/files/Ltz6156Jcg.png' width ='150px' className="logo"/>
                    <h3 className="fs-2 m-0 logomatter">Quiz App</h3>
                 </div>

             
            <ul type='none' className="d-flex justify-content-around w-25 m-0">
                <li></li>
                <Link to='/admin' style={{textDecoration:'none', color:"black"}}><li className="btn btn-success">Admin</li></Link>
                <Link to='/user' style={{textDecoration:'none', color:"black"}}><li className="btn btn-primary">User</li></Link>
            </ul>

        </div>
    )
}


export default Navbar