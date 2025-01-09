import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function PublishQuiz(){

    const {id} = useParams()
    console.log(id)

    const [quiz, setQuiz] = React.useState({})

    React.useEffect(()=>{

        axios.get(`http://localhost:5000/allQuizes/${id}`).then((res)=>{
 
             console.log(res.data)
             setQuiz(res.data)

        }).catch((err)=>{
              console.log(err)
        })

        },[])


        function publishQuiz(){
             alert('hi')
            
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
               quiz?.quizQuestions.map((el,ind)=>{
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

             <div>

                    <button onClick = {publishQuiz}>Publish</button>

             </div>

              </section>



        </section>
    )
}

export default PublishQuiz