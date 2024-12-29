import React from 'react'
import UserDetails from './UserDetails'
import axios from 'axios'
import {Link} from 'react-router-dom'

function AdminHome(){

  const [allUsers, setAllUsers] = React.useState([])
  const [user , setUser] = React.useState({

    name : '',
    username : '',
    password : '',
    email : ''
    
   })
const [steps, setSteps] = React.useState(0)
const [userCount, setUserCount] = React.useState(false)

  function getUsers(){
    axios.get('http://localhost:5000/users').then((res)=>{

      setAllUsers([...res.data])

    }).catch((err)=>{

    })
  }


  React.useEffect(()=>{
          getUsers()
  },[])


  function addUser(){
    // const finalUsers = [...allUsers, {...user}]
    // console.log(finalUsers)
              
    axios.post('http://localhost:5000/users', user).then((res)=>{

       getUsers()
       console.log(res.data) 

    }).catch((err)=>{

    })

  }



        function submitUser(e){
              e.preventDefault()

              // console.log('mass')
              // console.log(user)
              addUser()
             

      }


    return (
        <div className='border border-2 p-5'>

            <div className='border border-dark p-5 d-flex justify-content-around w-100'>
               <button onClick = {()=>{setSteps(1)}}>Create User</button>
               {allUsers && <Link to='/quizPage'><button>Create Quiz</button></Link>}
            </div>

            <br/>
          
          {
            steps == 1 && <div>
                              
                            <div>
                              <h5>User</h5>
                              
                            <form className='d-flex justify-content-evenly'>
                              <label>Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                 <input type='text' name='name' onChange={(e)=>{setUser({...user, name : e.target.value })}}/> 
                              </label>
                              
                              <label>
                                UserName : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type='text' name='username' onChange={(e)=>{setUser({...user, username : e.target.value})}}/>
                              </label>

                              <label>
                                Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                <input type='email' name='email' onChange={(e)=>{setUser({...user, email : e.target.value})}}/>
                              </label>
                             
                              <label>
                                Password : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                <input type='text' name='password' onChange={(e)=>{setUser({...user, password : e.target.value})}}/>
                              </label>

                              <button onClick = {(e)=>{submitUser(e)}}>Submit</button>
                            </form>
                           </div>

                           <br/>
                           <br/>

                           <UserDetails users = {allUsers}/>


                           </div>
          }
        </div>
    )
}


export default AdminHome