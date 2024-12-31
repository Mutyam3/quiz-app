import React from 'react'


function Questions({quizQuestions , deleteQuestion}){

console.log('mass ::', quizQuestions)
    

    
    return(
        <div className='text-start m-3'>
       
           {
               quizQuestions && quizQuestions.map((el,ind)=>{
                     return (
                        <div className='text-start m-5 border border-dark rounded-3 p-5' key = {`${el.questionName.slice(0,10)}`}>
                             <p className='text-end'><i class="bi bi-trash3-fill fs-4" onClick = {()=>{deleteQuestion(el.id)}}></i></p>
                             <p>{el.questionName}</p> 
                             
                            
                           <ul type='none'> {
                                el?.options?.map((option)=>{
                                    return <li className='d-flex gap-3'>
                                         <input type={el.questionType}/> 
                                         <span>{option.option}</span>
                                    </li>
                                })
                            }</ul>
                            
                        </div>
                     )
               })
           }
          

        </div>
    )
}

export default Questions