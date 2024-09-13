import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminDashboard from './Components/Admin/Dashboard';
import BuyNow from './Components/BuyNow';
import BuyPage from './Components/BuyPage';
import Donate from './Components/Donate';
import Home from './Components/LandingPages/Home';
import ProductAdd from './Components/Product/ProductAdd';
import RentNow from './Components/RentNow';
import RentPage from './Components/RentPage';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import UserProfile from './Components/User/UserProfile';
import UserType from './Components/User/UserType';
import ContactUs from './Components/LandingPages/ContactUs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/contactus',
      element: <ContactUs />
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
    },
    {
      path:'/AboutUs',
      element: <AboutUs/>
    },
    {
      path:'/Donate',
      element:<Donate/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;


