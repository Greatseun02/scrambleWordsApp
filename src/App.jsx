import './App.css'
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './containers/HomePage'
import Scramble from './containers/Scramble'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/scramble",
    element: <Scramble />,
  },
  {
    path:"/annoyed",
    element: <>HEllo world</>
  }

]);


    

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
