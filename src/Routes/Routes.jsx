import {createBrowserRouter} from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SingIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/ErrorPage/Error";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/signin',
                element:<SingIn></SingIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'book/:id',
                element:<PrivateRoute><BookService></BookService></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path:'bookings',
                element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
    }
]);

export default router