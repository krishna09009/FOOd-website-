import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Cart from './Cart.jsx'
import Error from './Error.jsx'
import Help from './Help.jsx'
import Offer from './Offer.jsx'
import SignIn from './SignIn.jsx'
import SearchH from './SearchH.jsx'
import Body from './Body'
import RestaruntDetails from './RestaruntDetails.jsx'


const approuter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:
      [
        {
          path:'/',
          element:<Body/>,
        },
        {
          path:'/Cart',
        element:<Cart/>,
        
        },
        {
          path:'/Search',
        element:<SearchH/>,
        
        },
        {
          path:'/Help',
        element:<Help/>,
        
        },
        {
          path:'/Offer',
        element:<Offer/>,
        
        },
        {
          path:'/SignIn',
        element:<SignIn/>,
        
        },
        {
          path:'/restaurent/:resId',
          element:<RestaruntDetails/>
        }
    ]
    }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={approuter}></RouterProvider>
  </React.StrictMode>,
)
