import React from 'react';
import axios from 'axios'
import Questions from './Questions';


function QuizPage() {
    const [quiz, setQuiz] = React.useState({
        quizName: '',
        quizFormDescription: '',
        quizNoOfQuestions: '',
        quizQuestions: [],
    });

    const [questions, setQuestions] = React.useState({
        questionName: '',
        questionType: '',
        options: [{ option: '' }],
    });

    const [quizQuestions, setQuizQuestions] = React.useState([])


    function handleOptions(index, value) {
        const temp = [...questions.options];
        if (temp[index]) {
            temp[index].option = value;
            setQuestions({ ...questions, options: temp });
        } else {
            console.error(`Invalid index ${index} for options array`, temp);
        }
    }

    function addOption() {
        setQuestions({ ...questions, options: [...questions.options, { option: '' }] });
    }

   async function addQuestion() {
      const updatedQuestions = [...quizQuestions, {...questions, id: `${questions.questionName.replace(/\s+/g, "")}`}];

      setQuiz({ ...quiz, quizQuestions: updatedQuestions });

     
      const response = await axios.put(`http://localhost:5000/quiz/${1}`, {
          ...quiz,
          quizQuestions: updatedQuestions, 
      });
      
      getAllQuestions()
      
        setQuestions({
            questionName: '',
            questionType: '',
            options: [{ option: '' }],
        });
    }

    function getAllQuestions(){

      axios.get('http://localhost:5000/quiz').then((res)=>{
        console.log(res.data[0].quizQuestions)
        setQuizQuestions(res.data[0].quizQuestions)
      }).catch((err)=>{
        console.log(err)
      })

    }

   async function deleteQuestion(ind){
      alert(ind)

      let updatedQuestions = [...quizQuestions];
      updatedQuestions = updatedQuestions.filter((el)=>{
                  if(el.id == ind){
                     return false
                  }
                  else {
                    return true
                  } 
            })
      console.log('update ::',updatedQuestions)

      setQuiz({ ...quiz, quizQuestions: updatedQuestions });

     
      const response = await axios.put(`http://localhost:5000/quiz/${1}`, {
          ...quiz,
          quizQuestions: updatedQuestions, 
      });

       getAllQuestions()


    }

    React.useEffect(()=>{

          getAllQuestions()

    },[])


    return (
        <section className="border border-dark p-5">
            <div className="border border-dark rounded-3 p-5 m-5 text-center">
                <input
                    type="text"
                    name="quizName"
                    value={quiz.quizName}
                    onChange={(e) => setQuiz({ ...quiz, quizName: e.target.value })}
                    placeholder="Untitled Quiz"
                    className='InputField'
                />
                <div className='m-4 d-flex justify-content-around'>
                    <input
                        type="text"
                        name="quizFormDescription"
                        value={quiz.quizFormDescription}
                        onChange={(e) => setQuiz({ ...quiz, quizFormDescription: e.target.value })}
                        placeholder="Form Description"
                        className='InputField'
                    />
                    <input
                        type="text"
                        name="quizNoOfQuestions"
                        value={quiz.quizNoOfQuestions}
                        onChange={(e) => setQuiz({ ...quiz, quizNoOfQuestions: e.target.value })}
                        placeholder="No of Questions"
                        className='InputField'
                    />
                </div>
            </div>

            <Questions quizQuestions = {quizQuestions} deleteQuestion={deleteQuestion}/>

            <div className="border border-dark rounded-3 p-5 m-5">
                <div className="d-flex justify-content-between">
                    <input
                        type="text"
                        name="questionName"
                        value={questions.questionName}
                        onChange={(e) => setQuestions({ ...questions, questionName: e.target.value })}
                        placeholder="Question"
                        className='InputField'
                    />
                    <select
                        value={questions.questionType}
                        name="questionType" 
                        onChange={(e) => setQuestions({ ...questions, questionType: e.target.value })}
                    >
                        <option value="">--Please select--</option>
                        <option value="radio">Multiple Choice</option>
                        <option value="checkbox">Checkboxes</option>
                        <option value="text">Fill in the Blank</option>
                    </select>
                </div>

                <div className="m-3">
                  { 
                  questions?.questionType !== 'text' && <>
                      <>
                                       {questions?.options?.map((option, index) => (
                                           <div key={index}>
                                               <input type={questions.questionType} disabled />
                                               <input 
                                                   type="text"
                                                   name="option"
                                                   onChange={(e) => handleOptions(index, e.target.value)}
                                                   placeholder={`option ${index + 1}`}
                                                   className='InputQuestion'
                                               />
                                               <br />
                                           </div>
                                       ))}
                     </>
                     <button onClick={addOption}>Add Option</button>
                    </>
                  }

                  {
                    questions?.questionType == 'text' && 
                    <>
                                     {questions?.options?.map((option, index) => (
                                         <div key={index}>
                                             <input type="text"
                                                   name="option"
                                                   className='InputField'
                                                   onChange={(e) => handleOptions(index, e.target.value)} />
                                             <br />
                                         </div>
                                     ))}
                   </>
                  }
                </div>
                <button onClick={addQuestion}>Add Question</button>
            </div>
        </section>
    );
}

export default QuizPage;
