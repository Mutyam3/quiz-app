import React from 'react'


function Options(){


    function addOption(){
        
        setQuestion({
            ...question, options : [...question.options, {option : ''}]   
        })
    }

    
    return(
        <div className='text-start m-3'>
        {
           question?.options?.map((option)=>{
               return (
                   <div>
                        <input type={question.questionType} disabled />
                        <input type='text' placeholder='Enter your option' />
                       
                   </div>
               )
           })
        }
        <i class="bi bi-plus-circle" onClick = {addOption}>Add Option</i> 
       </div>
    )
}

export default Options