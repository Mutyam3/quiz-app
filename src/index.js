import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Admin from './components/Admin';
import User from './components/User';
import AdminHome from './components/AdminHome';

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
