import React from 'react'

function Preview({quizQuestions, setStep}){

    

    return (
        <section className='text-start m-3'>
           {
               quizQuestions && quizQuestions.map((el,ind)=>{
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
             <button onClick={()=>{setStep(1)}}>Back</button>
          </div> 
        </section>
    )
}

export default Preview