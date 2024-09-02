import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/LandingPages/Home';
import BuyNow from './Components/BuyNow';
import ProductAdd from './Components/Product/ProductAdd';
import Login from './Components/User/Login';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminDashboard from './Components/Admin/Dashboard';
import BuyPage from './Components/BuyPage';
import RentPage from './Components/RentPage';

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
    },
    {
      path: '/AdminLogin',
      element: <AdminLogin />
    },
    {
      path: '/AdminDashboard',
      element: <AdminDashboard />
    },
    {
      path: '/BuyPage',
      element: <BuyPage />
    },
    {
      path: '/RentPage',
      element: <RentPage />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
