
import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserQuiz from './userQuiz';

function UserHome() {
  const { id } = useParams();
  const [step, setStep] = React.useState(1);
  const [userData, setUserData] = React.useState({});
  const [quizData, setQuizData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [userQuiz, setUserQuiz] = React.useState({})

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        setUserData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        alert('Failed to fetch user data.');
      });
  }, []);

  React.useEffect(() => {
    if (userData?.quizId?.length) {
      userData.quizId.forEach((el) => {
        axios
          .get(`http://localhost:5000/allQuizes/${el}`)
          .then((res) => setQuizData((prev) => [...prev, res.data]))
          .catch((err) => console.error(err));
      });
    }
  }, [userData]);

  const userQuizFn = (quiz) => {
    console.log(quiz)
    setUserQuiz(quiz)
    setStep(2);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <section className="p-5">
      {step === 1 && (
        <>
          <div className="m-5 p-5 border border-dark text-center">
            <h1>HI, {userData.name}</h1>
          </div>

          <h5 className="m-5">Quizzes</h5>
          <div className="border border-dark rounded-3 d-flex flex-wrap m-5 p-4">
            {quizData.length > 0 ? (
              quizData.map((quiz) => (
                <section
                  key={quiz.id}
                  onClick={() => userQuizFn(quiz)}
                  className="d-flex border border-dark p-5 m-3 w-75"
                >
                  <h4 className="text-center">{quiz.quizName}</h4>
                </section>
              ))
            ) : (
              <p>No quizzes available.</p>
            )}
          </div>
        </>
      )}

      {step === 2 && <UserQuiz userQuiz = {userQuiz} setStep={setStep}/>}
    </section>
  );
}

export default UserHome;
