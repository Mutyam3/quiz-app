import React from 'react'

function UserDetails({users}){




    return (
        
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
                                    <td><button className='btn btn-primary'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                               </tr>
                         })
                    }
               </tbody>
            </table>
        
    )
}

export default UserDetails
