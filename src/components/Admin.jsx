import React from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

function Admin(){

   const [adminData, setAdminData] = React.useState({
         username : "",
         password : ""
   })

   const navigate = useNavigate()
   const [message, setMessage] = React.useState('')

  function submitAdmin(e){
         e.preventDefault()
         console.log('mass')
        axios.get('http://localhost:5000/admin').then((res)=>{
              
             if(res.data && adminData){
                  if(res.data.username === adminData.username && res.data.password === adminData.password){
                          setMessage('Login Successfully')
                          navigate('/adminPage')
                  }
                  else{
                          setMessage('Invalid Credentials , Please Enter Your Username and Password Correctly')
                  }
             }
                
        }).catch((err)=>{

        })

  }
    return (
    
    <div className=' loginDiv'>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" name='username' aria-describedby="emailHelp"  onChange = {(e)=>{setAdminData({...adminData, username : e.target.value})}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name='password' id="exampleInputPassword1" onChange = {(e)=>{setAdminData({...adminData, password : e.target.value})}}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick = {(e)=>{submitAdmin(e)}}>Submit</button>
</form>

      <div className='text-center color-primary'>{message && message}</div>
</div>  
    )
}

export default Admin