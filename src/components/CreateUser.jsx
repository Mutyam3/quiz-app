import React from 'react'
import UserDetails from './UserDetails'
import axios from 'axios'


function CreateUser(){


    const [allUsers, setAllUsers] = React.useState([])
    const [user , setUser] = React.useState({
  
      name : '',
      username : '',
      password : '',
      email : ''
      
     })

     

     const [updateUserStatus, setUpdateUserStatus] =  React.useState({
           status : false,
           id : ''
     })

  
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
      axios.post('http://localhost:5000/users', user).then((res)=>{
  
         getUsers()
         console.log(res.data) 
  
      }).catch((err)=>{
  
      })
  
    }

    function editUser(user){
        alert(user.id)
        setUser({...user})
        setUpdateUserStatus({status : true, id: user.id})
    }

    function updateUser(e){
      e.preventDefault()
        alert('mass')
        console.log({...user})
      console.log(`http://localhost:5000/users/${updateUserStatus.id}`)  
        axios.put(`http://localhost:5000/users/${updateUserStatus.id}`, {...user}).then((res)=>{

            console.log('Update User ::',res)
            getUsers()
            setUpdateUserStatus({status:false, id:''})

        }).catch((err)=>{
            console.log(err)
        })
    }


    async function deleteUser(user){
       await axios.delete(`http://localhost:5000/users/${user.id}`)
       getUsers()
    }
  
  
    function submitUser(e){
        e.preventDefault()
         addUser()
    }


    return (
        <section>
            
        <div className='m-auto p-5 text-center'>
             <h5>User</h5>
         <form className=''>
                <label className='m-2'>Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <input type='text' name='name' className='InputField' value={user.name}  onChange={(e)=>{setUser({...user, name : e.target.value })}}/> 
                </label> <br/>
                                        
              
                <label className='m-2'>
                     Email : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <input type='email' name='email' className='InputField' value={user.email} onChange={(e)=>{setUser({...user, email : e.target.value})}}/>
                </label> <br/>

               <label className='m-2'>
                     UserName : &nbsp;&nbsp;&nbsp;&nbsp;
                     <input type='text' name='username' className='InputField' value={user.username} onChange={(e)=>{setUser({...user, username : e.target.value})}}/>
                </label> <br/>   

                <label className='m-2'>
                     Password : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                     <input type='text' name='password' className='InputField' value={user.password} onChange={(e)=>{setUser({...user, password : e.target.value})}}/>
                </label> <br/>
              
              {
                   !updateUserStatus.status && <button onClick = {(e)=>{submitUser(e)}}>Submit</button> 
              }

              {
                    updateUserStatus.status && <button onClick = {(e)=>{updateUser(e)}}>Update</button>
              }

                
            </form>
        </div>
              
        <br/>
        <br/>

        <div className='m-5'>
           <UserDetails users = {allUsers} editUser={editUser} deleteUser={deleteUser}/>
        </div>  
       
                          
        </section>
    )
}

export default CreateUser