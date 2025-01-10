import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function User(){


  const [userData, setUserData] = React.useState({
    username : "",
    password : ""
})

const navigate = useNavigate()
const [message, setMessage] = React.useState('')

function submitUser(e){
    e.preventDefault()

   axios.get('http://localhost:5000/users').then((res)=>{
        if(res.data && userData){
          
         var temp = res.data.find((user)=>(user.username === userData.username && user.password === userData.password))

          if(temp){
                 console.log(temp.id)
                navigate(`/userHome/${temp.id}`)
           }
           else{
            setMessage('Invalid Credentials , Please Enter Your Username and Password Correctly')
           }  
        }
           
   }).catch((err)=>{

   })

}

    return (
        
    <div className='loginDiv'>
    <form>
       <div class="mb-3">
             <label for="exampleInputEmail1" class="form-label">Username</label>
             <input type="text" class="form-control" id="exampleInputEmail1" name='username' aria-describedby="emailHelp" onChange={(e)=>{setUserData({...userData, username:e.target.value})}}/>
       </div>
    <div class="mb-3">
           <label for="exampleInputPassword1" class="form-label">Password</label>
           <input type="password" class="form-control" name='password' id="exampleInputPassword1" onChange={(e)=>{setUserData({...userData, password:e.target.value})}}/>
    </div>
             <button type="submit" class="btn btn-primary" onClick={submitUser}>Submit</button>
       </form>

       <div className='text-center color-primary'>{message && message}</div>
     </div> 
        
    )
}

export default User