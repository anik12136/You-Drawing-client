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
import ManageClasses from "../Pages/Dashboard/AdminHome/ManageClasses/ManageClasses";
import MySelectedClass from "../Pages/Dashboard/StudentHome/mySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/Dashboard/StudentHome/MyEnrolledClass/MyEnrolledClass";
import Payment from "../Pages/Dashboard/StudentHome/Payment/Payment";
import AddAClasses from "../Pages/Dashboard/InstructorHome/AddAClass/AddAClasses";
import MyClasses from "../Pages/Dashboard/InstructorHome/MyClasses/MyClasses";
import NotFound from "../Pages/404/NotFound";

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
              path: 'manageClasses',
              element: <ManageClasses></ManageClasses>
            },
            {
              path: 'mySelectedClass',
              element: <MySelectedClass></MySelectedClass>
            },
            {
              path: 'myEnrolledClass',
              element: <MyEnrolledClass></MyEnrolledClass>
            },
            {
              path: 'payment',
              element: <Payment></Payment>
            },
            {
              path: 'addAClass',
              element: <AddAClasses></AddAClasses>
            },
            {
              path: 'myClasses',
              element: <MyClasses></MyClasses>
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
    {
      path: '*',
      element: <NotFound></NotFound>
    },

  ]);

  export default router;