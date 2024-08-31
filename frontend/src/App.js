import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Components/Home';
import Signup from './Components/Signup';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
       },
      {
        path: "/signup",
        element: <Signup />,
      },
      
    ],
  )
;

  return (
    <RouterProvider router={router}></RouterProvider> 
  );
}
  export default App;


