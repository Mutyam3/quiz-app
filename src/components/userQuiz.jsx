import React from 'react';

function UserQuiz({ userQuiz, setStep }) {
  const [quizValues, setQuizValues] = React.useState({});

  function submitQuiz() {
    console.log('Submitted Quiz Values:', quizValues);
    
  }

  function handleValues(e) {
    const temp = { [e.target.name]: e.target.value };
    setQuizValues((prev) => ({ ...prev, ...temp }));
  }

  return (
    <section className="p-5">
      <section className="border border-dark p-5 m-2 rounded-3">
        <div className="border border-dark rounded-3 p-5 m-5 text-center">
          <h3>{userQuiz?.quizName || 'Quiz Name'}</h3>
          <div className="m-4 d-flex justify-content-around">
            <h5>{userQuiz?.quizFormDescription || 'Description not available'}</h5>
            <h5>No of Questions: {userQuiz?.quizNoOfQuestions || 0}</h5>
          </div>
        </div>

        {userQuiz?.quizQuestions?.length > 0 ? (
          userQuiz.quizQuestions.map((el, ind) => (
            <div
              className="text-start m-5 border border-dark rounded-3 p-5"
              key={`${el.questionName.slice(0, 10)}-${ind}`}
            >
              <p>{el.questionName}</p>
              <ul type="none">
                {el?.options?.map((option, idx) => (
                  <li className="d-flex gap-3" key={`${option.option}-${idx}`}>
                    <input
                      type={el.questionType}
                      name={el.questionName}
                      value={option.option}
                      onChange={handleValues}
                    />
                    <span>{option.option}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-center">No questions available for this quiz</p>
        )}

        <div className="p-5 d-flex justify-content-between">
          <button
            onClick={() => {
              setStep(1);
            }}
            className="btn btn-secondary"
          >
            Previous
          </button>

          <button onClick={submitQuiz} className="btn btn-primary">
            Submit Quiz 
          </button>
        </div>
      </section>
    </section>
  );
}

export default UserQuiz;
