import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Detail from './routes/Detail';
import About from './routes/About';
import Event from './routes/Event';
import product_data from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
const basename = process.env.PUBLIC_URL;
let products = product_data;
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'detail/:id',
        element: <Detail products={products}/>,
      },
      {
        path: 'event',
        element: <Event />,
      }
    ]
  }
];

const router = createBrowserRouter(routes, {basename: basename});

root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
