import React from "react";
import { Link } from "react-router-dom";


function Navbar(){


    return (
        <div className=" align-items-center d-flex p-2 justify-content-between navbar">
                 
                 <div className="d-flex align-items-center gap-5">
                    <img src='https://i.imghippo.com/files/Ltz6156Jcg.png' width ='150px' className="logo"/>
                    <h3>Quiz App</h3>
                 </div>

             
            <ul type='none' className="d-flex justify-content-around w-25 ">
                <li></li>
                <Link to='/admin' style={{textDecoration:'none', color:"black"}}><li>Admin</li></Link>
                <Link to='/user' style={{textDecoration:'none', color:"black"}}><li>User</li></Link>
            </ul>

        </div>
    )
}


export default Navbar