import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function QuizHome(){

      const [allQuizes, setAllQuizes] = React.useState([])

      React.useEffect(()=>{
           axios.get('http://localhost:5000/allQuizes').then((res)=>{

               setAllQuizes(res.data)
               console.log('home::', res.data)
           }).catch((err)=>{
               console.log(err)
           })

      },[])


    return (
        <section className='m-5 d-flex flex-column align-items-center'>
            
            
            <div className='border border-dark rounded-3 d-flex justify-content-center align-items-center quizBox w-100'>

                    <Link to='/quizPage'><i class="bi bi-plus-circle-fill fs-1"></i></Link>

            </div>
           



             <div className='border border-dark p-4 m-5 d-flex flex-wrap  gap-5  rounded-3 w-100'>

                  {
                        allQuizes?.map((el)=>{
                              
                              return (
                                   
                                   <Link to={`/publishQuiz/${el.id}`} className='border border-dark w-25 p-5 rounded-3' style={{textDecoration:'none', color:'black'}}>
                                   <section>
                                        <h4>{el.quizName}</h4>
                                        
                                   </section>
                                   </Link>
                                   
                                   
                              )
                        })
                  }
             </div>


             




        </section>
    )
}

export default QuizHome