import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Admin from './components/Admin';
import User from './components/User';
import AdminHome from './components/AdminHome';
import QuizPage from './components/QuizPage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CreateUser from './components/CreateUser';
import QuizHome from './components/QuizHome';
import PublishQuiz from './components/PublishQuiz';

const router = createBrowserRouter([
         {
            path : '/',
            element: <App/>,
            children: [

                {
                    path : '/admin',
                    element: <Admin/>
                 },
                 {
                    path : '/user',
                    element : <User/>
                 },
                 {
                   path : '/adminPage',
                   element : <AdminHome/>
                 },
                 {
                  path : '/quizHome',
                  element : <QuizHome/>
                 }
                  ,
                 {
                  path : '/createUser',
                  element : <CreateUser/>
                 },
                 {
                  path : '/quizPage',
                  element : <QuizPage/>
                 }
                 ,{
                   path : '/publishQuiz/:id',
                   element : <PublishQuiz/>
                 }
                 
            ]
         },




])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}>
               <App />
    </RouterProvider>
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
