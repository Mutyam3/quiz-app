import React from 'react'
import { useParams ,Link } from 'react-router-dom'
import axios from 'axios'
import UserQuiz from './userQuiz'


function UserHome(){

    const {id} = useParams()
    const [step, setStep] = React.useState(1)
    const [userData, setUserData] = React.useState({})
    const [quizData, setQuizData] = React.useState([])

    React.useEffect(()=>{

      axios.get(`http://localhost:5000/users/${id}`).then((res)=>{

        console.log(res.data)
        setUserData(res.data)

      }).catch((err)=>{

           console.log(err)

      })

         axios.get('http://localhost:5000/allQuizes').then((res)=>{

            console.log(res.data)
             setQuizData(res.data)
         }).catch((err)=>{
              console.log(err)
         })


    },[])

    
  
    return (
        <section className='p-5'>

            {
              step == 1  && <>

               <div className='m-5 p-5 border border-dark text-center'>
                        <h1>HI, {userData.name}</h1>
               </div>


                <h5 className='m-5 '>Quizes</h5>
               <div className='border border-dark rounded-3 d-flex m-5 p-4'>
                   {
                       quizData?.map((quiz)=>{
                            return <Link to={`/userQuiz/${quiz.id}`} className='border border-dark w-25 p-5 rounded-3' style={{textDecoration:'none', color:'black'}}>
                            <section>
                                 <h4>{quiz.quizName}</h4>
                                 
                            </section>
                            </Link>
                       })
                   }
               </div>
                </>
            }
               

            {

                step== 2 && 
                <>
                    <UserQuiz userData = {userData}/>
                </>
            }

  
        </section>
    )
}

export default UserHome