import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import StudentHome from "../Pages/Dashboard/StudentHome/StudentHome";
import InstructorHome from "../Pages/Dashboard/InstructorHome/InstructorHome";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        },
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>,
          children: [
            {
              path: 'allUsers',
              element: <AllUsers></AllUsers>
            },
            {
              path: 'adminHome',
              element: <AdminHome></AdminHome>
            },
            {
              path: 'studentHome',
              element: <StudentHome></StudentHome>
            },
            {
              path: 'instructorHome',
              element: <InstructorHome></InstructorHome>
            },
            {
              path: 'allUsers',
              element: <AllUsers></AllUsers>
            },
            
          ]
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        
      ]
    },

  ]);

  export default router;