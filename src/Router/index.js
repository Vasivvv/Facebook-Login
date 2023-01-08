import React from 'react'
    import {
        createBrowserRouter,
    } from "react-router-dom";
import Login from '../Components/Login';
import Register from '../Components/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element:<Login></Login> ,
    },
     {
         path: "/Register",
         element:<Register></Register> ,
     }
    
]);

export default router