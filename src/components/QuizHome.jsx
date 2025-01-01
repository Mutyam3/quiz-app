import React from 'react'
import { Link } from 'react-router-dom'

function QuizHome(){

      const [allQuizes, setAllQuizes] = React.useState([])

      React.useEffect(()=>{
           
      },[])


    return (
        <section>
             <div className='d-flex'>

             <div className='border border-dark rounded-3 d-flex justify-content-center align-items-center m-5 quizBox'>

                   <Link to='/quizPage'><i class="bi bi-plus-circle-fill fs-1"></i></Link>

             </div>

             <div className='border border-dark p-5 m-5 w-75 rounded-3'>

             </div>


             </div>

             <h3 className='m-5'>Recent Quizes</h3>
             <div className='border border-dark p-5 m-5  rounded-3'>
                  {
                  
                  }
             </div>


        </section>
    )
}

export default QuizHome