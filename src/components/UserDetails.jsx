import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserDetails({users, editUser, deleteUser}){

     const navigate = useNavigate()


    return (
        <>
        
            <table className='table'>
               <thead>
                   <tr>
                      <td>S.No</td>
                      <td>Name </td>
                      <td>UserName</td>
                      <td>Password</td>
                      <td>Email</td>
                      <td>Quiz Score </td>
                      <td>Options</td>
                   </tr>
               </thead>
               <tbody>
                    {
                       users &&   users.map((user)=>{
                               return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.email}</td>
                                    <td><button className='btn btn-primary'>View</button></td>
                                    <td><button className='btn btn-primary' onClick = {()=>{editUser(user)}}>Edit</button>
                                        <button className='btn btn-danger' onClick = {()=>{deleteUser(user)}}>Delete</button>
                                    </td>
                               </tr>
                         })
                    }
               </tbody>
            </table>

            <div>
                <button onClick={()=>{navigate('/adminPage')}}>Previous</button>
            </div>
            </> 
    )
}

export default UserDetails
