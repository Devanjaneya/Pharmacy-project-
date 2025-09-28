
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import { createBrowserRouter } from 'react-router';
import About from './components/About';
import Help from './components/Help';
import { RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import MedicineType from './components/medicineType';
import MedicineDetails from './components/MedicineDetails';
import Cart from './components/cart';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:
        [
          {
            path: "",
            element: [<MedicineType />,<Footer/>]
          },
          {
            path:"/about",
            element:<About/>
          },
          {
             path:"/help",
             element:<Help/>
          },
          {
            path:"medicine/:id",
            element:<MedicineDetails/>
          },
          {
            path:"cart",
            element:<Cart/>
          },{
            path:"loginform",
            element:<LoginForm/>
          },{
            path:"registerform",
            element:<RegisterForm/>

          }
        ],
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={appRouter}/>
  </>
);
