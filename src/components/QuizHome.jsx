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
        <section>
             <div className='d-flex'>

             <div className='border border-dark rounded-3 d-flex justify-content-center align-items-center m-5 quizBox'>

                   <Link to='/quizPage'><i class="bi bi-plus-circle-fill fs-1"></i></Link>

             </div>

             <div className='border border-dark p-4 m-5 d-flex flex-wrap  gap-5 w-75 rounded-3'>

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


             </div>

             <h3 className='m-5'>Recent Quizes</h3>
             <div className='border border-dark p-5 m-5 d-flex rounded-3'>
                  {
                        allQuizes?.map((el)=>{
                              return (
                                   <section className='m-2 border border-dark p-5'>
                                        
                                   </section>
                              )
                        })
                  }
             </div>


        </section>
    )
}

export default QuizHome