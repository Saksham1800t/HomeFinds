import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Components/LandingPages/Home';
import BuyNow from './Components/BuyNow';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/buyNow',
      element: <BuyNow />,
    },
  ])
  return (
   <>
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
