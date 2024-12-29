import axios from 'axios';
import React from 'react';

function QuizPage() {
  const [quiz, setQuiz] = React.useState({
    quizName: '',
    formDescription: '',
    noOfQuestions: '',
    questions: [],
  });

  const [question, setQuestion] = React.useState({
    questionName: '',
    questionType: 'checkbox',
    options: [{ option: '' }],
  });

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...question.options];
    updatedOptions[index].option = value;
    setQuestion({ ...question, options: updatedOptions });
  };

  const addOption = () => {
    setQuestion({
      ...question,
      options: [...question.options, { option: '' }],
    });
  };

   async function addQuestion(){
    setQuiz({
      ...quiz,
      questions: [...quiz.questions, { ...question }],
    })

   await axios
      .post('http://localhost:5000/quiz', quiz)
      .then((res) => {
        console.log('Response:', res.data);
      })
      .catch((err) => {
        console.error('Error:', err);
      });

    // Reset question state after adding
    setQuestion({
      questionName: '',
      questionType: 'checkbox',
      options: [{ option: '' }],
    });
  };

  return (
    <div className="m-auto w-75 text-center">
      <div className="m-5 border border-dark rounded-3 p-5">
        <input type="text" name="quizName" value={quiz.quizName} onChange={(e) => setQuiz({ ...quiz, quizName: e.target.value })} placeholder="Quiz Name"/>
        <br />
        <input type="text" name="formDescription" value={quiz.formDescription}onChange={(e) => setQuiz({ ...quiz, formDescription: e.target.value })} placeholder="Form Description"/>
        <input type="number" name="noOfQuestions" value={quiz.noOfQuestions} onChange={(e) =>setQuiz({ ...quiz, noOfQuestions: e.target.value })} placeholder="No. of Questions"/>
      </div>

      <div>
        {quiz.questions.map((el, index) => (
          <div key={index} className="m-5 border border-dark rounded-3">
            <div className="p-5 d-flex justify-content-between">
              <input type="text" name="question" value={el.questionName} readOnly />

              {el.options.map((option, optIndex) => (
                <li key={optIndex}>
                     <input type={el.questionType} />
                    {option.option}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="m-5 border border-dark rounded-3">
        <div className="p-5 d-flex justify-content-between">
          <input
            type="text"
            name="question"
            value={question.questionName}
            onChange={(e) =>
              setQuestion({ ...question, questionName: e.target.value })
            }
            placeholder="Question Name"
          />
          <select
            value={question.questionType}
            onChange={(e) =>
              setQuestion({ ...question, questionType: e.target.value })
            }
          >
            <option value="" disabled>
              Please Select
            </option>
            <option value="radio">Multiple Choice</option>
            <option value="text">Fill in the Blank</option>
            <option value="checkbox">Check Boxes</option>
          </select>
        </div>

        <div className="text-start m-3">
          {question.options.map((opt, index) => (
            <div key={index}>
              <input type={question.questionType} disabled />
              <input
                type="text"
                value={opt.option}
                placeholder="Enter your option"
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            </div>
          ))}
          <button className="btn btn-secondary" onClick={addOption}>
            Add Option
          </button>
        </div>
        <button className="btn btn-primary" onClick={addQuestion}>
          Add Question
        </button>
      </div>
    </div>
  );
}

export default QuizPage;
