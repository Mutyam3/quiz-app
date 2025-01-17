import React from 'react'
import axios from 'axios'
import {  useNavigate, useParams} from 'react-router-dom'

function PublishQuiz(){

    const {id} = useParams()
    console.log(id)

    const [quiz, setQuiz] = React.useState({})
    const [users, setUsers] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(()=>{

        axios.get(`http://localhost:5000/allQuizes/${id}`).then((res)=>{
 
             console.log(res.data)
             setQuiz(res.data)

        }).catch((err)=>{
              console.log(err)
        })

        axios.get('http://localhost:5000/users').then((res)=>{
            console.log(res.data)

             setUsers(res.data)

        }).catch((err)=>{
            console.log(err)
        })

     },[])


     function publishQuiz() {
       
        const updatedUsers = users.map((user) => {
            
            const updatedUser = { ...user };
            
            updatedUser.quizId = updatedUser.quizId || []; 
            if (!updatedUser.quizId.includes(id)) {
                updatedUser.quizId.push(id); 
            }
            return updatedUser;
        });
    
        updatedUsers.forEach((updatedUser) => {
            axios
                .put(`http://localhost:5000/users/${updatedUser.id}`, updatedUser)
                .then((res) => {
                    console.log(`User ${updatedUser.id} updated successfully:`, res.data);
                })
                .catch((err) => {
                    console.error(`Error updating user ${updatedUser.id}:`, err);
                });
        });
    
        console.log('Updated users:', updatedUsers);
    }

    function previous(){

         navigate('/quizHome')

    }
    
    


    return (
        <section className='p-5'>
              
              <section className='border border-dark p-5 m-2 rounded-3'>
              <div className="border border-dark rounded-3 p-5 m-5 text-center">
                     <h3>{quiz.quizName}</h3>
                <div className='m-4 d-flex justify-content-around'>
                    <h5>{quiz.quizFormDescription}</h5>
                    <h5>No of Questions : {quiz.quizNoOfQuestions}</h5>
                </div>
               </div>


            {
              quiz &&  quiz.quizQuestions && quiz.quizQuestions.map((el,ind)=>{
                     return (
                        <div className='text-start m-5 border border-dark rounded-3 p-5' key = {`${el.questionName.slice(0,10)}`}>
                             <p>{el.questionName}</p> 
                             
                            
                           <ul type='none'> {
                                el?.options?.map((option)=>{
                                    return <li className='d-flex gap-3'>
                                         <input type={el.questionType} name={el.questionName}/> 
                                         <span>{option.option}</span>
                                    </li>
                                })
                            }</ul>
                            
                        </div>
                     )
               })
             }

             <div className='p-5 d-flex justify-content-between'>

                    <button onClick = {previous}>Previous</button>

                    <button onClick = {publishQuiz}>Publish</button>

                   

             </div>

              </section>



        </section>
    )
}

export default PublishQuiz