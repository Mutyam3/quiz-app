import React from 'react'
import UserDetails from './UserDetails'
import axios from 'axios'
import {Link} from 'react-router-dom'

function AdminHome(){


  const [allUsers, setAllUsers] = React.useState([])

  function getUsers(){
    axios.get('http://localhost:5000/users').then((res)=>{

      setAllUsers([...res.data])

    }).catch((err)=>{

    })
  }


  React.useEffect(()=>{
          getUsers()
  },[])

    return (
        <div className=' d-flex p-5 adminPage'>

            <div className='border border-dark d-flex justify-content-around w-100 align-items-center'>
                        <div className='text-center quizBox'>
                              <Link to='/createUser'><div className='border border-dark p-5 '>
                             <i class="bi bi-plus-square-fill fs-1"></i>
                               
                              </div></Link>
                           <p className='text-center border border-dark p-2'>Create User</p>
                        </div>

                        <div className='text-center quizBox'> 
                          { allUsers.length>0 && <Link to='/quizHome'>
                    
                         <div className='border border-dark p-5'>
                             <i class="bi bi-plus-square-fill fs-1"></i>
                        </div></Link>
                  
                        } 
                        <p className='text-center border border-dark p-2'> Create Quiz</p>
                        </div>
                  
            </div>

            <br/>
          

        </div>
    )
}


export default AdminHome