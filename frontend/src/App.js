import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Components/LandingPages/Home';
import BuyNow from './Components/BuyNow';
import ProductAdd  from './Components/Product/ProductAdd'; 
import Login from './Components/User/Login'; 

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
    {
      path: '/productAdd',
      element: <ProductAdd />,
    },
    {
      path: '/login',
      element: <Login />
    }
  ])
  return (
   <>
   <RouterProvider router={router}/>
   </>
  );
}

export default App;
