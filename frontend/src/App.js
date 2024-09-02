import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BuyNow from './Components/BuyNow';
import Home from './Components/LandingPages/Home';
import ProductAdd from './Components/Product/ProductAdd';
import RentNow from './Components/RentNow';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import UserProfile from './Components/User/UserProfile';
import UserType from './Components/User/UserType';
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
      element: <Login />,
    },
    {
      path: '/Signup',
      element: <Signup />,
    },
    {
      path: '/RentNow',
      element: <RentNow />,
    },
    {
      path: '/UserType',
      element: <UserType />,
    },
    {
      path: '/UserProfile',
      element: <UserProfile />,
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


