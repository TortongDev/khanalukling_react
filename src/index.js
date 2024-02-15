import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './css/footer.css';
import './css/header.css';
import './css/style.css';
import './css/responesive.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import PageHome from './pages/PageHome';
import PageHomeUser from './userPages/PageHome';
import Profile from './userPages/profile';
const router = createBrowserRouter([
  
  {
    path:'/',
    element: <PageHome />
  },
  {
    path:'/users',
    element: <PageHomeUser />
  },
  {
    path: '/user-profile',
    element: <Profile />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}  />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
