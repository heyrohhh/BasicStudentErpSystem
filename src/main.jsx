
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/students/dashboard.jsx';
import Assignments from './components/students/assignment.jsx';
import { Attendance } from './components/students/attendence.jsx';
import Profile from './components/students/profile.jsx';
import Studyplan from './components/students/studyplan.jsx';
import Grades from './components/students/grades.jsx';
import Quicklink from './components/students/quicklink.jsx';
import Event from './components/students/events.jsx';


const router = createBrowserRouter([
  {
    path:"/",
   element: <Dashboard/>
  },
  {
    path:"/profile",
     element: <Profile/>,
  },
  {
    path:"/assignments",
    element:<Assignments/>
  },
  {
    path:"/attendance",
    element:<Attendance/>
  },
  {
      path:"/grades",
      element:<Grades/>
  },
  {
    path:"/dashboard/studyplan",
    element:<Studyplan/>
  },
  {
    path:"/dashboard/assignments",
    element:<Assignments/>
  },
  {
    path:"/dashboard/quicklink",
    element:<Quicklink/>
  },
  {
    path:"/dashboard/Events",
    element:<Event/>
  },
])

createRoot(document.getElementById('root')).render(
 
  <RouterProvider router={router} />
 
)
